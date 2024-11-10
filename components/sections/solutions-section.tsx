"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function SolutionsSection() {
  return (
    <section className="py-24 bg-gray-50" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Solutions Tailored to Your Industry
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're in finance, healthcare, retail, or manufacturing,
              our AI solutions adapt to your specific needs and requirements.
            </p>
            <ul className="space-y-4">
              {[
                "Custom AI Models",
                "Process Automation",
                "Data Analytics",
                "Predictive Maintenance",
                "Quality Control",
              ].map((item) => (
                <li key={item} className="flex items-center">
                  <svg
                    className="w-6 h-6 text-primary mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Button className="mt-8">Explore Solutions</Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              alt="AI Solutions"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}