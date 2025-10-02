import {useDroppable} from '@dnd-kit/core';
import Card from './Card';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

const Column = ({id, title, tasks, allTaskIds, onDeleteTask}) => {
  const {setNodeRef, isOver} = useDroppable({
    id: id,
  });

  const titleColor = title === 'To Do' ? 'text-red-500' : title === 'In Progress' ? 'text-yellow-500' : 'text-green-500';
  
  return (
    <div className={`flex-1 min-w-[250px] sm:min-w-[300px] lg:min-w-[350px] p-4 m-2 rounded-xl bg-gray-100 shadow-md max-h-[70vh] overflow-y-auto ${isOver ? 'border-2 border-dashed border-blue-500' : ''}`}>
      <h2 className={`text-xl font-semibold mb-4 ${titleColor}`}>{title} ({tasks.length})</h2>
      
      <SortableContext items={allTaskIds} strategy={verticalListSortingStrategy}>
        {/* 🔽 Scrollable container */}
        <div 
          className="min-h-[100px] max-h-[400px] overflow-y-auto pr-2 p-2 bg-white rounded-md shadow-inner" 
          ref={setNodeRef}
        >
          {tasks.map((task) => (
            <Card key={task.id} id={task.id} content={task.content} onDeleteTask={onDeleteTask} />
          ))}

          {tasks.length === 0 && (
            <div className='h-12 bg-gray-200 rounded-md border-2 border-dashed border-gray-400 p-4 text-center'>
              Currently no tasks
            </div>
          )}
        </div>
      </SortableContext>
    </div>
  );
}

export default Column;
