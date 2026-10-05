import { Link } from 'react-router-dom'
import { PH, PROGS } from '../data'

export default function Footer() {
  return (
    <footer className="bg-plum text-white mt-24">
      <div className="max-w-6xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <p className="text-xl font-extrabold">NUS HILLS</p>
          <p className="text-sm font-semibold" style={{ color: '#F3B8DE' }}>
            Montessori School
          </p>
          <p className="mt-4 text-sm opacity-80">Educating the whole child with care, curiosity and confidence.</p>
        </div>
        <div>
          <p className="font-bold mb-3">Find us</p>
          <p className="text-sm opacity-80 leading-7">
            {PH.addr}
            <br />
            {PH.hours}
            <br />
            {PH.phone}
            <br />
            {PH.email}
          </p>
        </div>
        <div>
          <p className="font-bold mb-3">Our programmes</p>
          <ul className="text-sm opacity-80 leading-7">
            {PROGS.map((p) => (
              <li key={p.n}>
                <Link to="/academics">{p.n}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold mb-3">Our location</p>
          <div className="h-28 bg-white/10 flex items-center justify-center text-sm opacity-80">Map</div>
        </div>
      </div>
      <p className="border-t border-white/15 text-center text-xs opacity-70 py-5">© 2026 Nus Hills Montessori School. All rights reserved.</p>
    </footer>
  )
}
