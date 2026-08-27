import type { SVGProps } from "react";

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconStethoscope = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M6 3v5a4 4 0 0 0 8 0V3" />
    <path d="M10 16a6 6 0 0 0 6 6 4 4 0 0 0 4-4v-2" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);
export const IconSyringe = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="m18 2 4 4M17 7l3-3M12 8l4 4M9 11l4 4" />
    <path d="M15 10 5 20l-3 1 1-3L13 8" />
  </svg>
);
export const IconScalpel = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M14 4 4 14l4 1 1 4L20 8Z" />
    <path d="M9 15 4 20" />
  </svg>
);
export const IconScissors = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M20 4 8.5 15.5M14.5 14.5 20 20M8.5 8.5 12 12" />
  </svg>
);
export const IconHome = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M3 11 12 4l9 7v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
    <path d="M9 21v-6h6v6" />
  </svg>
);
export const IconBag = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M6 7h12l-1 13H7ZM9 7a3 3 0 0 1 6 0" />
  </svg>
);
export const IconPaw = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="6.5" cy="9.5" r="1.6" />
    <circle cx="11" cy="6.5" r="1.6" />
    <circle cx="15.5" cy="6.8" r="1.6" />
    <circle cx="18.5" cy="10" r="1.6" />
    <path d="M8 16c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.7-1.3 2.6-2.6 3.2-1 .5-1.8.5-2.8 0C9.3 18.6 8 17.7 8 16Z" />
  </svg>
);
export const IconClock = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const IconPin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
export const IconArrow = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);
export const IconCalendar = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 3v4M16 3v4" />
  </svg>
);
export const IconBed = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M2 18v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5M2 14h20" />
    <path d="M6 11V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2" />
  </svg>
);
export const IconTruck = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M3 6h11v9H3zM14 9h3.5l3.5 3v3h-7z" />
    <circle cx="7" cy="18" r="1.7" />
    <circle cx="17.5" cy="18" r="1.7" />
  </svg>
);
export const IconPhone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);
export const IconWhatsApp = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...p}>
    <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.7.7-1 1.6-1 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2.2 3.4 5.4 4.7 2 .8 2.8.9 3.8.8.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.3Z" />
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
  </svg>
);
export const IconInstagram = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
