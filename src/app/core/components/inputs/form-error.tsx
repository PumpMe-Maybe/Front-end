export const FormError: React.FC<{ error?: { message?: string } }> = ({
  error,
}) => {
  if (!error) {
    return null;
  }
  return (
    <p className="text-red-500 text-[12px] font-medium">{error.message}</p>
  );
};
