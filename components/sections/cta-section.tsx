"use client";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-primary-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of businesses already using our AI automation platform
          to drive growth and innovation.
        </p>
        <Button size="lg" variant="secondary">
          Start Free Trial
        </Button>
      </div>
    </section>
  );
}