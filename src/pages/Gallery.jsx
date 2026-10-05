import { useState } from 'react'
import { IMG } from '../data'
import { Head, Photo } from '../components/UI'

export default function Gallery() {
  const [s, setS] = useState(null)
  const T = [
    ['a', '50% 60%'],
    ['b', '30% 60%'],
    ['c', '50% 60%'],
    ['a', '20% 30%'],
    ['b', '70% 40%'],
    ['c', '30% 30%'],
  ]
  return (
    <>
      <Head t="Gallery" s="Life at Nus Hills." />
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-2 md:grid-cols-3 gap-3">
        {T.map(([k, p], i) => (
          <button key={i} onClick={() => setS(k)} className="h-44 md:h-64 overflow-hidden">
            <Photo k={k} pos={p} cls="hover:scale-105 transition-transform duration-500" />
          </button>
        ))}
      </div>
      {s && (
        <div role="dialog" aria-label="Photo" onClick={() => setS(null)} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button className="absolute top-4 right-4 text-white font-bold" onClick={() => setS(null)}>
            Close
          </button>
          <img src={IMG[s]} alt="Children at Nus Hills Montessori" className="max-h-[85vh]" />
        </div>
      )}
    </>
  )
}
