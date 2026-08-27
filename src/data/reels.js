import heroVideo from '../assets/videos/hero-zojila.mp4'
import heroPoster from '../assets/videos/hero-zojila-poster.webp'

import glacierVideo from '../assets/videos/reel-glacier.mp4'
import glacierPoster from '../assets/videos/reel-glacier-poster.webp'

import palaceVideo from '../assets/videos/reel-leh-palace.mp4'
import palacePoster from '../assets/videos/reel-leh-palace-poster.webp'

import flagsVideo from '../assets/videos/reel-prayer-flags.mp4'
import flagsPoster from '../assets/videos/reel-prayer-flags-poster.webp'

import stupaVideo from '../assets/videos/reel-shanti-stupa.mp4'
import stupaPoster from '../assets/videos/reel-shanti-stupa-poster.webp'

export const hero = { video: heroVideo, poster: heroPoster }

export const reels = [
  {
    id: 'glacier',
    video: glacierVideo,
    poster: glacierPoster,
    place: 'Thajiwas Glacier',
    elevation: '9,800 ft',
  },
  {
    id: 'leh-palace',
    video: palaceVideo,
    poster: palacePoster,
    place: 'Leh Royal Palace',
    elevation: '11,562 ft',
  },
  {
    id: 'prayer-flags',
    video: flagsVideo,
    poster: flagsPoster,
    place: 'Leh Palace, prayer flags',
    elevation: '11,562 ft',
  },
  {
    id: 'shanti-stupa',
    video: stupaVideo,
    poster: stupaPoster,
    place: 'Shanti Stupa',
    elevation: '11,562 ft',
  },
]
