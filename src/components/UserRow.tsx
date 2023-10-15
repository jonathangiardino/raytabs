"use client";

// Imports
import { useRef, useState } from "react";

// Dependencies
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";

// Components
import AdminTag from "./AdminTag";

// Components
import { useAdminStore } from "@/adminStore";

export default function UserRow({ user }: { user: User }) {
  const rowRef = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();
  const tabId = searchParams.get("tab");

  const [values, actions] = useAdminStore();
  const [animate, setAnimate] = useState(false);

  const fullName = `${user.first} ${user.last}`;
  const avatarAltText = `Avatar for ${fullName}`;
  const ariaLabelText = values.adminIds.includes(user.id)
    ? `${fullName}. Untick to remove admin role`
    : `${fullName}. Tick to add admin role`;

  function toggleAdmin() {
    setAnimate(true);
    setTimeout(() => {
      handleRowFocus();
      actions.toggleAdminId(user.id);
      document.getElementById(user.id)?.focus();
    }, 400);
  }

  function handleCheckboxChange() {
    toggleAdmin();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      toggleAdmin();
    }
  }

  function handleRowFocus() {
    if (tabId && tabId === "groups") {
      switch (true) {
        case !!rowRef.current?.nextElementSibling:
          (rowRef.current?.nextElementSibling as HTMLDivElement).focus();
          break;
        case !!rowRef.current?.previousElementSibling:
          (rowRef.current?.previousElementSibling as HTMLDivElement).focus();
          break;
        default:
          (
            rowRef.current?.parentElement?.parentElement as HTMLDivElement
          ).focus();
          break;
      }
    }
  }

  return (
    <div
      ref={rowRef}
      className="w-full flex gap-3 items-center px-2 py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--tab-selected)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--box-bg)] rounded-[4px] focus-visible:rounded-[2px] focus-visible:bg-[var(--row-hover)] hover:bg-[var(--row-hover)] cursor-pointer"
      tabIndex={0}
      onClick={handleCheckboxChange}
      onKeyDown={handleKeyDown}
      role="checkbox"
      aria-checked={values.adminIds.includes(user.id)}
      aria-label={ariaLabelText}
    >
      <div
        className={clsx(
          "h-[32px] w-[32px] rounded-full transition-opacity ease-out",
          {
            "animate-slide-right opacity-50": animate,
          }
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
        className={clsx("flex flex-col transition-opacity ease-out  ", {
          "animate-slide-right opacity-50": animate,
        })}
        onAnimationEnd={() => setAnimate(false)}
      >
        <span className="select-none text-[14px] font-medium">{fullName}</span>
        <span className="select-none text-xs font-normal text-[var(--foreground-alt)]">
          {user.role}
        </span>
      </div>
      {values.adminIds.includes(user.id) ? <AdminTag /> : null}
    </div>
  );
}
