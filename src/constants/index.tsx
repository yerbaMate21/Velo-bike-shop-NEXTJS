//nav
export const IMAGES_BY_CATEGORY: {
  category: string;
  src: string;
  src_cat: string;
}[] = [
  {
    category: "bikes",
    src: "/images/bikes.png",
    src_cat: "/images/bike-cat.jpg",
  },
  {
    category: "components",
    src: "/images/components.jpg",
    src_cat: "/images/gear-cat.webp",
  },
];

export const IMAGES_BY_TYPE: { type: string; src: string; src_type: string }[] =
  [
    {
      type: "road",
      src: "/images/road.jpeg",
      src_type: "/images/road-type.jpg",
    },
    {
      type: "gravel",
      src: "/images/gravel.jpeg",
      src_type: "/images/gravel-type.jpg",
    },
    {
      type: "mtb",
      src: "/images/mtb.jpeg",
      src_type: "/images/mtb-type.avif",
    },
    {
      type: "e-bike",
      src: "/images/e-bike.webp",
      src_type: "/images/e-bike.webp",
    },
    {
      type: "framesets",
      src: "/images/framesets.webp",
      src_type: "/images/framesets.webp",
    },
    {
      type: "wheels",
      src: "/images/wheels.webp",
      src_type: "/images/wheels.webp",
    },
  ];

export const BIKES_CATEGORY_LIST: { image: string; title: string }[] = [
  {
    image: "/images/road-bikes.webp",
    title: "road",
  },
  {
    image: "/images/gravel-bikes.webp",
    title: "gravel",
  },
  {
    image: "/images/mountain-bikes.jpg",
    title: "mtb",
  },
  {
    image: "/images/electric-bikes.jpg",
    title: "e-bike",
  },
];

export const HOME_CAROUSEL: {
  image: string;
  title: string;
  desc: string;
  btnDesc: string;
  href: string;
}[] = [
  {
    image: "/images/home-carousel-1.webp",
    title: "Lets's get started.",
    desc: "Conquer every mountain and crush every finish line with the Colnago V4Rs",
    btnDesc: "Shop Now",
    href: "/bikes/road/Colnago_V4Rs",
  },
  {
    image: "/images/home-carousel-2.avif",
    title: "Electric bikes",
    desc: "Like riding a bike, but with a little extra power",
    btnDesc: "See the bikes",
    href: "/bikes/e-bike",
  },
  {
    image: "/images/home-carousel-3.jpg",
    title: "Mountain Bikes",
    desc: "Full-suspension or hardtail? 29er or 27.5? Electric mountain bike or pedal power? We’ve got you covered.",
    btnDesc: "See the bikes",
    href: "/bikes/mtb",
  },
];

export const HOME_MARQUEE: { image: string; desc: string }[] = [
  {
    image: "/images/6-years-guarantee.svg",
    desc: "6 year guarantee",
  },
  {
    image: "/images/thirty-days-return-svg.svg",
    desc: "Simple returns",
  },
  {
    image: "/images/Icon_servicing.svg",
    desc: "Servicing made simple",
  },
  {
    image: "/images/flexible-payment.svg",
    desc: "Flexible ways to pay",
  },
  {
    image: "/images/d2c-rightsize.svg",
    desc: "The right size, guaranteed",
  },
];

// product page
export const PRODUCT_FOOTER: { image: string; title: string }[] = [
  {
    image: "/images/ico-warranty.svg",
    title: "WARRANTY",
  },
  {
    image: "/images/ico-register-frame.svg",
    title: "FRAME REGISTRATION",
  },
  {
    image: "/images/ico-downloads.svg",
    title: "DOWNLOAD",
  },
  {
    image: "/images/ico-ecommerce.svg",
    title: "ECOMMERCE ORDERS",
  },
];

