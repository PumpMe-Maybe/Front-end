export const LargeButtonWithImage: React.FC<{
  label: string;
  src: string;
  boolean?: boolean;
}> = ({ label, src, boolean }) => {
  return (
    <div className="grid justify-items-center content-center gap-2 min-w-[200px] w-full h-full text-center py-5 border border-slate-300 hover:border-slate-700 rounded-[0.25rem]">
      <img
        src={src}
        alt=""
        className="inline w-[75px] h-[75px] lg:w-[115px] lg:h-[115px]"
      />
      {boolean === true && (
        <img
          src={"/images/check.png"}
          alt=""
          className="absolute inline w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] top-[50%] right-[30%] "
        />
      )}

      {boolean === false && (
        <img
          src={"/images/cross.png"}
          alt=""
          className="absolute inline w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] top-[50%] right-[30%] "
        />
      )}
      <p className="uppercase text-[0.7rem] lg:text-[1rem] text-slate-700 font-bold">
        {label}
      </p>
    </div>
  );
};
