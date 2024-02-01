import React, { useState, useEffect } from "react";
import "../css/DarkMode.css";

const DarkMode = () => {
  const [isChecked, setIsChecked] = useState(false);

  const setDarkMode = () => {
    // document.documentElement.setAttribute("data-bs-theme", "dark");
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    // document.documentElement.setAttribute("data-bs-theme", "light");
    document.querySelector("body")?.setAttribute("data-theme", "light");
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
