import { BrandLogo } from "@/components/common/BrangLogo";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="flex fixed top-0 z-10 w-full py-6 shadow-lg bg-background/95">
      <nav className="container flex items-center gap-10 font-semibold">
        <Link href={"/"} className="mr-auto">
          <BrandLogo />
        </Link>
        <Link href={"#"} className="text-lg">
          About
        </Link>
        <Link href={"#"} className="text-lg">
          Features
        </Link>
        <Link href={"/#pricing"} className="text-lg">
          Pricing
        </Link>
        <span className="text-lg">
          <SignedIn>
            <Link href={"/dashboard"}>Dasboard</Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>Login</SignInButton>
          </SignedOut>
        </span>
      </nav>
    </header>
  );
}
