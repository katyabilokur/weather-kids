import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --color-grey-0: #fff;
  --color-grey-50: #fafafa;
  --color-grey-100: #f4f4f5;
  --color-grey-200:#e4e4e7;
  --color-grey-300: #d4d4d8;
  --color-grey-400: #a1a1aa;
  --color-grey-500: #71717a;
  --color-grey-600: #52525b;
  --color-grey-700: #3f3f46;
  --color-grey-800: #27272a;
  --color-grey-900: #18181b;

--color-purple-main: #7A0062;
--color-purple-main-light: #f0dfe6;
--color-magenta-main: #F50062;
--color-magenta-main-light: #faf0f4;

--color-orange-main: #FFA033;
--color-yellow-main: #FFE15C;
--color-yellow-main-dark: #fad014;
--color-green-main: #C2CC00;
--color-green-main-light: #f9fad9;
--color-blue-main: #1AC8ED; //00B9E8

  --color-red-light: #FFDCD8;
  --color-red-medium: #FE6F5E;
  --color-red-dark: #E02F1C;


  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
  --border-none: none;

  --size-laptop: "1024px";
  --size-desctop: "2560px";
  --size-tablet: "768px";
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}

svg {
  height: 3.2rem;
    width: 3.2rem;
}
`;

export default GlobalStyles;
