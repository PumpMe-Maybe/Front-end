import { hypertensionOptions } from "../../types/form.types";
import { LargeButtonWithImage } from "../buttons/large-button-with-image";

export const HypertensionInput: React.FC<{
  onClick: (_val: boolean) => void;
}> = ({ onClick }) => {
  return (
    <>
      {hypertensionOptions.map((option, i) => (
        <div
          className="w-full h-full relative cursor-pointer"
          key={`hypertension-input-option-${i}`}
          onClick={() => onClick(option.value)}
        >
          <LargeButtonWithImage
            label={option.value ? "Oui" : "Non"}
            src={option.src}
            boolean={option.value}
          />
        </div>
      ))}
    </>
  );
};
