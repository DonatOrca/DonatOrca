import React, { useState, useEffect } from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const [isChecked, setIsChecked] = useState(false);

  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    document.documentElement.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    document.documentElement.setAttribute("data-bs-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);

    if (checked) setDarkMode();
    else setLightMode();
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsChecked(prefersDarkMode);

    if (prefersDarkMode) {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, []);

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        checked={isChecked}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle"></label>
    </div>
  );
};

export default DarkMode;
