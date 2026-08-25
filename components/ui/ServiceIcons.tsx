import type { ServiceIconName } from "@/content/navigation";

const iconSrc: Record<ServiceIconName, string> = {
  identidad: "/images/services/identidad.svg",
  product: "/images/services/product.svg",
  motion: "/images/services/motion.svg",
  web: "/images/services/web.svg",
  social: "/images/services/social.svg",
  framer: "/images/services/framer.svg",
  webflow: "/images/services/webflow.svg",
  aimvp: "/images/services/aimvp.svg",
};

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  return (
    <span className="relative size-5 shrink-0 overflow-clip">
      <img src={iconSrc[name]} alt="" width={20} height={20} className="size-full" />
    </span>
  );
}
