import React from "react";
import Toggle from "../config/Toggle";
import { whiteTheme, goldTheme } from "../styles/theme";
import { useGoldMode } from "../useGoldMode";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";

export default function Header() {
  const [theme, toggleTheme, componentMounted] = useGoldMode();
  const themeMode = theme === "white" ? whiteTheme : goldTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={theme === "white" ? whiteTheme : goldTheme}>
      <GlobalStyles />

      <div className="nav-wrapper">
        <p className="change-theme">
          <small>Change Theme</small>
        </p>
        <ul className="navigation">
          <li>
            <Toggle
              id="toggle"
              type="checkbox"
              className="checkbox"
              theme={theme}
              toggleTheme={toggleTheme}
            />
            <label htmlFor="toggle" className="switch"></label>
          </li>
        </ul>

        <ul className="navigation">
          <li>
            <a className="btn test-btn" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="btn test-btn" href="#projects">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </ThemeProvider>
  );
}
