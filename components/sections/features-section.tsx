"use client";

import { Brain, Lightbulb, Zap, BarChart3, Robot, Lock } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform provides everything you need to automate and optimize
            your business processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain className="w-8 h-8" />}
            title="Smart Automation"
            description="Automate repetitive tasks with intelligent workflows powered by machine learning."
          />
          <FeatureCard
            icon={<Lightbulb className="w-8 h-8" />}
            title="Predictive Analytics"
            description="Make data-driven decisions with advanced analytics and forecasting."
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="Real-time Processing"
            description="Process and analyze data in real-time for immediate insights."
          />
          <FeatureCard
            icon={<BarChart3 className="w-8 h-8" />}
            title="Performance Tracking"
            description="Monitor and optimize your automation workflows with detailed analytics."
          />
          <FeatureCard
            icon={<Robot className="w-8 h-8" />}
            title="AI Integration"
            description="Seamlessly integrate AI capabilities into your existing systems."
          />
          <FeatureCard
            icon={<Lock className="w-8 h-8" />}
            title="Enterprise Security"
            description="Bank-grade security to protect your data and automation processes."
          />
        </div>
      </div>
    </section>
  );
}