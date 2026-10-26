'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Share2, MessageCircle, ExternalLink, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const sections = {
    about: {
      title: 'About',
      links: [
        { label: 'Our Mission', href: '#' },
        { label: 'History', href: '#' },
        { label: 'Leadership', href: '#' },
        { label: 'Accreditation', href: '#' },
      ],
    },
    programs: {
      title: 'Academic Programs',
      links: [
        { label: 'Undergraduate', href: '#' },
        { label: 'Graduate', href: '#' },
        { label: 'Research', href: '#' },
        { label: 'Executive', href: '#' },
      ],
    },
    journal: {
      title: 'Journal Archive',
      links: [
        { label: 'Current Issue', href: '#' },
        { label: 'Past Issues', href: '#' },
        { label: 'Submission Guidelines', href: '#' },
        { label: 'Editorial Board', href: '#' },
      ],
    },
  }

  const socials = [
    { icon: Share2, label: 'Facebook', href: '#' },
    { icon: MessageCircle, label: 'Twitter', href: '#' },
    { icon: ExternalLink, label: 'LinkedIn', href: '#' },
    { icon: MessageSquare, label: 'Chat', href: '#' },
  ]

  return (
    <footer className="bg-gradient-to-b from-foreground to-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold">IAR</span>
              </div>
              <span className="text-xl font-bold">Institute</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Leading the advancement of knowledge through innovative research, world-class education, and professional development.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                <a href="mailto:contact@institute.edu">contact@institute.edu</a>
              </div>
              <div className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <a href="tel:+1234567890">+1 (234) 567-8900</a>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5" />
                <span>123 Academic Lane, University City, ST 12345</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links Sections */}
          {Object.entries(sections).map(([key, section]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-6 text-accent">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-white/70 text-sm mb-6 md:mb-0">
            <p>&copy; {currentYear} Institute for Advanced Research. All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:bg-accent hover:text-foreground hover:border-accent transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              )
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