export const GEOMETRIES_BIKE: {
  dimension: string;
  s: string;
  m: string;
  l: string;
  xl: string;
}[] = [
  {
    dimension: "A seat tube length (mm)",
    s: "490",
    m: "520",
    l: "550",
    xl: "580",
  },
  {
    dimension: "B Top tube length (mm)",
    s: "538",
    m: "558",
    l: "575",
    xl: "595",
  },
  {
    dimension: "C head tube length (mm)",
    s: "150",
    m: "170",
    l: "186",
    xl: "205",
  },
  {
    dimension: "D head tube angle (°)",
    s: "71",
    m: "71,5",
    l: "71,5",
    xl: "71,5",
  },
  {
    dimension: "E seat angle (°)",
    s: "74",
    m: "73,5",
    l: "73,5",
    xl: "73",
  },
  {
    dimension: "F BB drop (mm)",
    s: "72",
    m: "72",
    l: "72",
    xl: "70",
  },
  {
    dimension: "G chainstay length (mm)",
    s: "435",
    m: "435",
    l: "435",
    xl: "435",
  },
  {
    dimension: "H wheelbase (mm)",
    s: "1025,1",
    m: "1035,4",
    l: "1053",
    xl: "1068,6",
  },
  {
    dimension: "J reach (mm)",
    s: "372,6",
    m: "381",
    l: "393,5",
    xl: "402,7",
  },
  {
    dimension: "K stack (mm)",
    s: "576,8",
    m: "597,7",
    l: "612,85",
    xl: "628,9",
  },
  {
    dimension: "M Standover height (100 mm in front of BB) (mm)",
    s: "803",
    m: "828",
    l: "850,2",
    xl: "874,6",
  },
  {
    dimension: "P Fork offset (mm)",
    s: "47",
    m: "47",
    l: "47",
    xl: "47",
  },
  {
    dimension: "U fork length (mm)",
    s: "402",
    m: "402",
    l: "402",
    xl: "402",
  },
  {
    dimension: "X recommended size (cm)",
    s: "172-178",
    m: "178-184",
    l: "184-190",
    xl: "190-195",
  },
];

// footer
export const FOOTER_ITEMS: {
  title: string;
  items: { title: string; href: string }[];
}[] = [
  {
    title: "About Us",
    items: [
      {
        title: "Explore the brand",
        href: "",
      },
      {
        title: "Contact",
        href: "",
      },
      {
        title: "Terms & Conditions",
        href: "",
      },
      {
        title: "Legal Disclosure",
        href: "",
      },
      {
        title: "Data Protection Statement",
        href: "",
      },
      {
        title: "Compliance",
        href: "",
      },
    ],
  },
  {
    title: "Explore",
    items: [
      {
        title: "News & Stories",
        href: "",
      },
      {
        title: "Experience Partners",
        href: "",
      },
      {
        title: "Pro Sports",
        href: "",
      },
      {
        title: "Events",
        href: "",
      },
      {
        title: "Member Benefits",
        href: "",
      },
    ],
  },
  {
    title: "Customer Service",
    items: [
      {
        title: "Support Centre",
        href: "",
      },
      {
        title: "Find a Service Location",
        href: "",
      },
      {
        title: "Shipping",
        href: "",
      },
      {
        title: "Payment & Financing",
        href: "",
      },
      {
        title: "Warranty & Guarantee",
        href: "",
      },
      {
        title: "Returns",
        href: "",
      },
      {
        title: "Track Your Order",
        href: "",
      },
    ],
  },
  {
    title: "Bike Worlds",
    items: [
      {
        title: "Road",
        href: "/bikes/road",
      },
      {
        title: "Gravel",
        href: "/bikes/gravel",
      },
      {
        title: "Mtb",
        href: "/bikes/mtb",
      },
      {
        title: "e-Bike",
        href: "/bikes/e-bike",
      },
      {
        title: "Components",
        href: "/components",
      },
      {
        title: "All Bikes",
        href: "/bikes",
      },
    ],
  },
];

import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaStrava,
  FaTiktok,
} from "react-icons/fa";

type Props = {
  name: string;
  icon: React.ReactNode;
};

export const FOOTER_MEDIA: Props[] = [
  {
    name: "Facebook",
    icon: <FaFacebook size={24} />,
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={24} />,
  },
  {
    name: "Youtube",
    icon: <FaYoutube size={24} />,
  },
  {
    name: "Strava",
    icon: <FaStrava size={24} />,
  },
  {
    name: "Tiktok",
    icon: <FaTiktok size={24} />,
  },
];

export const FOOTER_DOWNLOAD = [
  {
    name: "apple-store",
    image: "/images/app-store.svg",
  },
  {
    name: "google-play",
    image: "/images/google-play.svg",
  },
];
