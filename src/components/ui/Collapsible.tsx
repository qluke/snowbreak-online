import { memo, ReactNode } from "react";
import { MdExpandMore } from "react-icons/md";
import clsx from "clsx";
import { useToggle } from "@/hooks/use-toggle";

interface CollapsibleProps {
  text: ReactNode;
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

const Collapsible = ({
  children,
  text,
  className,
  defaultOpen = false,
}: CollapsibleProps) => {
  const [isOpen, toggle] = useToggle(defaultOpen);

  return (
    <div className={clsx("rounded", className)}>
      <div
        className="hover:bg-vulcan-700 relative w-full cursor-pointer rounded px-2 py-1"
        onClick={toggle}
      >
        <span className="w-full">{text}</span>
        <span
          className={clsx("absolute right-4 top-1/3 transform transition", {
            "rotate-180": isOpen,
          })}
        >
          <MdExpandMore />
        </span>
      </div>
      <div className={clsx("px-2 py-3", { hidden: !isOpen })}>{children}</div>
    </div>
  );
};

export default memo(Collapsible);
