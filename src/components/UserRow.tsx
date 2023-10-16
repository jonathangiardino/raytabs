"use client";

// Imports
import { useRef, useState } from "react";

// Dependencies
import Image from "next/image";
import { PersonIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

// Components
import { useAdminStore } from "@/adminStore";
import AdminButton from "./AdminButton";

export default function UserRow({
  user,
  staticRow,
}: {
  user: User;
  staticRow?: boolean;
}) {
  const rowRef = useRef<HTMLLIElement>(null);

  const [values, actions] = useAdminStore();

  const isAdmin = values.adminIds.includes(user.id);
  const fullName = `${user.first} ${user.last}`;
  const avatarAltText = `Avatar for ${fullName}`;

  function toggleAdmin() {
    actions.toggleAdminId(user.id);
  }

  function handleCheckboxChange() {
    toggleAdmin();
  }

  return (
    <li
      ref={rowRef}
      role="listitem"
      tabIndex={0}
      aria-label={`${fullName}. ${user.role}.`}
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
            alt={avatarAltText}
            width={32}
            height={32}
            priority
          />
        </div>
        <div className="flex flex-col">
          <span className="select-none text-[14px] font-medium">
            {fullName}
          </span>
          <span className="select-none text-xs font-normal text-[var(--foreground-alt)]">
            {user.role}
          </span>
        </div>
      </div>

      {!staticRow ? (
        <AdminButton
          handleCheckboxChange={handleCheckboxChange}
          isAdmin={isAdmin}
        />
      ) : null}
    </li>
  );
}
