import { heartDiseaseOptions } from "../../types/form.types";
import { LargeButtonWithImage } from "../buttons/large-button-with-image";

export const HeartDiseaseInput: React.FC<{
  onClick: (_val: boolean) => void;
}> = ({ onClick }) => {
  return (
    <>
      {heartDiseaseOptions.map((option, i) => (
        <div
          className="w-full h-full relative cursor-pointer"
          key={`HeartDisease-input-option-${i}`}
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
