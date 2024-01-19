import { useEffect, useState } from 'react'
export interface ImageLoaderTypes {
    images: string[],
    onError: () => void,
    onSuccess: () => void,
}
const useImageLoader = (ImageLoaderObj: ImageLoaderTypes) => {
    const [isImagesLoaded, setImagesLoaded] = useState(false);
    useEffect(() => {
        let areImagesLoaded = 0;
        const loadImages = () => {
            ImageLoaderObj.images.forEach((imageUrl) => {
                const image = new Image();
                image.src = imageUrl;
                image.onload = () => {
                    areImagesLoaded += 1;
                    if (areImagesLoaded === ImageLoaderObj.images.length) {
                        setImagesLoaded(true);
                        ImageLoaderObj.onSuccess()
                    }
                };
                image.onerror = (error) => {
                    console.error(`Failed to preload image: ${imageUrl}`, error);
                    ImageLoaderObj.onError()
                };
            });
        };
        // Start loading images
        loadImages();
    }, []);
    return isImagesLoaded
}

export default useImageLoader