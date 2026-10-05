import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV } from '../data'

export default function Nav() {
  const [o, setO] = useState(false)
  const [d, setD] = useState(null)
  const route = useLocation().pathname

  return (
    <header
      className="sticky top-0 z-40 bg-white border-b border-plum/15 shadow-sm"
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="leading-tight">
          <span className="block text-xl font-extrabold text-plum tracking-tight">NUS HILLS</span>
          <span className="block text-xs font-semibold text-rose">Montessori</span>
        </Link>
        <button
          className="lg:hidden border border-plum text-plum px-4 py-1.5 text-sm font-semibold rounded-sm"
          aria-expanded={o}
          onClick={() => setO(!o)}
        >
          {o ? 'Close' : 'Menu'}
        </button>
        <nav
          className={
            (o ? 'flex' : 'hidden') +
            ' lg:flex absolute lg:static top-full left-0 right-0 bg-white flex-col lg:flex-row lg:items-center gap-0 lg:gap-1 p-4 lg:p-0 shadow lg:shadow-none'
          }
        >
          {NAV.map(([p, l, sub]) => (
            <div key={p} className="relative" onMouseEnter={() => setD(p)} onMouseLeave={() => setD(null)}>
              <Link
                to={p}
                onClick={() => setO(false)}
                className={'block px-3 py-2 text-sm font-semibold ' + (route === p ? 'text-rose' : 'text-ink hover:text-rose')}
              >
                {l}
                {sub && <span className="hidden lg:inline text-xs"> ▾</span>}
              </Link>
              {sub && d === p && (
                <div className="hidden lg:block absolute left-0 top-full bg-white border-t-2 border-rose shadow-lg w-60 py-2">
                  {sub.map((x) => (
                    <Link key={x} to={p} onClick={() => setD(null)} className="block px-4 py-2 text-sm hover:bg-mist hover:text-rose">
                      {x}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/contact" onClick={() => setO(false)} className="px-3 py-2 text-sm font-semibold hover:text-rose">
            Contact
          </Link>
          <Link
            to="/admission"
            onClick={() => setO(false)}
            className="lg:ml-3 text-center bg-rose text-white text-sm font-bold px-5 py-2.5 rounded-sm hover:bg-plum"
          >
            Apply now
          </Link>
        </nav>
      </div>
    </header>
  )
}
