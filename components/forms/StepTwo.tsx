"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepTwoSchema } from "@/lib/validations";

interface StepTwoProps {
  formData: any;
  updateFormData: (data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const inputClass =
  "mt-1.5 w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3.5 text-[15px] text-[#111827] transition-all duration-200 focus:border-[#1a56db] focus:outline-none focus:ring-4 focus:ring-blue-50 h-[52px]";

const selectClass =
  "mt-1.5 w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3.5 text-[15px] text-[#111827] transition-all duration-200 focus:border-[#1a56db] focus:outline-none focus:ring-4 focus:ring-blue-50 h-[52px] cursor-pointer appearance-none";

export default function StepTwo({ formData, updateFormData, nextStep, prevStep }: StepTwoProps) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(stepTwoSchema),
    defaultValues: formData,
  });

  const onSubmit = (data: any) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="dateOfBirth" className="block text-sm font-semibold text-[#111827]">Date of Birth</label>
        <input {...register("dateOfBirth")} type="date" id="dateOfBirth" className={inputClass} />
        <p className="mt-1.5 text-xs text-[#6b7280]">Used to calculate your insurance rate</p>
        {errors.dateOfBirth && (
          <p className="mt-1 text-xs font-medium text-red-500">
            {typeof errors.dateOfBirth.message === "string" ? errors.dateOfBirth.message : "Invalid date"}
          </p>
        )}
      </div>

      <div className="relative">
        <label htmlFor="licenseStatus" className="block text-sm font-semibold text-[#111827]">License Status</label>
        <select {...register("licenseStatus")} id="licenseStatus" className={selectClass}>
          <option value="">Select Status</option>
          <option value="Valid">Valid</option>
          <option value="Suspended">Suspended</option>
          <option value="Foreign">Foreign</option>
        </select>
        <div className="pointer-events-none absolute right-4 top-[38px] text-gray-400">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <p className="mt-1.5 text-xs text-[#6b7280]">Your current driver's license status</p>
        {errors.licenseStatus && (
          <p className="mt-1 text-xs font-medium text-red-500">
            {typeof errors.licenseStatus.message === "string" ? errors.licenseStatus.message : "Invalid status"}
          </p>
        )}
      </div>

      <div className="relative">
        <label htmlFor="violations" className="block text-sm font-semibold text-[#111827]">Violations in Last 3 Years</label>
        <select {...register("violations")} id="violations" className={selectClass}>
          <option value="">Select Option</option>
          <option value="No violations">No violations</option>
          <option value="1 speeding ticket">1 speeding ticket</option>
          <option value="At-fault accident">At-fault accident</option>
          <option value="DUI/DWI">DUI/DWI</option>
        </select>
        <div className="pointer-events-none absolute right-4 top-[38px] text-gray-400">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <p className="mt-1.5 text-xs text-[#6b7280]">Helps us find the best rate for you</p>
        {errors.violations && (
          <p className="mt-1 text-xs font-medium text-red-500">
            {typeof errors.violations.message === "string" ? errors.violations.message : "Invalid violations"}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#111827] mb-3">Currently Insured?</label>
        <div className="flex gap-3">
          {["yes", "no"].map((val) => (
            <label key={val} className="flex flex-1 cursor-pointer items-center gap-3 rounded-xl border-2 border-gray-200 px-4 py-3.5 transition-all duration-200 has-[:checked]:border-[#1a56db] has-[:checked]:bg-blue-50">
              <input {...register("currentlyInsured")} type="radio" value={val} className="h-4 w-4 accent-[#1a56db]" />
              <span className="text-[15px] font-medium text-[#111827] capitalize">{val}</span>
            </label>
          ))}
        </div>
        <p className="mt-1.5 text-xs text-[#6b7280]">Helps determine lapse-in-coverage discounts</p>
        {errors.currentlyInsured && (
          <p className="mt-1 text-xs font-medium text-red-500">
            {typeof errors.currentlyInsured.message === "string" ? errors.currentlyInsured.message : "Please select an option"}
          </p>
        )}
      </div>

      <div className="flex gap-3 pt-2">
        <button type="button" onClick={prevStep} className="flex-none rounded-xl border-2 border-gray-200 px-6 py-4 text-sm font-bold text-[#374151] transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98]">
          ← Back
        </button>
        <button type="submit" className="flex-1 rounded-xl bg-gradient-to-r from-[#f97316] to-[#fb923c] px-6 py-4 text-base font-bold text-white shadow-lg shadow-orange-200 transition-all duration-200 hover:from-[#ea6c0a] hover:to-[#f97316] hover:shadow-xl active:scale-[0.98]">
          Continue →
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
