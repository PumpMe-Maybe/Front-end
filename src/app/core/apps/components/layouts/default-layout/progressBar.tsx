export const ProgressBar: React.FC<{ value: number }> = ({ value }) => {
  const progressWidth = `${value.toFixed(0)}%`;

  return (
    <div className="absolute top-10 w-full h-8 bg-gray-300 rounded-full mb-4">
      <div
        className="h-full bg-blue-500 rounded-l-full text-center text-white flex items-center justify-center transition-all duration-500 ease-in-out"
        style={{ width: progressWidth }}
      >
        <span className="text-sm">{progressWidth}</span>
      </div>
    </div>
  );
};
