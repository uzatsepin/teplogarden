import type { ICategory } from "./categories.types";
import type { IReview } from "./review.types";

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
    specifications: ISizes[];
    updated: string;
    views: number;
    options: IOptions[];
    category: string;
    expand?: {
      category: ICategory
      reviews: IReview[]
    },
    seoDescr: string;
  }
  
  interface ISizes {
    name: string;
    value: string;
    icon: string
  }

  export interface IOptions {
    name: string;
    price: string;
  }