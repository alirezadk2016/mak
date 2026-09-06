import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import { LanguageProvider } from './contexts/LanguageContext'
import ErrorBoundary from './components/ErrorBoundary'
import TitleSync from './components/TitleSync'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import HeroSection from './components/HeroSection'
import AboutTeaser from './components/AboutTeaser'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
const RecommendationsPage = lazy(() => import('./pages/RecommendationsPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ExperienceDetail = lazy(() => import('./pages/ExperienceDetail'))
const SvendeproevePage = lazy(() => import('./pages/SvendeproevePage'))
const EliteVaskPage = lazy(() => import('./pages/EliteVaskPage'))
const GamingPCPage = lazy(() => import('./pages/GamingPCPage'))
const MakPaintingPage = lazy(() => import('./pages/MakPaintingPage'))
const GlossaryIndexPage = lazy(() => import('./pages/GlossaryIndexPage'))
const ColophonPage = lazy(() => import('./pages/ColophonPage'))
const GlossaryTermPage = lazy(() => import('./pages/GlossaryTermPage'))
const NotFound = lazy(() => import('./pages/NotFound'))
import FooterSection from './components/FooterSection'
function Home() {
  return (
    <main style={{ overflowX: 'clip', background: '#0A0908' }}>
      <HeroSection />
      <AboutTeaser />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
    <MotionConfig reducedMotion="user">
    <LanguageProvider>
      <a href="#indhold" className="skip-link">Spring til indhold</a>
      <ScrollToTop />
      <ScrollProgress />
      <TitleSync />
      <CustomCursor />
      <div id="indhold" tabIndex={-1} style={{ outline: 'none' }}>
      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience/:slug" element={<ExperienceDetail />} />
        <Route path="/projects/svendeproeve" element={<SvendeproevePage />} />
        <Route path="/projects/elite-vask" element={<EliteVaskPage />} />
        <Route path="/projects/gaming-pc" element={<GamingPCPage />} />
        <Route path="/projects/mak-painting" element={<MakPaintingPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/viden" element={<GlossaryIndexPage />} />
        <Route path="/kolofon" element={<ColophonPage />} />
        <Route path="/viden/:slug" element={<GlossaryTermPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
      </div>
      <Analytics />
    </LanguageProvider>
    </MotionConfig>
    </ErrorBoundary>
  )
}
