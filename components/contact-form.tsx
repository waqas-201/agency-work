"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-semibold text-text-primary mb-2">Thank you!</h3>
        <p className="text-text-secondary">We'll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-text-secondary mb-2 block">
            Name *
          </Label>
          <Input id="name" name="name" required placeholder="Your name" className="h-12" />
        </div>
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-text-secondary mb-2 block">
            Email *
          </Label>
          <Input id="email" name="email" type="email" required placeholder="your@email.com" className="h-12" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="company" className="text-sm font-medium text-text-secondary mb-2 block">
            Company
          </Label>
          <Input id="company" name="company" placeholder="Your company" className="h-12" />
        </div>
        <div>
          <Label htmlFor="service" className="text-sm font-medium text-text-secondary mb-2 block">
            Service *
          </Label>
          <Select name="service" required>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="patient-portal">Patient Portal</SelectItem>
              <SelectItem value="practice-management">Practice Management System</SelectItem>
              <SelectItem value="telemedicine">Telemedicine Platform</SelectItem>
              <SelectItem value="healthcare-analytics">Healthcare Analytics</SelectItem>
              <SelectItem value="emr-integration">EMR Integration</SelectItem>
              <SelectItem value="other">Other Healthcare Solution</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="budget" className="text-sm font-medium text-text-secondary mb-2 block">
          Budget Range
        </Label>
        <Select name="budget">
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Select budget range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-15k">Under $15,000</SelectItem>
            <SelectItem value="15k-35k">$15,000 - $35,000</SelectItem>
            <SelectItem value="35k-75k">$35,000 - $75,000</SelectItem>
            <SelectItem value="75k-150k">$75,000 - $150,000</SelectItem>
            <SelectItem value="over-150k">Over $150,000</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-medium text-text-secondary mb-2 block">
          Project Details *
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your practice, current systems, patient needs, and how we can help improve your healthcare operations..."
          rows={5}
          className="resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-background-emphasis hover:bg-background-emphasis/90 text-text-primary-foreground py-4 font-medium"
        disabled={isLoading}
      >
        {isLoading ? (
          "Sending..."
        ) : (
          <>
            Send message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
