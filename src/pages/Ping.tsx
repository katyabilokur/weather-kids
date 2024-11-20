import { RxEyeNone } from "react-icons/rx";
import { useCloth } from "../hooks/useCloth";
import Button from "../ui/Button";
import { useMoveBack } from "../hooks/useMoveBack";

function Ping() {
  const { isLoading, clothData } = useCloth(true);
  const moveBack = useMoveBack();
  return (
    <div className="container-block">
      <p> This is a technical page. Sorry, go back.</p>
      <Button
        onClick={moveBack}
        $size="large"
        $color="--color-green"
        $border="--border-main"
        $colorHover="--color-green"
        $hoverBorderRadius="--border-radius-hg"
      >
        &larr; Go back
      </Button>
      {!isLoading && <div style={{ display: "none" }}>{clothData[0].url}</div>}
    </div>
  );
}

export default Ping;
