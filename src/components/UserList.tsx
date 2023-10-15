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
    <div className="mx-2 p-4 flex justify-center items-center bg-[var(--admin-empty-box)] rounded-[4px] text-xs text-[var(--tab-text-color)]">
      No admin members available
    </div>
  );

  const membersOnlyList = membersOnly.map((user) => (
    <UserRow key={user.id} user={user} />
  ));

  if (currentTab === "groups") {
    return (
      <div className="w-full space-y-1">
        <div className="pb-2">
          <ListLegend label="Admins" />
          {admins.length ? adminList : emptyAdminState}
        </div>

        <div>
          <legend className="px-2 pb-1 text-xs font-medium text-[var(--foreground-alt)]">
            Team members
          </legend>
          {membersOnlyList}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-1">
      <div>
        <legend className="px-2 pb-1 text-xs font-medium text-[var(--foreground-alt)]">
          All team members
        </legend>
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
