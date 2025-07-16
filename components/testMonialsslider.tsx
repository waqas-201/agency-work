'use client'

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

import { Card } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
    {
        content:
            "Codezeo helped us modernize our appointment scheduling system. No more double-bookings, and patients appreciate the email and SMS reminders.",
        author: "Dr. Ayesha Khan",
        role: "Dermatologist",
        practice: "ClearSkin Clinic",
        rating: 5,
        avatar: "/avatars/1.svg",
    },
    {
        content:
            "The transition to Codezeo was seamless. Our staff was trained in a day, and now we're seeing better coordination across departments.",
        author: "James Patel",
        role: "IT Administrator",
        practice: "Green Valley Medical Center",
        rating: 5,
        avatar: "/avatars/2.svg",
    },
    {
        content:
            "Their secure messaging system improved our internal communication dramatically. We no longer rely on insecure channels.",
        author: "Dr. Anjali Mehta",
        role: "Pediatrician",
        practice: "Happy Hearts Pediatrics",
        rating: 4,
        avatar: "/avatars/3.svg",
    },
    {
        content:
            "Billing and insurance claim management used to be a nightmare. Codezeo simplified everything and reduced rejections by 40%.",
        author: "Karen Li",
        role: "Billing Manager",
        practice: "WellPath Family Care",
        rating: 5,
        avatar: "/avatars/4.svg",
    },
    {
        content:
            "I’ve used many platforms over the years, but Codezeo stands out for its speed, UI/UX, and compliance with HIPAA standards.",
        author: "Dr. David Nguyen",
        role: "Orthopedic Surgeon",
        practice: "Precision Ortho",
        rating: 5,
        avatar: "/avatars/5.svg",
    },
    {
        content:
            "The real-time analytics dashboard gives us insights into patient flow and doctor availability. We make better decisions now.",
        author: "Emily Roberts",
        role: "Clinic Director",
        practice: "Sunrise Wellness",
        rating: 4,
        avatar: "/avatars/6.svg",
    },
    {
        content:
            "Telehealth integration is top-notch. Elderly patients find it easy to use, which is a big win for our remote consultations.",
        author: "Dr. Farhan Ali",
        role: "Geriatrician",
        practice: "SilverCare Clinic",
        rating: 5,
        avatar: "/avatars/7.svg",
    },
    {
        content:
            "Their support team is responsive and knowledgeable. Any time we faced an issue, it was resolved within hours.",
        author: "Rosa Jiménez",
        role: "Operations Lead",
        practice: "VidaCare Health Group",
        rating: 5,
        avatar: "/avatars/8.svg",
    },
    {
        content:
            "We've doubled patient retention rates thanks to personalized follow-ups and patient education features built into Codezeo.",
        author: "Dr. Omar Siddiqui",
        role: "General Practitioner",
        practice: "Urban Health Hub",
        rating: 5,
        avatar: "/avatars/9.svg",
    },
    {
        content:
            "The onboarding process was efficient. Everything from user management to lab integration just works out of the box.",
        author: "Samantha Lee",
        role: "Lab Coordinator",
        practice: "BioMed Diagnostics",
        rating: 4,
        avatar: "/avatars/10.svg",
    },
]

export function CarouselForReviews() {
    return (
        <Carousel
            className="w-full "
            plugins={[
                Autoplay({
                    delay: 4000,
                    stopOnInteraction: true,
                }),
            ]}
            opts={{ loop: true }}
        >
            <CarouselContent className="px-2 ">
                {testimonials.map((testimonial, index) => (
                    <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3 px-2"
                    >
                        <Card className="relative h-full bg-background-subtle dark:bg-background p-6 rounded-2xl border border-border dark:border-border-subtle">
                            <div className="absolute top-4 right-4">
                                <Quote className="h-6 w-6 text-primary/20" />
                            </div>

                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            <p className="text-text-secondary dark:text-text-secondary mb-6 leading-relaxed text-base">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center mt-auto">
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.author}
                                    width={48}
                                    height={48}
                                    className="rounded-full mr-4"
                                />
                                <div>
                                    <div className="font-semibold text-text-primary dark:text-text-primary text-base">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-primary text-sm">{testimonial.role}</div>
                                    <div className="text-xs text-text-secondary dark:text-text-tertiary">
                                        {testimonial.practice}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
