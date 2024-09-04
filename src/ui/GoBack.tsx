import { useNavigate } from "react-router-dom";
import Button from "./Button";

function GoBack({ children }) {
  const navigate = useNavigate();
  return (
    <>
      <p>Plase go back to select parameters: location, gender and date</p>
      <Button
        onClick={() => navigate("/")}
        $size="large"
        $color="--color-green"
        $border="--border-main"
        $colorHover="--color-green"
        $hoverBorderRadius="--border-radius-hg"
      >
        {children}
      </Button>
    </>
  );
}

export default GoBack;
