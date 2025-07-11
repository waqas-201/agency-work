import Link from "next/link"
import { Twitter, Linkedin, Github, Mail, Phone, MapPin, Shield, Award, Clock } from "lucide-react"
import Logo from "./Logo"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/SRIXUS -solutions" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/SRIXUS solutions" },
    { name: "GitHub", icon: Github, href: "https://github.com/SRIXUS -solutions" },
  ]

  const contactInfo = [
    { icon: Phone, label: "Sales", value: "+1 (555) MED-TECH", href: "tel:+15556338324" },
    { icon: Mail, label: "Inquiries", value: "healthcare@SRIXUS solutions.com", href: "mailto:healthcare@SRIXUS solutions.com" },
    { icon: MapPin, label: "Location", value: "Medical District, TX", href: "/contact#locations" },
  ]

  const certifications = [
    { icon: Shield, text: "HIPAA Compliant" },
    { icon: Award, text: "HL7 FHIR Certified" },
    { icon: Clock, text: "24/7 Support" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Medical Disclaimer", href: "/medical-disclaimer" },
  ]

  return (
    <footer className="bg-[#0b132b] text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Image

                src="/SRIXUS-LOGO-DARK.svg"
                alt="Patient portal dashboard interface"
                width={120}
                height={80}
                className="max-w-full h-auto"
                priority
              />
            </Link>
            <p className="text-text-tertiary mb-6 leading-relaxed">
              Transforming healthcare with HIPAA-compliant solutions for patient portals, practice management, and telemedicine.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a href={contact.href} className="flex items-center space-x-3 text-text-tertiary hover:text-text-primary-foreground">
                    <contact.icon className="w-5 h-5" />
                    <div>
                      <div className="text-sm">{contact.label}</div>
                      <div className="font-medium">{contact.value}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <cert.icon className="w-6 h-6 text-primary" />
                  <span>{cert.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-background-subtle rounded-full flex items-center justify-center hover:bg-primary"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5 text-text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border-subtle pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-text-tertiary text-center lg:text-left">
              © {currentYear} SRIXUS  Solutions, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 lg:mt-0">
              {legalLinks.map((link, index) => (
                <Link key={index} href={link.href} className="text-text-tertiary hover:text-text-primary-foreground">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
