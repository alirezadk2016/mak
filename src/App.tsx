import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import CustomCursor from './components/CustomCursor'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import ExperienceDetail from './pages/ExperienceDetail'
import SvendeproevePage from './pages/SvendeproevePage'
import EliteVaskPage from './pages/EliteVaskPage'
import FooterSection from './components/FooterSection'
import AvailableBanner from './components/AvailableBanner'

function Home() {
  return (
    <main style={{ overflowX: 'clip', background: '#0C0C0C' }}>
      <HeroSection />
      <AvailableBanner />
      <AboutSection />
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
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience/:slug" element={<ExperienceDetail />} />
        <Route path="/projects/svendeproeve" element={<SvendeproevePage />} />
        <Route path="/projects/elite-vask" element={<EliteVaskPage />} />
      </Routes>
    </LanguageProvider>
  )
}
