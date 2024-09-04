import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";

import styled from "styled-components";
import Footer from "./Footer";

const Main = styled.main`
  background-color: var(
    ${() =>
      useLocation().pathname === "/home"
        ? "--color-dark-base"
        : "--color-grey-0"}
  );
  padding: 4rem 4.8rem 6.4rem;
  //overflow: hidden;
  /* margin: 0 auto; */

  flex: 1 1 auto;
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  justify-content: space-between;
  align-items: center;
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
