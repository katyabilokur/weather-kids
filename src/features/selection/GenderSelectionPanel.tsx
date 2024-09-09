import styled from "styled-components";
import { TbWoman, TbMan } from "react-icons/tb";
import Button from "../../ui/Button";
import { useState } from "react";
import { devices } from "../../interfaces/constant";

const StyledGenderSelectionPanel = styled.div`
  display: flex;
  gap: 8rem;

  @media ${devices.phone} {
    gap: 3rem;
  }
`;

const IconSize = `
  height: 8rem;
  width: 8rem;

  @media ${devices.tablet} {
    height: 6rem;
    width: 6rem;
  }

    @media ${devices.phone} {
    height: 5rem;
    width: 5rem;
  }
`;

const StyledManIcon = styled(TbMan)`
  color: var(--color-green);
  ${IconSize};
`;

const StyledWomanIcon = styled(TbWoman)`
  color: var(--color-pink);
  ${IconSize};
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
