"use client";

import clsx from "clsx";
import * as RadixTabs from "@radix-ui/react-tabs";

export default function Tabs() {
  const triggerStyles = clsx(
    "flex justify-center items-center flex-1 rounded-[4px] focus-visible:rounded-[2px]",
    "px-1 py-2",
    "text-sm text-[var(--tab-text)] font-medium",
    "transition-colors ease-out",
    "data-[state=active]:bg-[var(--tab-selected)] data-[state=active]:text-[var(--tab-selected-text)] hover:text-[var(--tab-selected-text)]",
    "focus-visible:outline-none focus-visible:ring focus-visible:ring-1 focus-visible:ring-[var(--tab-selected)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--box-bg)]"
  );

  return (
    <RadixTabs.Root
      className="flex flex-col items-start w-full h-full rounded-md"
      defaultValue="members"
    >
      <RadixTabs.List
        className="w-full flex justify-between rounded-md"
        aria-label="Manage Members and Groups"
      >
        <RadixTabs.Trigger className={triggerStyles} value="members">
          Members
        </RadixTabs.Trigger>
        <RadixTabs.Trigger className={triggerStyles} value="groups">
          Groups
        </RadixTabs.Trigger>
      </RadixTabs.List>
      <RadixTabs.Content className="" value="members">
        {/* Content */}
      </RadixTabs.Content>
      <RadixTabs.Content className="" value="groups">
        {/* Content 2 */}
      </RadixTabs.Content>
    </RadixTabs.Root>
  );
}
