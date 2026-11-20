import {
  Accessibility,
  Activity,
  BookOpenCheck,
  CalendarClock,
  ClipboardCheck,
  Clock,
  Compass,
  Droplets,
  Dumbbell,
  Flame,
  Footprints,
  HeartHandshake,
  ListChecks,
  MapPin,
  MessageSquareText,
  Moon,
  Move,
  Phone,
  PhoneCall,
  ShieldCheck,
  Smile,
  Stethoscope,
  User,
  UserCheck,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

const ICON_MAP = {
  Accessibility,
  Activity,
  BookOpenCheck,
  CalendarClock,
  ClipboardCheck,
  Clock,
  Compass,
  Droplets,
  Dumbbell,
  Flame,
  Footprints,
  HeartHandshake,
  ListChecks,
  MapPin,
  MessageSquareText,
  Moon,
  Move,
  Phone,
  PhoneCall,
  ShieldCheck,
  Smile,
  Stethoscope,
  User,
  UserCheck,
} as const;

export type IconName = keyof typeof ICON_MAP;

interface IconResolverProps extends LucideProps {
  name: string;
}

export function IconResolver({ name, ...props }: IconResolverProps) {
  const Component = ICON_MAP[name as IconName] ?? Activity;
  return <Component {...props} aria-hidden="true" />;
}
