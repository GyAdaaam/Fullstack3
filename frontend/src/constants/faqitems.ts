import { QuestionMarkCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function getFAQItems(): FAQItem[] {
  return [
    {
      question: "Hogyan rendelhetek a webáruházban?",
      answer:
        "A rendeléshez először regisztrálj a webáruházunkban, majd válaszd ki a kívánt terméket. Miután kosárba helyezted a terméket, ellenőrizd a rendelést és válassz a különböző fizetési lehetőségek közül, például bankkártya, PayPal vagy utánvét. Végül adj meg szállítási adatokat, és máris megerősítheted a rendelést.",
      icon: QuestionMarkCircleIcon,
    },
    {
      question: "Milyen fizetési módok érhetők el?",
      answer:
        "Webáruházunkban többféle biztonságos fizetési mód közül választhatsz. Az elérhető fizetési módok a következők: bankkártyás fizetés, amely gyors és kényelmes, PayPal, amely nem igényel bankkártyát, illetve utánvét, ha a rendelés átvételekor szeretnéd kifizetni.",
      icon: ExclamationCircleIcon,
    },
    {
      question: "Hogyan történik a szállítás?",
      answer:
        "A rendeléseidet gyorsan és kényelmesen kézbesítjük a legnépszerűbb futárszolgálatok segítségével, mint a GLS vagy Magyar Posta. A szállítási idő általában 2-5 munkanap. Emellett minden rendeléshez nyújtunk egy nyomkövetési számot, hogy mindig nyomon tudd követni a csomagod helyzetét.",
      icon: QuestionMarkCircleIcon,
    },
    {
      question: "Mi a visszaküldés politikánk?",
      answer:
        "A termékeinket 14 napon belül visszaküldheted, ha azok sértetlenek és nem használtak. A visszaküldéshez kérjük, tartsd meg a termék eredeti csomagolását. A visszaküldött termékek teljes áron történő visszatérítésére van lehetőség, kivéve, ha a termék nyitott vagy használatban volt. A szállítás költségei a vásárlót terhelik, kivéve, ha a termék hibás volt.",
      icon: ExclamationCircleIcon,
    },
    {
      question: "Mi történik, ha a termék hibás?",
      answer:
        "Ha a vásárolt termék hibás, vagy a rendelésed nem felel meg az elvárásaidnak, kérjük, vedd fel velünk a kapcsolatot minél hamarabb. A hibás terméket cserélhetjük vagy visszatérítést adhatunk, a vásárló által kifizetett összeg teljes mértékben visszajár. A termék hibáját a szállítást követően is jelezheted, hogy minél gyorsabban orvosolhassuk a problémát.",
      icon: QuestionMarkCircleIcon,
    },
    {
      question: "Mi a teendő, ha a csomag sérülten érkezik?",
      answer:
        "Ha a csomag sérülten érkezik, kérjük, azonnal jelezd ezt nekünk. Minden esetben készíteni kell egy fényképet a sérült csomagról és a termékről, amely segít nekünk az ügy megoldásában. A sérült terméket vagy kicseréljük, vagy visszatérítést biztosítunk, a választás a vásárlóra van bízva.",
      icon: ExclamationCircleIcon,
    },
  ];
}
