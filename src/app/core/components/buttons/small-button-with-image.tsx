export const SmallButtonWithImage: React.FC<{
  label: string;
  src: string;
}> = ({ label, src }) => {
  return (
    <div className="w-full h-full text-left border border-slate-300 hover:border-slate-700 rounded-[0.25rem] p-4">
      <img src={src} alt="" className="inline-block w-[24px] h-[24px]" />
      <p className="inline-block ml-2 uppercase text-[14px] text-slate-700 font-bold mt-[5px]">
        {label}
      </p>
    </div>
  );
};
