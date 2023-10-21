// Dependencies
import { Cross2Icon, PlusIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

export default function Button({
  isAdmin,
  toggleIsAdmin,
}: {
  toggleIsAdmin: () => void;
  isAdmin: boolean;
}) {
  const ariaLabel = isAdmin
    ? "Untick to remove admin role"
    : "Tick to add admin role";

  return (
    <button 
      role="checkbox"
      aria-checked={isAdmin}
      aria-label={ariaLabel}
      onClick={toggleIsAdmin}
      className={clsx(
        "ml-auto flex gap-1 items-center md:hover:opacity-80 text-[11px] px-3 py-2 sm:px-2 sm:py-1 rounded-[2px] animate-fade-in button-focus",
        isAdmin
          ? "bg-[var(--admin-label-bg)] text-[var(--admin-label-text)]"
          : "bg-[var(--admin-set-btn)]"
      )}
    >
      <span className="hidden sm:flex">
        {isAdmin ? "Unset admin" : "Set admin"}
      </span>
      {isAdmin ? (
        <Cross2Icon width={16} height={16} />
      ) : (
        <PlusIcon width={16} height={16} />
      )}
    </button>
  );
}
