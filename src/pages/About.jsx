import { Head, Sec, Photo } from '../components/UI'

export default function About() {
  return (
    <>
      <Head t="About us" s="A Montessori school built around how young children really learn." />
      <Sec t="Our story">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-slate-600 text-lg">
            <p>[Add the story of how Nus Hills Montessori began, who founded it and why.]</p>
            <p>Today the school welcomes children from toddlerhood through Junior High, in classrooms and outdoor spaces made for them.</p>
          </div>
          <div className="h-72">
            <Photo k="c" pos="40% 60%" />
          </div>
        </div>
      </Sec>
      <Sec t="What we believe" bg="bg-mist">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            ['Our mission', 'To help every child grow into a curious, kind and capable learner.'],
            ['Our philosophy', 'Follow the child. Prepare the environment. Let real work build real confidence.'],
            ['Our values', 'Respect, independence, responsibility and joy.'],
          ].map(([t, d]) => (
            <div key={t} className="bg-white p-6 border-t-4 border-rose shadow-sm">
              <h3 className="font-bold text-plum text-lg">{t}</h3>
              <p className="mt-2 text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </Sec>
      <Sec t="Meet the team" s="Team profiles to be added.">
        <div className="grid sm:grid-cols-3 gap-5">
          {['Head of school', 'Lead teacher', 'Teaching assistant'].map((r) => (
            <div key={r} className="border border-plum/10 p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-mist mx-auto" />
              <p className="mt-3 font-bold text-plum">[Name]</p>
              <p className="text-sm text-slate-600">{r}</p>
            </div>
          ))}
        </div>
      </Sec>
    </>
  )
}
