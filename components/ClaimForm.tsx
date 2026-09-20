"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { home } from "@/lib/content";

const schema = z.object({
  firstName: z.string().trim().min(1, "Please enter your first name."),
  lastName: z.string().trim().min(1, "Please enter your last name."),
  phone: z.string().trim().min(7, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address."),
  transactional: z.boolean().refine((value) => value, {
    message: "Please confirm consent for transactional calls and messages.",
  }),
  marketing: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

export function ClaimForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      transactional: false,
      marketing: false,
    },
  });

  function onSubmit(_values: FormValues) {
    // TODO: Wire this to a form endpoint when available.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-md border border-gold/40 bg-ivory p-8">
        <p className="font-heading text-2xl text-forest">Your request was received.</p>
        <p className="mt-4 text-taupe">
          Thank you. A member of our team will review your information and follow
          up using the contact details you provided.
        </p>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full rounded-sm border border-forest/15 bg-ivory px-4 py-3 text-charcoal outline-none transition-colors focus:border-gold";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-medium text-forest">
          First Name
          <input {...register("firstName")} autoComplete="given-name" className={fieldClass} />
          {errors.firstName ? (
            <span className="mt-1 block text-sm text-rust">{errors.firstName.message}</span>
          ) : null}
        </label>
        <label className="block text-sm font-medium text-forest">
          Last Name
          <input {...register("lastName")} autoComplete="family-name" className={fieldClass} />
          {errors.lastName ? (
            <span className="mt-1 block text-sm text-rust">{errors.lastName.message}</span>
          ) : null}
        </label>
        <label className="block text-sm font-medium text-forest">
          Phone
          <input {...register("phone")} type="tel" autoComplete="tel" className={fieldClass} />
          {errors.phone ? (
            <span className="mt-1 block text-sm text-rust">{errors.phone.message}</span>
          ) : null}
        </label>
        <label className="block text-sm font-medium text-forest">
          Email
          <input {...register("email")} type="email" autoComplete="email" className={fieldClass} />
          {errors.email ? (
            <span className="mt-1 block text-sm text-rust">{errors.email.message}</span>
          ) : null}
        </label>
      </div>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-charcoal">
        <input type="checkbox" className="mt-1 accent-gold" {...register("transactional")} />
        <span>{home.form.transactionalConsent}</span>
      </label>
      {errors.transactional ? (
        <p className="-mt-3 text-sm text-rust">{errors.transactional.message}</p>
      ) : null}

      <label className="flex items-start gap-3 text-sm leading-relaxed text-charcoal">
        <input type="checkbox" className="mt-1 accent-gold" {...register("marketing")} />
        <span>{home.form.marketingConsent}</span>
      </label>

      <button
        type="submit"
        className="w-full rounded-sm border border-forest bg-forest px-6 py-4 text-sm font-medium tracking-[0.12em] text-ivory uppercase transition-colors hover:border-emerald hover:bg-emerald md:w-auto"
      >
        {home.form.submit}
      </button>
    </form>
  );
}
