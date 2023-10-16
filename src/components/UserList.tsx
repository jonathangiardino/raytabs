// Dependencies
import { useSearchParams } from "next/navigation";

// Components
import { useAdminStore } from "@/adminStore";
import UserRow from "./UserRow";
import UserListLegend from "./UserListLegend";

export default function UserList({ users }: { users: User[] }) {
  const [values] = useAdminStore();

  const searchParams = useSearchParams();
  const tabId = searchParams.get("tab");
  const currentTab = tabId || "members";

  const admins = [...users]
    .filter((user) => values.adminIds.includes(user.id))
    .sort(
      (a, b) => values.adminIds.indexOf(a.id) - values.adminIds.indexOf(b.id)
    );

  const membersOnly = users.filter(
    (user) => !values.adminIds.includes(user.id)
  );

  const emptyAdminState = (
    <li
      tabIndex={0}
      role="listitem"
      className="mx-2 p-4 flex justify-center items-center bg-[var(--admin-empty-box)] rounded-[4px] text-xs text-[var(--tab-text-color)] empty-state-focus"
    >
      No admin members available
    </li>
  );

  const emptyMembersState = (
    <li
      tabIndex={0}
      role="listitem"
      className="mx-2 mb-2 p-4 flex justify-center items-center bg-[var(--admin-empty-box)] rounded-[4px] text-xs text-[var(--tab-text-color)] empty-state-focus"
    >
      No team members available
    </li>
  );

  const adminList = admins.map((user) => (
    <UserRow key={user.id} user={user} staticRow />
  ));
  const membersOnlyList = membersOnly.map((user) => (
    <UserRow key={user.id} user={user} staticRow />
  ));

  if (currentTab === "groups") {
    return (
      <div className="w-full space-y-1">
        <ul className="pb-2" aria-label="Admins list" role="listbox">
          <UserListLegend label="Admins" />
          {admins.length ? adminList : emptyAdminState}
        </ul>

        <ul aria-label="Team members list" role="listbox">
          <UserListLegend label="Team members" />
          {membersOnlyList.length ? membersOnlyList : emptyMembersState}
        </ul>
      </div>
    );
  }

  return (
    <div className="w-full space-y-1">
      <ul aria-label="All team members list" role="listbox">
        <UserListLegend label="All team members" />
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
