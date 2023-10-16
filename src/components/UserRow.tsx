"use client";

// Imports
import { useRef, useState } from "react";

// Dependencies
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";

// Components
import { useAdminStore } from "@/adminStore";
import AdminButton from "./AdminButton";

export default function UserRow({ user }: { user: User }) {
  const rowRef = useRef<HTMLLIElement>(null);

  const searchParams = useSearchParams();
  const tabId = searchParams.get("tab");

  const [values, actions] = useAdminStore();
  const [animate, setAnimate] = useState(false);

  const fullName = `${user.first} ${user.last}`;
  const avatarAltText = `Avatar for ${fullName}`;

  function toggleAdmin() {
    setAnimate(true);
    setTimeout(() => {
      handleRowFocus();
      actions.toggleAdminId(user.id);
    }, 400);
  }

  function handleCheckboxChange() {
    toggleAdmin();
  }

  function handleRowFocus() {
    if (tabId && tabId === "groups") {
      const prev = rowRef.current?.previousElementSibling;
      const next = rowRef.current?.nextElementSibling;
      const current = rowRef.current;

      switch (true) {
        case !!next:
          (next as HTMLLIElement).focus();
          break;
        case !!prev:
          (prev as HTMLLIElement).focus();
          break;
        default:
          (current as HTMLLIElement).focus();
          break;
      }
    }
  }

  return (
    <li
      ref={rowRef}
      role="listitem"
      tabIndex={0}
      aria-label={fullName}
      className="w-full flex gap-3 items-center px-2 py-1 group listitem-focus"
    >
      <div
        className={clsx(
          "h-[32px] w-[32px] rounded-full transition-opacity ease-out",
          animate && "animate-slide-right opacity-50"
        )}
        onAnimationEnd={() => setAnimate(false)}
      >
        <Image
          className={"rounded-[inherit] object-cover select-none"}
          src={user.avatar}
          alt={avatarAltText}
          width={32}
          height={32}
          priority
        />
      </div>
      <div
        className={clsx(
          "flex flex-col transition-opacity ease-out  ",
          animate && "animate-slide-right opacity-50"
        )}
        onAnimationEnd={() => setAnimate(false)}
      >
        <span className="select-none text-[14px] font-medium">{fullName}</span>
        <span className="select-none text-xs font-normal text-[var(--foreground-alt)]">
          {user.role}
        </span>
      </div>

      <AdminButton
        handleCheckboxChange={handleCheckboxChange}
        isAdmin={values.adminIds.includes(user.id)}
      />
    </li>
  );
}
