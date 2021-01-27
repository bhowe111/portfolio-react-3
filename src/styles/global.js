import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: "Raleway", sans-serif;
    width: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    transition: ease-in;
  }

  body * {
    transition: 0.3s;
  }
  
  button:focus {
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    color: ${({ theme }) => theme.mainText};
    font-weight: 500;
  }

  p,
  li,
  span,
  label,
  input,
  textarea {
    font-family: "Work Sans", sans-serif;
    color: ${({ theme }) => theme.secondaryText};
    line-height: 1.5rem;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  h1 {
  font-size: 80px;
  margin-block-start: 10px;
  margin-block-end: 10px;
  }
  h2 {
    font-size: 45px;
    margin-block-start: 50px;
    margin-block-end: 35px;
  }
  h3 {
    font-size: 38px;
    margin-block-start: 50px;
    margin-block-end: 35px;
  }
  h4 {
    font-size: 30px;
  }
  h5 {
    font-size: 26px;
  }
  h6 {
    font-size: 20px;
  }

  .top-container {
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: auto;
    perspective: 2px;
  }

  /* ----------------------------- Background Image */
/* Study of Paulo Cunha codepen */
.background-image {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-shadow: 0 0 5px #000;
  background: rgba(0, 0, 0, 0.118);
}

.parallax::after {
  content: " ";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* This moves pseudo-element away from camera, then scales back up to fill viewport. */
  transform: translateZ(-1px) scale(1.5);
  background-size: 100%;
  z-index: -1;
}

.bg1::after {
  background-color: #000;
  background-image: ${({ theme }) => theme.backgroundImage};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: background 0.3s linear;
}

/* ----------------------------- Content */

.greeting-wrapper {
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  width: 100vw;
}

.subheading {
  position: relative;
  justify-self: flex-end;
  margin-top: 50px;
}
/* Deconstructed text, modification of Ben Szabo codepen https://codepen.io/finnhvman/pen/BGmygj */

.deconstructed {
  position: relative;
  margin: auto;
  min-width: 85vw;
  height: 0.95em;
  color: transparent;
  font-size: 8vw;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.03em;
}

.deconstructed > div {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  color: ${({ theme }) => theme.mainText};
}

.deconstructed > div:nth-child(1) {
  -webkit-mask-image: linear-gradient(black 25%, transparent 25%);
  mask-image: linear-gradient(black 25%, transparent 25%);
  animation: deconstructed1 5s 1 forwards;
}

.deconstructed > div:nth-child(2) {
  -webkit-mask-image: linear-gradient(
    transparent 25%,
    black 25%,
    black 50%,
    transparent 50%
  );
  mask-image: linear-gradient(
    transparent 25%,
    black 25%,
    black 50%,
    transparent 50%
  );
  animation: deconstructed2 5s 1 forwards;
}

.deconstructed > div:nth-child(3) {
  -webkit-mask-image: linear-gradient(
    transparent 50%,
    black 50%,
    black 75%,
    transparent 75%
  );
  mask-image: linear-gradient(
    transparent 50%,
    black 50%,
    black 75%,
    transparent 75%
  );
  animation: deconstructed3 5s 1 forwards;
}

.deconstructed > div:nth-child(4) {
  -webkit-mask-image: linear-gradient(transparent 75%, black 75%);
  mask-image: linear-gradient(transparent 75%, black 75%);
  animation: deconstructed4 5s 1 forwards;
}

@keyframes deconstructed1 {
  0% {
    transform: translateX(-100%);
  }
  26% {
    transform: translateX(30%);
  }
  63% {
    transform: translateX(30.1%);
  }
  100% {
    transform: translateX(30%);
  }
}

@keyframes deconstructed2 {
  0% {
    transform: translateX(-100%);
  }
  24% {
    transform: translateX(30.5%);
  }
  62% {
    transform: translateX(30.2%);
  }
  100% {
    transform: translateX(30%);
  }
}

@keyframes deconstructed3 {
  0% {
    transform: translateX(-100%);
  }
  22% {
    transform: translateX(30%);
  }
  61% {
    transform: translateX(30%);
  }
  100% {
    transform: translateX(30%);
  }
}

@keyframes deconstructed4 {
  0% {
    transform: translateX(-100%);
  }
  20% {
    transform: translateX(30%);
  }
  60% {
    transform: translateX(30.1%);
  }
  100% {
    transform: translateX(30%);
  }
}

.content {
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  height: 100%;
}

/* ----------------------------- Sections */

.s1 {
  background-color: ${({ theme }) => theme.mainColor};
  border-bottom: ${({ theme }) => theme.borerColor};
  overflow: auto;
}

.s2 {
  background-color: ${({ theme }) => theme.secondaryColor};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  overflow: auto;
}

.intro-wrapper {
  border-radius: 5px 5px 0 0;

  box-shadow: 7px 9px 26px -5px rgba(0, 0, 0, 0.79);
  -webkit-box-shadow: 7px 9px 26px -5px rgba(0, 0, 0, 0.79);
  -moz-box-shadow: 7px 9px 26px -5px rgba(0, 0, 0, 0.79);

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "nav-wrapper nav-wrapper"
    "left-column right-column";
}

/* ----------------------------- NavBar */

.nav-wrapper {
  grid-area: nav-wrapper;
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  z-index: 3;
  width: 100%;
  min-height: 50px;

  background-color: ${({ theme }) => theme.mainColor};
}

.navigation {
  margin-right: 50px;
  padding: 10px;
  transition: 100;
}

.navigation li {
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
}

.navigation a {
  color: ${({ theme }) => theme.mainText};
  opacity: 0.7;
}

.navigation a:hover {
  opacity: 1;
  text-shadow: 2px 1.5px 0 ${({ theme }) => theme.previewShadow};
}

.change-theme {
  color: ${({ theme }) => theme.mainText};
}


/* ----------------------------- Themes */

#theme-options-wrapper {
  display: flex;
  justify-content: center;
}

