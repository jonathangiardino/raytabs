"use client";

// Store
import { StoreProvider } from "@/store";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <div className="fixed z-[5] left-1/2 top-24 -translate-x-1/2">
        <div className="flex items-center justify-center w-full min-h-0 min-w-[var(--box-min-w)] sm:w-[var(--box-w)] bg-[var(--box-bg)] border-solid border-[1px] border-[var(--box-border)] rounded-lg p-2">
          {children}
        </div>
      </div>
    </StoreProvider>
  );
}
