import styles from "@/app/page.module.scss";

function Files() {
    return (<>
        <p>Si le projecteur a été bougé et que le mapping est décalé, suivez les instructions suivantes pour corriger le mapping</p>
        <ol>
            <li>
                Brancher un second écran à l&apos;ordinateur, un cable HDMI devrait déjà être disponible pour être branché.
                <img src="/mapping/screenshots/screen.webp" alt="config volume" width="600" height="450" />
            </li>
            <li>Lancer le fichier MadMapper au chemin suivant:<br />
                REDBOXMEDIA_server/Design/RedBox Media/Mapping/MapManager/src/redbox_mapping_2023.mad
            </li>
            <li>
                Appuyez sur <span className={styles.key}>CTRL + T</span> pour quitter le mode plein écran
            </li>
            <li>
                Glisser la fenêtre MadMapper dans le second écran.
            </li>
            <li>
                Cliquer sur l&apos;icône output
                <img src="/mapping/screenshots/mp-output.webp" alt="config volume" width="600" height="450" />
            </li>
            <li>
                Dans le dropdown destination en bas à gauche, sélectionner 2 - PNP Generic Monitor<br/>
                Ceci va permettre d&apos;afficher le mode plein écran sur le projecteur (aka PNP Generic Monitor)
                <img src="/mapping/screenshots/mp-pnp.webp" alt="config volume" width="600" height="450" />
            </li>
            <li>
                Appuyez sur <span className={styles.key}>CTRL + U</span> pour afficher le mode plein écran sur le projecteur
            </li>
            <li>
               Retourner dans l&apos;onglet principal
               <img src="/mapping/screenshots/mp-back.webp" alt="config volume" width="600" height="450" />
            </li>
            <li>
                S&apos;assurer que tous les layers du paneau de gauche ne soient pas <i>locked</i> (icône cadena)
            </li>
            <li>
                Dans le paneau de droite il suffit désormais de cliquer sur les poignée en forme de cercle pour ajuster le mapping
                <img src="/mapping/screenshots/mp-right-pan.webp" alt="config volume" width="600" height="450" />
                <img src="/mapping/screenshots/mp-handle.webp" alt="config volume" width="600" height="450" />
            </li>
            <li>
                Une fois les modifications apportés, ne pas oublier de sauvegarder avec <span className={styles.key}>CTRL + S</span>
            </li>
        </ol>
    </>);
}


export default Files;