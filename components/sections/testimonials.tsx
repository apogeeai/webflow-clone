"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    quote: "The AI automation platform has transformed how we handle our operations. We've seen a 40% increase in efficiency.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    quote: "Implementation was smooth and the results were immediate. Our team loves how intuitive the platform is.",
    author: "Michael Chen",
    role: "Operations Director, InnovateCo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    quote: "The predictive analytics have helped us make better decisions and stay ahead of market trends.",
    author: "Emily Rodriguez",
    role: "Data Scientist, AnalyticsPro",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by industry leaders
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            See how businesses are transforming their operations with our AI automation platform.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-background/60 backdrop-blur">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}