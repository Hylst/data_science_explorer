
# Data Science Explorer

Un site web complet et didactique sur la Data Science, conçu pour répondre aux besoins des débutants comme des experts.

## À propos du projet

Data Science Explorer est une plateforme éducative dédiée à l'apprentissage de la Data Science. Le site propose un contenu structuré de façon progressive, allant des concepts fondamentaux aux techniques avancées de Machine Learning et d'Intelligence Artificielle.

### Caractéristiques principales

- **Contenu progressif** : De l'introduction aux techniques avancées
- **Approche didactique** : Explications claires, illustrations et exemples concrets
- **Ressources pratiques** : Exercices, tutoriels et projets guidés
- **Communauté active** : Forum d'entraide et partage de connaissances
- **Glossaire technique interactif** : Termes et concepts expliqués au survol ou au clic
- **Visualisations enrichies** : Exemples interactifs des concepts clés
- **Cours d'initiation intégrés** : 24 cours structurés couvrant tous les aspects de la Data Science
- **Contenu pédagogique interactif** : Modules d'apprentissage avec exemples, explications détaillées et quizz d'évaluation

## Structure du site

- **Introduction à la Data Science** : Définitions, histoire, métiers et applications
- **Fondamentaux** : Mathématiques, statistiques, programmation (Python, R)
- **Machine Learning** : Algorithmes supervisés, non supervisés, deep learning
- **Outils et technologies** : Frameworks, bibliothèques, environnements de développement
- **Projets pratiques** : Études de cas et applications réelles
- **Ressources** : Livres, cours en ligne, datasets, glossaire, cours d'initiation
- **Communauté** : Forum, blog, événements, offres d'emploi

## Fonctionnalités interactives

- **Visualisations mathématiques** : Représentations graphiques des concepts clés
- **Termes techniques expliqués** : Survol pour définitions concises, clic pour explications détaillées
- **Navigation intuitive** : Structure de page avec sections clairement définies
- **Glossaire technique enrichi** : 
  - Classification par domaines (statistiques, programmation, ML, etc.)
  - Niveaux de difficulté (débutant, intermédiaire, avancé)
  - Exemples concrets, synonymes, termes anglais équivalents
  - Relations entre concepts pour faciliter l'apprentissage
  - Différents styles de mise en évidence des termes (soulignage, pointillés, etc.)
- **Cours d'initiation structurés** :
  - 5 catégories thématiques couvrant l'ensemble du domaine
  - 24 cours détaillés avec modules et descriptions
  - Interface interactive pour explorer les cours par catégorie
  - Contenu développé par des experts du domaine
  - Modules d'apprentissage interactifs avec quizz d'évaluation
  - Illustrations et exemples pratiques pour chaque concept

## Technologies utilisées

- **React 18** with TypeScript for robust component development
- **Tailwind CSS** for modern, responsive styling
- **shadcn/ui** for consistent, accessible UI components
- **React Router** for seamless navigation
- **Supabase** for backend services and data management
- **KaTeX** for mathematical notation rendering
- **Recharts** for interactive data visualizations
- **React Flow** for creating interactive diagrams
- **Vite** for fast development and optimized builds
- **TanStack Query** for efficient data fetching and caching
- **React Hook Form** with Zod validation for form management

## Installation et développement local

```bash
# Cloner le dépôt
git clone <URL_DU_DEPOT>

# Installer les dépendances
npm install

# Lancer l'environnement de développement
npm run dev
```

## Code Quality & Architecture

### Current Status
- **TypeScript Configuration**: Relaxed settings for rapid development (strict mode disabled)
- **Component Architecture**: Modular design with clear separation of concerns
- **State Management**: Local state with React hooks, TanStack Query for server state
- **Routing**: Comprehensive routing with legacy route redirects
- **Performance**: Optimized with code splitting and lazy loading

### Known Issues & Improvements
- Large component files (BlogList.tsx: 550 lines) need refactoring
- TypeScript strict mode should be enabled gradually
- Some components use `any` types that need proper typing
- Duplicate code patterns in course components
- Missing error boundaries for better error handling

## Contribuer au projet

Nous accueillons les contributions ! Si vous souhaitez participer au développement du projet :

1. Consultez les issues existantes ou créez-en une nouvelle
2. Forker le projet
3. Créez une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalite`)
4. Committez vos changements (`git commit -m 'Ajout de ma fonctionnalité'`)
5. Poussez vers la branche (`git push origin feature/ma-fonctionnalite`)
6. Ouvrez une Pull Request

### Guidelines de contribution

- Respectez les conventions de code existantes
- Ajoutez des tests pour les nouvelles fonctionnalités
- Documentez les changements importants
- Assurez-vous que tous les tests passent
- Follow TypeScript best practices and avoid `any` types
- Keep components under 200 lines when possible
- Use proper error handling and loading states

## Licence

Ce projet est sous licence [MIT](LICENSE).

## Contact

Pour toute question ou suggestion, n'hésitez pas à nous contacter.
