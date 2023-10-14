import clsx from "clsx";

// Components
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      className={clsx(
        "flex min-h-screen flex-col items-center justify-end",
        "bg-[var(--background)]"
      )}
    >
      <div className="fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <div
          className={clsx(
            "flex items-center justify-center px-1",
            "w-full min-h-[var(--box-h)] min-w-[var(--box-min-w)] sm:w-[var(--box-w)] sm:h-[var(--box-h)]",
            "bg-[var(--box-bg)] border-solid border-[1px] border-[var(--box-border)] rounded-md"
          )}
        ></div>
      </div>
      <Footer />
    </main>
  );
}
