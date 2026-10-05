import { useState } from 'react'
import { PH } from '../data'
import { Head, Sec, Field } from '../components/UI'

export default function Contact() {
  const [a, sa] = useState('')
  const [b, sb] = useState('')
  const [d, sd] = useState(false)

  return (
    <>
      <Head t="Contact us" s="We would love to hear from you." />
      <Sec>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-5 text-slate-600">
            <p>
              <b className="text-plum">Address</b>
              <br />
              {PH.addr}
            </p>
            <p>
              <b className="text-plum">Hours</b>
              <br />
              {PH.hours}
            </p>
            <p>
              <b className="text-plum">Phone</b>
              <br />
              {PH.phone}
            </p>
            <p>
              <b className="text-plum">Email</b>
              <br />
              {PH.email}
            </p>
            <div className="h-40 bg-mist flex items-center justify-center font-semibold text-plum">Map to be added</div>
          </div>
          <div className="border border-plum/15 p-6 space-y-4">
            <Field l="Your name" v={a} set={sa} />
            <Field l="Message" v={b} set={sb} area />
            <button onClick={() => a && b && sd(true)} className="bg-rose text-white font-bold px-7 py-3 rounded-sm hover:bg-plum">
              Send message
            </button>
            {d && (
              <p role="status" className="font-bold text-plum">
                Message ready. (Demo: connect this form to your email.)
              </p>
            )}
          </div>
        </div>
      </Sec>
    </>
  )
}
