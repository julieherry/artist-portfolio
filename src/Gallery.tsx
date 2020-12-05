import React, { useState, useCallback } from "react";
import { TGallery } from "./types";
import Gallery from "react-photo-gallery";
import Carousel, { CarouselStyles, Modal, ModalGateway } from "react-images";

const carouselStyles: CarouselStyles = {
    container() {
        return {
            maxWidth: "40rem"
        }
    }
}
export default function CGallery(gallery: TGallery) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((_, {index}) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    return (
        <div className="gallery">
            <Gallery photos={gallery.images || []} onClick={openLightbox}/>
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