"use client";

// imports
import { KeyboardEvent } from "react";

// Dependencies
import { useSearchParams, useRouter } from "next/navigation";
import { Root, Trigger, List } from "@radix-ui/react-tabs";

// Components
import { AdminStoreProvider } from "@/adminStore";
import UserList from "./UserList";

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

  function handleKeyUp(event: KeyboardEvent<HTMLButtonElement>, tabId: string) {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      updateQueryParams(tabId);
    }
  }

  return (
    <Root
      className="flex flex-col items-start w-full h-full rounded-md animate-fade-in"
      defaultValue={tab || "members"}
    >
      <List
        className="w-full flex justify-between rounded-t-md mb-4"
        aria-label="Manage Members and Groups"
        loop
      >
        {tabs.map((tab) => (
          <Trigger
            key={tab.id}
            className="flex justify-center items-center flex-1 rounded-[4px] focus-visible:rounded-[2px] px-1 py-2 text-sm text-[var(--tab-text-color)] font-medium transition-colors ease-out data-[state=active]:bg-[var(--tab-selected)] data-[state=active]:text-[var(--tab-selected-text)] hover:text-[var(--tab-selected-text)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--tab-selected)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--box-bg)]"
            value={tab.id}
            onClick={() => updateQueryParams(tab.id)}
            onKeyUp={(event) => handleKeyUp(event, tab.id)}
          >
            {tab.label}
          </Trigger>
        ))}
      </List>

      <AdminStoreProvider>
        <UserList users={users} />
      </AdminStoreProvider>
    </Root>
  );
}
