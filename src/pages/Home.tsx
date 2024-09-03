import Heading from "../ui/Heading";
import NavLinkStyled from "../ui/NavLinkStyled";
import NavLinkStyledTransparent from "../ui/NavLinkStyledTransparent";

function Home() {
  return (
    <>
      <Heading as="h1">Welcome to Weather Wardrobe for Kids</Heading>
      <Heading as="h4">
        Struggling to dress your kids for the weather? Our app makes it easy!
        Get quick outfit suggestions, and let your kids see what to wear,
        turning dressing into a fun and visual experience. Say goodbye to
        wardrobe battles and hello to happy, well-dressed kids!
      </Heading>
      <NavLinkStyled $color="--color-green" to="/start">
        <span>Guest</span>
      </NavLinkStyled>
      <NavLinkStyledTransparent
        $color="--color-dark-base"
        $border="--color-green"
        $colorHover="--color-green-light"
        to="/signin"
      >
        <span>Login</span>
      </NavLinkStyledTransparent>
    </>
  );
}

export default Home;
