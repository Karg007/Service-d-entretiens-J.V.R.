# Service d’entretien J.V.R.

Site vitrine de Service d’entretien J.V.R., prêt pour GitHub et Vercel.

## Mise en ligne

1. Décompressez ce dossier.
2. Créez un nouveau dépôt sur GitHub.
3. Ajoutez tout le contenu de ce dossier à la racine du dépôt, puis publiez-le.
4. Dans Vercel, choisissez **Add New → Project**.
5. Importez le dépôt GitHub.
6. Laissez **Framework Preset: Next.js** et les autres réglages par défaut.
7. Cliquez sur **Deploy**.

Vercel installera les dépendances et exécutera automatiquement `npm run build`.

## Travail local facultatif

```bash
npm install
npm run dev
```

Ouvrez ensuite `http://localhost:3000`.

## Contenu principal

- `app/page.tsx` : contenu et structure de la page;
- `app/globals.css` : apparence et affichage adaptatif;
- `app/quote-form.tsx` : formulaire qui prépare le courriel;
- `public/` : image de couverture et icône du site.

Le site ne nécessite aucune variable d’environnement.
