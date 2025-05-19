import {
  CreditCardIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
  LockClosedIcon,
  BanknotesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { ComponentType, SVGProps } from "react";

export interface TrustItem {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  description: string;
}

export const trustItems: TrustItem[] = [
  {
    title: "PayPal Védelem",
    icon: CreditCardIcon,
    description:
      "Minden vásárlásodat a PayPal rendszere védi. Ha bármilyen probléma adódik, a PayPal közvetlenül segít a pénzvisszatérítésben, így nem kell a kereskedővel vitatkoznod.",
  },
  {
    title: "SSL Titkosítás",
    icon: LockClosedIcon,
    description:
      "Oldalunk 256-bites SSL tanúsítvánnyal van védve, így a megadott személyes és banki adataid garantáltan nem kerülhetnek illetéktelen kezekbe.",
  },
  {
    title: "Elégedettségi Garancia",
    icon: CheckBadgeIcon,
    description:
      "Ha nem vagy elégedett a termékkel, 14 napon belül jelezheted, és kérdés nélkül visszatérítjük a teljes összeget – ez a mi vásárlói garanciánk.",
  },
  {
    title: "Banki Szintű Védelem",
    icon: BanknotesIcon,
    description:
      "A fizetési rendszerünk megfelel a nemzetközi PCI DSS szabványoknak, melyeket a világ legnagyobb bankjai is alkalmaznak az online biztonság érdekében.",
  },
  {
    title: "Hitelesített Szolgáltató",
    icon: ShieldCheckIcon,
    description:
      "Cégünk hivatalosan bejegyzett, ellenőrzött szolgáltató, rendszeresen átesünk külső auditokon, hogy megfeleljünk a kereskedelmi előírásoknak.",
  },
  {
    title: "Több ezer elégedett vásárló",
    icon: UserGroupIcon,
    description:
      "Több mint 12.000 pozitív visszajelzés az elmúlt években – ügyfeleink 98%-a ajánlana minket ismerőseinek is.",
  },
];
