import { useState } from 'react'
import { Head, Sec, Field } from '../components/UI'

export default function Admission() {
  const [a, sa] = useState('')
  const [b, sb] = useState('')
  const [c, sc] = useState('')
  const [d, sd] = useState(false)

  return (
    <>
      <Head t="Admission" s="Applying is simple. Here is how it works." />
      <Sec t="How to apply">
        <ol className="grid md:grid-cols-4 gap-4">
          {[
            ['Enquire', 'Send the form below or call the school.'],
            ['Visit', 'Tour the classrooms and meet the teachers.'],
            ['Apply', 'Complete the application and submit documents.'],
            ['Welcome', 'Receive your start date and settle in.'],
          ].map(([t, x], i) => (
            <li key={t} className="border-t-4 border-gold bg-mist p-5">
              <span className="text-3xl font-extrabold text-rose">{i + 1}</span>
              <h3 className="font-bold text-plum">{t}</h3>
              <p className="text-sm mt-1 text-slate-600">{x}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-slate-600">Fees and required documents: [to be added].</p>
      </Sec>
      <Sec t="Send an enquiry" bg="bg-mist">
        <div className="max-w-xl bg-white p-6 space-y-4 shadow-sm">
          <Field l="Your name" v={a} set={sa} />
          <Field l="Phone or email" v={b} set={sb} />
          <Field l="Child's age and message" v={c} set={sc} area />
          <button onClick={() => a && b && sd(true)} className="bg-rose text-white font-bold px-7 py-3 rounded-sm hover:bg-plum">
            Send enquiry
          </button>
          {d && (
            <p role="status" className="font-bold text-plum">
              Thank you, {a}. We will contact you soon. (Demo: connect this form to your email or WhatsApp.)
            </p>
          )}
        </div>
      </Sec>
    </>
  )
}
