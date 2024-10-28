import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { ArrowUpRight, CheckIcon, SparklesIcon } from "lucide-react";
import { ClerkIcon, StripIcon, NeonIcon, NextIcon, ShadcnIcon } from "./_icons";
import { subscriptionTiersInOrder } from "../data/subscriptionTiers";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCompactNumber } from "@/lib/formatter";
import { ReactNode } from "react";

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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
          {subscriptionTiersInOrder.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>
    </>
  );
}

function PricingCard({
  name,
  priceInRupees,
  maxNumberOfProducts,
  maxNumberOfVisits,
  canAccessAnalytics,
  canCustomizeBanner,
  canRemoveBranding,
}: (typeof subscriptionTiersInOrder)[number]) {
  const isMostPopular = name === "Standard";
  return (
    <Card>
      <CardHeader>
        <div className="text-accent font-semibold mb-4">{name}</div>
        <CardTitle className="text-xl font-bold">
          ₹{priceInRupees} /mo
        </CardTitle>
        <CardDescription>
          {formatCompactNumber(maxNumberOfVisits)} Pricing Page Visits /mo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button
            variant={isMostPopular ? "accent" : "default"}
            className="w-full rounded-xl text-lg"
          >
            {isMostPopular ? <SparklesIcon /> : null}
            Get Started
          </Button>
        </SignUpButton>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2">
        <Features className="font-bold">
          {maxNumberOfProducts}{" "}
          {maxNumberOfProducts === 1 ? "Product" : "Products"}
        </Features>
        <Features>Deals Discounts</Features>
        {canAccessAnalytics && <Features>Advanced analytics</Features>}
        {canRemoveBranding && <Features>Remove Global Deals branding</Features>}
        {canCustomizeBanner && <Features>Customize Banners</Features>}
      </CardFooter>
    </Card>
  );
}

function Features({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <CheckIcon className="size-4 stroke-accent rounded-full bg-accent/15 p-0.5" />
      {children}
    </div>
  );
}
