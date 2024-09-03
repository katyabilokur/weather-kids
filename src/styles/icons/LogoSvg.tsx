import { styled } from "styled-components";

//TODO: random color on hover
//check implementation idea here: https://medium.com/@msgold/styled-components-in-react-and-typescript-456843804b99

const StyledSvg = styled.svg`
  position: relative;
  z-index: 20;
  height: 8rem;
  width: 8rem;
  fill: var(--color-green-light);

  /* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  } */

  :hover {
    fill: var(--color-pink);
    cursor: pointer;
  }
`;

interface LogoProps {
  onClickHandler: React.MouseEventHandler<SVGSVGElement>;
}

function LogoSvg({ onClickHandler }: LogoProps) {
  return (
    <StyledSvg onClick={onClickHandler} viewBox="0 0 100 100">
      <path
        d="
      M89.060364,26.908861 
        C92.644341,29.291893 95.906456,31.511713 98.453255,33.244766 
        C95.069229,40.196796 91.872604,46.763840 88.280670,54.142990 
        C85.018135,52.169891 80.884720,49.670109 77.118988,47.392689 
        C77.118988,58.932137 77.118988,70.689774 77.118988,83.205917 
        C58.362408,83.205917 38.961769,83.205917 19.443874,83.205917 
        C22.539467,72.289215 25.765915,60.911053 29.191515,48.830578 
        C22.145779,51.587852 15.779080,54.079395 9.180247,56.661777 
        C7.497351,46.715332 5.871654,37.106945 4.185869,27.143425 
        C15.331796,22.877966 26.399473,18.642454 37.387383,14.437467 
        C38.202240,17.985952 38.651661,21.267803 39.721363,24.333202 
        C42.155540,31.308674 47.501396,34.519760 54.536179,32.761959 
        C63.200157,30.597069 70.362831,26.052433 74.661385,17.483950 
        C79.327827,20.554119 84.033173,23.649885 89.060364,26.908861 
      z"
      />
    </StyledSvg>
  );
}

export default LogoSvg;
