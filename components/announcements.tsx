'use client'

import { motion } from 'framer-motion'
import { Bell, Calendar, ArrowRight } from 'lucide-react'

export function Announcements() {
  const announcements = [
    {
      title: 'New Research Initiative Launched',
      description: 'We&apos;re excited to announce our latest research initiative focusing on sustainable technology solutions.',
      date: '2024-01-15',
      category: 'Research',
      icon: Bell,
    },
    {
      title: 'Annual Academic Conference',
      description: 'Join us for our flagship academic conference bringing together leading researchers from around the world.',
      date: '2024-02-20',
      category: 'Event',
      icon: Calendar,
    },
    {
      title: 'New Master&apos;s Program',
      description: 'Introducing an innovative new Master&apos;s program in Applied Artificial Intelligence and Data Science.',
      date: '2024-03-01',
      category: 'Program',
      icon: Bell,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 bg-background" id="announcements">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Latest Announcements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest news and events
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {announcements.map((announcement, index) => {
            const Icon = announcement.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-8 hover:border-secondary hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-secondary/10 border border-secondary/20 text-secondary">
                      {announcement.category}
                    </span>
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {announcement.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">{announcement.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <time className="text-sm text-muted-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(announcement.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                    <button className="text-secondary hover:text-primary transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
