import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'
import HeroSection from './components/HeroSection'
import AboutTeaser from './components/AboutTeaser'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import RecommendationsPage from './pages/RecommendationsPage'
import AboutPage from './pages/AboutPage'
import ExperienceDetail from './pages/ExperienceDetail'
import SvendeproevePage from './pages/SvendeproevePage'
import EliteVaskPage from './pages/EliteVaskPage'
import GamingPCPage from './pages/GamingPCPage'
import MakPaintingPage from './pages/MakPaintingPage'
import GlossaryIndexPage from './pages/GlossaryIndexPage'
import GlossaryTermPage from './pages/GlossaryTermPage'
import NotFound from './pages/NotFound'
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
    <LanguageProvider>
      <ScrollToTop />
      <CustomCursor />
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
        <Route path="/viden/:slug" element={<GlossaryTermPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LanguageProvider>
  )
}
