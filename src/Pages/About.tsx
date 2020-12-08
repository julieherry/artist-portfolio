import React  from "react";
import "./About.css";

export default function About () {
    return <div className="page">
        <div className="presentation">
            <div>
                <strong>julieherry@yahoo.fr</strong>
                <p>Née à Paris en 1989, vit et travaille entre Cachan (94) et Aubusson (23)</p>
                <p>Diplomée de l’ENSAPC (Cergy), j’ai développé une pratique du dessin figuratif questionnant les lieux ainsi que l’émerveillement et le rêve qu’ils peuvent provoquer. Inspirée à la fois par ce qui fait mon quotidien et le rêve qu’on nous vend au travers des images, je reconstruis ces lieux dans le dessin avec des confrontations de formes, de surfaces, de techniques, de couleurs, en créant un espace collage dans la feuille de papier ou lors de l’accrochage.</p>
            </div>
            <img src="/assets/img/julie.jpg" alt="Julie Herry" />
        </div>

        <div className="expositions">

            <h1>EXPOSITIONS COLLECTIVES</h1>

            <h2>2019</h2>
            <ul>
                <li>Pocket Monsters Entrance, New York</li>
                <li>Dabbling Duck Cité internationale des arts,Paris</li>
                <li>Paysage Latéral de Sécurité, AMAC Project, Paris</li>
            </ul>
            

            <h2>2018</h2>
            <ul>
                <li>Petites et grandes entreprises, Lieu Unique, Nantes</li>
                <li>MASSIVE GROUPE SHOW, La Rotonde Paris</li>
            </ul>

            <h2>2017</h2>
            <ul>
                <li>Utopies fluviales, Parc du chemin de l’île, Nanterre</li>
            </ul>

            <h2>2016</h2>
            <ul>
                <li>La belle vie, L’amour, Bagnolet</li>
            </ul>

            <h2>2015</h2>
            <ul>
                <li>Les habitants, galerie Des marches, Aubusson</li>
            </ul>

            <h2>2013</h2>
            <ul>
                <li>Mille feuillets III, Ygrec, Paris</li>
            </ul>

            <h2>2012</h2>
            <ul>
                <li>Une exposition, 22RUEMULLER, Paris</li>
            </ul>
        </div>
    </div>
}
