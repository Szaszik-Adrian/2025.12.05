import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f3f4f6",
      }}
    >
      <button
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          fontWeight: 600,
          padding: "14px 28px",
          borderRadius: "16px",
          fontSize: "2rem",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        }}
      >
        {count}
      </button>
    </div>
  );
}

export default App;
