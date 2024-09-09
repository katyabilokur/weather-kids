import styled from "styled-components";
import Button from "../../ui/Button";
import { addDays, setHours, setMinutes, setSeconds } from "date-fns";
import { useState } from "react";
import { devices } from "../../interfaces/constant";

const StyledDateSelectionPanel = styled.div`
  display: flex;
  gap: 8rem;

  @media ${devices.tablet} {
    gap: 4rem;

    button {
      width: 13rem;
      font-size: 1.6rem;
    }
  }
`;

interface DateSelectionProps {
  onDateSelect: (date: Date) => void;
}

function DateSelectionPanel({ onDateSelect }: DateSelectionProps) {
  const [buttonSelected, setButtonSelected] = useState<string>("");

  function handleDateSelection(dateString: string) {
    let dateT = new Date(Date());
    dateT = setHours(dateT, 0);
    dateT = setMinutes(dateT, 0);
    dateT = setSeconds(dateT, 0);
    if (dateString === "today") {
      onDateSelect(dateT);
      setButtonSelected("today");
    } else {
      onDateSelect(addDays(dateT, 1));
      setButtonSelected("tomorrow");
    }
  }

  return (
    <StyledDateSelectionPanel>
      <Button
        className={buttonSelected === "today" ? "selected" : ""}
        onClick={() => handleDateSelection("today")}
        $size="large"
        $color="--color-grey-50"
        $border="--border-dark-green"
        $colorHover="--color-green-light-pale"
      >
        Today
      </Button>
      <Button
        className={buttonSelected === "tomorrow" ? "selected" : ""}
        onClick={() => handleDateSelection("tomorrow")}
        $size="large"
        $color="--color-grey-50"
        $border="--border-dark-green"
        $colorHover="--color-green-light-pale"
      >
        Tomorrow
      </Button>
    </StyledDateSelectionPanel>
  );
}

export default DateSelectionPanel;
