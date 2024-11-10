"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ProcessSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative overflow-hidden rounded-3xl bg-slate-50 p-8">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team collaboration"
              width={600}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Streamline your workflow with AI automation
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our platform helps you automate repetitive tasks, optimize processes,
              and make data-driven decisions with powerful AI capabilities.
            </p>
            <div className="mt-10 space-y-8">
              {[
                {
                  title: "Analyze",
                  description: "AI analyzes your current workflows and identifies optimization opportunities"
                },
                {
                  title: "Automate",
                  description: "Create intelligent automation workflows with our no-code builder"
                },
                {
                  title: "Optimize",
                  description: "Continuously improve processes with AI-powered insights and recommendations"
                }
              ].map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button size="lg">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}