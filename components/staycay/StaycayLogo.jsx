/**
 * Staycay Logo — S mark icon + STAYCAY wordmark
 * The S mark is built from two overlapping parallelograms at -30° rotation
 * enclosed in a circle — matching the brand logo.
 *
 * Props:
 *   color   — stroke/fill color (default "currentColor")
 *   size    — icon size in px (default 36)
 *   variant — "horizontal" (icon + text side by side) | "stacked" (icon above text) | "icon" (icon only)
 */
export default function StaycayLogo({
  color = "currentColor",
  size = 36,
  variant = "horizontal",
}) {
  const Icon = () => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      {/* Outer circle */}
      <circle cx="30" cy="30" r="25" stroke={color} strokeWidth="1.6" />

      {/* Upper parallelogram — centered at (33,21), rotated -30° */}
      <rect
        x="-15"
        y="-5.5"
        width="30"
        height="11"
        rx="1"
        transform="translate(33,21) rotate(-30)"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Lower parallelogram — centered at (27,39), rotated -30° */}
      <rect
        x="-15"
        y="-5.5"
        width="30"
        height="11"
        rx="1"
        transform="translate(27,39) rotate(-30)"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );

  const wordmarkStyle = {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontWeight: 500,
    letterSpacing: "0.3em",
    textTransform: "uppercase",
    color,
    lineHeight: 1,
    userSelect: "none",
  };

  if (variant === "icon") return <Icon />;

  if (variant === "stacked") {
    return (
      <span
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          textDecoration: "none",
        }}
      >
        <Icon />
        <span style={{ ...wordmarkStyle, fontSize: size * 0.6 }}>STAYCAY</span>
      </span>
    );
  }

  // horizontal (default)
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        textDecoration: "none",
      }}
    >
      <Icon />
      <span style={{ ...wordmarkStyle, fontSize: size * 0.55 }}>STAYCAY</span>
    </span>
  );
}
