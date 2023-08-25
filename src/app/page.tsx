import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';
import ROUTE from '@/app/lib/route';
import COMMANDES from '@/app/lib/commands';



export default () => {
  return (<>
      <header className={styles.header}>
        <Image src='/logo.png' alt='logo' width='100' height='125' />
        <h1>Redbox Mapping assistance</h1>
      </header>

      <section className={`${styles.sections} ${styles.commands}`}>
        <h2>Commandes</h2>
        <ul>
          {
            COMMANDES.map(({ key, description }) =>
              <li key={`command_${key}`}>
                <p className={styles.key}>{key}</p>
                <p><b>{description}</b></p>
              </li>)
          }
        </ul>
      </section>

      <section className={`${styles.sections} ${styles.faq}`}>
        <h2>FAQ</h2>
        <ul>
          {
            ROUTE.map(({ label, route }) =>
              <li key={`route_${label}`}>
                <Link href={`/${route}`}>
                  <p>{label}</p>
                  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.8632 46.1227L39.3525 28.1812C39.6596 27.8661 39.8315 27.4434 39.8315 27.0034C39.8315 26.5633 39.6596 26.1406 39.3525 25.8255L21.8632 7.87725C21.7201 7.73028 21.549 7.61348 21.3601 7.53372C21.1711 7.45397 20.9681 7.41288 20.763 7.41288C20.5579 7.41288 20.3548 7.45397 20.1658 7.53372C19.9769 7.61348 19.8058 7.73028 19.6627 7.87725C19.3683 8.17863 19.2035 8.5832 19.2035 9.0045C19.2035 9.42579 19.3683 9.83037 19.6627 10.1317L36.1091 27.0034L19.6627 43.8716C19.3693 44.1728 19.2052 44.5767 19.2052 44.9972C19.2052 45.4177 19.3693 45.8215 19.6627 46.1227C19.8058 46.2697 19.9769 46.3865 20.1658 46.4663C20.3548 46.546 20.5578 46.5871 20.763 46.5871C20.9681 46.5871 21.1711 46.546 21.3601 46.4663C21.549 46.3865 21.7201 46.2697 21.8632 46.1227Z"/>
                  </svg>
                </Link>
              </li>)
          }
        </ul>

      </section>

    </>
  )
}
