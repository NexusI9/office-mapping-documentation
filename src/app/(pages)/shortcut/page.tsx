import Image from "next/image";

 function Shortcut(){


    return (<>
        <p>
            Si vous obtenez un message d&apos;erreur comme l&apos;image ci-dessous cela veut dire que le lien du raccourci à été brisé.
        </p>
        <Image src="/mapping/screenshots/notfound.webp" alt="not found" width="600" height="450" />
        <p>Vous trouverez ci-dessous différentes étape de troubleshootings</p>

        <ol>
            <li>
                Vérifier que l&apos;ordinateur est bien connecté au serveur Redboxmedia sous le disque <b>V:</b>
                <Image src="/mapping/screenshots/disko.webp" alt="not found" width="600" height="450" />
            </li>
            <li>
                Si l&apos;ordinateur est bien connecté, cela veut dire que le dossier &quot;MapManager&quot; a sûrement été déplacé.
                <br /><br />Il faut remettre le dossier au chemin suivant pour que le raccourci fonctionne à nouveau:
                <br />REDBOXMEDIA_server / Design / RedBox Media / Mapping /
            </li>
            <li>
                <p>Au cas contraire, si la connection à été brisée:<br/><br/></p>
                <ol type="a">
                    <li>Aller dans l&apos;onglet Network de l&apos;explorateur</li>
                    <li>Se connecter au serveur REDBOXMEDIA2 avec votre login Redbox</li>
                    <li>
                        Une fois connecté au serveur faire un clique droit sur le dossier &quot;REDBOXMEDIA_server&quot; et cliquez sur &quot;Map network drive&quot;
                        <Image src="/mapping/screenshots/map.webp" alt="map directory" width="600" height="450" />
                    </li>
                    <li>
                        Dans la liste des Drive, choisir la lettre <b>V:</b>
                        <Image src="/mapping/screenshots/vdrive.webp" alt="v drive directory" width="600" height="450" />
                    </li>
                    <li>Le dossier est à présent à nouveau lié et vous pouvez à nouveau créer un nouveau shortcut à partir du fichier suivant:
                    REDBOXMEDIA_server / Design / RedBox Media / Mapping / src / MapManager.bat
                    </li>
                </ol>
            </li>
        </ol>
    </>);
}

export default Shortcut;