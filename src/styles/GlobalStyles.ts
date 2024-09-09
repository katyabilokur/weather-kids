import { createGlobalStyle } from "styled-components";
import { devices } from "../interfaces/constant";

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

  /* New colours */
  --color-dark-base: #0b252b;
  --color-light-base: #F5F7FA;
  

  --color-main-text-dark: #001E2B;
  --color-main-text: #4a5358;

  //#d5e000
  --color-green: #00ed70;
  --color-green-extra-light: #d7fce7;
  --color-green-light: #b2f9d1;
  --color-green-dark: #115d4e;
  --color-green-light-pale: #cae8e4;
  --color-green-super-dark: #183b34;

  --color-pink: #bb3ff4;
  /* --color-pink-light: #f9ecff; */
  --color-pink-light: #ecc9fc;
  --color-pink-dark: #674298;

  --color-yellow: #fdef2d;

  /* New colours */

  --box-shadow-md: 0px 7px 13px rgb(0 0 0 / 13%);

  --border-dark-green: 1px solid var( --color-green-dark);
  --border-green: 1px solid var(--color-green);
  --border-pink: 1px solid var(--color-pink);
  --border-main: 1px solid var(--color-dark-base);


  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 16px;
  --border-radius-hg: 30px;
  --border-radius-mg: 40px;
  --border-none: none;

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
  letter-spacing: 0.5px;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;

  @media ${devices.tablet} {
    font-size: 1.4rem;
  }
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

.selected {
    background-color: var(--color-green-light-pale);
  }

  .selected-man {
    background-color: var(--color-green-extra-light);
  }

  .selected-woman {
    background-color: var(--color-pink-light);
  }

  .container-block {
    background-color: var(--color-light-base);
  border-radius: var(--border-radius-mg);
  box-shadow: var(--box-shadow-md);
  width: 80rem;
  padding: 4rem 4rem 6rem 6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;

  p {
    font-size: 2rem;
    font-weight: 400;
    align-self: flex-start;
  }

  @media ${devices.tablet} {
    width: 95%;
    min-width: 60rem;
    padding: 3rem 3rem 5rem 5rem;

    p {
    font-size: 1.8rem;
  }
  }

  @media ${devices.phone} {
    gap: 3rem;
    width: 95%;
    min-width: 32rem;
    padding: 3rem 2.2rem 3rem 2.2rem;
    border-radius: var(--border-radius-hg);

    p {
    font-size: 1.6rem;
  }
  }
  }
`;

export default GlobalStyles;
