"use client";

import { HeartDiseaseInput } from "../inputs/heart-disease-input";

export const HeartDiseaseForm: React.FC<{
  onChange: (_val: boolean) => void;
}> = ({ onChange }) => {
  return (
    <div className="grid gap-10 w-full lg:w-[60%]">
      <h3 className="lg:text-[30px] leading-8">
        {"Avez-vous des antécédents de maladie cardiaque ?"}
      </h3>
      <div className="bg-[#cfebf0] p-3 rounded-[4px] text-[14px] ">
        <p className="text-[14px] ">
          {"Quelques exemples de maladies cardiaques :"}
        </p>
        <ul className="list-disc list-inside grid lg:grid-cols-2 mt-2 text-start mx-auto w-[80%]">
          <li>{"L'insuffisance cardiaque"}</li>
          <li>{"L'angine de poitrine "}</li>
          <li>{"L'infarctus du myocarde"}</li>
          <li>{"L'arythmie cardiaque."}</li>
          <li>{"La cardiomyopathie"}</li>
        </ul>
      </div>
      <div className="w-auto grid lg:grid-cols-[repeat(2,300px)] mx-auto gap-[10px] items-center">
        <HeartDiseaseInput onClick={onChange} />
      </div>
    </div>
  );
};
