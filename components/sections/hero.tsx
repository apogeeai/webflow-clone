"use client";

import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-[120px] pb-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-foreground/20">
              Announcing our next generation AI platform.{" "}
              <a href="#" className="font-semibold text-primary">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            AI-Powered Automation for Modern Business
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Transform your business operations with our advanced AI automation platform. 
            Streamline workflows, reduce costs, and drive innovation at scale.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="gap-2">
              <Bot className="h-5 w-5" />
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}