'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary via-secondary to-primary/80 text-white overflow-hidden relative">
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Explore our academic programs, access our research journal, or get in touch with our admissions team.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-primary font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/30 hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">
                Explore Programs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-md">
              <span className="relative z-10 flex items-center gap-2">
                View Journal
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-accent bg-accent/10 text-white font-semibold transition-all duration-300 hover:bg-accent/20">
              <span className="relative z-10 flex items-center gap-2">
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
