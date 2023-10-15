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
      tabIndex={-1}
      onClick={handleCheckboxChange}
      className="ml-auto flex gap-1 items-center bg-[var(--admin-label-bg)] md:hover:opacity-80 text-[11px] text-[var(--admin-label-text)] px-2 py-1 rounded-[2px] animate-fade-in"
    >
      Admin <Cross2Icon height={13} width={13} />
    </button>
  ) : (
    <>
      <button
        tabIndex={-1}
        onClick={handleCheckboxChange}
        className="hidden group-focus-visible:hidden md:group-hover:flex items-center md:group-hover:gap-1 ml-auto bg-[var(--admin-set-btn)] md:hover:opacity-80 text-[11px] px-2 py-1 rounded-[2px] animate-fade-in"
      >
        Set admin <PlusIcon height={13} width={13} />
      </button>
      <button
        tabIndex={-1}
        onClick={handleCheckboxChange}
        className="hidden md:group-hover:hidden group-focus-visible:gap-1 group-focus-visible:flex items-center ml-auto bg-[var(--admin-set-btn)] text-[11px] md:hover:opacity-80 px-2 py-1 rounded-[2px] animate-fade-in"
      >
        Set admin <PlusIcon height={13} width={13} />
      </button>
    </>
  );
}
