import React, { useState, useCallback, useEffect, useRef } from "react";
import { TGallery, TImageGallery } from "./types";
import Gallery from "react-photo-gallery";
import Carousel, { CarouselStyles, Modal, ModalGateway } from "react-images";
import "./Gallery.css";

const getCarouselStyles = (maxWidth: string): CarouselStyles => {
    return {
        container() {
            return {
                maxWidth
            }
        }
    }
}

export default function CGallery(gallery: TGallery) {
    let shuffledImages = useRef<TImageGallery[]>(gallery.images);
    const [currentImage, setCurrentImage] = useState(0);
    const [isShuffled, setIsShuffled] = useState(false);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const openLightbox = useCallback((_, {index}) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    useEffect(() => {
        shuffledImages.current = shuffleArray(gallery.images).map(image => {
            return {
                ...image,
                src: image.thumbnails
            };
        });
        setIsShuffled(true);
        // Start caching images.
        setTimeout(() => cacheImages(gallery.images), 2000);
    }, [setIsShuffled]);

    if (!isShuffled)
        return null;

    if (gallery.type !== "photo") {
        return null;
    }

    const carouselStyles = getCarouselStyles(gallery.maxWidthCarousel);



    return (
        <div className="gallery">
            <Gallery photos={shuffledImages.current || []}
            
            onClick={openLightbox}/>
            <ModalGateway>
                {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                        styles={carouselStyles}
                        currentIndex={currentImage}
                        views={gallery.images.map(image => ({
                            ...image,
                            srcset: image.thumbnails,
                            caption: image.name,
                            source: {
                                regular: image.src,
                                fullscreen: image.src,
                                thumbnails: image.thumbnails,
                            }
                        }))}
                    />
                </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array: any[]): any[] {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
  }
 
async function cacheImages(images: TImageGallery[]): Promise<any> {
    return await Promise.all(images.map(image => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = image.src;
            img.onload = (e) => {resolve(img)};
            img.onerror = (e) => {reject(img)};
        })
    }))
}