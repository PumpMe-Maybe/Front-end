"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "../inputs/form-error";
import { TextInput } from "../inputs/text-input";
import { hba1cFormSchema, Hba1cFormPayload } from "../../types/form.types";
import Image from "next/image";

export const Hba1cForm: React.FC<{
  onChange: (_payload: number) => void;
}> = ({ onChange }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Hba1cFormPayload>({
    resolver: zodResolver(hba1cFormSchema),
  });

  const handleForm = async (payload: Hba1cFormPayload) => {
    try {
      onChange(payload.hba1c_level);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="grid gap-6 w-[60%]" onSubmit={handleSubmit(handleForm)}>
      <Image
        src={"/images/hba1c.png"}
        alt=""
        width={155}
        height={155}
        className="inline w-[75px] h-[75px] lg:w-[115px] lg:h-[115px] mx-auto"
      />
      <h3 className="lg:text-[30px]">
        {"Quel est votre niveau d'hémoglobine glyquée ?"}
      </h3>
      <p className="bg-[#cfebf0] p-3 rounded-[4px] text-[14px] ">
        {
          "Les niveaux d'hémoglobine glyquée (HbA1c) mesurent la moyenne de votre taux de sucre dans le sang sur les 2 à 3 derniers mois. Il est compris entre 4 et 6 % pour une personne non diabétique."
        }
      </p>
      <div className="w-full grid gap-[10px] my-4 items-center">
        <TextInput
          placeholder="Entrez votre hba1c level"
          {...register("hba1c_level")}
        />
        <FormError error={errors.hba1c_level} />
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
