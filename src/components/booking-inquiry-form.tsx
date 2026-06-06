"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

import { experiences, stays } from "@/content/site";

interface BookingInquiryFormProps {
  category: "eco-stay" | "experience";
}

const initialState = {
  itemId: "",
  itemName: "",
  fullName: "",
  phone: "",
  email: "",
  preferredDate: "",
  guests: "2",
  notes: ""
};

export function BookingInquiryForm({ category }: BookingInquiryFormProps) {
  const searchParams = useSearchParams();
  const sourceItems = category === "eco-stay" ? stays : experiences;
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<{
    message: string;
    type: "idle" | "success" | "error";
  }>({ message: "", type: "idle" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const queryItemId = searchParams.get("item");
    const matched = sourceItems.find((item) => item.id === queryItemId) ?? sourceItems[0];
    if (matched) {
      setForm((current) => ({
        ...current,
        itemId: matched.id,
        itemName: matched.name
      }));
    }
  }, [searchParams, sourceItems]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ message: "", type: "idle" });

    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category,
        itemId: form.itemId,
        itemName: form.itemName,
        fullName: form.fullName,
        phone: form.phone,
        email: form.email,
        preferredDate: form.preferredDate,
        guests: Number(form.guests),
        notes: form.notes
      })
    });

    const data = (await response.json()) as { success: boolean; message: string };
    setStatus({
      message: data.message,
      type: data.success ? "success" : "error"
    });

    if (data.success) {
      setForm((current) => ({
        ...initialState,
        itemId: current.itemId,
        itemName: current.itemName
      }));
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
          <span>{category === "eco-stay" ? "Stay Option" : "Experience"}</span>
          <select
            value={form.itemId}
            onChange={(event) => {
              const item = sourceItems.find((entry) => entry.id === event.target.value);
              setForm((current) => ({
                ...current,
                itemId: event.target.value,
                itemName: item?.name ?? ""
              }));
            }}
            className="field"
          >
            {sourceItems.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 text-sm font-medium text-bark">
          <span>Preferred Date</span>
          <input
            type="date"
            required
            value={form.preferredDate}
            onChange={(event) =>
              setForm((current) => ({ ...current, preferredDate: event.target.value }))
            }
            className="field"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-bark">
          <span>Full Name</span>
          <input
            type="text"
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
            type="tel"
            required
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
            type="email"
            required
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            className="field"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-bark">
          <span>Number of Guests</span>
          <input
            type="number"
            min={1}
            required
            value={form.guests}
            onChange={(event) =>
              setForm((current) => ({ ...current, guests: event.target.value }))
            }
            className="field"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-bark">
        <span>Special Request</span>
        <textarea
          rows={4}
          value={form.notes}
          onChange={(event) =>
            setForm((current) => ({ ...current, notes: event.target.value }))
          }
          className="field resize-none"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream transition hover:bg-bark disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? "Submitting..." : "Book Now"}
        </button>
        {status.message ? (
          <p
            className={
              status.type === "success" ? "text-sm text-forest" : "text-sm text-ember"
            }
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
