import React from "react";
import { isGalleryPage, TPage } from "./types";
import Gallery from "./Gallery";
import Blocks from "./Blocks";
import "./Page.css";

export default function Page(page: TPage) {
    if (isGalleryPage(page)) {
        return <PageWrapper title={page.title} name={page.name}>
            <Gallery {...page.gallery}/>
        </PageWrapper>
    }
    return (
        <PageWrapper title={page.title} name={page.name}>
            <Blocks blocks={page.blocks} />
        </PageWrapper>
    );
}

type PageWrapperProps = {
    title?: string;
    name: string;
    children: JSX.Element;
}

function PageWrapper ({title, name, children}: PageWrapperProps): JSX.Element {
    return <div className="container">
        <h1>{title || name}</h1>
        {children}
    </div>
}