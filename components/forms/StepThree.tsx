"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepThreeSchema } from "@/lib/validations";
import { submitLead } from "@/lib/submitLead";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface StepThreeProps {
  formData: any;
  updateFormData: (data: any) => void;
  prevStep: () => void;
}

const inputClass =
  "mt-1.5 w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3.5 text-[15px] text-[#111827] placeholder-gray-400 transition-all duration-200 focus:border-[#1a56db] focus:outline-none focus:ring-4 focus:ring-blue-50 h-[52px]";

function Spinner() {
  return (
    <svg
      className="mr-2 h-5 w-5 animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
    </svg>
  );
}

export default function StepThree({ formData, updateFormData, prevStep }: StepThreeProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(stepThreeSchema),
    defaultValues: formData,
  });

  const onSubmit = async (data: any) => {
    if (isSubmitting) return; // prevent double submission
    try {
      setIsSubmitting(true);
      setErrorMessage(null);

      const trustedFormInput = document.getElementById("xxTrustedFormCertUrl") as HTMLInputElement | null;
      const joranyaInput = document.getElementById("leadid_token") as HTMLInputElement | null;

      const completeData = {
        ...formData,
        ...data,
        trustedFormCertUrl: trustedFormInput?.value || undefined,
        leadId: joranyaInput?.value || undefined,
      };

      await submitLead(completeData);

      // Brief delay for UX polish before redirect
      await new Promise((resolve) => setTimeout(resolve, 800));

      router.push(`/thank-you?name=${encodeURIComponent(data.firstName)}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to submit form";
      setErrorMessage(message);
      console.error("Submission error:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Step 3 trust header */}
      <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 px-4 py-3 flex items-center gap-3">
        <span className="text-xl">🔒</span>
        <div>
          <p className="text-sm font-bold text-[#1a56db]">Final step — secure your quote</p>
          <p className="text-xs text-[#6b7280]">Your info is encrypted and never sold</p>
        </div>
      </div>

      {/* First Name */}
      <div>
        <label htmlFor="firstName" className="block text-sm font-semibold text-[#111827]">First Name</label>
        <input {...register("firstName")} type="text" id="firstName" placeholder="John" className={inputClass} />
        <p className="mt-1.5 text-xs text-[#6b7280]">As it appears on your license</p>
        {errors.firstName && (
          <p className="mt-1 text-xs font-medium text-red-500">
            {typeof errors.firstName.message === "string" ? errors.firstName.message : "Invalid first name"}
          </p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <label htmlFor="lastName" className="block text-sm font-semibold text-[#111827]">Last Name</label>
        <input {...register("lastName")} type="text" id="lastName" placeholder="Doe" className={inputClass} />
        <p className="mt-1.5 text-xs text-[#6b7280]">As it appears on your license</p>
        {errors.lastName && (
          <p className="mt-1 text-xs font-medium text-red-500">
            {typeof errors.lastName.message === "string" ? errors.lastName.message : "Invalid last name"}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-[#111827]">Email Address</label>
        <input {...register("email")} type="email" id="email" placeholder="john@example.com" className={inputClass} />
        <p className="mt-1.5 text-xs text-[#6b7280]">Your quotes will be sent here</p>
        {errors.email && (
          <p className="mt-1 text-xs font-medium text-red-500">
            {typeof errors.email.message === "string" ? errors.email.message : "Invalid email"}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-[#111827]">Phone Number</label>
        <input {...register("phone")} type="tel" id="phone" placeholder="(555) 000-0000" className={inputClass} />
        <p className="mt-1.5 text-xs text-[#6b7280]">Used to connect you with a licensed agent</p>
        {errors.phone && (
          <p className="mt-1 text-xs font-medium text-red-500">
            {typeof errors.phone.message === "string" ? errors.phone.message : "Invalid phone"}
          </p>
        )}
      </div>

      {/* API error message */}
      {errorMessage && (
        <div className="flex items-start gap-3 rounded-xl bg-red-50 border-2 border-red-200 p-4">
          <span className="text-lg leading-none">⚠️</span>
          <div>
            <p className="text-sm font-semibold text-red-700">Submission failed</p>
            <p className="text-xs text-red-600 mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={prevStep}
          disabled={isSubmitting}
          className="flex-none rounded-xl border-2 border-gray-200 px-6 py-4 text-sm font-bold text-[#374151] transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 disabled:opacity-40 active:scale-[0.98]"
        >
          ← Back
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#f97316] to-[#fb923c] px-6 py-4 text-base font-bold text-white shadow-lg shadow-orange-200 transition-all duration-200 hover:from-[#ea6c0a] hover:to-[#f97316] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 active:scale-[0.98]"
        >
          {isSubmitting ? (
            <>
              <Spinner />
              Submitting...
            </>
          ) : (
            "Get My Free Quote →"
          )}
        </button>
      </div>
      <div className="flex items-center justify-center gap-4 text-xs text-[#9ca3af]">
        <span>⏱ Takes 60–90 seconds</span>
        <span>·</span>
        <span>🔒 No spam. No obligations.</span>
      </div>
    </form>
  );
}
