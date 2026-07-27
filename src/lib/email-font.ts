import { readFile } from "fs/promises";
import path from "path";

export async function getPallyFontFaceCss() {
  const fontPath = path.join(
    process.cwd(),
    "src/assets/fonts/en/Pally/Pally-Regular.ttf",
  );

  const fontBuffer = await readFile(fontPath);
  const fontBase64 = fontBuffer.toString("base64");
  const fontDataUrl = `data:font/truetype;base64,${fontBase64}`;

  return `@font-face { font-family: "Pally"; src: url("${fontDataUrl}") format("truetype"); font-weight: 400; font-style: normal; font-display: swap; }`;
}
