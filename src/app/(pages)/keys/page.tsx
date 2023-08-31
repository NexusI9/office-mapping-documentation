import styles from "@/app/page.module.scss";
import Image from "next/image";

function Keys(){


    return (<ol>
        <li><span className="f-row">Appuyers sur la touche <span className={styles.key}>F1</span></span></li>
        <li>
            Dans la barre des tâches en bas de l&apos;écran cliquer sur l&apos;application 
            <span className="f-row"><img src="/mapping/screenshots/td_icon.webp" alt="touchdesigner icon" width="30" height="30"/>TouchDesigner</span>
            <img src="/mapping/screenshots/td_bar.webp" alt="touchdesigner bar" width="600" height="448"/>
        </li>

    </ol>);
}

export default Keys;