import React from "react";
import { TGallery } from "./types";
import ImageGallery from 'react-image-gallery';
import "./ImageGallery.css";

export default function IGallery(gallery: TGallery) {
    return (
        <ImageGallery 
            items={gallery.images.map((image, index) => {
                // Fix bug in react-image-gallery with thumbnails.
                const mod = (index + gallery.images.length + 1) % (gallery.images.length);
                return {
                    original: image.src,
                    description: gallery.images[mod].name,
                    thumbnail: image.thumbnails,
                }
            })}
            showPlayButton={false}
        />
    );
}