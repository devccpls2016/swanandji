"use client";

import { FormEvent, useState } from "react";

const initialState = {
  fullName: "",
  phone: "",
  email: "",
  subject: "Product Inquiry",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setFeedback("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = (await response.json()) as { message: string; success: boolean };
    setFeedback(data.message);
    if (data.success) {
      setForm(initialState);
    }
    setSubmitting(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-[2rem] border border-bark/10 bg-white p-6 shadow-card md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-bark">
          <span>Full Name</span>
          <input
            required
            value={form.fullName}
            onChange={(event) =>
              setForm((current) => ({ ...current, fullName: event.target.value }))
            }
            className="field"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-bark">
          <span>Phone Number</span>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(event) =>
              setForm((current) => ({ ...current, phone: event.target.value }))
            }
            className="field"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-bark">
          <span>Email Address</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            className="field"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-bark">
          <span>Subject</span>
          <select
            value={form.subject}
            onChange={(event) =>
              setForm((current) => ({ ...current, subject: event.target.value }))
            }
            className="field"
          >
            <option>Product Inquiry</option>
            <option>Visit Booking</option>
            <option>General Inquiry</option>
          </select>
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-bark">
        <span>Message</span>
        <textarea
          rows={5}
          required
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          className="field resize-none"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream transition hover:bg-bark disabled:opacity-70"
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
        {feedback ? <p className="text-sm text-forest">{feedback}</p> : null}
      </div>
    </form>
  );
}
