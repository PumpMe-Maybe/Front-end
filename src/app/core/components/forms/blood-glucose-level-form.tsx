"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "../inputs/form-error";
import { TextInput } from "../inputs/text-input";
import {
  bloodGlucoseFormSchema,
  BloodGlucoseFormPayload,
} from "../../types/form.types";
import Image from "next/image";

export const BloodGlucoseForm: React.FC<{
  onChange: (_payload: number) => void;
}> = ({ onChange }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<BloodGlucoseFormPayload>({
    resolver: zodResolver(bloodGlucoseFormSchema),
  });

  const handleForm = async (payload: BloodGlucoseFormPayload) => {
    try {
      onChange(payload.blood_glucose_level);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      className="grid gap-4 w-full lg:w-[60%]"
      onSubmit={handleSubmit(handleForm)}
    >
      <Image
        src={"/images/blood_glucose.png"}
        alt=""
        width={155}
        height={155}
        className="inline w-[75px] h-[75px] lg:w-[115px] lg:h-[115px] mx-auto"
      />
      <h3 className="lg:text-[30px]">{"Quel est votre taux de glycémie ?"}</h3>
      <p className="bg-[#cfebf0] p-3 rounded-[4px] text-[14px] ">
        {
          "La glycémie est la quantité de glucose dans le sang à un moment donné. Une glycémie élevée est un indicateur clé du diabète. Elle est comprise entre 70 et 100 mg/dL à jeun."
        }
      </p>
      <div className="w-full grid gap-[10px] my-4 items-center">
        <TextInput
          placeholder="Entrez votre BloodGlucose level"
          {...register("blood_glucose_level")}
        />
        <FormError error={errors.blood_glucose_level} />
      </div>
      <button
        className="bg-[#1f2937] text-white py-2 px-4 rounded-lg hover:bg-[#3e4c59] transition-colors"
        type="submit"
      >
        Suivant
      </button>
    </form>
  );
};
