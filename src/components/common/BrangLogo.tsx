import { Globe } from "lucide-react";

export function BrandLogo() {
  return (
    <span className="flex items-center gap-2 font-semibold text-lg flex-shrink-0">
      <Globe className="size-8" />
      <span>Global Deals</span>
    </span>
  );
}
