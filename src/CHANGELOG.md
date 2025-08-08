
# Changelog

Toutes les modifications notables apportées à ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Non publié]

### Ajouté
- Structure initiale du projet avec React, TypeScript et Tailwind CSS
- Intégration de shadcn/ui pour les composants d'interface
- Configuration de la navigation avec React Router
- Page d'accueil avec les sections principales (Hero, FeaturedCategories, FeaturedCourses, etc.)
- Page d'introduction à la Data Science
- Mise en place de la barre de navigation responsive
- Page 404 pour les routes inexistantes
- Ajout d'un système de navigation latérale (sidebar) pour les pages de contenu
- Enrichissement de la page d'introduction avec des sections supplémentaires (histoire, applications, métiers)
- Création de la page Fondamentaux avec 4 sections (mathématiques/statistiques, programmation, visualisation, traitement des données)
- Création de la page Machine Learning avec ses différentes approches
- Création des pages Outils, Projets, Ressources et Communauté
- Informations sur l'auteur ajoutées au site
- Nouvelle section "Visualisations Mathématiques Interactives" sur la page Fondamentaux
- Graphiques interactifs et visualisations de données avancées ajoutés aux sections
- Menu latéral gauche mis à jour pour inclure toutes les sections
- Exemples pratiques et cas d'utilisation pour chaque concept fondamental
- Visualisations de régression linéaire, distribution normale et probabilités
- Exemple interactif de visualisation de données avec différentes représentations graphiques
- Composant réutilisable GlossaryTerm pour l'affichage de définitions techniques (survol et clic)
- Intégration de termes techniques enrichis dans les sections Statistiques et Traitement des données
- Banque de termes techniques accessible via un volet déroulant sur la page Fondamentaux
- Enrichissement du composant GlossaryTerm avec des fonctionnalités avancées (domains, niveaux, synonymes, etc.)
- Ajout de définitions détaillées pour les concepts clés de Machine Learning
- Amélioration de l'expérience utilisateur avec différents styles de mise en évidence des termes techniques
- Refactorisation modulaire de la page Machine Learning en composants spécialisés par section
- Ajout d'une nouvelle rubrique "Cours d'initiation" sur la page Ressources avec 24 cours répartis en 5 catégories
- Interface interactive pour explorer les cours par catégorie
- Fiches détaillées pour chaque cours avec modules et descriptions
- Amélioration de la présentation des cours d'initiation avec un système d'onglets par catégorie
- Création d'un composant de fil d'ariane pour la navigation dans les cours
- Mise en place d'une structure de pages de cours individuelles avec layout commun
- Ajout de pages de cours détaillées avec modules, ressources et présentations
- Système de navigation entre les cours et les ressources
- Développement du premier cours "Introduction aux Mathématiques pour la Data Science" avec contenu interactif
- Ajout de modules d'apprentissage avec explications détaillées, exemples et illustrations
- Intégration de quiz d'évaluation à la fin du cours
- Liens fonctionnels entre la page Ressources et les cours accessibles
- Refactorisation du cours d'introduction aux mathématiques en modules distincts
- Intégration de KaTeX pour le rendu des équations mathématiques complexes
- Organisation modulaire des cours par catégories et sous-répertoires
- Amélioration du composant CourseModuleContent pour supporter une structure plus flexible

### Corrigé
- Correction des erreurs TypeScript dans les pages Introduction, Fundamentals et MachineLearning
- Ajout de gestion d'état pour la navigation par section dans chaque page de contenu
- Correction de la navigation dans le menu principal
- Correction de l'espace blanc en haut des pages de contenu
- Mise en place du défilement et de la navigation entre les sections via la sidebar
- Correction de l'erreur d'importation dans Tools.tsx (remplacement de 'Tools' par 'Wrench')
- Refactorisation des pages Introduction et Fundamentals en composants plus petits pour améliorer la maintenabilité
- Amélioration du contraste et de l'accessibilité des éléments interactifs
- Correction des erreurs liées aux définitions manquantes dans le composant GlossaryTerm
- Correction du bug d'affichage lors de l'utilisation de définitions non définies dans GlossaryTerm
- Amélioration de la présentation des cours d'initiation pour éviter les chevauchements de catégories
- Ajout d'icônes représentatives pour chaque catégorie de cours
- Correction des marges verticales dans le système d'onglets des cours d'initiation
- Correction des liens cassés entre la page Ressources et les pages de cours
- Correction des imports d'icônes Lucide (remplacement de InfoCircle par Info et AlertCircle par AlertTriangle)
- Correction du lien "Accéder au cours complet" pour le cours d'introduction aux mathématiques

### En cours de développement
- Intégration avec Supabase pour l'authentification et la base de données
- Pages de contenu détaillées pour chaque section thématique
- Fonctionnalités interactives (quiz, visualisations, etc.)
- Système de blog et de commentaires
- Simulateurs interactifs pour la démonstration de concepts statistiques avancés
- Laboratoire virtuel pour pratiquer des techniques de programmation en Data Science
- Enrichissement continu du glossaire technique avec des définitions plus détaillées
- Développement complet des 24 cours d'initiation à la data science et au machine learning
- Création des pages détaillées pour chaque cours d'initiation
- Ajout de fonctionnalités interactives supplémentaires dans les modules de cours
- Implémentation d'un système de suivi de progression dans les cours
- Développement de nouveaux cours dans les autres catégories
- Enrichissement des illustrations mathématiques avec des visualisations interactives
- Ajout d'exercices pratiques pour chaque module

## [0.1.0] - 2023-12-15

### Ajouté
- Initialisation du projet
- Mise en place de l'environnement de développement
- Création des maquettes et de la structure du site
