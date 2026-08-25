"use client";

import { useState } from "react";

import { latestWork } from "@/content/latest-work";
import { cn } from "@/lib/cn";

import { WorkListItem } from "./WorkListItem";
import { WorkPreview } from "./WorkPreview";

type WorkListProps = {
  className?: string;
};

/**
 * Ruled project index. On desktop (lg+), hovering a row reveals the
 * Figma preview card (500×668 at top 31 / right 10 of the section).
 */
export function WorkList({ className }: WorkListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hovered =
    hoveredIndex !== null ? latestWork.projects[hoveredIndex] : undefined;

  return (
    <div
      className={cn("w-full", className)}
      onPointerLeave={() => setHoveredIndex(null)}
    >
      <ul>
        {latestWork.projects.map((project, index) => (
          <WorkListItem
            key={project.name}
            project={project}
            onPointerEnter={(event) => {
              if (event.pointerType !== "mouse") return;
              setHoveredIndex(index);
            }}
          />
        ))}
      </ul>

      {hovered ? (
        <div className="absolute top-[31px] right-[10px] z-20 hidden lg:block">
          <WorkPreview key={hovered.name} slides={hovered.slides} />
        </div>
      ) : null}
    </div>
  );
}
