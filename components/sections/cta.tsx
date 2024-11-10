"use client";

import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to transform your business?
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
            Join thousands of businesses already using our AI automation platform
            to drive growth and innovation.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" variant="secondary" className="gap-2">
              <Bot className="h-5 w-5" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}