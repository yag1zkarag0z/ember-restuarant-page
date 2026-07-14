import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 70, background: "linear-gradient(135deg,#211218 10%,#7b2533 58%,#ff8652)", color: "#f7eadf" }}>
      <div style={{ fontSize: 28, letterSpacing: 10 }}>EMBER · ISTANBUL</div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 105, lineHeight: 0.82, letterSpacing: -5 }}><span>Dinner in the</span><span style={{ color: "#ffc09a", fontStyle: "italic" }}>last light.</span></div>
      <div style={{ fontSize: 24 }}>Modern Mediterranean dining</div>
    </div>,
    size,
  );
}
