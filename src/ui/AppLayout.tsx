import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";

import styled from "styled-components";
import Footer from "./Footer";
import { devices } from "../interfaces/constant";

const Main = styled.main`
  background-color: var(
    ${() =>
      useLocation().pathname === "/" ? "--color-dark-base" : "--color-grey-0"}
  );
  padding: 4rem 4.8rem 6.4rem;
  //overflow: hidden;
  /* margin: 0 auto; */

  flex: 1 1 auto;

  @media ${devices.tablet} {
    font-size: 1.4rem;
    padding: 3rem 3.6rem 4.4rem;
  }

  @media ${devices.phone} {
    padding: 2rem 2.8rem 3.6rem;
  }

  @media ${devices.xsPhone} {
    padding: 2rem 1rem 3.6rem;
  }
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  justify-content: space-between;
  align-items: center;

  @media ${devices.tablet} {
    gap: 2.6rem;
  }

  @media ${devices.phone} {
    gap: 2.2rem;
  }
`;

const StyledAppLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
