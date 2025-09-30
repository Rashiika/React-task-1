import {useDroppable} from '@dnd-kit/core';
import Card from './Card';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

const Column = ({id, title, tasks, allTaskIds}) => {
  const {setNodeRef} = useDroppable({
    id: id,
  });
  
  return (
    <div>
      <h2>{title} ({tasks.length})</h2>
      <SortableContext items={allTaskIds} strategy={verticalListSortingStrategy}>
      <div ref={setNodeRef}>
        {tasks.map((task) => (
          <Card key={task.id} id={task.id} content={task.content} />
        ))}

        {tasks.length === 0 && <p>No tasks</p>}
      </div>
      </SortableContext>
    </div>
  );
}

export default Column;