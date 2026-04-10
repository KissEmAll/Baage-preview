# Baage Preview — Captain Baage sur Vercel

## Structure
```
baage-preview/
├── pages/
│   ├── _app.js
│   └── index.js        ← page principale avec widget Runway
├── styles/
│   ├── globals.css
│   └── Home.module.css ← tout le design
├── package.json
└── next.config.js
```

## Déploiement sur Vercel — 3 étapes

### 1. Crée un repo GitHub
```bash
git init
git add .
git commit -m "Captain Baage — premier déploiement"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/baage-preview.git
git push -u origin main
```

### 2. Importe sur Vercel
- Va sur vercel.com → "Add New Project"
- Connecte ton repo GitHub baage-preview
- Framework : Next.js (détecté automatiquement)
- Clique Deploy — c'est tout

### 3. Ajoute ton URL Vercel dans Runway
- Une fois déployé, copie ton URL (ex: baage-preview.vercel.app)
- Dans Runway Developer Portal → ton character → Embed
- Allowed Origins → ajoute : https://baage-preview.vercel.app
- Sauvegarde

## Captain Baage apparaît automatiquement
Le widget Runway se charge via le script tag dans index.js.
Il apparaît en bas à droite par défaut — configurable dans le portail Runway (Embed → Interface).

## Pub Key
La pub_key est déjà dans index.js :
pub_c3c3436bd63df6d6f929e2c35cb46a4a24508e1e1b26753f8f2a79ddd41dcbe0

## Pour la suite
- Remplacer https://example.com par ton URL Vercel dans Runway Allowed Origins
- Ajouter baage.fr quand tu auras accès au back-office
- Brancher le proxy /api/chat vers Claude quand on voudra aller plus loin que Runway natif
