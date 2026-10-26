import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { FeatureCards } from '@/components/feature-cards'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Announcements } from '@/components/announcements'
import { Statistics } from '@/components/statistics'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeatureCards />
      <WhyChooseUs />
      <Announcements />
      <Statistics />
      <CTASection />
      <Footer />
    </main>
  )
}
