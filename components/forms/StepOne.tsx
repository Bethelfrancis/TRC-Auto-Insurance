"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepOneSchema } from "@/lib/validations";

interface StepOneProps {
  formData: any;
  updateFormData: (data: any) => void;
  nextStep: () => void;
}

const inputClass =
  "mt-1.5 w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3.5 text-[15px] text-[#111827] placeholder-gray-400 transition-all duration-200 focus:border-[#1a56db] focus:outline-none focus:ring-4 focus:ring-blue-50 h-[52px]";

const selectClass =
  "mt-1.5 w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3.5 text-[15px] text-[#111827] transition-all duration-200 focus:border-[#1a56db] focus:outline-none focus:ring-4 focus:ring-blue-50 h-[52px] cursor-pointer appearance-none";

export default function StepOne({
  formData,
  updateFormData,
  nextStep,
}: StepOneProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(stepOneSchema),
    defaultValues: formData,
  });

  const onSubmit = (data: any) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Zip Code */}
      <div>
        <label htmlFor="zipCode" className="block text-sm font-semibold text-[#111827]">
          Zip Code
        </label>
        <input
          {...register("zipCode")}
          type="text"
          id="zipCode"
          placeholder="e.g. 90210"
          className={inputClass}
        />
        <p className="mt-1.5 text-xs text-[#6b7280]">
          Used to find available rates in your area
        </p>
        {errors.zipCode && (
          <p className="mt-1 text-xs font-medium text-red-500">
            {typeof errors.zipCode.message === "string"
              ? errors.zipCode.message
              : "Invalid zip code"}
          </p>
        )}
      </div>

      {/* Vehicle Year */}
      <div className="relative">
        <label htmlFor="vehicleYear" className="block text-sm font-semibold text-[#111827]">
          Vehicle Year
        </label>
        <select
          {...register("vehicleYear")}
          id="vehicleYear"
          className={selectClass}
        >
          <option value="">Select Year</option>
          {Array.from({ length: 10 }, (_, i) => 2024 - i).map((year) => (
            <option key={year} value={year.toString()}>
              {year}
            </option>
          ))}
        </select>
        {/* Custom chevron */}
        <div className="pointer-events-none absolute right-4 top-[38px] text-gray-400">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <p className="mt-1.5 text-xs text-[#6b7280]">Select your car's model year</p>
        {errors.vehicleYear && (
          <p className="mt-1 text-xs font-medium text-red-500">
            {typeof errors.vehicleYear.message === "string"
              ? errors.vehicleYear.message
              : "Invalid year"}
          </p>
        )}
      </div>

      {/* Vehicle Make */}
      <div className="relative">
        <label htmlFor="vehicleMake" className="block text-sm font-semibold text-[#111827]">
          Vehicle Make
        </label>
        <select
          {...register("vehicleMake")}
          id="vehicleMake"
          className={selectClass}
        >
          <option value="">Select Make</option>
          {["Toyota", "Honda", "Ford", "Chevrolet", "BMW", "Mercedes", "Nissan", "Other"].map(
            (make) => (
              <option key={make} value={make}>
                {make}
              </option>
            )
          )}
        </select>
        <div className="pointer-events-none absolute right-4 top-[38px] text-gray-400">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <p className="mt-1.5 text-xs text-[#6b7280]">Choose your vehicle's brand</p>
        {errors.vehicleMake && (
          <p className="mt-1 text-xs font-medium text-red-500">
            {typeof errors.vehicleMake.message === "string"
              ? errors.vehicleMake.message
              : "Invalid make"}
          </p>
        )}
      </div>

      {/* Vehicle Model */}
      <div>
        <label htmlFor="vehicleModel" className="block text-sm font-semibold text-[#111827]">
          Vehicle Model
        </label>
        <input
          {...register("vehicleModel")}
          type="text"
          id="vehicleModel"
          placeholder="e.g. Civic, F-150, Camry"
          className={inputClass}
        />
        <p className="mt-1.5 text-xs text-[#6b7280]">Enter the exact model name</p>
        {errors.vehicleModel && (
          <p className="mt-1 text-xs font-medium text-red-500">
            {typeof errors.vehicleModel.message === "string"
              ? errors.vehicleModel.message
              : "Invalid model"}
          </p>
        )}
      </div>

      {/* CTA */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-[#f97316] to-[#fb923c] px-6 py-4 text-base font-bold text-white shadow-lg shadow-orange-200 transition-all duration-200 hover:from-[#ea6c0a] hover:to-[#f97316] hover:shadow-xl hover:shadow-orange-200 active:scale-[0.98]"
        >
          Continue →
        </button>
        <div className="mt-3 flex items-center justify-center gap-4 text-xs text-[#9ca3af]">
          <span>⏱ Takes 60–90 seconds</span>
          <span>·</span>
          <span>🔒 No spam. No obligations.</span>
        </div>
      </div>
    </form>
  );
}
