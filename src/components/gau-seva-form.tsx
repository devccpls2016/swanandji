"use client";

import { FormEvent, useState } from "react";

const initialState = {
  fullName: "",
  phone: "",
  email: "",
  preferredDate: "",
  visitors: "2",
  specialRequest: ""
};

export function GauSevaForm() {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setFeedback("");

    const response = await fetch("/api/gau-seva", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        visitors: Number(form.visitors)
      })
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
            className="field"
            required
            value={form.fullName}
            onChange={(event) =>
              setForm((current) => ({ ...current, fullName: event.target.value }))
            }
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-bark">
          <span>Phone Number</span>
          <input
            className="field"
            required
            value={form.phone}
            onChange={(event) =>
              setForm((current) => ({ ...current, phone: event.target.value }))
            }
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-bark">
          <span>Email Address</span>
          <input
            className="field"
            required
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-bark">
          <span>Preferred Date</span>
          <input
            className="field"
            required
            type="date"
            value={form.preferredDate}
            onChange={(event) =>
              setForm((current) => ({ ...current, preferredDate: event.target.value }))
            }
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-bark md:col-span-2">
          <span>Number of Visitors</span>
          <input
            className="field"
            required
            min={1}
            type="number"
            value={form.visitors}
            onChange={(event) =>
              setForm((current) => ({ ...current, visitors: event.target.value }))
            }
          />
        </label>
      </div>
      <label className="space-y-2 text-sm font-medium text-bark">
        <span>Special Request</span>
        <textarea
          className="field resize-none"
          rows={4}
          value={form.specialRequest}
          onChange={(event) =>
            setForm((current) => ({ ...current, specialRequest: event.target.value }))
          }
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream transition hover:bg-bark disabled:opacity-70"
        >
          {submitting ? "Submitting..." : "Book Now"}
        </button>
        {feedback ? <p className="text-sm text-forest">{feedback}</p> : null}
      </div>
    </form>
  );
}
