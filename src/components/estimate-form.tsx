"use client";

import { useRef, useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MAX_ATTACHMENT_BYTES } from "@/lib/constants";

const SERVICE_OPTIONS = [
  "Junk Removal",
  "Property Cleanout",
  "Yard or Tree Debris",
  "Furniture or Appliance Removal",
  "Light Demolition",
  "Commercial Cleanup",
  "Other",
];

type SubmitStatus =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; email: string; sms: string }
  | { state: "error"; message: string };

export function EstimateForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SubmitStatus>({ state: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const photos = formData.getAll("photos").filter((entry): entry is File => entry instanceof File);
    const totalBytes = photos.reduce((sum, file) => sum + file.size, 0);

    if (totalBytes > MAX_ATTACHMENT_BYTES) {
      setStatus({
        state: "error",
        message: "Those photos are too large to send here — try fewer or smaller photos (4MB total), or text them to us directly below.",
      });
      return;
    }

    setStatus({ state: "submitting" });

    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        setStatus({
          state: "error",
          message: data.message ?? "Something went wrong sending your request. Please try texting us directly below.",
        });
        return;
      }

      setStatus({ state: "success", email: data.email, sms: data.sms });
      form.reset();
    } catch {
      setStatus({
        state: "error",
        message: "Couldn't reach the server. Please try texting us directly below.",
      });
    }
  }

  const isSubmitting = status.state === "submitting";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="grid gap-3 [&_input]:min-h-12 [&_select]:min-h-12 [&_input]:w-full [&_select]:w-full [&_textarea]:w-full [&_input]:rounded-[7px] [&_select]:rounded-[7px] [&_textarea]:rounded-[7px] [&_input]:border [&_select]:border [&_textarea]:border [&_input]:border-[#d7d7d7] [&_select]:border-[#d7d7d7] [&_textarea]:border-[#d7d7d7] [&_input]:bg-white [&_select]:bg-white [&_textarea]:bg-white [&_input]:px-3.5 [&_select]:px-3.5 [&_textarea]:px-3.5 [&_input]:py-3 [&_select]:py-3 [&_textarea]:py-3 [&_input]:text-[#171717] [&_select]:text-[#171717] [&_textarea]:text-[#171717] [&_input:focus]:border-[#a98c00] [&_select:focus]:border-[#a98c00] [&_textarea:focus]:border-[#a98c00] [&_input:focus]:outline-none [&_select:focus]:outline-none [&_textarea:focus]:outline-none [&_input:focus]:ring-2 [&_select:focus]:ring-2 [&_textarea:focus]:ring-2 [&_input:focus]:ring-(--color-accent)/30 [&_select:focus]:ring-(--color-accent)/30 [&_textarea:focus]:ring-(--color-accent)/30"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-[0.74rem] font-extrabold uppercase tracking-[0.03em] text-[#555555]">
            Name
          </span>
          <input type="text" name="name" autoComplete="name" required />
        </label>

        <label className="grid gap-1.5">
          <span className="text-[0.74rem] font-extrabold uppercase tracking-[0.03em] text-[#555555]">
            Phone Number
          </span>
          <input type="tel" name="phone" autoComplete="tel" required />
        </label>
      </div>

      <label className="grid gap-1.5">
        <span className="text-[0.74rem] font-extrabold uppercase tracking-[0.03em] text-[#555555]">
          Service Address
        </span>
        <input type="text" name="address" autoComplete="street-address" />
      </label>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-[0.74rem] font-extrabold uppercase tracking-[0.03em] text-[#555555]">
            Type of Cleanup
          </span>
          <select name="service" required defaultValue="">
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-1.5">
          <span className="text-[0.74rem] font-extrabold uppercase tracking-[0.03em] text-[#555555]">
            Preferred Date
          </span>
          <input type="date" name="date" />
        </label>
      </div>

      <label className="grid gap-1.5">
        <span className="text-[0.74rem] font-extrabold uppercase tracking-[0.03em] text-[#555555]">
          Message
        </span>
        <textarea name="message" rows={4} placeholder="Tell us what needs to be removed..." />
      </label>

      <label className="grid gap-1.5">
        <span className="text-[0.74rem] font-extrabold uppercase tracking-[0.03em] text-[#555555]">
          Photos of the job (optional)
        </span>
        <input type="file" name="photos" accept="image/*" multiple className="!py-2.5" />
      </label>

      <Button type="submit" disabled={isSubmitting} className="w-full disabled:opacity-60">
        {isSubmitting ? "Sending..." : "Send Request"} <Send className="h-4 w-4" aria-hidden="true" />
      </Button>

      <p role="status" aria-live="polite" className="min-h-5 text-[0.9rem] font-bold text-[#554700]">
        {status.state === "success" &&
          (status.email === "sent" && status.sms === "sent"
            ? "Request sent! We'll text and email you back shortly."
            : "Request sent — we got it through at least one channel and will follow up shortly.")}
        {status.state === "error" && status.message}
      </p>

      <p className="text-sm text-[#666666]">
        Prefer texting?{" "}
        <a
          href="sms:+15593814910?body=Hi%20Got%20Junk!%20I%27d%20like%20a%20free%20estimate.%20I%27ll%20send%20photos%20here."
          className="font-bold text-[#b08d00]"
        >
          Text us directly
        </a>{" "}
        and attach photos from your phone.
      </p>
    </form>
  );
}
