// Dependencies
import Image from "next/image";
import clsx from "clsx";
import { PersonIcon } from "@radix-ui/react-icons";

// Components
import Button from "./Button";

// Store
import { useStore } from "@/store";

export default function UserList({ title, children }: UserListProps) {
  return (
    <ul aria-label={`${title} list`} role="listbox">
      <span className="px-2 pb-1 text-xs font-medium text-[var(--foreground-alt)]">
        {title}
      </span>
      <div className="w-full space-y-1">{children}</div>
    </ul>
  );
}

const Item = ({ user, isAdmin, readonly }: UserListItemProps) => {
  const [, actions] = useStore();

  function toggleIsAdmin() {
    console.log("toggleIsAdmin", user.id);
    actions.toggleAdminId(user.id);
  }

  return (
    <li
      role="listitem"
      tabIndex={0}
      aria-label={`${user.first} ${user.last}. ${user.role}.`}
      className="w-full flex items-center px-2 py-1 group listitem-focus"
    >
      {isAdmin ? (
        <div className="relative h-[32px] w-[32px] -mr-[32px] p-2 rounded-full">
          <div className="absolute top-0 -right-4 w-8 h-8 rounded-full bg-[var(--admin-label-bg)] opacity-20 animate-fade-in" />
          <div className="absolute top-0 -right-2 w-8 h-8 rounded-full bg-[var(--admin-label-bg)] opacity-50 animate-fade-in delay-100" />
          <div className="absolute top-0 right-0 h-full w-full p-2 rounded-full bg-[var(--admin-label-bg)] animate-fade-in">
            <PersonIcon
              width={16}
              height={16}
              className="text-[var(--admin-label-text)]"
            />
          </div>
        </div>
      ) : null}
      <div
        className={clsx(
          "flex gap-3 items-center transition-transform ease-out",
          isAdmin ? "translate-x-[50px]" : "translate-x-[0px]"
        )}
      >
        <div className="h-[32px] w-[32px] rounded-full">
          <Image
            className={"rounded-[inherit] object-cover select-none"}
            src={user.avatar}
            alt={`${user.first} ${user.last}'s avatar`}
            width={32}
            height={32}
            priority
          />
        </div>
        <div className="flex flex-col">
          <span className="select-none text-[14px] font-medium">
            {user.first} {user.last}
          </span>
          <span className="select-none text-xs font-normal text-[var(--foreground-alt)]">
            {user.role}
          </span>
        </div>
      </div>

      {!readonly ? (
        <Button isAdmin={isAdmin} toggleIsAdmin={toggleIsAdmin} />
      ) : null}
    </li>
  );
};

const Empty = ({ label }: { label: string }) => {
  return (
    <div className="mx-2 p-4 flex justify-center items-center bg-[var(--admin-empty-box)] rounded-[4px] text-xs text-[var(--tab-text-color)]">
      {label}
    </div>
  );
};

UserList.Empty = Empty;
UserList.Item = Item;
