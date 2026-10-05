import { Link } from 'react-router-dom'


export default function TopBar() {
  return (
    <div className="bg-plum text-white text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap gap-x-6 gap-y-1 justify-between">
        <span>
          Have any question? Please call us on 024XXXXXX
        </span>
        <span className="flex gap-5 font-semibold">
          <Link to="/contact">Contact us</Link>
          <Link to="/admission">Admission</Link>
        </span>
      </div>
    </div>
  )
}
