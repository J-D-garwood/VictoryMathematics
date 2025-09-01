import React, { useState } from "react";
import { motion } from "framer-motion";

// Replace with your own image URL
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1584697964403-4fcb50b7f2b1?q=80&w=2070&auto=format&fit=crop";

export default function LandingPage() {
  const [status, setStatus] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));

    // TODO: Replace with your real endpoint (e.g., /api/lead, Netlify Forms, Formspree)
    // For now we just simulate a fast submission:
    try {
      setStatus("Submitting...");
      await new Promise((r) => setTimeout(r, 600));
      console.log("Lead submitted", data);
      setStatus("Thanks! We'll be in touch shortly.");
      form.reset();
    } catch (err) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen text-gray-900">
      {/* HERO */}
      <section className="relative isolate">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Student learning maths with tutor"
        />
        {/* Overlay */}
        <div className="absolute inset-0 -z-10 bg-black/40" />

        <div className="mx-auto max-w-7xl px-4 py-28 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Confident Maths Starts Here
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90">
              One‑to‑one coaching that builds understanding, speed, and results.
              First lesson is free.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="#lead-form"
                className="rounded-2xl bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                Book the free lesson
              </a>
              <a
                href="#testimonials"
                className="rounded-2xl bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                See results
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="lead-form" className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tell us where to help
            </h2>
            <p className="mt-3 text-gray-600">
              No phone number on the site—just this quick form. We’ll text or call
              you back to schedule the free first lesson.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gray-900" />
                <span>Fast response—usually within the hour (9am–7pm).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gray-900" />
                <span>One free lesson to diagnose gaps and set a plan.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gray-900" />
                <span>Flexible after‑school and weekend times.</span>
              </li>
            </ul>
          </div>

          <div>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              noValidate
            >
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label htmlFor="parent_name" className="block text-sm font-medium">
                    Your name
                  </label>
                  <input
                    id="parent_name"
                    name="parent_name"
                    type="text"
                    required
                    className="mt-1 w-full rounded-xl border-gray-300 px-4 py-2 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                    placeholder="e.g. Belinda Nguyen"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Your mobile number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    required
                    pattern="^[+]?\d[\d\s-]{7,}"
                    className="mt-1 w-full rounded-xl border-gray-300 px-4 py-2 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                    placeholder="e.g. 0412 345 678"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    We’ll only use this to contact you about lessons.
                  </p>
                </div>

                <div>
                  <label htmlFor="student_name" className="block text-sm font-medium">
                    Student’s name
                  </label>
                  <input
                    id="student_name"
                    name="student_name"
                    type="text"
                    required
                    className="mt-1 w-full rounded-xl border-gray-300 px-4 py-2 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                    placeholder="e.g. Levi"
                  />
                </div>

                <div>
                  <label htmlFor="goal" className="block text-sm font-medium">
                    Biggest maths goal
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    required
                    className="mt-1 w-full rounded-xl border-gray-300 px-4 py-2 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="confidence">Build confidence</option>
                    <option value="catchup">Catch up & pass</option>
                    <option value="topband">Reach a top band</option>
                    <option value="exam">Exam preparation</option>
                    <option value="uni">University entrance focus</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium">
                    Anything else? <span className="text-gray-500">(optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    className="mt-1 w-full rounded-xl border-gray-300 px-4 py-2 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                    placeholder="Year level, topics, preferred days, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-2xl bg-gray-900 px-6 py-3 font-semibold text-white shadow hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-900/30"
                >
                  Send & book the free lesson
                </button>

                {status && (
                  <p className="text-sm text-gray-700" role="status">
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What parents say</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <blockquote className="text-gray-800">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-medium text-gray-700">
                  {t.author}
                  <span className="block text-xs font-normal text-gray-500">{t.meta}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-8 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Victory Mathematics</p>
          <a href="#lead-form" className="font-semibold text-gray-900 hover:underline">
            Book the free lesson
          </a>
        </div>
      </footer>
    </div>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "Jimmy helped Levi jump two grade bands in one term. The weekly check‑ins and clear goals made all the difference.",
    author: "Belinda N.",
    meta: "Year 10 parent",
  },
  {
    quote:
      "After a month my daughter wasn’t afraid of maths anymore—she actually looks forward to lessons.",
    author: "Raman S.",
    meta: "Year 7 parent",
  },
  {
    quote:
      "Straightforward plan, measurable progress, and prompt communication. Highly recommend.",
    author: "Nilmini D.",
    meta: "Year 12 parent",
  },
];
