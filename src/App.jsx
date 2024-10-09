import { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// PAGES
import Home from './pages/Home'
import Contact from './pages/Contact'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import Project from './pages/Project'
import About from './pages/About'

// UTILS
import ScrollToTop from './utils/ScrollTop'
import { AppContext } from './contexts/AppContext'

function App() {
  const appContext = useContext(AppContext)

  if(appContext.loading) {
    return <LoadingSpinner/>
  }

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  )
}

export default App
