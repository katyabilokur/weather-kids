import styled from "styled-components";
import { TbWoman, TbMan } from "react-icons/tb";
import Button from "../../ui/Button";
import { useState } from "react";

const StyledGenderSelectionPanel = styled.div`
  display: flex;
  gap: 8rem;
`;

const StyledManIcon = styled(TbMan)`
  color: var(--color-green);
  height: 8rem;
  width: 8rem;
`;

const StyledWomanIcon = styled(TbWoman)`
  color: var(--color-pink);
  height: 8rem;
  width: 8rem;
`;

interface GenderSelectionProps {
  onGenderSelection: (girl: boolean) => void;
}

function GenderSelectionPanel({ onGenderSelection }: GenderSelectionProps) {
  const [buttonSelected, setButtonSelected] = useState<string>("");
  return (
    <StyledGenderSelectionPanel>
      <Button
        className={buttonSelected === "man" ? "selected-man" : ""}
        onClick={() => {
          onGenderSelection(false);
          setButtonSelected("man");
        }}
        $size="huge"
        $color="--color-grey-50"
        $border="--border-green"
        $colorHover="--color-green-extra-light"
        $hoverBorderRadius="--border-radius-lg"
      >
        <StyledManIcon />
      </Button>
      <Button
        className={buttonSelected === "woman" ? "selected-woman" : ""}
        onClick={() => {
          onGenderSelection(true);
          setButtonSelected("woman");
        }}
        $size="huge"
        $color="--color-grey-50"
        $border="--border-pink"
        $colorHover="--color-pink-light"
        $hoverBorderRadius="--border-radius-lg"
      >
        <StyledWomanIcon />
      </Button>
    </StyledGenderSelectionPanel>
  );
}

export default GenderSelectionPanel;
