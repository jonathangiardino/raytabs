export default function ListLegend({ label }: { label: string }) {
  return (
    <legend className="px-2 pb-1 text-xs font-medium text-[var(--foreground-alt)]">
      {label}
    </legend>
  );
}
