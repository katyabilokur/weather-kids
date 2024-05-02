import Heading from "../ui/Heading";
import NavLinkStyled from "../ui/NavLinkStyled";

function Home() {
  return (
    <>
      <Heading as="h1">Dress for the weather</Heading>
      <NavLinkStyled
        $color="--color-green-main-light"
        $border="--color-green-main"
        to="/signin"
      >
        <span>Login</span>
      </NavLinkStyled>
      <NavLinkStyled
        $color="--color-magenta-main-light"
        $border="--color-magenta-main"
        to="/start"
      >
        <span>Guest</span>
      </NavLinkStyled>
    </>
  );
}

export default Home;
