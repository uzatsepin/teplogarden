export interface IProduct {
    article: string;
    collectionId: string;
    collectionName: string;
    created: string;
    description: string;
    id: string;
    image: string;
    imagesGallery: string[];
    name: string;
    priceNew: string;
    priceOld: string;
    questions: { [key: string]: string };
    shortDescription: string;
    slug: string;
    specifications: {[key: string]: string};
    updated: string;
    views: number;
  }
  