import React, { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { DarkContext } from "../context/Theme/DarkTheme";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(DarkContext);

  return (
    <div className="d-flex justify-content-center my-2 mx-4">
      <div
        onClick={ () => {
              const newTheme = theme === "dark" ? "light" : "dark";
              setTheme(newTheme);
              localStorage.setItem("theme", newTheme);
        }}
        style={{
          width: "70px",
          height: "34px",
          borderRadius: "50px",
          background: theme==='dark'
            ? "linear-gradient(135deg, #0f172a, #1e293b)" 
            : "linear-gradient(135deg, #e0e7ff, #f8fafc)", 
          display: "flex",
          alignItems: "center",
          padding: "4px",
          cursor: "pointer",
          transition: "all 0.4s ease-in-out",
          boxShadow: theme==='dark'
            ? "0 4px 14px rgba(0,0,0,0.7), inset 0 0 10px rgba(59,130,246,0.6)"
            : "0 4px 10px rgba(0,0,0,0.2), inset 0 0 6px rgba(0,0,0,0.15)",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "26px",
            width: "26px",
            borderRadius: "50%",
            background: theme==='dark'
              ? "radial-gradient(circle, #facc15 60%, #f59e0b)"
              : "radial-gradient(circle, #ffffff 60%, #cbd5e1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: theme==='dark' ? "translateX(36px)" : "translateX(0)",
            transition: "transform 0.4s ease-in-out, background 0.3s",
            boxShadow: theme==='dark'
              ? "0 0 14px rgba(250,204,21,0.9)"
              : "0 0 12px rgba(148,163,184,0.6)",
          }}
        >
          {theme==='dark'? (
            <FaSun size={14} color="#fff176" />
          ) : (
            <FaMoon size={14} color="#334155" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
