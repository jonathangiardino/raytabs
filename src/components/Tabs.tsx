"use client";

// imports
import { useEffect } from "react";

// Dependencies
import { useSearchParams, useRouter } from "next/navigation";
import { Root, Trigger, List, Content } from "@radix-ui/react-tabs";

// Components
import UserList from "./UserList";

// Store
import { StoreProvider } from "@/store";

export default function Tabs({ users }: { users: User[] }) {
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

  return (
    <Root
      className="flex flex-col items-start w-full h-full rounded-md"
      defaultValue={tab || "members"}
      onValueChange={(value) => updateQueryParams(value)}
    >
      <List
        className="w-full flex justify-between rounded-t-md mb-4"
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

      <StoreProvider>
        <Content value="members" className="w-full space-y-1">
          <UserList users={users} />
        </Content>
        <Content value="groups" className="w-full space-y-1">
          <UserList users={users} readonly />
        </Content>
      </StoreProvider>
    </Root>
  );
}
