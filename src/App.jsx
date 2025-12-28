import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Home from './components/Home'
import Mentoria from './components/Mentoria'
import Resume from './components/Resume'

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentoria" element={<Mentoria />} />
        <Route path="/curriculo" element={<Resume />} />
      </Routes>
    </LanguageProvider>
  )
}

export default App
