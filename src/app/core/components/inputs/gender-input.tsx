import { genderOptions, GenderType } from "../../types/form.types";
import { LargeButtonWithImage } from "../buttons/large-button-with-image";

export const GenderInput: React.FC<{
  onClick: (_val: GenderType) => void;
}> = ({ onClick }) => {
  return (
    <>
      {genderOptions.map((option, i) => (
        <div
          className="w-full h-full relative cursor-pointer"
          key={`Gender-input-option-${i}`}
          onClick={() => onClick(option.value)}
        >
          <LargeButtonWithImage label={option.value} src={option.src} />
        </div>
      ))}
    </>
  );
};
