import React from "react";
import { isBlockPage, isGalleryPage, TPage } from "./types";
import Blocks from "./Blocks";

import Gallery from "./Gallery";
import ImageGallery from "./ImageGallery";
import "./Page.css";

export default function Page(page: TPage) {
    if (isGalleryPage(page)) {
        if (page.gallery.type === "photo") {
            return <PageWrapper title={page.title} name={page.name}>
                <Gallery {...page.gallery}/>
            </PageWrapper>
        }

        return <ImageGallery {...page.gallery} />
    }

    if (isBlockPage(page)) {
        return (
            <PageWrapper title={page.title} name={page.name}>
                <Blocks blocks={page.blocks} />
            </PageWrapper>
        );
    }

    return page.component;
}

type PageWrapperProps = {
    title?: string;
    name: string;
    children: JSX.Element;
}

function PageWrapper ({title, name, children}: PageWrapperProps): JSX.Element {
    const h1 = title || name;
    return <div className="container">
        {h1 && <h1>{h1}</h1>}
        {children}
    </div>
}