import Image from "next/image";

export const BeginPage: React.FC<{
  onStart: () => void;
}> = ({ onStart }) => {
  return (
    <div className="grid gap-10">
      <Image
        src={"/images/logo.png"}
        alt=""
        width={155}
        height={155}
        className="inline w-[75px] h-[75px] lg:w-[115px] lg:h-[115px] mx-auto"
      />
      <h1 className="lg:text-[55px] ">PumpMe, Maybe ?</h1>
      <div>
        <h2 className="lg:text-[20px]">Tu veux savoir si tu es diabétique ?</h2>
        <p>Remplit ce formulaire de 8 questions pour le savoir !</p>
      </div>

      <button
        className="w-[400px] h-40 text-3xl font-bold text-center bg-blue-600 rounded-[0.25rem] py-2 text-white mx-auto"
        onClick={onStart}
      >
        Démarrer le quiz !
      </button>
    </div>
  );
};
