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
        <title>Cap'tain Baage — Génie du voyage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { background: #0D1B3E; color: #fff; font-family: 'DM Sans', sans-serif; min-height: 100vh; overflow-x: hidden; }

          .halo { position: fixed; width: 800px; height: 800px; border-radius: 50%;
            background: radial-gradient(circle, rgba(59,123,245,0.12) 0%, transparent 70%);
            top: -200px; left: 50%; transform: translateX(-50%);
            pointer-events: none; z-index: 0;
            animation: pulse 6s ease-in-out infinite alternate; }
          @keyframes pulse { 0% { opacity: 0.6; transform: translateX(-50%) scale(1); } 100% { opacity: 1; transform: translateX(-50%) scale(1.1); } }

          .page { min-height: 100vh; display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            position: relative; z-index: 1; padding: 40px 20px; text-align: center; }

          .logo { font-family: 'Cormorant Garamond', serif;
            font-size: clamp(48px, 7vw, 80px); font-weight: 300;
            color: #fff; letter-spacing: 0.04em; margin-bottom: 16px; line-height: 1; }
          .logo em { font-style: italic; color: #F2A923; font-weight: 400; }

          .tagline { font-size: clamp(15px, 2vw, 19px); font-weight: 300;
            color: rgba(255,255,255,0.55); line-height: 1.7;
            max-width: 480px; margin: 0 auto 48px; }

          .captain-wrap { position: relative; display: inline-block; }
          .captain-img { width: clamp(280px, 40vw, 520px); height: auto;
            mix-blend-mode: screen;
            animation: floating 4s ease-in-out infinite;
            filter: drop-shadow(0 0 60px rgba(59,123,245,0.5)); }
          @keyframes floating {
            0%,100% { transform: translateY(0); filter: drop-shadow(0 0 40px rgba(59,123,245,0.4)); }
            50% { transform: translateY(-18px); filter: drop-shadow(0 0 80px rgba(59,123,245,0.7)); } }

          .status { display: inline-flex; align-items: center; gap: 8px;
            background: rgba(13,27,62,0.7); border: 1px solid rgba(242,169,35,0.25);
            border-radius: 100px; padding: 8px 22px; font-size: 12px;
            color: rgba(255,255,255,0.45); margin-top: 28px;
            backdrop-filter: blur(12px); letter-spacing: 0.05em; }
          .dot { width: 7px; height: 7px; border-radius: 50%; background: #4ADE80;
            animation: blink 2s ease-in-out infinite; }
          @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
        `}</style>
      </Head>

      <div className="halo" />

      <div className="page">
        <h1 className="logo">
          Cap&apos;tain <em>Baage</em>
        </h1>
        <p className="tagline">
          Racontez à notre concierge votre projet de voyage,<br />
          il s&apos;occupe de tout.
        </p>

        <div className="captain-wrap">
          <img
            src="https://raw.githubusercontent.com/KissEmAll/Baage-preview/main/baage-preview/Captain%20Baage%20-%20WEB%20HD.png"
            alt="Captain Baage"
            className="captain-img"
          />
        </div>

        <div className="status">
          <span className="dot" />
          Disponible maintenant
        </div>
      </div>
    </>
  )
}
