import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pyae Khant — Backend & DevOps Engineer",
    short_name: "Pyae Khant",
    description: "Personal developer portfolio for Pyae Khant.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F172A",
    theme_color: "#FACC15",
    icons: [{ src: "/icon", sizes: "512x512", type: "image/png" }],
  };
}
