import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Heading from "./Heading";
import Button from "./Button";

const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  width: 100rem;
  background-color: var(--color-grey-100);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;

  padding: 4.8rem;

  p {
    margin-bottom: 2.4rem;
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
        <div className="container-block">
          <Heading as="h2">Something went wrong</Heading>
          <p>{error.message}</p>
          <Button
            onClick={resetErrorBoundary}
            $size="large"
            $color="--color-green"
            $border="--border-main"
            $colorHover="--color-green"
            $hoverBorderRadius="--border-radius-hg"
          >
            Try again
          </Button>
        </div>
      </StyledErrorFallback>
    </>
  );
}

export default ErrorFallback;
