'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Archive, Database, FileText, Layers, BadgeCheck, Award } from 'lucide-react'
import Image from 'next/image'

export function FeatureCards() {
  const cards = [
    {
      id: 1,
      title: 'VC Office',
      description: 'Professional university administration and strategic leadership',
      image: '/vc-office.png',
      icon: Award,
      tags: [],
      color: 'from-primary/20',
    },
    {
      id: 2,
      title: 'Directors Office',
      description: 'Executive leadership and institutional vision',
      image: '/directors-office.png',
      icon: Users,
      tags: [],
      color: 'from-secondary/20',
    },
    {
      id: 3,
      title: 'Executive Programs',
      description: 'Advanced professional development and specialized training',
      image: '/executive-programs.png',
      icon: Layers,
      tags: ['MSc Program', 'PGD Program', 'Certificate Program'],
      color: 'from-blue-500/20',
    },
    {
      id: 4,
      title: 'IBOM Journal',
      description: 'Peer-reviewed research and academic publications',
      image: '/journal.png',
      icon: BookOpen,
      tags: [],
      color: 'from-purple-500/20',
    },
    {
      id: 5,
      title: 'Admission',
      description: 'Streamlined enrollment and application process',
      image: '/admission.png',
      icon: BadgeCheck,
      tags: ['Requirements', 'Accreditation', 'Alumni Network'],
      color: 'from-emerald-500/20',
    },
    {
      id: 6,
      title: 'Journal Archive',
      description: 'Complete repository of historical publications',
      image: '/archive.png',
      icon: Archive,
      tags: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
      color: 'from-amber-500/20',
    },
    {
      id: 7,
      title: 'Lecture Modules',
      description: 'Comprehensive digital learning resources',
      image: '/lecture-modules.png',
      icon: Database,
      tags: [],
      color: 'from-pink-500/20',
    },
    {
      id: 8,
      title: 'Staff Profile',
      description: 'Distinguished faculty and research team',
      image: '/staff-profile.png',
      icon: Users,
      tags: [],
      color: 'from-cyan-500/20',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-20 px-4 bg-gradient-to-b from-background to-blue-50/20" id="programs">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Academic Resources</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of programs, services, and research initiatives
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group cursor-pointer"
              >
                <div className="relative h-full rounded-2xl overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-300 border border-border">
                  {/* Image Background */}
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Dark Overlay Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6">
                    {/* Icon */}
                    <div className="flex justify-between items-start mb-auto">
                      <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="mt-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-4 leading-relaxed group-hover:text-white transition-colors">
                        {card.description}
                      </p>

                      {/* Tags/Badges */}
                      {card.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {card.tags.slice(0, 3).map((tag, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-accent/20 border border-accent/40 text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                          {card.tags.length > 3 && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-accent/20 border border-accent/40 text-accent">
                              +{card.tags.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Button */}
                      <button className="w-full mt-4 bg-white/10 hover:bg-accent hover:text-primary border border-white/20 text-white py-2 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm">
                        Learn More
                      </button>
                    </div>
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
