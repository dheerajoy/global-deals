import Link from "next/link";

export function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-lg">{title}</h3>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map((item) => (
          <Link key={item.href} href={item.href}>
            <li>{item.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
