"use client";

import { Loader2, Send } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/data/site";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", message: "" };

export function ContactForm() {
  const [form, setForm] = React.useState<FormState>(initialState);
  const [submitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState("");

  function updateField(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    window.setTimeout(() => {
      setSubmitting(false);
      setStatus("Your email application should now have a drafted message ready to send.");
    }, 450);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <Input id="name" name="name" autoComplete="name" required value={form.name} onChange={updateField} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <Input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={updateField} placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <Textarea id="message" name="message" required minLength={10} value={form.message} onChange={updateField} placeholder="Tell me about the role, project, or system you are building." />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Send aria-hidden="true" />}
          Send message
        </Button>
        <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
          {status}
        </p>
      </div>
    </form>
  );
}
