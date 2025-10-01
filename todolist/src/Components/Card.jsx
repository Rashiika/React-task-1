import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Card = ({ id, content }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <div
      className={`p-4 mb-3 bg-red-200 rounded-lg shadow-md cursor-grab border border-blue-500 hover-shadow-lg transition-shadow duration-150
    ${
      isDragging
        ? "opacity-50 border-2 border-blue-500 shadow-xl ring-4 ring-blue-300"
        : "opacity-100"
    }`}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {content}
    </div>
  );
};

export default Card;