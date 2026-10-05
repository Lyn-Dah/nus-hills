import { NEWS } from '../data'
import { Head, NewsCard } from '../components/UI'

export default function News() {
  return (
    <>
      <Head t="News & events" s="What is coming up and what we have been doing." />
      <div className="max-w-6xl mx-auto px-4 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {NEWS.map((n) => (
          <NewsCard key={n.t} n={n} />
        ))}
      </div>
    </>
  )
}
