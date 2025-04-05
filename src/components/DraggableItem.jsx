'use client'
import { useDraggable } from '@dnd-kit/core';

export function DraggableItem({ id, type, data, children, isOverCanvas }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useDraggable({
    id,
    data: {
      type,
      ...data
    }
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    opacity: isDragging && !isOverCanvas ? 0.5 : isDragging && isOverCanvas ? 0 : 1,
    position: 'relative',
    zIndex: isDragging ? 1000 : 1,
    visibility: isDragging && isOverCanvas ? 'hidden' : 'visible',
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="cursor-move"
    >
      {children}
      {/* {isDragging && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg">
          {data.label}
        </div>
      )} */}
    </div>
  );
} 