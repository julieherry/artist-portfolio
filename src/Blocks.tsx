import React, {useState, useCallback, useEffect} from "react";
import "./Blocks.css";
import Carousel, { CarouselStyles, Modal, ModalGateway } from "react-images";
import { TBlock, TImage } from "./types";
const carouselStyles: CarouselStyles = {
    container() {
        return {
            maxWidth: "100rem",
            maxHeight: "100rem"
        }
    }
}




export default function Blocks ({blocks}: {blocks: TBlock[]}) {
    let imageId = 0;
    const [images, setImages] = useState<TImage[]>([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, {index}) => {
        console.log(index);
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    useEffect(() => {
        setImages(blocks.flatMap(block => block.images || []));
    }, []);

    return <div className="page">
        {blocks.map((block, i) => (
            <div key={`block-${i}`} className={getBlockClassName(block, i)} >
                {block.paragraph && 
                    <p>
                        {block.paragraph}
                    </p>
                }
                {block.images && block.images.map(image => {
                    let currentImageId = imageId;
                    imageId++;
                    return (
                        <img onClick={(event) => {
                                openLightbox(event, {index: currentImageId});
                            }}
                            width={image.width}
                            alt={image.name}
                            key={`image-${imageId}`}
                            src={image.src}
                        />);
                    })
                }
            </div>
        ))}
        <ModalGateway>
            {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
                <Carousel
                    styles={carouselStyles}
                    currentIndex={currentImage}
                    views={images.map(image => ({
                        srcset: image.src,
                        caption: image.name,
                        source: {
                            regular: image.src,
                            fullscreen: image.src
                        }
                    }))}
                />
            </Modal>
            ) : null}
        </ModalGateway>
    </div>
}

function getBlockClassName(block: TBlock, index: number) {
    let className = "block";

    if ((index+1) % 2)
        className += " reverse";

    let elements = 0;
    if (block.paragraph)
        elements++;
    
    if (block.images)
        elements += block.images.length;

    if (elements === 1)
        className += " unique";
    return className;
}