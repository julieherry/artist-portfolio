import {TConfig} from "./types";
import About from "./Pages/About";

const polymorpheBlocks = [{
        paragraph: <>Dessins réalisés en 2020 pour illustrer l’article « Sortir de nos mètres carrés » de Ludovic Clerima dans la revue de l’association Polymorphe.</>,
        images: [{
            name: "Revue polymorphe",
            src: "/assets/img/revue-polymorphe/scan_magasine_1.jpg"
        }]
    }, {
        paragraph: <>Dans cet article Ludovic Clerima interroge pourquoi un logement spacieux en milieu rural vaut moins cher qu’un studio dans une zone urbaine et comment la population s’adapte à cette situation.</>,
        images: [{
            name: "Revue polymorphe",
            src: "/assets/img/revue-polymorphe/scan_magasine_2.jpg"
        }]
    }, {
        paragraph: <>Pour illustrer cet article, je suis allée sur le site particulier à particulier, observer le phénomène de mes propres yeux. J’ai ainsi dessiner la photo d’un studio parisien loué 650 euros et celle d’une maison en pierre de 70m carré en Ardèche louée au même prix.</>,
        images: [{
            name: "Revue polymorphe",
            src: "/assets/img/revue-polymorphe/scan_magasine_3.jpg"
        }]
    }, {
        paragraph: <>Pour en savoir plus sur l’association Polymorphes, n’hésitez pas à visiter leur <a href="https://www.polymorphecorp.com/" rel="noreferrer" target="_blank">site</a>!</>,
        images: [{
            name: "Revue polymorphe",
            src: "/assets/img/revue-polymorphe/side-by-side.jpg"
        }]
    }
];


const missingPageBlock = [{
    paragraph: <>
        <p>
            À partir du 5 mars 2021, exposition collective « La page manquante » au centre Wallonie-Bruxelles, sur une proposition de Renaud Auguste Dormeuil. 
        </p>
        <p>
            « Il arrive, en consultant un catalogue d’exposition ou une revue artistique, qu’on ait le sentiment que quelque chose manque : une référence que l’on considère nécessaire, ou encore l’oubli d’une œuvre qui nous paraît importante. Parfois même, à la lecture de certains ouvrages, on se dit qu’on y avait notre place en tant qu’artiste. Au-delà des raisons de ce manque, le projet de La page manquante propose de réparer cette infâme injustice ! »
        </p>
        <p>
        <a style={{textDecoration: "underline"}} href="https://www.cwb.fr/agenda/la-page-manquante-renaud-auguste-dormeuil-expo" target="_blank" rel="noreferrer noopener">Plus d’info ici</a>
        </p> 
    </>,
    images: [{
        name: "La page manquante",
        src: "/assets/img/missingpage/flyers.jpg",
        width: "300px"
    }]
}];

