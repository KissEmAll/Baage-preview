import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Charge le widget Runway après montage
    const script = document.createElement('script')
    script.src = 'https://cdn.dev.runwayml.com/prod/widget.js'
    script.setAttribute('data-pub-key', 'pub_c3c3436bd63df6d6f929e2c35cb46a4a24508e1e1b26753f8f2a79ddd41dcbe0')
    script.async = true
    document.body.appendChild(script)

    // Animation d'entrée
    setTimeout(() => setLoaded(true), 300)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Baage — Votre génie du voyage</title>
        <meta name="description" content="Captain Baage, votre conciergerie de voyage IA. Parlez-lui de vos envies, il s'occupe du reste." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      <div className={`${styles.page} ${loaded ? styles.loaded : ''}`}>

        {/* Fond étoilé animé */}
        <div className={styles.stars} />
        <div className={styles.stars2} />
        <div className={styles.stars3} />

        {/* Halos lumineux */}
        <div className={styles.halo1} />
        <div className={styles.halo2} />

        {/* Grain overlay */}
        <div className={styles.grain} />

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.logo}>
            <span className={styles.logoDot}>b</span>
            <span className={styles.logoText}>aage</span>
          </div>
          <nav className={styles.nav}>
            <a href="#" className={styles.navLink}>Destinations</a>
            <a href="#" className={styles.navLink}>Expériences</a>
            <a href="#" className={styles.navLink}>À propos</a>
          </nav>
        </header>

        {/* Hero */}
        <main className={styles.main}>

          {/* Texte gauche */}
          <div className={styles.heroLeft}>
            <p className={styles.eyebrow}>Votre conciergerie de voyage IA</p>
            <h1 className={styles.headline}>
              Il connaît<br />
              <em>l'endroit exact</em><br />
              qu'il vous faut.
            </h1>
            <p className={styles.subline}>
              Parlez à Captain Baage de vos envies — même les plus vagues.
              Il devine ce que vous cherchez avant que vous le sachiez.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>🌊 Mer & silence</span>
              <span className={styles.tag}>🏔️ Altitude & vertige</span>
              <span className={styles.tag}>🌿 Nature & lenteur</span>
              <span className={styles.tag}>🏙️ Énergie urbaine</span>
              <span className={styles.tag}>✨ Surprenez-moi</span>
            </div>
          </div>

          {/* Zone Captain Baage — le widget Runway s'ouvre ici */}
          <div className={styles.heroRight}>
            <div className={styles.captainFrame}>
              <div className={styles.captainGlow} />
              <div className={styles.captainLabel}>
                <span className={styles.captainDot} />
                Captain Baage est disponible
              </div>
            </div>
          </div>

        </main>

        {/* Footer minimal */}
        <footer className={styles.footer}>
          <p>© 2025 Baage · Tous droits réservés</p>
          <div className={styles.footerLinks}>
            <a href="#">Mentions légales</a>
            <a href="#">Confidentialité</a>
            <a href="#">Contact</a>
          </div>
        </footer>

      </div>
    </>
  )
}
