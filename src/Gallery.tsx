import React, { useState, useCallback, useEffect, useRef } from "react";
import { isPhotoGallery, TGallery, TImageGallery } from "./types";
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
    let shuffledImages = useRef<TImageGallery[]>(gallery.images)
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
        shuffledImages.current = shuffleArray(gallery.images);
        setIsShuffled(true);
    }, [setIsShuffled]);

    if (!isShuffled)
        return null;

    if (gallery.type !== "photo") {
        return null;
    }

    const carouselStyles = getCarouselStyles(gallery.maxWidthCarousel);



    return (
        <div className="gallery">
            <Gallery photos={shuffledImages.current.map(image => ({
                ...image,
                src: image.thumbnails
            })) || []}
            
            onClick={openLightbox}/>
            <ModalGateway>
                {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                        styles={carouselStyles}
                        currentIndex={currentImage}
                        views={gallery.images.map(image => ({
                            ...image,
                            srcset: image.src,
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
