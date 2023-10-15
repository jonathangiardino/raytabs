import { GitHubLogoIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <div className="w-full flex justify-center items-end h-52 bg-[url('/footerbg.webp')] bg-no-repeat bg-center bg-[length:700px_245px]">
      <a
        className="text-xs mb-8 flex justify-center items-center gap-1 group text-[var(--foreground-link)] hover:text-[var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-[0px] focus-visible:ring-offset-transparent rounded-sm p-1"
        href="https://github.com/jonathangiardino/raytabs/tree/main"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubLogoIcon height={13} width={13} className="inline-block mr-1" />
        View repo
        <ArrowTopRightIcon
          height={13}
          width={13}
          className="inline-block group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform -ml-[2px]"
        />
      </a>
    </div>
  );
}
