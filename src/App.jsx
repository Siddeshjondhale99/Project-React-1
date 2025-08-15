import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-13 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 shadow-lg bg-white rounded-3xl px-2 py-2">
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setcolor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => setcolor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "green" }}
          >
            green
          </button>
          <button
            onClick={() => setcolor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "orange" }}
          >
            orange
          </button>
          <button
            onClick={() => setcolor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "yellow" }}
          >
            yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
