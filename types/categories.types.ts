import type { IProduct } from "./product.types";

export interface ICategory {
    collectionId: string;
    collectionName: string;
    created: string;
    id: string;
    image: string;
    name: string;
    priceFrom: string;
    products: string[];
    slug: string;
    updated: string;
    width: string;
    expand?: {
        products: IProduct[];
    }
}