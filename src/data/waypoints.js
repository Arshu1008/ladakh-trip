import sonmargPines from '../assets/photos/sonmarg-pines.webp'
import zojilaWalk from '../assets/photos/zojila-walk.webp'
import glacierArmout from '../assets/photos/glacier-armout.webp'
import glacierArmswide from '../assets/photos/glacier-armswide.webp'
import glacierSunglasses from '../assets/photos/glacier-sunglasses.webp'
import glacierProfile from '../assets/photos/glacier-profile.webp'
import khardunglaJeep from '../assets/photos/khardungla-jeep.webp'
import sunsetJeep from '../assets/photos/sunset-jeep.webp'
import nubraArchery from '../assets/photos/nubra-archery.webp'
import pangongScooter1 from '../assets/photos/pangong-scooter-1.webp'
import pangongScooter2 from '../assets/photos/pangong-scooter-2.webp'
import lehPalace from '../assets/photos/leh-palace.webp'
import shantiStupa from '../assets/photos/shanti-stupa.webp'

// Real route, low to high, in the order the trip was travelled.
export const waypoints = [
  {
    id: 'sonmarg',
    name: 'Sonmarg',
    label: 'Meadow of Gold',
    elevation: 7800,
    coords: '34.3° N, 75.3° E',
    note: 'Pine ridgelines and the first snow line of the drive — the gateway before the climb begins.',
    image: sonmargPines,
  },
  {
    id: 'zoji-la',
    name: 'Zoji La',
    label: 'The Pass of Blizzards',
    elevation: 11575,
    coords: '34.3° N, 75.5° E',
    note: 'Where the Kashmir valley gives way to Ladakh — a wall of glacier ice on one side of the road, sky on the other.',
    image: zojilaWalk,
  },
  {
    id: 'glacier',
    name: 'Thajiwas Glacier',
    label: 'Field of Ice',
    elevation: 9800,
    coords: '34.3° N, 75.3° E',
    note: 'A flat white basin ringed by rock walls — the kind of quiet that makes you talk in a lower voice.',
    image: glacierArmswide,
  },
  {
    id: 'khardung-la',
    name: 'Khardung La',
    label: "One of the World's Highest Motorable Roads",
    elevation: 17982,
    coords: '34.28° N, 77.6° E',
    note: 'Border Roads Organisation territory. Thin air, prayer flags cracking in the wind, and a sign that makes the climb feel earned.',
    image: khardunglaJeep,
  },
  {
    id: 'nubra',
    name: 'Nubra Valley',
    label: 'The Cold Desert',
    elevation: 10000,
    coords: '34.68° N, 77.5° E',
    note: 'Sand dunes at ten thousand feet. Traded the jeep for a recurve bow at a roadside archery range.',
    image: nubraArchery,
  },
  {
    id: 'pangong',
    name: 'Pangong Tso',
    label: 'The Lake That Changes Colour',
    elevation: 14270,
    coords: '33.75° N, 78.6° E',
    note: 'A borrowed 1960s Vespa, gravel shoreline, and a lake so long it disappears into Tibet.',
    image: pangongScooter1,
  },
  {
    id: 'leh',
    name: 'Leh',
    label: 'Back Down to the Capital',
    elevation: 11562,
    coords: '34.16° N, 77.58° E',
    note: 'The loop closes at Leh Palace and Shanti Stupa, prayer flags snapping over a city that felt low-altitude after Khardung La.',
    image: shantiStupa,
  },
]

// Wider gallery pool for the grid section — includes extra frames per stop.
export const gallery = [
  { src: khardunglaJeep, place: 'Khardung La · 17,982 ft', wide: true },
  { src: pangongScooter1, place: 'Pangong Tso · 14,270 ft' },
  { src: glacierArmswide, place: 'Thajiwas Glacier · 9,800 ft' },
  { src: zojilaWalk, place: 'Zoji La · 11,575 ft' },
  { src: nubraArchery, place: 'Nubra Valley · 10,000 ft', wide: true },
  { src: pangongScooter2, place: 'Pangong Tso · 14,270 ft' },
  { src: sunsetJeep, place: 'En route, Leh–Manali Highway' },
  { src: glacierSunglasses, place: 'Thajiwas Glacier · 9,800 ft' },
  { src: sonmargPines, place: 'Sonmarg · 7,800 ft' },
  { src: glacierProfile, place: 'Thajiwas Glacier · 9,800 ft' },
  { src: glacierArmout, place: 'Zoji La · 11,575 ft', wide: true },
  { src: lehPalace, place: 'Leh Royal Palace · 11,562 ft' },
  { src: shantiStupa, place: 'Shanti Stupa, Leh · 11,562 ft' },
]
