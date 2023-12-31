import Image from "next/image";
import styles from "@/app/page.module.scss";

function Start(){
    return (<>
        <ol>
            <li>Démarrer le PC dans le boîtier en bois</li>
            <li>Allumer le vidéo-projecteur</li>
            <li>S&apos;assurer que la source est bien sur le PC et non sur le Chrome Cast (source: HDMI-1)</li>
            <li>
                Sur le bureau lancer le raccourci <b>MapManager</b>
                <img src="/mapping/screenshots/shortcut.webp" alt="shortcut" width="653" height="489" />
            </li>
            <li>
                <p>Attendre environ 10 secondes le temps que le serveur se lance.
                <br/>
                Si après 10 secondes Google Chrome ne s&apos;est pas lancé, appuyer sur ENTRER
                </p>
            </li>
            <li>
                Une fois chrome lancé, vous pouvez y accéder sur mobile à partir de l&apos;ip affichée en haut à droite de l&apos;écran:
                <img src="/mapping/screenshots/ip.webp" alt="shortcut" width="600" height="450" />
            </li> 
            
            <li>Éventuellement modifier les informations souhaitées (tagline, logo du client)
            </li>
            <li>Cliquer sur <b>Lancer le mapping</b></li>
        </ol>
    </>);
};

export default Start;