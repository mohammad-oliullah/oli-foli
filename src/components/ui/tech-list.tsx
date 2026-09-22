export function TechList({ items }: { items: readonly string[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="rounded border px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
