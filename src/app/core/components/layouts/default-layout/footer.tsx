import { Container } from "./container";

export const Footer = () => {
  return (
    <footer className="w-full h-auto my-3 text-[0.7rem] text-black text-center flex items-center justify-center">
      <Container>
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <p className="text-[13px] ">
            &copy; 2025 PumpMeMaybe | allRightsReserverd
          </p>
        </div>
      </Container>
    </footer>
  );
};
