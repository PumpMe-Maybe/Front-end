"use client";

import { GenderType } from "../../types/form.types";
import { GenderInput } from "../inputs/gender-input";

export const GenderForm: React.FC<{
  onChange: (_val: GenderType) => void;
}> = ({ onChange }) => {
  return (
    <div className="grid gap-20 w-full">
      <h3 className="lg:text-[30px]">{"Quel est votre genre ?"}</h3>
      <div className="w-auto grid lg:grid-cols-[repeat(3,300px)] mx-auto gap-[10px] items-center">
        <GenderInput onClick={onChange} />
      </div>
    </div>
  );
};
