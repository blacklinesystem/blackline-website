import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Blackline | AI Cold Email Systems That Book Meetings";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#161616",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, system-ui, sans-serif",
          padding: "60px 80px",
        }}
      >
        {/* Red accent line */}
        <div
          style={{
            width: 6,
            height: 60,
            background: "#f34749",
            borderRadius: 3,
            marginBottom: 24,
          }}
        />

        {/* Logo text */}
        <div style={{ display: "flex", alignItems: "baseline", marginBottom: 32 }}>
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-1px",
            }}
          >
            Black
          </span>
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#f34749",
              letterSpacing: "-1px",
            }}
          >
            line
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#a1a1aa",
            textAlign: "center",
            lineHeight: 1.5,
            maxWidth: 700,
          }}
        >
          AI Cold Email Systems That Book Meetings
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 48,
            marginTop: 48,
            alignItems: "center",
          }}
        >
          {[
            { value: "90 Days", label: "To Full Ramp" },
            { value: "97%", label: "Inbox Rate" },
            { value: "4.1%", label: "Avg. Reply Rate" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 36, fontWeight: 700, color: "#f34749" }}>
                {stat.value}
              </span>
              <span style={{ fontSize: 14, color: "#71717a", marginTop: 4 }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 16,
            color: "#52525b",
          }}
        >
          blacklinesystem.com
        </div>
      </div>
    ),
    { ...size }
  );
}
