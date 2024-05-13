import styled from "styled-components";
import { TbWoman, TbMan } from "react-icons/tb";
import Button from "../../ui/Button";
import { useState } from "react";

const StyledGenderSelectionPanel = styled.div`
  display: flex;
  gap: 8rem;
`;

const StyledManIcon = styled(TbMan)`
  color: var(--color-blue-main);
  height: 12rem;
  width: 12rem;
`;

const StyledWomanIcon = styled(TbWoman)`
  color: var(--color-orange-main);
  height: 12rem;
  width: 12rem;
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
        $border="--border-blue"
        $colorHover="--color-blue-main-light"
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
        $border="--border-orange"
        $colorHover="--color-orange-main-light"
      >
        <StyledWomanIcon />
      </Button>
    </StyledGenderSelectionPanel>
  );
}

export default GenderSelectionPanel;
