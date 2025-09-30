import { useState } from "react";
import {DndContext} from '@dnd-kit/core';

  const initialColumns = {
    start: {id: 'start', title: 'To Do'},
    inProgress: {id: 'inProgress', title: 'In Progress'},
    completed: {id: 'completed', title: 'Completed'}
  }

  const initialTasks = {
    'task-1': {id: 'task-1', content: 'Take out the garbage'},
    'task-2': {id: 'task-2', content: 'Watch my favorite show'},
    'task-3': {id: 'task-3', content: 'Charge my phone'},
    'task-4': {id: 'task-4', content: 'Cook dinner'},
  }

  function App() {

    const [columns, setColumns] = useState(initialColumns)
    const [tasks, setTasks] = useState(initialTasks)
    const [activeId, setActiveId] = useState(null)

    const findColumn = (id) => {
      if(id in columns) {
        return id;
      }
      return Object.keys(columns).find(key => columns[key].taskIds.includes(id));
    }

    const handleDragStart = (event) => {
      setActiveId(event.active.id);
    }

    const handleDragEnd = (event) => {
      const {active, over} = event;
      const activeId = active.id;
      const overId = over?.id;

      if(!overId) {
        setActiveId(null);
        return;
      }

      const activeColumn = findColumn(activeId);
      const overColumn = findColumn(overId);

      if(!activeColumn || !overColumn) {
        setActiveId(null);
        return;
      }

      if(activeColumn === overColumn) {
        setActiveId(null);
        return;
      }

      const getNewIndex = () => {
        const isOverAColumn = overId in columns;
        if(isOverAColumn) {
          return columns[overId].taskIds.length;
        }
        const taskIds = columns[overColumn].taskIds;
        const overIndex = taskIds.indexOf(overId);
        return overIndex >= 0 ? overIndex : taskIds.length;
      }

      setColumns((prev) => {
        const newSourceTaskIds = prev[activeColumn].taskIds.filter(id => id !== activeId);
        const newTargetTaskIds = [...prev[overColumn].taskIds];
        newTargetTaskIds.splice(getNewIndex(), 0, activeId);

        if(activeColumn !== overColumn) {
          setTasks(prevTasks => ({...prevTasks,
            [activeId]: {...prevTasks[activeId], content: over.content}
          }))
        }

        return {
          ...prev,
          [activeColumn]: {
            ...prev[activeColumn],
            taskIds: newSourceTaskIds
          },
          [overColumn]: {
            ...prev[overColumn],
            taskIds: newTargetTaskIds
          }
        }
      })
      setActiveId(null);
    }

    const activeTask = activeId ? tasks[activeId] : null;

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div>
        
      </div>
    </DndContext>
  );
}

export default App;