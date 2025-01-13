"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "../inputs/form-error";
import { AgeFormPayload, ageFormSchema } from "../../types/form.types";
import { TextInput } from "../inputs/text-input";
import Image from "next/image";

export const AgeForm: React.FC<{
  onChange: (_payload: number) => void;
}> = ({ onChange }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AgeFormPayload>({
    resolver: zodResolver(ageFormSchema),
  });

  const handleForm = async (payload: AgeFormPayload) => {
    console.log(typeof payload);
    try {
      onChange(payload.age);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="grid gap-10 w-full lg:w-[60%]"
    >
      <Image
        src={"/images/age.png"}
        alt=""
        width={115}
        height={115}
        className="inline w-[75px] h-[75px] lg:w-[115px] lg:h-[115px] mx-auto"
      />
      <h3 className="lg:text-[30px]">{"Quel âge avez-vous ?"}</h3>
      <div className="w-full grid gap-[10px] my-4 items-center">
        <TextInput
          type="number"
          placeholder="Entrez votre age"
          {...register("age")}
        />
        <FormError error={errors.age} />
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
