import { subscriptionTiersInOrder } from "@/app/data/subscriptionTiers";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCompactNumber } from "@/lib/formatter";
import { SignUpButton } from "@clerk/nextjs";
import { SparklesIcon } from "lucide-react";
import { Features } from "./Features";

export function PricingCard({
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
