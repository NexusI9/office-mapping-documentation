import Image from "next/image";

function Soundtrack(){


    return (<>
        <ol>
            <li>Renommer le nouveau fichier audio en <b><i>soundtrack.mp3</i></b></li>
            <li>Aller sur le serveur au chemin suivant: <br/>
            REDBOXMEDIA_server / Design / RedBox Media / Mapping / MapManager / src / assets
            </li>
            <li>Remplacer le fichier soundtrack.mp3 par le nouveau</li>
        </ol>

        <hr/>

        <h1>Comment ajuster le volume ?</h1>
        <ol>
            <li>
                Aller au chemin suivant: <br/>
                REDBOXMEDIA_server / Design / RedBox Media / Mapping / MapManager / src
            </li>
            <li>
                Ouvrir le fichier <b><i>config.json</i></b>
            </li>
            <li>
                Sous la clé &quot;soundtrack&quot; modifier la valeur de &quot;volume&quot;
                <br/>
                Attention, la valeur doit être comprise entre 0 et 1.
                <Image src="/mapping/screenshots/volume.webp" alt="config volume" width="600" height="450" />
            </li>
        </ol>
    </>);
}

export default Soundtrack;