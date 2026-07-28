import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — Backend & DevOps Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 84px",
          background: "#0F172A",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: 999, background: "rgba(250,204,21,0.12)", right: -100, top: -180 }} />
        <div style={{ display: "flex", color: "#FACC15", fontSize: 26, fontWeight: 700, letterSpacing: 2 }}>BACKEND · DEVOPS · INFRASTRUCTURE</div>
        <div style={{ marginTop: 28, fontSize: 82, lineHeight: 1, fontWeight: 800, letterSpacing: -4 }}>{siteConfig.name}</div>
        <div style={{ marginTop: 26, fontSize: 38, color: "#CBD5E1" }}>Backend Engineer & Junior DevOps Engineer</div>
        <div style={{ marginTop: 50, display: "flex", gap: 16, fontSize: 24, color: "#94A3B8" }}>
          <span>Node.js</span><span>•</span><span>Linux</span><span>•</span><span>Docker</span><span>•</span><span>Mandalay, Myanmar</span>
        </div>
      </div>
    ),
    size,
  );
}
