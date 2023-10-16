import { Cross2Icon, PlusIcon } from "@radix-ui/react-icons";

export default function AdminButton({
  handleCheckboxChange,
  isAdmin,
}: {
  handleCheckboxChange: () => void;
  isAdmin: boolean;
}) {
  return isAdmin ? (
    <button
      tabIndex={0}
      role="checkbox"
      aria-checked={isAdmin}
      aria-label={"Untick to remove admin role"}
      onClick={handleCheckboxChange}
      className="ml-auto flex gap-1 items-center bg-[var(--admin-label-bg)] md:hover:opacity-80 text-[11px] text-[var(--admin-label-text)] px-3 py-2 sm:px-2 sm:py-1 rounded-[2px] animate-fade-in button-focus"
    >
      <span className="hidden sm:flex">Unset admin</span>{" "}
      <Cross2Icon height={13} width={13} />
    </button>
  ) : (
    <button
      role="checkbox"
      aria-checked={isAdmin}
      aria-label={"Tick to add admin role"}
      tabIndex={0}
      onClick={handleCheckboxChange}
      className="flex gap-1 items-center ml-auto bg-[var(--admin-set-btn)] md:hover:opacity-80 text-[11px] px-3 py-2 sm:px-2 sm:py-1 rounded-[2px] animate-fade-in button-focus"
    >
      <span className="hidden sm:flex">Set admin</span>{" "}
      <PlusIcon height={13} width={13} />
    </button>
  );
}
