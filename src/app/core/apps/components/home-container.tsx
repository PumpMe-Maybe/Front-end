"use client";
import { DefaultLayout } from "@/app/core/apps/components/layouts/default-layout";
import { DiabeteForm } from "@/app/core/apps/components/forms/diabete-form";
import { useState } from "react";

export type HomeStep =
  | "gender"
  | "age"
  | "hypertension"
  | "heart_disease"
  | "bmi"
  | "hba1c_level"
  | "blood_glucose_level"
  | "success"
  | "error"
  | "begin";

export const HomeContainer = () => {
  const [step, setStep] = useState<HomeStep>("begin");

  return (
    <DefaultLayout>
      <div className="relative w-[80%] h-full mx-auto text-center flex flex-col items-center justify-center gap-4">
        <DiabeteForm step={step} setStep={setStep} />
      </div>
    </DefaultLayout>
  );
};
