"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "../inputs/form-error";
import { TextInput } from "../inputs/text-input";
import { bmiFormSchema, BmiFormPayload } from "../../types/form.types";
import Image from "next/image";

export const BmiForm: React.FC<{
  onChange: (_payload: number) => void;
}> = ({ onChange }) => {
  const [bmi, setBmi] = useState(0);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<BmiFormPayload>({
    values: { bmi },
    resolver: zodResolver(bmiFormSchema),
  });

  const handleForm = async (payload: BmiFormPayload) => {
    try {
      onChange(payload.bmi);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="grid gap-6 w-[60%]" onSubmit={handleSubmit(handleForm)}>
      <Image
        src={"/images/bmi.png"}
        alt=""
        width={155}
        height={155}
        className="inline w-[75px] h-[75px] lg:w-[115px] lg:h-[115px] mx-auto"
      />
      <h3 className="lg:text-[30px]">
        {"Quel est votre indice de masse corporelle ?"}
      </h3>

      <div className="bg-[#cfebf0] p-3 rounded-[4px] grid gap-4">
        <p className="text-[14px]">
          Pour calculer votre IMC, divisez votre poids en kilogrammes par le
          carré de votre taille en mètres.
        </p>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="bg-blue-500 w-fit mx-auto text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Calculer votre IMC
            </button>
          </Dialog.Trigger>
          <CalculBmiModal bmi={bmi} setBmi={setBmi} />
        </Dialog.Root>
      </div>

      <div className="w-full grid gap-[10px] my-4 items-center">
        <TextInput placeholder="Entrez votre Bmi" {...register("bmi")} />
        <FormError error={errors.bmi} />
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

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

export const CalculBmiModal: React.FC<{
  bmi: number;
  setBmi: (_payload: number) => void;
}> = ({ bmi, setBmi }) => {
  const [size, setSize] = useState(0);
  const [weight, setWeight] = useState(0);

  const calculateBmi = () => {
    const currentBmi = weight / (size / 100) ** 2;
    setBmi(Number(currentBmi.toFixed(2)));
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
      <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
        <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
          Calculer votre IMC
        </Dialog.Title>
        <Dialog.Description />
        <div className="grid grid-cols-[auto,1fr] items-center gap-5 mt-[15px]">
          <p className="text-right text-[15px] text-violet11">
            Votre taille (en cm)
          </p>
          <TextInput
            type="number"
            onChange={(e) => setSize(Number(e.target.value))}
            value={size}
          />
        </div>
        <div className="grid grid-cols-[auto,1fr] items-center gap-5 mt-[15px]">
          <p className="text-right text-[15px] text-violet11">
            Votre poids (en kg)
          </p>
          <TextInput
            type="number"
            onChange={(e) => setWeight(Number(e.target.value))}
            value={weight}
          />
        </div>

        <div className="w-full grid my-2">
          <button
            className="bg-[#1f2937] text-white py-2 px-4 rounded-lg hover:bg-[#3e4c59] mx-auto mt-[15px]"
            onClick={calculateBmi}
          >
            Calculer
          </button>
        </div>

        {bmi > 0 && (
          <div className="mt-[15px]">
            <p className="text-[15px] text-violet11">
              Votre IMC est de {bmi.toFixed(2)}
            </p>
          </div>
        )}
        <Dialog.Close asChild>
          <button
            className="absolute right-4 top-4 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
            aria-label="Close"
          >
            <Image src="/images/cross.png" alt="Close" width={20} height={20} />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
