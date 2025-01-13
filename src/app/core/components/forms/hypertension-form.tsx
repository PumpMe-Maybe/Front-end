"use client";

import { HypertensionInput } from "../inputs/hypertension-input";

export const HypertensionForm: React.FC<{
  onChange: (_val: boolean) => void;
}> = ({ onChange }) => {
  return (
    <div className="grid gap-10 w-full lg:w-[60%]">
      <h3 className="lg:text-[30px]">{"Faîtes-vous de l'hypertension ?"}</h3>
      <p className="bg-[#cfebf0] p-3 rounded-[4px] text-[14px] ">
        {
          "On considère qu'une personne souffre d'hypertension lorsque l'on constate à deux reprises, et pas le même jour, une tension artérielle systolique supérieure ou égale à 140 mmHg et/ou une tension artérielle diastolique supérieure ou égale à 90 mmHg."
        }
      </p>
      <div className="w-auto mx-auto grid gap-[10px] lg:grid-cols-[repeat(2,300px)] items-center">
        <HypertensionInput onClick={onChange} />
      </div>
    </div>
  );
};
