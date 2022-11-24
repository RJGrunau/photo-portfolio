type ResponsiveImage = {
    alt: string,
    aspectRatio: number,
    bgColor: string,
    src: string,
    srcSet: string,
    webSrcSet: string,
    width: number,
}

export interface Frame {
    responsiveImage: ResponsiveImage,
}
