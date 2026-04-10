import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.dev.runwayml.com/prod/widget.js'
    script.setAttribute('data-pub-key', 'pub_c3c3436bd63df6d6f929e2c35cb46a4a24508e1e1b26753f8f2a79ddd41dcbe0')
    script.async = true
    document.body.appendChild(script)
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Baage — Votre génie du voyage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { background: #0D1B3E; color: #fff; font-family: 'DM Sans', sans-serif; min-height: 100vh; }
          .stars { position: fixed; inset: 0; pointer-events: none; z-index: 0;
            background-image:
              radial-gradient(1px 1px at 8% 12%, rgba(255,255,255,0.8) 0%, transparent 100%),
              radial-gradient(1px 1px at 22% 35%, rgba(255,255,255,0.5) 0%, transparent 100%),
              radial-gradient(1.5px 1.5px at 38% 7%, rgba(255,255,255,0.7) 0%, transparent 100%),
              radial-gradient(1px 1px at 55% 20%, rgba(255,255,255,0.4) 0%, transparent 100%),
              radial-gradient(1px 1px at 72% 14%, rgba(255,255,255,0.6) 0%, transparent 100%),
              radial-gradient(1px 1px at 15% 65%, rgba(255,255,255,0.4) 0%, transparent 100%),
              radial-gradient(1px 1px at 48% 78%, rgba(255,255,255,0.5) 0%, transparent 100%),
              radial-gradient(1.5px 1.5px at 60% 48%, rgba(242,169,35,0.3) 0%, transparent 100%); }
          .halo { position: fixed; width: 700px; height: 700px; border-radius: 50%;
            background: radial-gradient(circle, rgba(59,123,245,0.1) 0%, transparent 70%);
            top: -200px; right: -150px; pointer-events: none; z-index: 0;
            animation: float 12s ease-in-out infinite alternate; }
          @keyframes float { 0% { transform: scale(1); } 100% { transform: scale(1.1) translate(-30px, 40px); } }
          .header { position: relative; z-index: 10; display: flex; align-items: center;
            justify-content: space-between; padding: 28px 60px;
            border-bottom: 1px solid rgba(255,255,255,0.06); }
          .logo { font-family: 'Cormorant Garamond', serif; font-size: 38px;
            font-weight: 300; color: #fff; letter-spacing: 0.06em; }
          .logo span { color: #F2A923; font-weight: 600; }
          .nav { display: flex; gap: 36px; }
          .nav a { font-size: 12px; font-weight: 400; letter-spacing: 0.12em;
            text-transform: uppercase; color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s; }
          .nav a:hover { color: #F2A923; }
          .hero { position: relative; z-index: 5; display: grid; grid-template-columns: 1fr 1fr;
            align-items: center; gap: 80px; padding: 80px 60px; max-width: 1300px; margin: 0 auto; }
          .eyebrow { font-size: 11px; font-weight: 500; color: #F2A923; letter-spacing: 0.2em;
            text-transform: uppercase; margin-bottom: 20px;
            display: flex; align-items: center; gap: 12px; }
          .eyebrow::before { content: ''; width: 28px; height: 1px; background: #F2A923; display: inline-block; }
          .headline { font-family: 'Cormorant Garamond', serif; font-size: clamp(44px, 5vw, 70px);
            font-weight: 300; line-height: 1.1; color: #fff; margin-bottom: 24px; }
          .headline em { font-style: italic; color: #F2A923; font-weight: 400; }
          .subline { font-size: 15px; font-weight: 300; color: rgba(255,255,255,0.5);
            line-height: 1.9; max-width: 400px; margin-bottom: 40px; }
          .tags { display: flex; flex-wrap: wrap; gap: 10px; }
          .tag { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
            border-radius: 100px; padding: 8px 18px; font-size: 13px; color: rgba(255,255,255,0.5);
            cursor: pointer; transition: all 0.2s; white-space: nowrap; }
          .tag:hover { background: rgba(242,169,35,0.12); border-color: rgba(242,169,35,0.35);
            color: #FFCF6B; transform: translateY(-2px); }
          .captain-zone { display: flex; align-items: center; justify-content: center; }
          .captain-ring { width: 360px; height: 440px;
            border: 1px solid rgba(242,169,35,0.15);
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
            display: flex; align-items: center; justify-content: center;
            animation: breathe 4s ease-in-out infinite; }
          @keyframes breathe {
            0%,100% { box-shadow: 0 0 40px rgba(59,123,245,0.1); }
            50% { box-shadow: 0 0 80px rgba(59,123,245,0.25); } }
          .captain-inner { text-align: center; padding: 40px 20px; }
          .captain-title { font-family: 'Cormorant Garamond', serif; font-size: 22px;
            font-weight: 400; font-style: italic; color: rgba(255,255,255,0.7); margin-bottom: 16px; }
          .captain-status { display: inline-flex; align-items: center; gap: 8px;
            background: rgba(13,27,62,0.8); border: 1px solid rgba(242,169,35,0.25);
            border-radius: 100px; padding: 8px 20px; font-size: 12px; color: rgba(255,255,255,0.5); }
          .dot { width: 7px; height: 7px; border-radius: 50%; background: #4ADE80;
            animation: pulse 2s ease-in-out infinite; }
          @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
          .captain-cta { margin-top: 20px; font-size: 12px; letter-spacing: 0.1em;
            color: rgba(242,169,35,0.6); text-transform: uppercase;
            animation: blink 2.5s ease-in-out infinite; }
          @keyframes blink { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }
          .footer { position: relative; z-index: 5; display: flex; align-items: center;
            justify-content: space-between; padding: 20px 60px;
            border-top: 1px solid rgba(255,255,255,0.05);
            font-size: 12px; color: rgba(255,255,255,0.2); }
          .footer-links { display: flex; gap: 24px; }
          .footer-links a { color: rgba(255,255,255,0.2); text-decoration: none; }
          @media (max-width: 900px) {
            .header { padding: 20px 24px; } .nav { display: none; }
            .hero { grid-template-columns: 1fr; padding: 40px 24px; gap: 40px; }
            .captain-zone { display: none; }
            .footer { padding: 16px 24px; flex-direction: column; gap: 8px; } }
        `}</style>
      </Head>

      <div className="stars" />
      <div className="halo" />

      <header className="header">
        <div className="logo"><span>b</span>aage</div>
        <nav className="nav">
          <a href="#">Destinations</a>
          <a href="#">Expériences</a>
          <a href="#">À propos</a>
        </nav>
      </header>

      <main className="hero">
        <div>
          <p className="eyebrow">Conciergerie de voyage IA</p>
          <h1 className="headline">
            Il connaît<br />
            <em>l&apos;endroit exact</em><br />
            qu&apos;il vous faut.
          </h1>
          <p className="subline">
            Parlez à Captain Baage de vos envies — même les plus vagues.
            Il devine ce que vous cherchez avant que vous le sachiez.
          </p>
          <div className="tags">
            <span className="tag">🌊 Mer &amp; silence</span>
            <span className="tag">🏔️ Altitude &amp; vertige</span>
            <span className="tag">🌿 Nature &amp; lenteur</span>
            <span className="tag">🏙️ Énergie urbaine</span>
            <span className="tag">✨ Surprenez-moi</span>
          </div>
        </div>
        <div className="captain-zone">
          <div className="captain-ring">
            <div className="captain-inner">
              <p className="captain-title">Captain Baage</p>
              <div className="captain-status">
                <span className="dot" />
                Disponible maintenant
              </div>
              <p className="captain-cta">Cliquez pour lui parler ↓</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 Baage</p>
        <div className="footer-links">
          <a href="#">Mentions légales</a>
          <a href="#">Confidentialité</a>
        </div>
      </footer>
    </>
  )
}
