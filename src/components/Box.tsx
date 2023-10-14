import clsx from "clsx";

export default function Box({ children }: { children: React.ReactNode }) {
  const boxStyles = clsx(
    "flex items-center justify-center",
    "w-full min-h-[var(--box-h)] min-w-[var(--box-min-w)] sm:w-[var(--box-w)] h-[var(--box-h)]",
    "bg-[var(--box-bg)] border-solid border-[1px] border-[var(--box-border)] rounded-lg",
    "p-2"
  );

  return (
    <div className="fixed z-[5] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
      <div className={boxStyles}>{children}</div>
    </div>
  );
}
