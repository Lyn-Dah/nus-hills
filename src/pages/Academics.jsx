import { PROGS } from '../data'
import { Head, H, Photo } from '../components/UI'

export default function Academics() {
  return (
    <>
      <Head t="Academics" s="Four stages, each with its own classroom, materials and routine." />
      <div className="max-w-6xl mx-auto px-4 py-14 space-y-16">
        {PROGS.map((p, i) => (
          <div key={p.n} className={'grid md:grid-cols-2 gap-10 items-center ' + (i % 2 ? 'md:[&>*:first-child]:order-2' : '')}>
            <div className="h-72">
              <Photo k={p.img} pos={p.pos} />
            </div>
            <div>
              <H t={p.n} s={p.age} />
              <p className="text-slate-600 text-lg">{p.d}</p>
              <ul className="mt-4 space-y-2">
                {p.pts.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="text-rose font-bold">✓</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
