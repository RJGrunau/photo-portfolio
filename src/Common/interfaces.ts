export interface ResponsiveImage {
    alt: string,
    aspectRatio: number,
    bgColor: string,
    src: string,
    srcSet: string,
    webSrcSet: string,
    width: number,
}

export interface Member {
    id: string,
    socialLink: Object,
    landingPhoto: ResponsiveImage,
    name: string,
}

