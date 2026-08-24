import { WorkListItem } from "@/components/sections/WorkListItem";
import { latestWork } from "@/content/latest-work";
import { cn } from "@/lib/cn";

type WorkListProps = {
  className?: string;
};

export function WorkList({ className }: WorkListProps) {
  return (
    <ul className={cn("w-full list-none", className)}>
      {latestWork.projects.map((project) => (
        <WorkListItem
          key={project.name}
          name={project.name}
          year={project.year}
          url={"url" in project ? project.url : undefined}
        />
      ))}
    </ul>
  );
}
