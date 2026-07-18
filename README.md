# Marwa Twin - Salon de Beauté Luxe

Landing page moderne et élégante pour le salon de beauté **Marwa Twin** situé à Tiflet.

## 🎨 Design & Couleurs

- **Couleur principale:** Vert Émeraude Profond (#023020)
- **Accents:** Or Riche (#D4AF37)
- **Style:** Luxe, professionnel et chic
- **UI/UX:** Design épuré et moderne

## 🚀 Technologie

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Polices:** Playfair Display (calligraphique), Lora (élégante)

## 📦 Installation et Utilisation

### Prérequis
- Node.js 16 ou supérieur
- npm ou yarn

### Installation des dépendances
```bash
npm install
```

### Démarrage du serveur de développement
```bash
npm run dev
```
Le site s'ouvrira automatiquement sur `http://localhost:5173`

### Build pour la production
```bash
npm run build
```

### Aperçu de la production
```bash
npm run preview
```

## 📑 Structure du Projet

```
marwa-twins/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation et logo
│   │   ├── Hero.jsx         # Section accueil avec CTA
│   │   ├── Services.jsx     # Showcase des prestations
│   │   └── Footer.jsx       # Contact et réseaux sociaux
│   ├── App.jsx              # Composant principal
│   ├── main.jsx             # Point d'entrée React
│   └── index.css            # Styles personnalisés
├── index.html               # HTML principal
├── package.json             # Dépendances et scripts
├── tailwind.config.js       # Configuration Tailwind
├── postcss.config.js        # Configuration PostCSS
└── vite.config.js           # Configuration Vite
```

## ✨ Sections du Site

### 1. Header/Navigation
- Logo calligraphique "Marwa Twin"
- Menu responsive (Accueil, Nos Services, Contact)
- Style sticky et élégant

### 2. Section Hero (Accueil)
- Titre accrocheur: "Révélez votre beauté avec Marwa Twin"
- Sous-titre accueillant
- Boutons d'appel à l'action:
  - "Réserver mon moment" (WhatsApp)
  - "En savoir plus"

### 3. Section Services
Prestations affichées en cartes élégantes:

**Onglerie:**
- Manucure professionnelle
- Nail Art

**Coiffure:**
- Brushing
- Lissage aux plaques
- Mèches

### 4. Footer/Contact
- Localisation: Tiflet, Maroc
- Bouton WhatsApp pour prise de rendez-vous
- Lien Instagram: @marwa_anbar____
- Informations pratiques et horaires

## 🎯 Fonctionnalités

✅ Design responsive et mobile-friendly
✅ Navigation fluide et intuitive
✅ Intégration WhatsApp pour réservations
✅ Lien Instagram direct
✅ Animations et transitions élégantes
✅ Accessibilité optimisée
✅ Performance optimisée
✅ Contenu 100% en français

## 🔧 Customisation

### Modifier les couleurs
Éditer `tailwind.config.js` pour changer les couleurs primaires.

### Ajouter des services
Modifier le tableau `services` dans `Services.jsx`.

### Mettre à jour les liens
- WhatsApp: Modifier le numéro de téléphone dans `handleWhatsApp()`
- Instagram: Modifier le lien dans `Footer.jsx`

### Changer la localisation
Éditer les informations de localisation dans `Footer.jsx`.

## 📈 Analytics, RGPD et Déploiement

- **Cookie Consent / RGPD:** Une bannière de consentement apparaît pour activer les outils analytiques. Le script Plausible est chargé uniquement après acceptation.
- **Analytics:** Intégration légère Plausible (script chargé après consentement). Remplacez la source si vous utilisez Google Tag.
- **Déploiement (GitHub → Vercel):**
  1. Poussez le repository sur GitHub.
  2. Créez un projet sur Vercel et connectez votre dépôt GitHub.
  3. Vercel détecte automatiquement Vite et déploie le site.

Exemple rapide pour pousser depuis la machine locale:
```bash
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

## 📱 Responsive Design

Le site est optimisé pour:
- 📱 Téléphones (320px+)
- 📱 Tablettes (768px+)
- 💻 Ordinateurs (1024px+)

## 📝 License

© 2024 Marwa Twin. Tous droits réservés.

## 📧 Support

Pour toute question ou modification, veuillez contacter le développeur.

---

**Créé avec ❤️ pour Marwa Twin | Tiflet, Maroc**
