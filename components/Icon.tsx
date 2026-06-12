import type { JSX } from "react";

type Props = { name: string; size?: number; stroke?: number; className?: string };

/** Lightweight inline icon set (stroke-based, matches the app's visual language). */
const PATHS: Record<string, JSX.Element> = {
  weight: <><circle cx="12" cy="6" r="2.5" /><path d="M8.5 8.5h7l2.5 10.5a1 1 0 0 1-1 1.2H7a1 1 0 0 1-1-1.2z" /></>,
  truck: <><path d="M2.5 6.5h11v9h-11z" /><path d="M13.5 9.5h4l3 3v3h-7z" /><circle cx="6.5" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></>,
  layers: <><path d="M12 3 3 8l9 5 9-5z" /><path d="m3 13 9 5 9-5" /></>,
  calc: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8M8 11h2M8 15h2M14 11v6" /></>,
  tag: <><path d="M3.5 12.5 12 4h7v7l-8.5 8.5z" /><circle cx="15.5" cy="8.5" r="1.3" /></>,
  bolt: <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12z" />,
  sunrise: <><path d="M12 3v4M5 10l-1.5-1.5M19 10l1.5-1.5M3 17h18M8 17a4 4 0 0 1 8 0" /><path d="m8 7 4-3 4 3" /></>,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  checkSm: <path d="m5 12.5 4.5 4.5L19 7" />,
  shield: <><path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z" /><path d="m9 12 2 2 4-4" /></>,
  globe: <><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17M12 3.5c2.5 2.4 2.5 14.6 0 17M12 3.5c-2.5 2.4-2.5 14.6 0 17" /></>,
  zap: <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12z" />,
  sliders: <><path d="M4 7h10M18 7h2M4 17h2M10 17h10" /><circle cx="16" cy="7" r="2" /><circle cx="8" cy="17" r="2" /></>,
  plug: <><path d="M9 3v5M15 3v5M7 8h10v2a5 5 0 0 1-10 0z" /><path d="M12 15v6" /></>,
  arrowR: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevR: <path d="m9 6 6 6-6 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  info: <><circle cx="12" cy="12" r="8.5" /><path d="M12 11v5M12 8h.01" /></>,
  box: <><path d="M12 3 3.5 7.5v9L12 21l8.5-4.5v-9z" /><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" /></>,
  book: <><path d="M5 4h9a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H5z" /><path d="M5 4v13.5" /></>,
  doc: <><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4M10 13h5M10 16h5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></>,
  rocket: <><path d="M5 14c-1.5 1.5-2 5-2 5s3.5-.5 5-2M12 3c4 1.5 6 5.5 6 9l-4 4H9l-4-4c0-3.5 2-7.5 6-9" /><circle cx="12" cy="9" r="1.6" /></>,
  refresh: <><path d="M4 12a8 8 0 0 1 13.5-5.8L20 8M20 12a8 8 0 0 1-13.5 5.8L4 16" /><path d="M20 4v4h-4M4 20v-4h4" /></>,
  store: <><path d="M4 9h16v11H4z" /><path d="M3 9 5 4h14l2 5M9 20v-6h6v6" /></>,
  dirham: <><path d="M7 8h4a4 4 0 0 1 0 8H7zM5 11h8M5 14h8" /></>,
};

export default function Icon({ name, size = 20, stroke = 1.8, className }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name] ?? PATHS.info}
    </svg>
  );
}
