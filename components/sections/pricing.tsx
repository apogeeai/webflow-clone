"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for small businesses starting with automation",
    features: [
      "5 automation workflows",
      "Basic analytics",
      "Email support",
      "API access",
      "Community forum access"
    ]
  },
  {
    name: "Professional",
    price: "99",
    description: "Ideal for growing businesses with advanced needs",
    features: [
      "Unlimited workflows",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "Team collaboration tools",
      "Audit logs"
    ]
  },
  {
    name: "Enterprise",
    price: "299",
    description: "For large organizations requiring full capabilities",
    features: [
      "Everything in Professional",
      "Dedicated success manager",
      "Custom AI model training",
      "SLA guarantees",
      "Advanced security controls",
      "Custom reporting"
    ]
  }
];

export function PricingSection() {
  return (
    <section className="py-24 bg-background" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the perfect plan for your business needs. All plans include our core AI features.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-8">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.name === "Professional" ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}