const config: TConfig =  {
    name: "JULIE HERRY",
    socials: {
        instagram: "https://www.instagram.com/julieherry",
        email: "julieherry@yahoo.com"
    },
    sections: [

        /*
        * Index
        */
        {
            name: "",
            title: "",
            path: "/",
            blocks: [{
                images: [{
                    name: "julieherry.com",
                    src: "/assets/img/dessin-site.jpg",
                    width: "50rem"
                }]
            }]
        },

        
        /*
        * New
        */
        {
            name: "new",
            title: "La page manquante",
            path: "/new",
            blocks: missingPageBlock
        },

        /*
        * A4
        */
        {
            name: "a4",
            path: "/a4",
            gallery: {
                type: "photo",
                maxWidthCarousel: "30rem",
                images: Array.from({length: 156}, (_, index) => ({
                        name: "A4, feutre sur papier, 21x29,7cm",
                        src: `/assets/img/a4/a4.${index+1}.jpg`,
                        thumbnails: `/assets/img/a4/a4.${index+1}.jpg`,
                        width: 1,
                        height: 1.4
                }))
            }
        },
        
        /*
        * Drawings
        */
        {
            name: "drawings",
            pages: [

                /*
                * Par la fenêtre
                */
                {
                    name: "Par la fenêtre",
                    path: "/fenetres",
                    gallery: {
                        type: "photo",
                        maxWidthCarousel: "30rem",
                        images: [{
                            src: "/assets/img/fenetres/fenetre_0.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_0.jpg",
                            name: "Par ma fenêtre 1, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_1.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_1.jpg",
                            name: "Par ma fenêtre 2, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_2.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_2.jpg",
                            name: "Par ma fenêtre 3, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_3.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_3.jpg",
                            name: "Par la fenêtre de Safouane, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_4.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_4.jpg",
                            name: "Par la fenêtre de Sarah-Louise, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_5.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_5.jpg",
                            name: "Par la fenêtre de Simon, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_6.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_6.jpg",
                            name: "Par la fenêtre de M'Hand et Charlotte, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_7.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_7.jpg",
                            name: "Par la fenêtre d'Antoine C., feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_8.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_8.jpg",
                            name: "Par la fenêtre de Bill, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_9.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_9.jpg",
                            name: "Par la fenêtre de Pierre, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_10.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_10.jpg",
                            name: "Par la fenêtre de Delphes, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_11.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_11.jpg",
                            name: "Par la fenêtre de Marie, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_12.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_12.jpg",
                            name: "Par la fenêtre de Jerry, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_13.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_13.jpg",
                            name: "Par la fenêtre de Laure-Anne et Arnaud, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_14.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_14.jpg",
                            name: "Par la fenêtre de Jade, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_15.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_15.jpg",
                            name: "Par la fenêtre de Alicia, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_16.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_16.jpg",
                            name: "Par la fenêtre de Camille H., feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_17.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_17.jpg",
                            name: "Par la fenêtre de Roberto, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_18.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_18.jpg",
                            name: "Par la fenêtre de Yosra, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_19.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_19.jpg",
                            name: "Par la fenêtre d'Ines, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_20.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_20.jpg",
                            name: "Par la fenêtre de Jean-Daniel, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_21.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_21.jpg",
                            name: "Par la fenêtre d'Etienne, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_22.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_22.jpg",
                            name: "Par la fenêtre de Christian et Laurence, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_23.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_23.jpg",
                            name: "Par la fenêtre de Pauline L., feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_24.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_24.jpg",
                            name: "Par la fenêtre d'Etienne A., feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_25.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_25.jpg",
                            name: "Par la fenêtre de Karoline, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_26.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_26.jpg",
                            name: "Par la fenêtre de Clotilde, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_27.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_27.jpg",
                            name: "Par la fenêtre de Aurelien, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_28.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_28.jpg",
                            name: "Par la fenêtre de Lea et Romain, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_29.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_29.jpg",
                            name: "Par la fenêtre de Marion D., feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_30.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_30.jpg",
                            name: "Par la fenêtre de Caroline, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_31.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_31.jpg",
                            name: "Par la fenêtre de Pauline B., feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_32.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_32.jpg",
                            name: "Par la fenêtre d'Eleonore, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_33.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_33.jpg",
                            name: "Par la fenêtre de Melchior, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_34.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_34.jpg",
                            name: "Par la fenêtre d'Anouk, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_35.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_35.jpg",
                            name: "Par la fenêtre de Maxime et Olivier, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_36.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_36.jpg",
                            name: "Par ma fenêtre 4, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_37.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_37.jpg",
                            name: "Par la fenêtre de Kevin, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_38.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_38.jpg",
                            name: "Par la fenêtre de Julien, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_39.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_39.jpg",
                            name: "Par la fenêtre de Pierre-Antoine, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_40.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_40.jpg",
                            name: "Par la fenêtre d'Alexandre L., feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_41.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_41.jpg",
                            name: "Par la fenêtre de Yannick, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_42.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_42.jpg",
                            name: "Par la fenêtre de Cecilia, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_43.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_43.jpg",
                            name: "Par la fenêtre de Maud, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_44.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_44.jpg",
                            name: "Par la fenêtre de Gael, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_45.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_45.jpg",
                            name: "Par la fenêtre de Simon B., feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_46.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_46.jpg",
                            name: "Par la fenêtre de Lena, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_47.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_47.jpg",
                            name: "Par la fenêtre de Terah, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_48.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_48.jpg",
                            name: "Par la fenêtre de Carole, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_49.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_49.jpg",
                            name: "Par la fenêtre de Océane, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_50.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_50.jpg",
                            name: "Par la fenêtre de Jessica, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_51.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_51.jpg",
                            name: "Par la fenêtre de Fanny, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_52.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_52.jpg",
                            name: "Par la fenêtre de Camille M., feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_53.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_53.jpg",
                            name: "Par la fenêtre d'Alexandra, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_54.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_54.jpg",
                            name: "Par la fenêtre de Lina, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_55.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_55.jpg",
                            name: "Par la fenêtre de Sofiane, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_56.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_56.jpg",
                            name: "Par la fenêtre de Mathyld et Jef, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_57.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_57.jpg",
                            name: "Par la fenêtre d'Antoine S., feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_58.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_58.jpg",
                            name: "Par la fenêtre de Fagtice, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_59.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_59.jpg",
                            name: "Par la fenêtre de Felix, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_60.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_60.jpg",
                            name: "Par la fenêtre d'Anna, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_61.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_61.jpg",
                            name: "Par la fenêtre de Celeste, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_62.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_62.jpg",
                            name: "Par la fenêtre d'Antoine V., feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_63.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_63.jpg",
                            name: "Par la fenêtre de Claire L., feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_64.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_64.jpg",
                            name: "Par la fenêtre de Camille R., feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_65.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_65.jpg",
                            name: "Par la fenêtre de Claire D., feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_66.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_66.jpg",
                            name: "Par la fenêtre d'Anthony, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_67.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_67.jpg",
                            name: "Par la fenêtre de James, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_68.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_68.jpg",
                            name: "Par la fenêtre de Marion B., feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_69.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_69.jpg",
                            name: "Par la fenêtre de Louis, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_70.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_70.jpg",
                            name: "Par la fenêtre de Mathilde, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_71.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_71.jpg",
                            name: "Par la fenêtre de Camille M., feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_72.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_72.jpg",
                            name: "Par la fenêtre de Julie, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_73.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_73.jpg",
                            name: "Par la fenêtre de Caroline C., feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_74.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_74.jpg",
                            name: "Par la fenêtre de Melody, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_75.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_75.jpg",
                            name: "Par la fenêtre de Sacha, feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_76.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_76.jpg",
                            name: "Par la fenêtre de Camille D., feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        },
                        {
                            src: "/assets/img/fenetres/fenetre_77.jpg",
                            thumbnails: "/assets/img/fenetres/thumbs/fenetre_77.jpg",
                            name: "Par la fenêtre de Camille A., feutre sur papier, 21x29,7cm",
                            width: 1,
                            height: 1.4
                        }]
                    }
                },


                /*
                * Closer
                */
                {
                    name: "Closer",
                    path: "/closer",
                    gallery: {
                        type: "image",
                        images: [{
                            src: "/assets/img/closer/chez-john-doe.jpg",
                            thumbnails: "/assets/img/closer/thumbs/chez-john-doe.jpg",
                            name: "Techniques mixtes sur papier, 50x65cm, 2017", 
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/closer/chez-kristen-stewart.jpg",
                            thumbnails: "/assets/img/closer/thumbs/chez-kristen-stewart.jpg",
                            name: "Chez Kristen Stewart, Techniques mixtes sur papier, 50x65cm, 2017",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/closer/chez-justin-bieber-1.jpg",
                            thumbnails: "/assets/img/closer/thumbs/chez-justin-bieber-1.jpg",
                            name: "Chez Justin Bieber, Techniques mixtes sur papier, 50x65cm, 2016",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/closer/chez-justin-bieber-2.jpg",
                            thumbnails: "/assets/img/closer/thumbs/chez-justin-bieber-2.jpg",
                            name: "Chez Justin Bieber, Techniques mixtes sur papier, 50x65cm, 2015",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/closer/chez-britney-spears.jpg",
                            thumbnails: "/assets/img/closer/thumbs/chez-britney-spears.jpg",
                            name: "Chez Britney Spears, Techniques mixtes sur papier, 50x65cm, 2017",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/closer/chez-johnny-depp-et-vanessa-paradis.jpg",
                            thumbnails: "/assets/img/closer/thumbs/chez-johnny-depp-et-vanessa-paradis.jpg",
                            name: "Chez Johnny Depp et Vannessa Paradis, Techniques mixtes sur papier, 50x65cm, 2018",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/closer/chez-leonardo-dicaprio.jpg",
                            thumbnails: "/assets/img/closer/thumbs/chez-leonardo-dicaprio.jpg",
                            name: "Chez Leonardo Dicaprio, Techniques mixtes sur papier,50x65cm, 2018",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/closer/chez-paris-hilton.jpg",
                            thumbnails: "/assets/img/closer/thumbs/chez-paris-hilton.jpg",
                            name: "Chez Paris Hilton, techniques mixtes sur papier, 50x65cm, 2017",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/closer/chez-brad-pitt-et-angelina-jolie.jpg",
                            thumbnails: "/assets/img/closer/thumbs/chez-brad-pitt-et-angelina-jolie.jpg",
                            name: "Chez Brad Pitt et Angelina Jolie, Techniques mixtes sur papier, 50x65cm, 2018",
                            width: 1.3,
                            height: 1
                        }
                    
                    ]
                    }
                },

                /*
                * Pool Party
                */
                {
                    name: "Pool party",
                    path: "/pool",
                    gallery: {
                        type: "image",
                        images: [{
                            name: "La Villa, 2017",
                            src: "/assets/img/pool/pool.1.jpg",
                            thumbnails: "/assets/img/pool/thumbs/pool.1.jpg",
                            width: 1,
                            height: 1
                        }, {
                            name: "Piscine 1, 2015, 50x65cm",
                            src: "/assets/img/pool/pool.2.jpg",
                            thumbnails: "/assets/img/pool/thumbs/pool.2.jpg",
                            width: 1,
                            height: 1
                        }, {
                            name: "",
                            src: "/assets/img/pool/pool.3.jpg",
                            thumbnails: "/assets/img/pool/thumbs/pool.3.jpg",
                            width: 1,
                            height: 1
                        }, {
                            name: "Sans titre, 2017",
                            src: "/assets/img/pool/pool.4.jpg",
                            thumbnails: "/assets/img/pool/thumbs/pool.4.jpg",
                            width: 1,
                            height: 1
                        }, {
                            name: "La cité de sable, 2015, 50x65cm",
                            src: "/assets/img/pool/pool.5.jpg",
                            thumbnails: "/assets/img/pool/thumbs/pool.5.jpg",
                            width: 1,
                            height: 1
                        }, {
                            name: "I know a place where the grass is really greener, 350x240cm, 2016",
                            src: "/assets/img/pool/pool.6.jpg",
                            thumbnails: "/assets/img/pool/thumbs/pool.6.jpg",
                            width: 1,
                            height: 1
                        }, {
                            name: "",
                            src: "/assets/img/pool/pool.7.jpg",
                            thumbnails: "/assets/img/pool/thumbs/pool.7.jpg",
                            width: 1,
                            height: 1
                        }]
                    }
                },

                /*
                * Haies
                */
                {
                    name: "Haies",
                    path: "/haies",
                    gallery: {
                        type: "image",
                        images: Array.from({length: 11}, (_, index) => ({
                            name: `Haies ${index+1}, techniques mixtes sur papier, 20x14cm, 2014`,
                            src: `/assets/img/haies/haie${index+1}.jpg`,
                            thumbnails: `/assets/img/haies/thumbs/haie${index+1}.jpg`,
                            width: 1,
                            height: 1
                        }))
                    }
                },

                /*
                * 742 Evergreen Terrace
                */
                {
                    name: "742 Evergreen Terrace",
                    path: "/742-evergreen-terrace",
                    gallery: {
                        type: "image",
                        images: [{
                            name: "Techniques mixtes sur papier, 50x65cm, 2014",
                            src: "/assets/img/742-evergreen-terrace/742-evergreen-terrace-1.jpg",
                            thumbnails: "/assets/img/742-evergreen-terrace/thumbs/742-evergreen-terrace-1.jpg",
                            width: 1,
                            height: 1
                        }, {
                            name: "Vue de l’exposition Utopies fluviales à Nanterres, 2017",
                            src: "/assets/img/742-evergreen-terrace/742-evergreen-terrace-2.jpg",
                            thumbnails: "/assets/img/742-evergreen-terrace/thumbs/742-evergreen-terrace-2.jpg",
                            width: 1,
                            height: 1
                        }]
                    }
                },

                /*
                * Au beau milieu d'un rêve
                */
                {
                    name: "Au beau milieu d'un rêve",
                    path: "/au-beau-milieu-d-un-reve",
                    gallery: {
                        type: "image",
                        images: Array.from({length: 2}, (_, index) => ({
                            name: `Techniques mixtes sur carton, 50x65cm, 2015`,
                            src: `/assets/img/reve/0${index+1}b.jpg`,
                            thumbnails: `/assets/img/reve/thumbs/0${index+1}b.jpg`,
                            width: 1,
                            height: 1
                        }))
                    }
                },

                /*
                * Jardinières
                */
                {
                    name: "Jardinières",
                    path: "/jardinieres",
                    gallery: {
                        type: "photo",
                        maxWidthCarousel: "70rem",
                        images: [
                        {
                            src: "/assets/img/jardinieres/jardinieres.01.jpg",
                            thumbnails: "/assets/img/jardinieres/thumbs/jardinieres.01.jpg",
                            name: "Sainte Feyre 1, 18x24cm, Techniques mixtes sur papier, 2020",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/jardinieres/jardinieres.02.jpg",
                            thumbnails: "/assets/img/jardinieres/thumbs/jardinieres.02.jpg",
                            name: "Sainte Feyre 2, 18x24cm, Techniques mixtes sur papier, 2020",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/jardinieres/jardinieres.03.jpg",
                            thumbnails: "/assets/img/jardinieres/thumbs/jardinieres.03.jpg",
                            name: "Porte de Vanves, 18x24cm, Techniques mixtes sur papier, 2020",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/jardinieres/jardinieres.04.jpg",
                            thumbnails: "/assets/img/jardinieres/thumbs/jardinieres.04.jpg",
                            name: "Face à la gare de Guéret, 18x24cm, Techniques mixtes sur papier, 2020",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/jardinieres/jardinieres.05.jpg",
                            thumbnails: "/assets/img/jardinieres/thumbs/jardinieres.05.jpg",
                            name: "Pantin, 18x24cm, Techniques mixtes sur papier, 2020",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/jardinieres/jardinieres.06.jpg",
                            thumbnails: "/assets/img/jardinieres/thumbs/jardinieres.06.jpg",
                            name: "Bagneux, 18x24cm, Techniques mixtes sur papier, 2020",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/jardinieres/jardinieres.07.jpg",
                            thumbnails: "/assets/img/jardinieres/thumbs/jardinieres.07.jpg",
                            name: "Cachan 2, 18x24cm, Techniques mixtes sur papier, 2020",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/jardinieres/jardinieres.08.jpg",
                            thumbnails: "/assets/img/jardinieres/thumbs/jardinieres.08.jpg",
                            name: "Face à la gare Montparnasse, 18x24cm, Techniques mixtes sur papier, 2020",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/jardinieres/jardinieres.09.jpg",
                            thumbnails: "/assets/img/jardinieres/thumbs/jardinieres.09.jpg",
                            name: "Paris, 18x24cm, Techniques mixtes sur papier, 2020",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/jardinieres/jardinieres.10.jpg",
                            thumbnails: "/assets/img/jardinieres/thumbs/jardinieres.10.jpg",
                            name: "Cergy 1, 18x24cm, Techniques mixtes sur papier, 2015",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/jardinieres/jardinieres.11.jpg",
                            thumbnails: "/assets/img/jardinieres/thumbs/jardinieres.11.jpg",
                            name: "Cergy 2, 18x24cm, Techniques mixtes sur papier, 2015",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/jardinieres/jardinieres.12.jpg",
                            thumbnails: "/assets/img/jardinieres/thumbs/jardinieres.12.jpg",
                            name: "Cergy 3, 18x24cm, Techniques mixtes sur papier, 2015",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/jardinieres/jardinieres.13.jpg",
                            thumbnails: "/assets/img/jardinieres/thumbs/jardinieres.13.jpg",
                            name: "Cergy 4, 18x24cm, Techniques mixtes sur papier, 2015",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/jardinieres/jardinieres.14.jpg",
                            thumbnails: "/assets/img/jardinieres/thumbs/jardinieres.14.jpg",
                            name: "Clamart 2, 18x24cm, Techniques mixtes sur papier, 2020",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/jardinieres/jardinieres.15.jpg",
                            thumbnails: "/assets/img/jardinieres/thumbs/jardinieres.15.jpg",
                            name: "18x24cm, Techniques mixtes sur papier, Clamart 3, 2020",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/jardinieres/jardinieres.16.jpg",
                            thumbnails: "/assets/img/jardinieres/thumbs/jardinieres.16.jpg",
                            name: "Villebon Sur Yvette 1, 18x24cm, Techniques mixtes sur papier, 2020",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/jardinieres/jardinieres.17.jpg",
                            thumbnails: "/assets/img/jardinieres/thumbs/jardinieres.17.jpg",
                            name: "Villebon Sur Yvette 2, 18x24cm, Techniques mixtes sur papier, 2020",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/jardinieres/jardinieres.18.jpg",
                            thumbnails: "/assets/img/jardinieres/thumbs/jardinieres.18.jpg",
                            name: "Villebon Sur Yvette 4, 18x24cm, Techniques mixtes sur papier, 2020",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/jardinieres/jardinieres.19.jpg",
                            thumbnails: "/assets/img/jardinieres/thumbs/jardinieres.19.jpg",
                            name: "Villebon Sur Yvette 4, 18x24cm, Techniques mixtes sur papier, 2020",
                            width: 1.3,
                            height: 1
                        },
                        {
                            src: "/assets/img/jardinieres/jardinieres.20.jpg",
                            thumbnails: "/assets/img/jardinieres/thumbs/jardinieres.20.jpg",
                            name: "Clamart 1, 18x24cm, Techniques mixtes sur papier, 2020",
                            width: 1.3,
                            height: 1
                        }
                        ]
                    }
                },
            ]
        },

        /*
        * Paintings
        */
        {
            name: "paintings",
            pages: [

                /*
                * Voies rapides
                */
                {
                    name: "Voies rapides",
                    path: "/voies-rapides",
                    gallery: {
                        type: "image",
                        images: Array.from({length: 4}, (_, index) => ({
                            name: "",
                            src: `/assets/img/voies/voies.rapides.${index+1}.jpg`,
                            thumbnails: `/assets/img/voies/thumbs/voies.rapides.${index+1}.jpg`,
                            width: 1,
                            height: 1
                        }))
                    }
                },

                /*
                * Paysages
                */
                {
                    name: "Paysages",
                    path: "/paysages",
                    gallery: {
                        type: "image",
                        images: [{
                            name: "",
                            src: "/assets/img/paysage/paysage1.jpg",
                            thumbnails: "/assets/img/paysage/thumbs/paysage1.jpg",
                            width: 1,
                            height: 1
                        }, {
                            name: "Herbes, 2018, 67x77cm",
                            src: "/assets/img/paysage/paysage2.jpg",
                            thumbnails: "/assets/img/paysage/thumbs/paysage2.jpg",
                            width: 1,
                            height: 1
                        }, {
                            name: "Paysage, 2018, 68x40cm",
                            src: "/assets/img/paysage/paysage3.jpg",
                            thumbnails: "/assets/img/paysage/thumbs/paysage3.jpg",
                            width: 1,
                            height: 1
                        }, {
                            name: "Route 5, 2018, 76x82cm",
                            src: "/assets/img/paysage/paysage4.jpg",
                            thumbnails: "/assets/img/paysage/thumbs/paysage4.jpg",
                            width: 1,
                            height: 1
                        }]
                    }
                },

                /*
                * Road pictures
                */
                {
                    name: "Road Pictures",
                    path: "/road-pictures",
                    gallery: {
                        type: "image",
                        images: Array.from({length: 4}, (_, index) => ({
                            name: "",
                            src: `/assets/img/road/road${index+1}.jpg`,
                            thumbnails: `/assets/img/road/thumbs/road${index+1}.jpg`,
                            width: 1,
                            height: 1
                        }))
                    }
                },

            ]
        },

        /*
        * Commissions
        */
        {
            name: "commissions",
            pages: [

                /*
                * Voies rapides
                */
                {
                    name: "Revues Polymorphes",
                    path: "/polymorphes",
                    blocks: polymorpheBlocks
                },

                /*
                * Paysages
                */
                {
                    name: "The Big Nowhere",
                    path: "/the-big-nowhere",
                    blocks: [{
                        paragraph: <>
                            Peinture murale réalisée en 2019 dans les bureaux parisiens de la start-up FrontApp.
                            The Big Nowhere est le titre d’un roman de James Ellroy se passant en Californie.
                            <br/><br/>
                            Ce titre est devenu mon inspiration pour ce projet puisque la start up FrontApp est en grande partie basée à San Francisco.
                        </>,
                        images: [{
                            name: "The Big Nowhere",
                            src: "/assets/img/nowhere/the.big.nowhere.1.jpg"
                        }]
                    }, {
                        paragraph: <>
                            Je me suis demandée à quoi ressemblerait ce « grand nul part », ce lieu qui n’existe que dans nos imaginations.
                            J’ai ainsi réalisé ce paysage, à la limite de l’abstraction reprenant certains codes du rêve américain : un palmier, une piscine et une pelouse.
                        </>,
                        images: [{
                            name: "The Big Nowhere",
                            src: "/assets/img/nowhere/the.big.nowhere.2.jpg"
                        }]
                    }, {
                        images: [{
                            name: "The Big Nowhere",
                            src: "/assets/img/nowhere/the.big.nowhere.3.jpg"
                        }, {
                            name: "The Big Nowhere",
                            src: "/assets/img/nowhere/the.big.nowhere.4.jpg"
                        }]
                    }]
                }
            ]
        },

        /*
        * Views
        */
        {
            name: "views",
            path: "/views",
            gallery: {
                type: "image",
                images: [{
                    name: "Saisons Zero, 2020",
                    src: "/assets/img/vues/vues.0.jpg",
                    thumbnails: "/assets/img/vues/thumbs/vues.0.jpg",
                    width: 1,
                    height: 1
                }, {
                    name: "DNSEP, 2018",
                    src: "/assets/img/vues/vues.1.jpg",
                    thumbnails: "/assets/img/vues/thumbs/vues.1.jpg",
                    width: 1,
                    height: 1
                }, {
                    name: "DNSEP, 2018",
                    src: "/assets/img/vues/vues.2.jpg",
                    thumbnails: "/assets/img/vues/thumbs/vues.2.jpg",
                    width: 1,
                    height: 1
                }, {
                    name: "DNSEP, 2018",
                    src: "/assets/img/vues/vues.3.jpg",
                    thumbnails: "/assets/img/vues/thumbs/vues.3.jpg",
                    width: 1,
                    height: 1
                }, {
                    name: "DNSEP, 2018",
                    src: "/assets/img/vues/vues.4.jpg",
                    thumbnails: "/assets/img/vues/thumbs/vues.4.jpg",
                    width: 1,
                    height: 1
                }, {
                    name: "MASSIVE GROUPE SHOW, La rotonde, 2018",
                    src: "/assets/img/vues/vues.5.jpg",
                    thumbnails: "/assets/img/vues/thumbs/vues.5.jpg",
                    width: 1,
                    height: 1
                }, {
                    name: "La belle vie, l’amour, 2016",
                    src: "/assets/img/vues/vues.6.jpg",
                    thumbnails: "/assets/img/vues/thumbs/vues.6.jpg",
                    width: 1,
                    height: 1
                }, {
                    name: "Les habitants, galeries des marches, 2015",
                    src: "/assets/img/vues/vues.7.jpg",
                    thumbnails: "/assets/img/vues/thumbs/vues.7.jpg",
                    width: 1,
                    height: 1
                }]
            }
        },


        /*
        * About
        */
        {
            name: "About",
            path: "/about",
            component: <About/>
        }

    /*
    * Sections End.
    */
    ]
};

export default config;