/*
 * Types.
 */

export type TConfig = {
    name: string;
    sections: TSection[];
    socials?: TSocials;
};

export type TSection = TPage | TPageList;

export type TPageList = {
    name: string;
    pages: TPage[];
}

export const isPageList = (variableToCheck: TSection): variableToCheck is TPageList =>
  (variableToCheck as TPageList).pages !== undefined;

export const isPage = (variableToCheck: TSection): variableToCheck is TPage =>
  (variableToCheck as TPage).path !== undefined;

export type TPage = TGalleryPage | TBlockPage | TComponentPage;

type TPageBase = {
    name: string;
    title?: string;
    path: string;
}

type TGalleryPage = TPageBase & {
    gallery: TGallery;
}

export const isGalleryPage = (variableToCheck: TPage): variableToCheck is TGalleryPage =>
  (variableToCheck as TGalleryPage).gallery !== undefined;

type TBlockPage = TPageBase & {
    blocks: TBlock[]
};

export const isBlockPage = (variableToCheck: TPage): variableToCheck is TBlockPage =>
  (variableToCheck as TBlockPage).blocks !== undefined;


type TComponentPage = TPageBase & {
  component: JSX.Element;
};

export const isComponentPage = (variableToCheck: TPage): variableToCheck is TComponentPage =>
(variableToCheck as TComponentPage).component !== undefined;


export type TGallery = {
    type: "photo";
    maxWidthCarousel: string;
    images: TImageGallery[]
} | {
   type: "image";
   images: TImageGallery[]
}


export type TImage = {
    name: string;
    src: string;
    width?: string

}

export type TImageGallery = {
  name: string;
  src: string;
  thumbnails: string;
  width: number;
  height: number;
}

export type TBlock = {
  paragraph?: JSX.Element;
  images?: TImage[]
}

export type TSocials = {
  instagram?: string
  email?: string
}