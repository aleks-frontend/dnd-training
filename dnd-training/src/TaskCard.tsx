import { useDraggable, useDroppable } from "@dnd-kit/core";
import { Task } from "./types";
import React from "react";

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const {
    setNodeRef: setDraggableRef,
    attributes,
    listeners,
    transform,
  } = useDraggable({
    id: task.id,
  });

  const { setNodeRef: setDroppableRef, isOver } = useDroppable({
    id: task.id,
    data: { type: "TASK", taskStatus: task.status },
  });

  const style: React.CSSProperties | undefined = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        boxShadow: `0 4px 12px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.8)`,
      }
    : isOver
    ? {
        borderBottom: "4px solid #fff",
      }
    : undefined;

  return (
    <div
      {...attributes}
      {...listeners}
      ref={(node) => {
        setDraggableRef(node);
        setDroppableRef(node);
      }}
      style={style}
      className="cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hover:shadow-md transition-shadow border-b-4 border-transparent"
    >
      <h3 className="font-medium text-neutral-100">{task.title}</h3>
      <p className="mt-2 text-sm text-neutral-400">{task.description}</p>
    </div>
  );
};

export default TaskCard;
