import Image from "next/image";

import { ContactSceneLayout } from "@/components/sections/contact/ContactSceneLayout";
import { contactScenes } from "@/content/contact";

const scene = contactScenes[0];

export function RequestScene() {
  return (
    <ContactSceneLayout
      label={scene.label}
      aside={scene.aside}
      tone={scene.tone}
      visual={
        <Image
          src={scene.visual.src}
          alt={scene.visual.alt}
          width={scene.visual.width}
          height={scene.visual.height}
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, 529px"
          quality={100}
          priority
        />
      }
    />
  );
}
