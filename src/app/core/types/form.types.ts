import { InputValueWithImage } from "@/app/core/types/input.types";
import { z } from "zod";

export interface FormPayload {
  gender: string;
  age: number;
  hypertension: boolean;
  heart_disease: boolean;
  bmi: number;
  hba1c_level: number;
  blood_glucose_level: number;
}

export type GenderType = "male" | "female" | "other";

export type GenderValue = InputValueWithImage<GenderType>;

export const genderOptions: GenderValue[] = [
  { value: "male", src: "images/male.png" },
  { value: "female", src: "images/female.png" },
  { value: "other", src: "images/other.png" },
];

export type HypertensionValue = InputValueWithImage<boolean>;

export const hypertensionOptions: HypertensionValue[] = [
  { value: true, src: "images/hypertension.png" },
  { value: false, src: "images/hypertension.png" },
];

export type HeartDiseaseValue = InputValueWithImage<boolean>;

export const heartDiseaseOptions: HeartDiseaseValue[] = [
  { value: true, src: "images/heart_disease.png" },
  { value: false, src: "images/heart_disease.png" },
];

export const ageFormSchema = z.object({
  age: z.coerce
    .number()
    .min(0, { message: "Veuillez entrer un âge valide" })
    .max(120, { message: "Veuillez entrer un âge valide" }),
});

export type AgeFormPayload = z.infer<typeof ageFormSchema>;

export const bmiFormSchema = z.object({
  bmi: z.coerce
    .number()
    .min(14, {
      message: "Veuillez entrer un indice de masse corporelle valide",
    })
    .max(71, {
      message: "Veuillez entrer un indice de masse corporelle valide",
    }),
});

export type BmiFormPayload = z.infer<typeof bmiFormSchema>;

export const hba1cFormSchema = z.object({
  hba1c_level: z.coerce
    .number()
    .min(2, { message: "Veuillez entrer un niveau d'HbA1c valide" })
    .max(15, { message: "Veuillez entrer un niveau d'HbA1c valide" }),
});

export type Hba1cFormPayload = z.infer<typeof hba1cFormSchema>;

export const bloodGlucoseFormSchema = z.object({
  blood_glucose_level: z.coerce
    .number()
    .min(50, { message: "Veuillez entrer un taux de glycémie valide" })
    .max(300, { message: "Veuillez entrer un taux de glycémie valide" }),
});

export type BloodGlucoseFormPayload = z.infer<typeof bloodGlucoseFormSchema>;
