import { useState } from 'react'
import Preloader from './components/Preloader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Reels from './components/Reels'
import Gallery from './components/Gallery'
import Lightbox from './components/Lightbox'
import ReelLightbox from './components/ReelLightbox'
import Closing from './components/Closing'

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [reelIndex, setReelIndex] = useState(null)

  return (
    <>
      <Preloader />
      <Nav />
      <Hero />
      <Journey />
      <Reels onOpen={setReelIndex} />
      <Gallery onOpen={setLightboxIndex} />
      <Closing />
      <Lightbox index={lightboxIndex} setIndex={setLightboxIndex} />
      <ReelLightbox index={reelIndex} setIndex={setReelIndex} />
    </>
  )
}
