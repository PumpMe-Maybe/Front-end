"use client";

import { useMemo, useState } from "react";
import { HomeStep } from "../home-container";
import { ProgressBar } from "../layouts/default-layout/progressBar";
import { FormPayload } from "@/app/core/types/form.types";
import { GenderForm } from "@/app/core/components/forms/gender-form";
import { HypertensionForm } from "@/app/core/components/forms/hypertension-form";
import { HeartDiseaseForm } from "@/app/core/components/forms/heart-disease-form";
import { AgeForm } from "@/app/core/components/forms/age-form";
import { Hba1cForm } from "@/app/core/components/forms/hba1c-form";
import { BloodGlucoseForm } from "@/app/core/components/forms/blood-glucose-level-form";
import { BmiForm } from "@/app/core/components/forms/bmi-form";

export const DiabeteForm: React.FC<{
  step: HomeStep;
  setStep: (_value: HomeStep) => void;
}> = ({ step, setStep }) => {
  const [data, setData] = useState<FormPayload | null>(null);

  const valueProgress = useMemo(() => {
    const totalSteps = 7;
    const stepIndex = [
      "gender",
      "age",
      "hypertension",
      "heart_disease",
      "bmi",
      "hba1c_level",
      "blood_glucose_level",
    ].indexOf(step);

    return stepIndex >= 0
      ? (100 / totalSteps) * (stepIndex + 1)
      : 100 / totalSteps;
  }, [step]);

  const handleSave = async (payload: FormPayload) => {
    setData(payload);
    console.log(data);
  };

  return (
    <>
      {step !== "success" && step !== "begin" && (
        <ProgressBar value={valueProgress} />
      )}
      {step === "begin" && <BeginForm onClick={() => setStep("gender")} />}
      {step === "gender" && (
        <GenderForm
          onChange={(value) => {
            console.log(value);
            setData(
              (prevData) => ({ ...prevData, gender: value } as FormPayload)
            );
            setStep("age");
          }}
        />
      )}
      {step === "age" && (
        <AgeForm
          onChange={(value) => {
            console.log(value);
            setData((prevData) => ({ ...prevData, age: value } as FormPayload));
            setStep("hypertension");
          }}
        />
      )}
      {step === "hypertension" && (
        <HypertensionForm
          onChange={(value) => {
            console.log(value);
            setData(
              (prevData) =>
                ({ ...prevData, hypertension: value } as FormPayload)
            );
            setStep("heart_disease");
          }}
        />
      )}
      {step === "heart_disease" && (
        <HeartDiseaseForm
          onChange={async (value) => {
            console.log(value);
            setData(
              (prevData) =>
                ({ ...prevData, heart_disease: value } as FormPayload)
            );
            setStep("bmi");
          }}
        />
      )}
      {step === "bmi" && (
        <BmiForm
          onChange={async (value) => {
            console.log(value);
            setData((prevData) => ({ ...prevData, bmi: value } as FormPayload));
            setStep("hba1c_level");
          }}
        />
      )}
      {step === "hba1c_level" && (
        <Hba1cForm
          onChange={async (value) => {
            console.log(value);
            setData(
              (prevData) => ({ ...prevData, hba1c_level: value } as FormPayload)
            );
            setStep("blood_glucose_level");
          }}
        />
      )}
      {step === "blood_glucose_level" && (
        <BloodGlucoseForm
          onChange={async (value) => {
            console.log(value);
            setData(
              (prevData) =>
                ({ ...prevData, blood_glucose_level: value } as FormPayload)
            );
            handleSave(data as FormPayload);
          }}
        />
      )}
    </>
  );
};

const BeginForm: React.FC<{
  onClick: () => void;
}> = ({ onClick }) => {
  return (
    <div className="grid gap-10">
      <h1 className="lg:text-[55px] ">PumpMe, Maybe ?</h1>
      <div>
        <h2 className="lg:text-[20px]">Tu veux savoir si tu es diabétique ?</h2>
        <p>Remplit ce formulaire de 8 questions pour le savoir !</p>
      </div>

      <button
        className="w-[400px] h-40 text-3xl font-bold text-center bg-blue-600 rounded-[0.25rem] py-2 text-white mx-auto"
        onClick={onClick}
      >
        Démarrer le quiz !
      </button>
    </div>
  );
};
