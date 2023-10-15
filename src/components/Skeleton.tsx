"use client";

// Dependencies
import { useSearchParams } from "next/navigation";
import clsx from "clsx";

export default function Skeleton({ rows }: { rows: number[] }) {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const currentTab = tab || "members";

  return (
    <div className="flex flex-col items-start w-full h-full rounded-md animate-fade-in">
      <div className="w-full flex justify-between rounded-t-md mb-4">
        <div
          className={clsx(
            "flex justify-center items-center flex-1 rounded-[4px] px-1 py-2 text-sm font-medium transition-colors ease-out",
            currentTab === "members"
              ? "bg-[var(--tab-selected)] text-[var(--tab-selected-text)]"
              : "text-[var(--tab-text-color)]"
          )}
        >
          Members
        </div>
        <div
          className={clsx(
            "flex justify-center items-center flex-1 rounded-[4px] px-1 py-2 text-sm font-medium transition-colors ease-out",
            currentTab === "groups"
              ? "bg-[var(--tab-selected)] text-[var(--tab-selected-text)]"
              : "text-[var(--tab-text-color)]"
          )}
        >
          Groups
        </div>
      </div>
      <div className="w-full space-y-1">
        <legend className="px-2 pb-1 text-xs font-medium text-[var(--foreground-alt)]">
          <div className="bg-[var(--tab-selected)] h-[12px] w-16 rounded-sm" />
        </legend>
        {rows.map((row) => (
          <div
            key={row}
            className="w-full flex gap-3 items-center px-2 py-1 rounded-[4px] animate-pulse "
            tabIndex={0}
          >
            <div className="h-[32px] w-[32px] rounded-full ease-out bg-[var(--tab-selected)]" />
            <div className="flex flex-col gap-2">
              <span className="bg-[var(--tab-selected)] h-[13px] w-32 rounded-sm" />
              <span className="bg-[var(--tab-selected)] h-[12px] w-24 rounded-sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
