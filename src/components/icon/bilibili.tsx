import { FaBilibili } from "react-icons/fa6";
import { buttonVariants } from "@/components/ui/Button";

import { cn } from "@/lib/utils";
import Link from "next/link";

export function Bilibili() {
  return (
    <Link
      href={"https://space.bilibili.com/277401945"}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className={cn(
          buttonVariants({
            variant: "ghost",
          }),
          "w-9 px-0"
        )}
      >
        <FaBilibili size={24} color="#00aeec" />
        <span className="sr-only">Github</span>
      </div>
    </Link>
  );
}
