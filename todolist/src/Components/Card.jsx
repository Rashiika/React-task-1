import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';


const Card = ({id, content}) => {
  const {attributes, listeners, setNodeRef, transform} = useSortable({
    id: id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {content}
    </div>
  );
}

export default Card;