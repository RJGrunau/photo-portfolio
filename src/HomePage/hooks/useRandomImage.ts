import { ResponsiveImage } from "../../Common/interfaces"

interface UseRandomImageProps {
    images: ResponsiveImage[]
}
export const useRandomImage = (images: UseRandomImageProps):ResponsiveImage => {
    const randomNumber = Math.floor(Math.random() * images?.length)
    const randomImage = images[randomNumber]
    return randomImage; 
}