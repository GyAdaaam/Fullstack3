import { HomeIcon, UserCircleIcon, PuzzlePieceIcon, PhoneIcon, FireIcon, InformationCircleIcon, NewspaperIcon } from '@heroicons/react/20/solid';

interface NavItem {
    label: string;
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const navItems: NavItem[] = [
  { label: "Hírek", href: "/hirek", icon: NewspaperIcon },
  { label: "Akciók", href: "/sales", icon: FireIcon },
  { label: "Felfedezés", href: "/jatekok", icon: PuzzlePieceIcon },
  { label: "Rólunk", href: "/rolunk", icon: InformationCircleIcon },
];
