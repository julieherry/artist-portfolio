import React from "react";
import { TGallery } from "./types";
import ImageGallery from 'react-image-gallery';
import "./ImageGallery.css";

export default function IGallery(gallery: TGallery) {
    return (
        <ImageGallery 
            items={gallery.images.map((image, index) => {
                return {
                    original: image.src,
                    description: image.name,
                    thumbnail: image.thumbnails,
                }
            })}
            showPlayButton={false}
        />
    );
}