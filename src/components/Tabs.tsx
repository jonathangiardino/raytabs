"use client";

// imports
import { useEffect } from "react";

// Dependencies
import { useSearchParams, useRouter } from "next/navigation";
import { Root, Trigger, List, Content } from "@radix-ui/react-tabs";

// Components
import UserList from "./UserList";

// Store
import { useStore } from "@/store";

// Utils
import filteredUsers from "@/utils/filteredUsers";

export default function Tabs({ users }: { users: User[] }) {
  const [values] = useStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const tabs = [
    {
      id: "members",
      label: "Members",
    },
    {
      id: "groups",
      label: "Groups",
    },
  ];

  function updateQueryParams(tabId: string) {
    router.push(`?tab=${tabId}`);
  }

  useEffect(() => {
    if (tab === "members" || !tab) router.prefetch(`?tab=groups`);
    if (tab === "groups") router.prefetch(`?tab=members`);
  }, [router, tab]);

  const admins = filteredUsers(users, "admin", values.adminIds);
  const regulars = filteredUsers(users, "regular", values.adminIds);

  return (
    <Root
      className="flex flex-col items-start w-full h-full rounded-md"
      defaultValue={tab || "members"}
      onValueChange={(value) => updateQueryParams(value)}
    >
      <List
        className="w-full flex justify-between rounded-t-md mb-2"
        aria-label="Manage Members and Groups"
        loop
      >
        {tabs.map((tab) => (
          <Trigger
            key={tab.id}
            className="flex justify-center items-center flex-1 rounded-[4px] px-1 py-2 text-sm text-[var(--tab-text-color)] font-medium transition-colors ease-out hover:text-[var(--tab-selected-text)] tab-focus"
            value={tab.id}
          >
            {tab.label}
          </Trigger>
        ))}
      </List>

      <Content value="members" className="w-full tab-content-focus">
        <UserList title="Members">
          {users.length ? (
            users.map((user) => (
              <UserList.Item
                key={user.id}
                user={user}
                isAdmin={values.adminIds.includes(user.id)}
              />
            ))
          ) : (
            <UserList.Empty label="No users available" />
          )}
        </UserList>
      </Content>
      <Content value="groups" className="w-full tab-content-focus">
        <UserList title="Admins">
          {admins.length ? (
            admins.map((user) => (
              <UserList.Item
                key={user.id}
                user={user}
                isAdmin={true}
                readonly
              />
            ))
          ) : (
            <UserList.Empty label="No admins available" />
          )}
        </UserList>
        <UserList title="Team">
          {regulars.length ? (
            regulars.map((user) => (
              <UserList.Item
                key={user.id}
                user={user}
                isAdmin={false}
                readonly
              />
            ))
          ) : (
            <UserList.Empty label="No regular members available" />
          )}
        </UserList>
      </Content>
    </Root>
  );
}
