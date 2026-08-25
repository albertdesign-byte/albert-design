import type { PointerEventHandler } from "react";

import { cn } from "@/lib/cn";
import type { WorkProject } from "@/content/latest-work";

type WorkListItemProps = {
  project: WorkProject;
  onPointerEnter?: PointerEventHandler<HTMLLIElement>;
};

export function WorkListItem({ project, onPointerEnter }: WorkListItemProps) {
  return (
    <li
      onPointerEnter={onPointerEnter}
      className="group flex items-center justify-between border-b border-[#cfd1d7] py-[31px] first:border-t"
    >
      <span
        className={cn(
          "font-display text-list font-medium text-foreground",
          "transition-colors duration-200 group-hover:text-muted-foreground",
        )}
      >
        {project.name}
      </span>
      <span
        className={cn(
          "font-display text-list font-medium text-foreground",
          "transition-colors duration-200 group-hover:text-muted-foreground",
        )}
      >
        {project.year}
      </span>
    </li>
  );
}
