import { useEffect, useState } from 'react'
import { PROGS, NEWS, QUOTES } from '../data'
import { Photo, Btn, Sec, ProgCard, NewsCard } from '../components/UI'

function Hero() {
  const S = [
    ['a', '50% 55%'],
    ['b', '40% 60%'],
    ['c', '40% 60%'],
  ]
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % 3), 6000)
    return () => clearInterval(t)
  }, [])
  return (
    <section className="relative h-[480px] md:h-[600px] overflow-hidden bg-plum">
      {S.map(([k, p], n) => (
        <div key={n} className={'absolute inset-0 transition-opacity duration-1000 ' + (n === i ? 'opacity-100' : 'opacity-0')}>
          <Photo k={k} pos={p} />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-plum/90 via-plum/60 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl text-white pb-10">
          <p className="font-semibold text-gold">Welcome to Nus Hills Montessori School</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-[1.05]">A Montessori education built on care and curiosity</h1>
          <p className="mt-5 text-lg opacity-90">From toddlers to Junior High, we help every child learn with confidence.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn to="/admission">Begin your journey</Btn>
            <Btn to="/academics" alt>
              Our programmes
            </Btn>
          </div>
        </div>
      </div>
      <div className="absolute bottom-24 md:bottom-28 left-0 right-0 flex justify-center gap-2">
        {S.map((_, n) => (
          <button
            key={n}
            aria-label={'Slide ' + (n + 1)}
            onClick={() => setI(n)}
            className={'h-1.5 transition-all ' + (n === i ? 'w-8 bg-gold' : 'w-4 bg-white/60')}
          />
        ))}
      </div>
    </section>
  )
}

function Feature() {
  const items = [
    ['Montessori approach', 'Children learn by doing, at their own pace, with hands-on materials.', '/about'],
    ['Safe play spaces', 'A shaded veranda and playground with swings, slide and seesaw.', '/why-join'],
    ['Caring teachers', 'Small groups and guidance that respects every child.', '/about'],
  ]
  return (
    <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-10 grid md:grid-cols-3 gap-4">
      {items.map(([t, d, l]) => (
        <div key={t} className="bg-white border-t-4 border-rose shadow-lg p-6">
          <h3 className="font-bold text-lg text-plum">{t}</h3>
          <p className="mt-2 text-sm text-slate-600">{d}</p>
          <a href={'#' + l} className="mt-3 inline-block text-sm font-bold text-rose">
            Read more
          </a>
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Sec t="Welcome to Nus Hills Montessori">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-slate-600 text-lg">
            <p>Nus Hills is a Montessori school where children are known by name, trusted with real responsibility and encouraged to wonder.</p>
            <p>[Add a short welcome from the head of school.]</p>
            <Btn to="/about">More about us</Btn>
          </div>
          <div className="h-80">
            <Photo k="c" pos="40% 60%" />
          </div>
        </div>
      </Sec>
      <Sec t="Our academic paths" s="A clear path from a first day at school through to Junior High." bg="bg-mist">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROGS.map((p) => (
            <ProgCard key={p.n} p={p} />
          ))}
        </div>
      </Sec>
      <section className="relative">
        <div className="absolute inset-0">
          <Photo k="b" pos="40% 55%" />
        </div>
        <div className="absolute inset-0 bg-plum/85" />
        <div className="relative max-w-3xl mx-auto px-4 py-16 text-center text-white">
          <h2 className="text-3xl font-extrabold">Apply for admission</h2>
          <p className="mt-4 opacity-90">Visit our campus, meet the teachers and see where your child will learn and play.</p>
          <div className="mt-7">
            <Btn to="/admission">Get started</Btn>
          </div>
        </div>
      </section>
      <Sec t="Latest news" s="All the latest from Nus Hills.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {NEWS.map((n) => (
            <NewsCard key={n.t} n={n} />
          ))}
        </div>
      </Sec>
      <Sec t="What our parents say" c bg="bg-mist">
        <div className="grid md:grid-cols-3 gap-5">
          {QUOTES.map(([q, a, r]) => (
            <figure key={q} className="bg-white p-6 border-t-4 border-gold shadow-sm">
              <blockquote className="text-slate-600">&ldquo;{q}&rdquo;</blockquote>
              <figcaption className="mt-4 font-bold text-plum">
                {a}
                <span className="block text-xs font-semibold text-rose">{r}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Sec>
    </>
  )
}
