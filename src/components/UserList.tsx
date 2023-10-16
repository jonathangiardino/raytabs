// Dependencies
import { useSearchParams } from "next/navigation";

// Components
import { useAdminStore } from "@/adminStore";
import UserRow from "./UserRow";
import ListLegend from "./ListLegend";

export default function UserList({ users }: { users: User[] }) {
  const [values] = useAdminStore();

  const searchParams = useSearchParams();
  const tabId = searchParams.get("tab");
  const currentTab = tabId || "members";

  const admins = [...users]
    .filter((user) => values.adminIds.includes(user.id))
    .sort((a, b) => {
      const aIndex = values.adminIds.indexOf(a.id);
      const bIndex = values.adminIds.indexOf(b.id);
      return aIndex - bIndex;
    });

  const membersOnly = users.filter(
    (user) => !values.adminIds.includes(user.id)
  );

  const adminList = admins.map((user) => <UserRow key={user.id} user={user} />);

  const emptyAdminState = (
    <li
      tabIndex={0}
      role="listitem"
      className="mx-2 p-4 flex justify-center items-center bg-[var(--admin-empty-box)] rounded-[4px] text-xs text-[var(--tab-text-color)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--tab-selected)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--box-bg)] focus-visible:rounded-[2px] focus-visible:bg-[var(--row-hover)]"
    >
      No admin members available
    </li>
  );

  const emptyMembersState = (
    <li
      tabIndex={0}
      role="listitem"
      className="mx-2 mb-2 p-4 flex justify-center items-center bg-[var(--admin-empty-box)] rounded-[4px] text-xs text-[var(--tab-text-color)]"
    >
      No team members available
    </li>
  );

  const membersOnlyList = membersOnly.map((user) => (
    <UserRow key={user.id} user={user} />
  )); 

  if (currentTab === "groups") {
    return (
      <div className="w-full space-y-1">
        <ul className="pb-2" aria-label="Admins list" role="listbox">
          <ListLegend label="Admins" />
          {admins.length ? adminList : emptyAdminState}
        </ul>

        <ul aria-label="Team members list" role="listbox">
          <ListLegend label="Team members" />
          {membersOnlyList.length ? membersOnlyList : emptyMembersState}
        </ul>
      </div>
    );
  }

  return (
    <div className="w-full space-y-1">
      <ul aria-label="All team members list" role="listbox">
        <ListLegend label="All team members" />
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
