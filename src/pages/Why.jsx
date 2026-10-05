import { Head, Sec } from '../components/UI'

export default function Why() {
  return (
    <>
      <Head t="Why join us" s="A school day that mixes focused work, fresh air and friendship." />
      <Sec t="Campus life and facilities">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            ['Playground', 'Swings, slide, seesaw and trikes on soft artificial turf.'],
            ['Covered veranda', 'Shaded play space for hot afternoons and rainy days.'],
            ['Bright classrooms', 'Low shelves and child-sized furniture within easy reach.'],
          ].map(([t, d]) => (
            <div key={t} className="bg-white p-6 border-t-4 border-rose shadow-sm">
              <h3 className="font-bold text-plum text-lg">{t}</h3>
              <p className="mt-2 text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </Sec>
      <Sec t="A typical day" s="Times are placeholders. Replace with your real routine." bg="bg-mist">
        <ol className="border-l-4 border-gold pl-6 space-y-4 max-w-xl">
          {[
            ['8:00', 'Arrival and greetings'],
            ['8:30', 'Morning work cycle'],
            ['10:30', 'Snack and outdoor play'],
            ['11:30', 'Circle time and stories'],
            ['12:30', 'Lunch, rest and pick-up'],
          ].map(([t, d]) => (
            <li key={t}>
              <b className="text-plum">{t}</b> {d}
            </li>
          ))}
        </ol>
      </Sec>
      <Sec t="Safety and care">
        <p className="max-w-2xl text-slate-600 text-lg">
          Children are always supervised, play areas are enclosed, and small groups mean teachers notice everything. [Add details on staff
          ratios, security and health policies.]
        </p>
      </Sec>
    </>
  )
}
