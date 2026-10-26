'use client'

import { motion } from 'framer-motion'
import { Award, Lightbulb, Briefcase } from 'lucide-react'

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: 'Academic Excellence',
      description:
        'Consistently ranked among the world&apos;s leading research institutions with faculty members recognized for groundbreaking contributions to their fields.',
      color: 'from-primary',
    },
    {
      icon: Lightbulb,
      title: 'Research Innovation',
      description:
        'Pioneering research initiatives addressing global challenges through interdisciplinary collaboration and cutting-edge methodologies.',
      color: 'from-secondary',
    },
    {
      icon: Briefcase,
      title: 'Professional Development',
      description:
        'Comprehensive programs designed to equip students and professionals with skills for success in today&apos;s dynamic career landscape.',
      color: 'from-blue-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
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
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what sets us apart as a premier academic institution
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-secondary transition-all duration-300 shadow-lg">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${reason.color} to-transparent p-3 mb-6 flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
