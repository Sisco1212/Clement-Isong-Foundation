'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function Statistics() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const AnimatedCounter = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }, [isVisible])

    return <span>{count}</span>
  }

  const stats = [
    { label: 'Research Publications', value: 2847, suffix: '+' },
    { label: 'Active Students', value: 8500, suffix: '+' },
    { label: 'Faculty Members', value: 450, suffix: '+' },
    { label: 'Research Projects', value: 342, suffix: '+' },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-r from-primary via-secondary to-primary/80 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">By The Numbers</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our impact and contribution to global research and education
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4 text-accent">
                {isVisible ? (
                  <>
                    <AnimatedCounter value={stat.value} />
                    {stat.suffix}
                  </>
                ) : (
                  <>0{stat.suffix}</>
                )}
              </div>
              <p className="text-white/80 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
