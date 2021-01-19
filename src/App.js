import { rgbToHex, Slider } from "@material-ui/core";
import { useState } from "react";
import { SketchPicker } from "react-color";
import "./App.css";
import Design from "./Design";

function App() {
  const [blur, setBlur] = useState(0);
  const [borderRadius, setBorderRadius] = useState(30);
  const [color, setColor] = useState({ r: 0, g: 0, b: 0, a: 0.5 });
  return (
    <div className="app">
      <div className="app__container">
        <h1>Glass UI CSS Generator</h1>
        <div className="app__control">
          Blur:{" "}
          <Slider
            min={0}
            max={200}
            value={blur}
            onChange={(e, val) => setBlur(val)}
            style={{ width: 300, margin: 20 }}
          />
          <input type="text" style={{ width: 40 }} value={blur} />
        </div>
        <div className="app__control">
          Border Radius:{" "}
          <Slider
            min={0}
            max={200}
            value={borderRadius}
            onChange={(e, val) => setBorderRadius(val)}
            style={{ width: 300, margin: 20 }}
          />
          <input type="text" style={{ width: 40 }} value={borderRadius} />
        </div>
        <div className="app__control">
          <SketchPicker
            color={color}
            onChangeComplete={(color) => setColor(color.rgb)}
          />
        </div>
        <textarea
          className="app__code"
          value={`backdrop-filter: blur(${blur}px);\n--webkit-backdrop-filter: blur(${blur}px);\n--moz-backdrop-filter: blur(${blur}px);\nbackground-color: rgba(${color.r}, ${color.g}, ${color.b}, ${color.a});\nborder-radius: ${borderRadius}px;`}
        ></textarea>
      </div>
      <Design blur={blur} color={color} borderRadius={borderRadius} />
    </div>
  );
}

export default App;
