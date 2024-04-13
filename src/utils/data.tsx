const { v4: uuidv4 } = require("uuid");

export const DATA = [
  {
    category: "Bikes",
    value: "bikes" as const,
    id: uuidv4(),
    featured: [
      {
        type: "Road",
        value: "road" as const,
        id: uuidv4(),
        href: `/products/bikes/road`,
        items: [
          {
            brand: "PINARELLO",
            name: "DOGMA X",
            id: uuidv4(),
            images: [
              "https://pinarello.com/storage/Variant/cff22838c3f40059bf83fc0d70bf22e9.png",
              "https://pinarello.com/storage/ProductGallery/ed2fbe4ff7aa55ee50d4869ff83e446f.png",
              "https://pinarello.com/storage/ProductGallery/276b2100d710db42e0c4bd5faefe612a.png",
            ],
          },
        ],
      },
      {
        type: "Gravel",
        value: "gravel" as const,
        id: uuidv4(),
        href: `/products/bikes/gravel`,
        items: [
          {
            brand: "PINARELLO",
            name: "DOGMA X",
            id: uuidv4(),
            images: [
              "https://pinarello.com/storage/Variant/cff22838c3f40059bf83fc0d70bf22e9.png",
              "https://pinarello.com/storage/ProductGallery/ed2fbe4ff7aa55ee50d4869ff83e446f.png",
              "https://pinarello.com/storage/ProductGallery/276b2100d710db42e0c4bd5faefe612a.png",
            ],
          },
        ],
      },
    ],
  },
  {
    category: "Framesets",
    value: "framesets" as const,
    id: uuidv4(),
    featured: [
      {
        type: "Road",
        value: "road" as const,
        id: uuidv4(),
        href: `/products/framesets/road`,
        items: [
          {
            brand: "PINARELLO",
            name: "DOGMA X",
            id: uuidv4(),
            images: [
              "https://pinarello.com/storage/Variant/cff22838c3f40059bf83fc0d70bf22e9.png",
              "https://pinarello.com/storage/ProductGallery/ed2fbe4ff7aa55ee50d4869ff83e446f.png",
              "https://pinarello.com/storage/ProductGallery/276b2100d710db42e0c4bd5faefe612a.png",
            ],
          },
        ],
      },
      {
        type: "Gravel",
        value: "gravel" as const,
        id: uuidv4(),
        href: `/products/framesets/gravel`,
        items: [
          {
            brand: "PINARELLO",
            name: "DOGMA X",
            id: uuidv4(),
            images: [
              "https://pinarello.com/storage/Variant/cff22838c3f40059bf83fc0d70bf22e9.png",
              "https://pinarello.com/storage/ProductGallery/ed2fbe4ff7aa55ee50d4869ff83e446f.png",
              "https://pinarello.com/storage/ProductGallery/276b2100d710db42e0c4bd5faefe612a.png",
            ],
          },
        ],
      },
    ],
  },
  {
    category: "Wheels",
    value: "wheels" as const,
    id: uuidv4(),
    featured: [
      {
        type: "Road",
        value: "road" as const,
        id: uuidv4(),
        href: `/type=road`,
        items: [
          {
            brand: "PINARELLO",
            name: "DOGMA X",
            id: uuidv4(),
            images: [
              "https://pinarello.com/storage/Variant/cff22838c3f40059bf83fc0d70bf22e9.png",
              "https://pinarello.com/storage/ProductGallery/ed2fbe4ff7aa55ee50d4869ff83e446f.png",
              "https://pinarello.com/storage/ProductGallery/276b2100d710db42e0c4bd5faefe612a.png",
            ],
          },
        ],
      },
      {
        type: "Gravel",
        value: "gravel" as const,
        id: uuidv4(),
        href: `/productstype=gravel`,
        items: [
          {
            brand: "PINARELLO",
            name: "DOGMA X",
            id: uuidv4(),
            images: [
              "https://pinarello.com/storage/Variant/cff22838c3f40059bf83fc0d70bf22e9.png",
              "https://pinarello.com/storage/ProductGallery/ed2fbe4ff7aa55ee50d4869ff83e446f.png",
              "https://pinarello.com/storage/ProductGallery/276b2100d710db42e0c4bd5faefe612a.png",
            ],
          },
        ],
      },
    ],
  },
];
