interface HeroSection {
    name: string;
    welcomeMessage: string;
    buttonText: string;
  }
  
  interface PreOrder {
    name: string;
    text: string;
  }
  
  interface Software {
    name: string;
    text: string;
  }
  
  interface PriceRange {
    price: string;
    label: string;
  }
  
  interface SoftwareCard {
    title: string;
    description: string;
    buttonText: string;
  }
  
  export const herosection: HeroSection = {
    name: "LevelUpdeals",
    welcomeMessage: "ÜDVÖZLÜNK A WEBOLDALON!",
    buttonText: "Akciók felfedezése",
  };
  
  export const preorder: PreOrder = {
    name: "Előrendelhető",
    text: "Ne várj, rendelj elő, és légy első!",
  };
  
  export const softwares: Software = {
    name: "Szoftverek",
    text: "Tekintsd meg lenyűgöző szoftverkatalógusunkat, amely magában foglalja az operációs rendszereket, vírusirtókat, üzleti csomagokat és még sok mást!",
  };
  
  export const priceRanges: PriceRange[] = [
    { price: "1€", label: "-ig" },
    { price: "5€", label: "-ig" },
    { price: "10€", label: "-ig" },
    { price: "30€", label: "-ig" },
    { price: "50€", label: "-ig" },
  ];
  
  export const softwareCards: SoftwareCard[] = [
    {
      title: "Irodai Szoftver Csomagok",
      description:
        "Fedezze fel az irodai hatékonyság új szintjét egy komplett szoftvercsomaggal, amely segít az üzleti feladatok gyorsabb elvégzésében és a munkavégzés optimalizálásában.",
      buttonText: "Megvásárlás",
    },
    {
      title: "Operációs Rendszerek",
      description:
        "Vásárolja meg a legújabb operációs rendszert, amely gyorsabb, biztonságosabb, és a legújabb funkciókat kínálja az otthoni és üzleti felhasználóknak.",
      buttonText: "Megvásárlás",
    },
  ];
  