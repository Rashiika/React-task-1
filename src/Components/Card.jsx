import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { MdDeleteForever } from "react-icons/md";

const Card = ({ id, content, onDeleteTask }) => {
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
      className={`p-4 mb-3 bg-red-200 rounded-lg shadow-md cursor-grab border border-blue-500 hover-shadow-lg transition-shadow duration-150 flex justify-between items-center
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
      <div className="flex-1 min-w-0">
        <p className="pr-4 break-words whitespace-normal text-sm sm:text-base max-w-[200px] sm:max-w-[250px] lg:max-w-[300px]">
          {content}
        </p>
      </div>
      
      {!isDragging && <button
        className="ml-2 text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100"
        onClick={() => onDeleteTask(id)}
      >
        <MdDeleteForever className="text-xl" />
      </button>}
    </div>
  );
};

export default Card;