export interface IPackages {
    id: string;
    name: string;
    translate: string;
    short_descr: string;
    descr: string;
    image: string;
    created: string;
    updated: string;
    collectionId: string;
}

export interface IBanner {
    id: string;
    collectionId: string;
    title: string;
    text: string;
    image: string;
    link: string;
    category: string;
    created: string;
    updated: string;
}