import imgA from './assets/playground-a.jpg'
import imgB from './assets/playground-b.jpg'
import imgC from './assets/playground-c.jpg'

export const mapSrc = 'https://maps.google.com/maps?q=5.706013,-0.234164&z=16&output=embed'
export const mapLink = 'https://www.google.com/maps?q=5.706013,-0.234164'

export const IMG = { a: imgA, b: imgB, c: imgC }

export const PH = {
  phone: '+233 XX XXX XXXX',
  email: 'info@nushills.edu.gh',
  addr: '[School address], Accra, Ghana',
  hours: 'Monday to Friday, 8:00 AM to 4:30 PM',
}

export const PROGS = [
  {
    n: 'Creche',
    age: '3 months to 3 years',
    img: 'b',
    pos: '30% 60%',
    d: 'A gentle introduction to school through sensory discovery, songs and daily routines in a calm, safe room.',
    pts: [
      'Sensory play and movement',
      'Early language through songs and stories',
      'Independence with dressing, tidying and snacks',
    ],
  },
  {
    n: 'Nursery & Kindergarten',
    age: '3 to 6 years',
    img: 'c',
    pos: '20% 70%',
    d: 'Children choose their own work, build concentration, and grow from first letters and numbers to reading, writing and maths.',
    pts: [
      'Practical life skills and outdoor play',
      'Letter sounds, early reading and writing',
      'Maths with hands-on materials',
    ],
  },
  {
    n: 'Primary',
    age: '6 to 11 years',
    img: 'a',
    pos: '50% 40%',
    d: 'Strong foundations in English, maths, science and social studies, taught through projects and guided discovery.',
    pts: [
      'Core subjects taught with real examples',
      'Group projects and presentations',
      'Reading, teamwork and responsibility',
    ],
  },
  {
    n: 'Junior High',
    age: '12 to 14 years',
    img: 'c',
    pos: '75% 40%',
    d: 'Older students deepen their knowledge, think independently and prepare for the next stage of their education.',
    pts: [
      'Subject teaching and exam preparation',
      'Leadership and community roles',
      'Study skills and guidance for senior high',
    ],
  },
]

export const NEWS = [
  { t: 'Open day for new families', dt: '[Date to be added]', d: 'Visit the classrooms, meet our teachers and see the playground.', img: 'a', pos: '50% 50%' },
  { t: 'Sports and play morning', dt: '[Date to be added]', d: 'Relay races, seesaw turns and ball games for all classes.', img: 'b', pos: '40% 60%' },
  { t: 'Parent and teacher meeting', dt: '[Date to be added]', d: "Review your child's progress and plan the term ahead.", img: 'c', pos: '50% 60%' },
  { t: 'Cultural day celebration', dt: '[Date to be added]', d: 'Traditional wear, songs, food and stories from every home.', img: 'a', pos: '20% 30%' },
]

export const QUOTES = [
  ['My daughter now tidies her own toys and tells me about her day in full sentences.', '[Parent name]', 'Nursery parent'],
  ['The teachers know every child by name and by what they love to do.', '[Parent name]', 'Primary parent'],
  ['Our son ran to the gate on his first morning. That says it all.', '[Parent name]', 'Toddlers parent'],
]

export const NAV = [
  ['/', 'Home'],
  ['/about', 'About us'],
  ['/academics', 'Academics', PROGS.map((p) => p.n)],
  ['/why-join', 'Why join us', ['Campus life', 'Our facilities']],
  ['/gallery', 'Gallery'],
  ['/news', 'News & events'],
]
