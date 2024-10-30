import { BrandLogo } from "@/components/common/BrangLogo";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function NavBar() {
  return (
    <header className="flex shadow-lg py-6 w-full bg-background">
      <nav className="container flex items-center gap-10 font-semibold">
        <Link href={"/dashboard"} className="mr-auto">
          <BrandLogo />
        </Link>
        <Link href={"/dashboard/products"}>Products</Link>
        <Link href={"/dashboard/analytics"}>Analytics</Link>
        <Link href={"/dashboard/products"}>Products</Link>
        <UserButton />
      </nav>
    </header>
  );
}
