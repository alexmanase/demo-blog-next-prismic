import { classNames } from "../utils/classNames";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={classNames(
        "container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}
