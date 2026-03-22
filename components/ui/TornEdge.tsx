import React from "react";

const COLOR_MAP: Record<string, string> = {
  "dc-cream": "#f0ebe0",
  "dc-cream2": "#e8e2d5",
  "dc-cream3": "#ddd7c8",
  "dc-ink": "#1a1208",
  "dc-paper": "#fffef9",
  "dc-sticky-yellow": "#fef08a",
  "dc-amber": "#c8860a",
  "sky-blue": "#bae6fd",
  "soft-yellow": "#fef9c3",
};

interface TornEdgeProps {
  from: keyof typeof COLOR_MAP;
  to: keyof typeof COLOR_MAP;
  flip?: boolean;
  height?: number;
}

/* Irregular torn paper path — jagged, not wavy */
const TORN_PATH =
  "M0,0 L0,18 L12,8 L28,22 L40,6 L58,20 L72,4 L88,18 L102,7 L116,22 L130,5 L144,19 L158,8 L172,24 L184,6 L198,20 L212,9 L228,23 L242,5 L256,18 L270,8 L284,22 L298,4 L312,19 L326,7 L340,23 L354,6 L368,20 L382,9 L396,24 L410,5 L424,18 L438,8 L452,22 L466,4 L480,19 L494,7 L508,23 L522,6 L536,20 L550,9 L564,24 L578,5 L592,18 L606,8 L620,22 L634,4 L648,19 L662,7 L676,23 L690,6 L704,20 L718,9 L732,24 L746,5 L760,18 L774,8 L788,22 L802,4 L816,19 L830,7 L844,23 L858,6 L872,20 L886,9 L900,24 L914,5 L928,18 L942,8 L956,22 L970,4 L984,19 L998,7 L1012,23 L1026,6 L1040,20 L1054,9 L1068,24 L1082,5 L1096,18 L1110,8 L1124,22 L1138,4 L1152,19 L1166,7 L1180,23 L1194,6 L1208,20 L1222,9 L1236,24 L1250,5 L1264,18 L1278,8 L1292,22 L1306,4 L1320,19 L1334,7 L1348,23 L1362,6 L1376,20 L1390,9 L1404,24 L1418,5 L1440,16 L1440,0 Z";

const TornEdge: React.FC<TornEdgeProps> = ({
  from,
  to,
  flip = false,
  height = 28,
}) => {
  const fromColor = COLOR_MAP[from] ?? "#f0ebe0";
  const toColor = COLOR_MAP[to] ?? "#f0ebe0";

  return (
    <div
      style={{
        height,
        background: toColor,
        marginTop: -1,
        marginBottom: -1,
        display: "block",
        width: "100%",
        overflow: "hidden",
        lineHeight: 0,
        pointerEvents: "none",
      }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 28"
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          transform: flip ? "scaleY(-1)" : undefined,
        }}
      >
        <path d={TORN_PATH} fill={fromColor} />
      </svg>
    </div>
  );
};

export default TornEdge;
