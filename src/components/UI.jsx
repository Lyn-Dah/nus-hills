import { Link } from 'react-router-dom'
import { IMG } from '../data'

export const Photo = ({ k, pos, cls = '', alt }) => (
  <img
    src={IMG[k]}
    alt={alt || 'Children at Nus Hills Montessori School'}
    style={{ objectPosition: pos || '50% 50%' }}
    className={'w-full h-full object-cover ' + cls}
  />
)

export const Btn = ({ to, children, alt }) => (
  <Link
    to={to}
    className={
      'inline-block px-7 py-3 text-sm font-bold rounded-sm ' +
      (alt ? 'border-2 border-white text-white hover:bg-white hover:text-plum' : 'bg-gold text-ink hover:bg-white')
    }
  >
    {children}
  </Link>
)

export const Head = ({ t, s }) => (
  <div className="relative h-56 md:h-64">
    <div className="absolute inset-0">
      <Photo k="a" pos="50% 55%" />
    </div>
    <div className="absolute inset-0 bg-plum/80" />
    <div className="relative max-w-6xl mx-auto px-4 h-full flex flex-col justify-center text-white">
      <p className="text-sm opacity-80">Home / {t}</p>
      <h1 className="text-3xl md:text-5xl font-extrabold mt-1">{t}</h1>
      {s && <p className="mt-2 max-w-xl opacity-90">{s}</p>}
    </div>
  </div>
)

export const H = ({ t, s, c }) => (
  <div className={'mb-8 ' + (c ? 'text-center' : '')}>
    <h2 className="text-2xl md:text-3xl font-extrabold text-plum">{t}</h2>
    <div className={'h-1 w-14 bg-gold mt-3 ' + (c ? 'mx-auto' : '')} />
    {s && <p className={'mt-4 max-w-2xl text-slate-600 ' + (c ? 'mx-auto' : '')}>{s}</p>}
  </div>
)

export const Sec = ({ t, s, c, children, bg }) => (
  <section className={'py-14 ' + (bg || '')}>
    <div className="max-w-6xl mx-auto px-4">
      {t && <H t={t} s={s} c={c} />}
      {children}
    </div>
  </section>
)

export const Field = ({ l, v, set, area }) => (
  <label className="block">
    <span className="text-sm font-bold text-plum">{l}</span>
    {area ? (
      <textarea rows="4" value={v} onChange={(e) => set(e.target.value)} className="mt-1 w-full border border-plum/25 p-3" />
    ) : (
      <input value={v} onChange={(e) => set(e.target.value)} className="mt-1 w-full border border-plum/25 p-3" />
    )}
  </label>
)

export const ProgCard = ({ p }) => (
  <Link to="/academics" className="group bg-white border border-plum/10 shadow-sm block">
    <div className="h-48 overflow-hidden">
      <Photo k={p.img} pos={p.pos} cls="group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-5">
      <h3 className="font-bold text-lg text-plum">{p.n}</h3>
      <p className="text-xs font-semibold text-rose mt-0.5">{p.age}</p>
      <p className="mt-2 text-sm text-slate-600">{p.d}</p>
      <span className="mt-3 inline-block text-sm font-bold text-rose">Read more</span>
    </div>
  </Link>
)

export const NewsCard = ({ n }) => (
  <article className="bg-white border border-plum/10 shadow-sm">
    <div className="h-40">
      <Photo k={n.img} pos={n.pos} />
    </div>
    <div className="p-5">
      <p className="text-xs font-semibold text-rose">{n.dt}</p>
      <h3 className="font-bold text-plum mt-1">{n.t}</h3>
      <p className="mt-2 text-sm text-slate-600">{n.d}</p>
    </div>
  </article>
)
