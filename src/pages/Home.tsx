import Heading from "../ui/Heading";
import NavLinkStyled from "../ui/NavLinkStyled";

function Home() {
  return (
    <>
      <Heading as="h1">Dress for the weather</Heading>
      <NavLinkStyled
        $color="--color-green-main"
        $hover="--color-green-main-dark"
        to="/signin"
      >
        <span>Login</span>
      </NavLinkStyled>
      <NavLinkStyled
        $color="--color-blue-main"
        $hover="--color-blue-main-dark"
        to="/start"
      >
        <span>Guest</span>
      </NavLinkStyled>
    </>
  );
}

export default Home;
