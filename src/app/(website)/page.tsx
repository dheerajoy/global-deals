import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { ArrowUpRight } from "lucide-react";
import { ClerkIcon, StripIcon, NeonIcon, NextIcon, ShadcnIcon } from "./_icons";
import { subscriptionTiersInOrder } from "../data/subscriptionTiers";
import { FooterLinkGroup, PricingCard } from "./_components";
import { BrandLogo } from "@/components/common/BrangLogo";

export default function HomePage() {
  return (
    <>
      <section className="min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] flex flex-col items-center justify-center text-center text-balance gap-8 px-4">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">
          Price Smarter, Sell bigger!
        </h1>
        <p className="text-lg lg:text-2xl max-w-screen-xl">
          Optimize your product pricing across countries to maximize sales.
          Capture 85% of the untapped market with location-based dynamic pricing
        </p>
        <SignInButton>
          <Button className="flex gap-2 text-lg py-2 px-6">
            Get Started For Free <ArrowUpRight className="size-5" />
          </Button>
        </SignInButton>
      </section>
      <section className="bg-primary text-primary-foreground">
        <div className="container flex flex-col items-center py-14 gap-10">
          <h2 className="text-2xl text-center text-balance font-semibold">
            Build Upon Latest Technology
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10">
            <Link href={"https://nextjs.org"}>
              <NextIcon className="w-24 h-full" />
            </Link>
            <Link href={"https://clerk.com"}>
              <ClerkIcon className="w-24 h-full" />
            </Link>
            <Link
              href={"https://ui.shadcn.com/"}
              className="flex items-center font-bold"
            >
              <ShadcnIcon className="w-7 h-full inline-block" />
              shadcn/ui
            </Link>
            <Link href={"https://neon.tech"}>
              <NeonIcon className="w-24 h-full" />
            </Link>
            <Link href={"https://stripe.com/"}>
              <StripIcon className="w-20 h-full" />
            </Link>
          </div>
        </div>
      </section>
      <section id="pricing" className="px-8 py-16 bg-accent/5">
        <h2 className="text-2xl text-center text-balance font-semibold mb-8">
          Pricing Software which pays for itself 20X over
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
          {subscriptionTiersInOrder.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>
      <footer className="container flex flex-col sm:flex-row py-16 gap-10 items-start justify-between">
        <Link href={"/"}>
          <BrandLogo />
        </Link>
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
          <div className="flex flex-col gap-6">
            <FooterLinkGroup
              title="Help"
              links={[
                { label: "PPP Discounts", href: "#" },
                { label: "Discount API", href: "#" },
                { label: "Holiday discounts", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Solutions"
              links={[
                { label: "Newsletter", href: "#" },
                { label: "SaaS Business", href: "#" },
                { label: "Online Courses", href: "#" },
                { label: "Info products", href: "#" },
              ]}
            />
          </div>
          <div className="flex flex-col gap-6">
            <FooterLinkGroup
              title="Features"
              links={[
                { label: "Holiday discounts", href: "#" },
                { label: "PPP Discounts", href: "#" },
                { label: "Time based discounts", href: "#" },
                { label: "Benefits of geographical pricing?", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Tools"
              links={[
                { label: "Salary converter", href: "#" },
                { label: "Coupon generator", href: "#" },
                { label: "Stripe app", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Company"
              links={[
                { label: "Affiliate", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Privacy", href: "#" },
              ]}
            />
          </div>
          <div className="flex flex-col gap-6">
            <FooterLinkGroup
              title="Integrations"
              links={[
                { label: "Lemon Squeezy", href: "#" },
                { label: "Gumroad", href: "#" },
                { label: "Stripe", href: "#" },
                { label: "ChargeBee", href: "#" },
                { label: "Whop", href: "#" },
                { label: "Paddle", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Tutorials"
              links={[
                { label: "Any website", href: "#" },
                { label: "Kajabi", href: "#" },
                { label: "Podia", href: "#" },
                { label: "Circle.so", href: "#" },
                { label: "Beehiiv", href: "#" },
                { label: "Framer", href: "#" },
              ]}
            />
          </div>
        </div>
      </footer>
    </>
  );
}
