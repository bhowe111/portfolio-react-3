import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { ReactComponent as TogIcon } from "../images/circle-icon.svg";

// Toggle Container
const ToggleContainer = styled.button`
  background-color: "#c4c4c4";
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  padding-left: 1px;
  padding-top: 1.3px;
  width: 60px;
  height: 30px;

  svg {
    height: 26px;
    width: auto;
    transition: all 0.3s ease;

    /* circle icon */
    &:first-child {
      transform: ${({ whiteTheme }) =>
        whiteTheme ? "translateX(0)" : "translateX(30px)"};
    }
  }
`;

/* end Toggle Container */

const Toggle = ({ theme, toggleTheme }) => {
  const isWhite = theme === "white";
  return (
    <ToggleContainer whiteTheme={isWhite} onClick={toggleTheme}>
      <TogIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
