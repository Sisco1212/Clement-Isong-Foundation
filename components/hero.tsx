'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const stats = [
    { label: 'Research Publications', value: '2,847' },
    { label: 'Academic Programs', value: '42' },
    { label: 'Years of Excellence', value: '50+' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen pt-24 pb-12 px-4 relative overflow-hidden bg-gradient-to-br from-background via-background to-blue-50/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl mt-8 md:w-10/12 mx-auto font-bold text-foreground mb-6 tracking-tight"
          >
            Clement Isong Foundation &{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Clement Isong Centre for Development Studies, University of Uyo
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Advancing knowledge through groundbreaking research, world-class education, and innovative
            solutions for tomorrow&apos;s challenges.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5">
              <span className="relative z-10 flex items-center gap-2">
                Explore Programs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-secondary text-secondary font-semibold transition-all duration-300 hover:bg-secondary/5">
              <span className="relative z-10 flex items-center gap-2">
                View Journal Archive
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-md bg-white/40 border border-white/60 rounded-2xl p-8 hover:bg-white/60 transition-all duration-300 shadow-lg"
                whileHover={{ y: -4 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
