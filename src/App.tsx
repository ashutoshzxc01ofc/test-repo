import { useState } from "react";
import "./App.css";
import "./styletoken.css";

function App() {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="app-layout"
      style={{
        backgroundColor: "var(--colors-primary-1)",
      }}
    >
      <div
        className="m-2 h-16 flex items-center rounded-md"
        style={{
          backgroundColor: "var(--colors-primary-2)",
        }}
      >
        <div className="text-white font-normal font-mono text-3xl ml-4">
          Finch Plugin
        </div>
      </div>
      <div
        style={{
          backgroundColor: "var(--colors-primary-1)",
        }}
        className="h-full"
      >
        <button
          style={{
            borderRadius: "var(--corner-radius-xxl)",
            padding: "var(--spacing-xl)",
            color: "var(--button-text)",
            backgroundColor: hover
              ? "var(--interactive-hover)"
              : "var(--interactive-default)",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          FINCH-POC BUTTON
        </button>
      </div>
    </div>
  );
}

export default App;
