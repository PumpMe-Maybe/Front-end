import { Container } from "./container";

export const Navbar = () => {
  return (
    <nav className="w-full h-[65px] border-b-[5px] border-blue-500">
      <Container>
        <div className="h-full flex items-center justify-between">
          <img src="images/logo.png" className="h-[40px]" alt="Eco Mag" />
          <img src="images/cadenas.png" className="h-[30px]" alt="Eco Mag" />
        </div>
      </Container>
    </nav>
  );
};
