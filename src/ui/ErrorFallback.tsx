import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";

const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-100);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    font-family: "Sono";
    margin-bottom: 3.2rem;
    color: var(--color-grey-600);
  }
`;

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: any;
  resetErrorBoundary: React.MouseEventHandler;
}) {
  return (
    <>
      <GlobalStyles />
      <StyledErrorFallback>
        <Box>
          <h1>Something went wrong</h1>
          <p>{error.message}</p>
          <button onClick={resetErrorBoundary}>Please try again</button>
        </Box>
      </StyledErrorFallback>
    </>
  );
}

export default ErrorFallback;
