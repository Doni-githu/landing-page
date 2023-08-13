import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, FeedBacks, Hero, Navbar, StarsCanvas, Tech, Works } from "./components/index"
import { herobg } from "./assets"
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="relative z-0">
            <img className="absolute inset-0 z-[-1]" src={herobg} alt="" />
            <Hero />
          </div>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <FeedBacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App