.theme-dot {
  height: 30px;
  width: 30px;
  background-color: #000;
  cursor: pointer;
  opacity: 0.7;
  transition: 300;

  margin: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};

  box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.79);
  -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.79);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.79);
}

.theme-dot:hover {
  opacity: 1;
}

#light-mode {
  background-color: #fff;
}
#gold-mode {
  background-color: #ffd700;
}

/* ----------------------------- Preview */

.right-column {
  grid-area: right-column;
  display: grid;
  align-content: center;

  padding-top: 50px;
  padding-bottom: 50px;
}

.about-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  padding-top: 50px;
  padding-bottom: 50px;
  gap: 100px;
  margin: 0 30px;
}

.about-wrapper panel p {
  max-width: 80%;
  margin: 0 50px;
}

#skills {
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  border-top: 1px solid ${({ theme }) => theme.borderColor};
}

/* ----------------------------- Projects */

.post-wrapper {
  display: grid;
  gap: 20px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 320px);
  padding-bottom: 50px;
  margin-bottom: 50px;
}

.post {
  border: 1px solid ${({ theme }) => theme.borderColor};
  box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.79);
  -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.79);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.79);
}

.thumbnail {
  display: block;
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.post-preview {
  background-color: #fff;
  padding: 15px;
}

.post-title {
  color: #000;
  margin: 0;
}

.post-intro {
  color: #4b5156;
  font-size: 14px;
}

/* ----------------------------- Responsiveness */

@media screen and (max-width: 1600px) {
  .main-container {
    width: 100%;
  }
}

@media screen and (max-width: 800px) {
  .intro-wrapper {
    grid-template-columns: 1fr;
    grid-template-areas:
      "nav-wrapper"
      "left-column"
      "right-column";
  }

  .right-column {
    justify-content: center;
  }
}

@media screen and (max-width: 400px) {
  #preview-shadow {
    max-width: 280px;
    height: 180px;
    padding-left: 10px;
    padding-right: 10px;
  }

  #preview {
    width: 280px;
  }
}
`;
