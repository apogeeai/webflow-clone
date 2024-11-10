"use client";

import { Brain, Zap, BarChart3, Lock, Bot, LineChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "Smart Automation",
    description: "Automate complex tasks with AI-powered decision making and workflow optimization."
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Process and analyze data in real-time for immediate business insights."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your operations with predictive analytics and reporting."
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and compliance controls."
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing business systems."
  },
  {
    icon: LineChart,
    title: "Performance Tracking",
    description: "Monitor and optimize your automation workflows with detailed metrics."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-slate-50" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to automate your business
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our comprehensive platform provides all the tools you need to transform
            your business operations with AI-powered automation.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border-2 bg-background/60 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}