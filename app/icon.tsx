import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F172A",
          color: "#FACC15",
          fontSize: 190,
          fontWeight: 800,
          letterSpacing: -16,
        }}
      >
        PK
      </div>
    ),
    size,
  );
}
