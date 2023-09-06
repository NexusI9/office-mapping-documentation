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
            <li>Une fois chrome lancer, vous pouvez y accéder sur votre mobile à partir de l&apos;ip suivante: 
                <br/><b>192.168.0.106:8000</b></li>
            <li>Éventuellement modifier les informations souhaitées (tagline, logo du client)
            </li>
            <li>Cliquer sur <b>Lancer le mapping</b></li>
        </ol>
    </>);
};

export default Start;