import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, className = "h-6 w-6", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V21h13V9.5" />
      <path d="M10 21v-7h4v7" />
    </Svg>
  );
}

export function ScaleIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3v18" />
      <path d="M5 21h14" />
      <path d="M4 8h16" />
      <path d="M7 8 4 14a3 3 0 1 0 6 0L7 8Z" />
      <path d="M17 8l-3 6a3 3 0 1 0 6 0l-3-6Z" />
    </Svg>
  );
}

export function KeyIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="8" cy="15" r="4" />
      <path d="M11.4 13.4 20 5" />
      <path d="M17.2 5.5 20.2 8.5" />
    </Svg>
  );
}

export function FileTextIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9Z" />
      <path d="M14 3v6h6" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </Svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3 5 6.5v5.2c0 4.1 2.7 7.8 7 8.8 4.3-1 7-4.7 7-8.8V6.5L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c.6-3 2.7-5 5.5-5s4.9 2 5.5 5" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M16 14.2c2 .4 3.6 1.8 4.2 4.3" />
    </Svg>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5Z" />
      <path d="M4 5.5V21.5" />
      <path d="M8 7h8" />
      <path d="M8 11h6" />
    </Svg>
  );
}

export function MapIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m9 4 6 2 5-2v16l-5 2-6-2-5 2V6Z" />
      <path d="M9 4v16" />
      <path d="M15 6v16" />
    </Svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.5l3.5 2" />
    </Svg>
  );
}

export function LandmarkIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 21h16" />
      <path d="M3 10h18" />
      <path d="M12 3 4 10h16L12 3Z" />
      <path d="M6.5 10v8" />
      <path d="M10.5 10v8" />
      <path d="M13.5 10v8" />
      <path d="M17.5 10v8" />
    </Svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </Svg>
  );
}

export function NewspaperIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 5h11a2 2 0 0 1 2 2v12H7a2 2 0 0 1-2-2Z" />
      <path d="M5 17a2 2 0 0 1-2-2V8" />
      <path d="M8.5 9H14" />
      <path d="M8.5 13H16" />
      <path d="M8.5 16H13" />
    </Svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7 3h3.2l1.2 3.4-2 1.4a12 12 0 0 0 6.8 6.8l1.4-2 3.4 1.2V17c0 1.1-.9 2-2 2A14 14 0 0 1 5 5c0-1.1.9-2 2-2Z" />
    </Svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </Svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </Svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 20s-7-4.4-9-9.2C1.8 7.4 4 5 7 5c1.8 0 3.2 1 4 2.4C11.8 6 13.2 5 15 5c3 0 5.2 2.4 4 5.8C19 15.6 12 20 12 20Z" />
    </Svg>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8 12 4.5 8.5a2 2 0 0 1 0-2.8L6 4.2a2 2 0 0 1 2.8 0L11 6.4" />
      <path d="M16 12l3.5-3.5a2 2 0 0 0 0-2.8L18 4.2a2 2 0 0 0-2.8 0L13 6.4" />
      <path d="M8 12h8" />
      <path d="M9 16v4" />
      <path d="M12 15.5V21" />
      <path d="M15 16v4" />
    </Svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </Svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </Svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8 17H4.5A1.5 1.5 0 0 1 3 15.5V12c0-3.2 1.8-5.5 5-6.5" />
      <path d="M8 12H5v3.5h3V12Z" />
      <path d="M20 17h-3.5A1.5 1.5 0 0 1 15 15.5V12c0-3.2 1.8-5.5 5-6.5" />
      <path d="M20 12h-3v3.5h3V12Z" />
    </Svg>
  );
}

export const icons = {
  home: HomeIcon,
  scale: ScaleIcon,
  key: KeyIcon,
  file: FileTextIcon,
  shield: ShieldIcon,
  users: UsersIcon,
  book: BookIcon,
  map: MapIcon,
  clock: ClockIcon,
  landmark: LandmarkIcon,
  search: SearchIcon,
  newspaper: NewspaperIcon,
  phone: PhoneIcon,
  mail: MailIcon,
  pin: MapPinIcon,
  heart: HeartIcon,
  handshake: HandshakeIcon,
  menu: MenuIcon,
  close: CloseIcon,
  quote: QuoteIcon,
} as const;

export type IconName = keyof typeof icons;

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Cmp = icons[name];
  return <Cmp className={className} />;
}
