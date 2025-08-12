import { useState } from 'react'
import { sendContact } from '../lib/api'
import constants from '../data/constants'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ loading: false, ok: null, msg: '' })

  async function onSubmit(e) {
    e.preventDefault()
    setStatus({ loading: true, ok: null, msg: '' })
    try {
      const res = await sendContact(form)
      setStatus({ loading: false, ok: true, msg: res.message || 'Sent!' })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: err?.response?.data?.error || 'Something went wrong' })
    }
  }

  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Contact</h2>
      <div className="p-5 rounded-xl border border-white/10 bg-white/5">
        <p className="text-sm text-light/80 mb-4">Email: <a className="text-primary" href={`mailto:${constants.email}`}>{constants.email}</a></p>
        <form onSubmit={onSubmit} className="grid gap-4">
          <input className="px-4 py-3 rounded-lg bg-dark border border-white/10" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
          <input className="px-4 py-3 rounded-lg bg-dark border border-white/10" type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          <input className="px-4 py-3 rounded-lg bg-dark border border-white/10" placeholder="Subject" value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} />
          <textarea className="px-4 py-3 rounded-lg bg-dark border border-white/10 min-h-[140px]" placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required />
          <button disabled={status.loading} className="px-5 py-3 rounded-lg bg-primary hover:bg-primary-dark disabled:opacity-60">
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>
          {status.ok === true && <p className="text-green-400 text-sm">{status.msg}</p>}
          {status.ok === false && <p className="text-red-400 text-sm">{status.msg}</p>}
        </form>
      </div>
    </section>
  )
}







