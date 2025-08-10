/**
 * Model Evaluation and Metrics
 * Performance metrics, validation techniques, and model assessment methods
 */

import { GlossaryEntry } from './types';

export const evaluationTerms: GlossaryEntry[] = [
  {
    term: "Évaluation de modèles (Model Evaluation)",
    description: "Processus d'assessment des performances d'un modèle ML en utilisant diverses métriques et techniques de validation pour déterminer sa qualité et capacité de généralisation.",
    category: "evaluation",
    icon: "BarChart3"
  },
  {
    term: "Matrice de confusion (Confusion Matrix)",
    description: "La matrice de confusion est comme le bulletin scolaire détaillé d'un modèle de classification - elle révèle exactement où il excelle et où il échoue ! **Anatomie visuelle** : tableau 2x2 (binaire) ou n×n (multiclasse) croisant prédictions vs réalité. **Les 4 cases magiques** (binaire) : **TP** (Vrais Positifs) = 'Bravo, bien vu !', **TN** (Vrais Négatifs) = 'Correct, rien à signaler', **FP** (Faux Positifs) = 'Fausse alerte !', **FN** (Faux Négatifs) = 'Raté, c'était important !'. **Analogie médicale** : diagnostic de maladie - FP = patient sain diagnostiqué malade (stress inutile), FN = patient malade non détecté (danger !). **Lecture intuitive** : diagonale = succès, hors-diagonale = erreurs. Plus la diagonale est 'chaude' et les côtés 'froids', mieux c'est ! **Insights précieux** : révèle les **confusions spécifiques** (classe A confondue avec B), **déséquilibres** de performance, **patterns d'erreurs**. **Calculs dérivés** : toutes les métriques importantes (précision, rappel, F1, accuracy) se calculent à partir d'elle. **Visualisation** : heatmap colorée pour identifier rapidement les problèmes. **Cas multiclasse** : matrice n×n révélant les confusions entre toutes les paires de classes. La matrice de confusion transforme des chiffres abstraits en diagnostic visuel actionnable !",
    category: "evaluation",
    icon: "Grid3x3"
  },
  {
    term: "Précision (Precision)",
    description: "La précision répond à la question cruciale : 'Quand mon modèle dit OUI, à quelle fréquence a-t-il raison ?' - c'est la mesure de la fiabilité de ses prédictions positives ! **Formule simple** : Précision = TP/(TP+FP) = Vrais Positifs / Tous les Positifs prédits. **Analogie médicale** : sur 100 patients diagnostiqués 'malades', combien le sont vraiment ? Une précision de 90% = 90 vrais malades, 10 fausses alertes. **Analogie spam** : sur 100 emails classés 'spam', combien sont vraiment du spam ? **Quand privilégier la précision** : coût élevé des **faux positifs** - diagnostic médical grave, recommandations produits, détection de fraude (éviter d'embêter les clients honnêtes). **Trade-off fondamental** : augmenter la précision (être plus sélectif) peut réduire le rappel (rater des vrais cas). **Exemple concret** : détecteur de tumeurs avec précision 95% = sur 100 'tumeurs détectées', 95 sont réelles, 5 sont des fausses alertes (stress inutile). **Interprétation business** : précision élevée = confiance dans les alertes, moins de 'bruit', mais risque de rater des cas. **Piège classique** : précision parfaite (100%) facile à obtenir en étant ultra-conservateur, mais au détriment du rappel. **Contexte décisionnel** : préférer précision quand l'action suite à une prédiction positive est coûteuse ou irréversible.",
    category: "evaluation",
    icon: "Target"
  },
  {
    term: "Rappel (Recall/Sensitivity)",
    description: "Le rappel répond à la question vitale : 'De tous les vrais cas positifs, combien mon modèle en a-t-il détectés ?' - c'est la mesure de sa capacité à ne rien laisser passer ! **Formule essentielle** : Rappel = TP/(TP+FN) = Vrais Positifs / Tous les Positifs réels. **Analogie sécuritaire** : sur 100 vrais criminels, combien le système de surveillance en a-t-il repérés ? Rappel 80% = 80 détectés, 20 échappent ! **Analogie médicale** : sur 100 patients réellement malades, combien le test en détecte-t-il ? **Quand privilégier le rappel** : coût catastrophique des **faux négatifs** - détection de cancer, systèmes de sécurité, alertes d'urgence (mieux vaut trop d'alertes que rater un danger). **Trade-off inévitable** : augmenter le rappel (être moins sélectif) génère souvent plus de faux positifs, réduisant la précision. **Exemple critique** : détecteur d'incendie avec rappel 95% = détecte 95% des vrais incendies, mais rate 5% (potentiellement catastrophique). **Synonymes** : Sensibilité, Taux de Vrais Positifs (TPR). **Interprétation business** : rappel élevé = sécurité maximale, aucun cas important raté, mais plus de 'bruit'. **Contexte décisionnel** : privilégier rappel quand rater un cas positif a des conséquences graves ou irréversibles. **Analogie filet** : rappel = taille des mailles du filet - plus fines (rappel élevé) attrapent plus de poissons mais aussi plus de déchets.",
    category: "evaluation",
    icon: "Search"
  },
  {
    term: "F1-Score",
    description: "Le F1-Score est comme un diplomate qui négocie la paix entre Précision et Rappel : il trouve le compromis parfait quand ces deux métriques rivales se disputent ! **Formule magique** : F1 = 2 × (Précision × Rappel) / (Précision + Rappel) = moyenne harmonique (plus stricte que moyenne arithmétique). **Pourquoi harmonique ?** : punit sévèrement les déséquilibres - si Précision=90% et Rappel=10%, F1=18% (pas 50% !). Force l'équilibre ! **Analogie sportive** : comme noter un athlète sur sprint ET endurance - exceller dans un seul domaine ne suffit pas, il faut être bon partout. **Cas d'usage parfait** : datasets déséquilibrés où l'accuracy est trompeuse (99% de classe majoritaire). **Exemple concret** : détection de fraude - F1 élevé = bon équilibre entre 'attraper les fraudeurs' (rappel) et 'éviter les fausses accusations' (précision). **Interprétation** : F1=1.0 (parfait), F1=0.0 (catastrophique), F1>0.8 (généralement bon). **Avantage clé** : métrique unique qui résume la performance globale sur la classe positive. **Limitation** : ignore les vrais négatifs (pas toujours problématique). **Variantes** : F2-Score (favorise rappel), F0.5-Score (favorise précision). **Analogie culinaire** : comme équilibrer sucré-salé - trop de l'un gâche le plat, l'harmonie fait la perfection. **Usage pratique** : métrique de référence pour comparer des modèles sur tâches de classification binaire déséquilibrées.",
    category: "evaluation",
    icon: "BarChart3"
  },
  {
    term: "Exactitude (Accuracy)",
    description: "**La métrique la plus intuitive mais la plus traître !** L'exactitude est comme un thermomètre qui mesure la 'température générale' de votre modèle - simple à comprendre, mais qui peut masquer des problèmes graves.\n\n**🎯 Formule Ultra-Simple :**\nAccuracy = (TP + TN) / (TP + TN + FP + FN) = Prédictions Correctes / Total des Prédictions\n\n**🏫 Analogie Scolaire :**\nComme un pourcentage de bonnes réponses à un QCM : 85/100 questions correctes = 85% d'exactitude. Facile à comprendre, rassurant... mais attention aux pièges !\n\n**⚠️ Le Piège Mortel des Classes Déséquilibrées :**\nImaginez détecter une maladie rare (1% de la population) : un modèle 'idiot' qui dit toujours 'pas malade' aura 99% d'exactitude ! Impressionnant sur le papier, catastrophique en réalité.\n\n**🚨 Exemple Concret du Piège :**\n- Dataset : 1000 emails (950 normaux, 50 spams)\n- Modèle paresseux : 'tout est normal' → 95% d'exactitude\n- Problème : 0% des spams détectés !\n\n**✅ Quand Utiliser l'Accuracy :**\n- Classes **équilibrées** (50/50 ou proche)\n- Coût égal des erreurs (FP = FN)\n- Vue d'ensemble rapide des performances\n- Communication avec non-experts\n\n**❌ Quand l'Éviter :**\n- Classes très déséquilibrées\n- Coût différent des types d'erreurs\n- Détection d'événements rares\n- Applications critiques (médical, sécurité)\n\n**🔍 Alternatives Plus Robustes :**\n- **F1-Score** : équilibre précision/rappel\n- **Balanced Accuracy** : moyenne des sensibilités par classe\n- **Cohen's Kappa** : accord corrigé du hasard\n- **AUC-ROC** : performance indépendante du seuil\n\n**💡 Règle d'Or :**\nL'accuracy seule ne suffit JAMAIS - toujours l'accompagner d'autres métriques pour un diagnostic complet. C'est la métrique 'grand public' qui cache souvent la complexité réelle !",
    category: "evaluation",
    icon: "CheckCircle"
  },
  {
    term: "Spécificité (Specificity)",
    description: "**Le gardien vigilant contre les fausses alertes !** La spécificité mesure à quel point votre modèle est doué pour dire 'NON' quand c'est vraiment NON - c'est l'art d'éviter les faux positifs.\n\n**🎯 Formule Essentielle :**\nSpécificité = TN / (TN + FP) = Vrais Négatifs / Tous les Négatifs Réels\n\n**🚨 Question Clé :**\n'De tous les cas qui sont vraiment négatifs, combien mon modèle les identifie-t-il correctement comme négatifs ?'\n\n**🏥 Analogie Médicale Parfaite :**\nTest de grossesse : sur 100 femmes NON enceintes, combien le test indique-t-il correctement 'négatif' ? Spécificité 95% = 95 résultats corrects, 5 faux positifs (stress inutile !).\n\n**🔍 Synonymes Importants :**\n- **Taux de Vrais Négatifs (TNR)**\n- **Sélectivité**\n- **1 - Taux de Faux Positifs**\n\n**⚖️ Dualité avec la Sensibilité :**\n- **Sensibilité (Rappel)** : 'Ne rien rater d'important'\n- **Spécificité** : 'Ne pas crier au loup'\n- Trade-off inévitable : améliorer l'un dégrade souvent l'autre\n\n**🎯 Cas d'Usage Critiques :**\n- **Screening médical** : éviter les fausses alertes coûteuses\n- **Détection de spam** : ne pas bloquer d'emails importants\n- **Systèmes de sécurité** : réduire les fausses alarmes\n- **Contrôle qualité** : ne pas rejeter de bons produits\n\n**📊 Interprétation Pratique :**\n- **Spécificité > 95%** : Excellent, très peu de fausses alertes\n- **Spécificité 80-95%** : Bon, acceptable pour la plupart des cas\n- **Spécificité < 80%** : Problématique, trop de faux positifs\n\n**⚠️ Piège Classique :**\nSpécificité parfaite (100%) facile à obtenir en étant ultra-conservateur (tout classer négatif), mais au détriment de la sensibilité !\n\n**🔄 Relation avec ROC :**\nAxe X de la courbe ROC = 1 - Spécificité = Taux de Faux Positifs. Plus la spécificité est élevée, plus on est à gauche sur la courbe.\n\n**💡 Règle Pratique :**\nPrivilégier la spécificité quand le coût d'une fausse alerte est élevé (temps, argent, stress, ressources). C'est la métrique de la prudence et de la précision !",
    category: "evaluation",
    icon: "Shield"
  },
  {
    term: "Courbe ROC (ROC Curve)",
    description: "Graphique montrant la performance d'un modèle de classification binaire en traçant le taux de vrais positifs contre le taux de faux positifs à différents seuils.",
    category: "evaluation",
    icon: "TrendingUp"
  },
  {
    term: "AUC (Area Under Curve)",
    description: "**La mesure ultime de discrimination !** Comme un test médical qui doit parfaitement séparer les malades des bien-portants, l'AUC quantifie la capacité d'un modèle à distinguer entre les classes positives et négatives sur l'ensemble du spectre de seuils possibles.\n\n**📊 Analogie Géométrique :**\nImaginez la courbe ROC comme le profil d'une montagne : plus l'aire sous cette courbe est grande (proche de 1.0), plus le modèle est performant. Une AUC de 0.5 ressemble à une ligne droite (performance aléatoire), tandis qu'une AUC de 1.0 forme un carré parfait.\n\n**🎯 Interprétation Intuitive :**\n\n**Signification Probabiliste :**\nL'AUC représente la probabilité qu'un modèle classe correctement un exemple positif choisi aléatoirement plus haut qu'un exemple négatif choisi aléatoirement.\n\n**Échelle de Performance :**\n• **0.9 - 1.0** : Excellence (diagnostic médical)\n• **0.8 - 0.9** : Très bon (détection fraude)\n• **0.7 - 0.8** : Bon (marketing prédictif)\n• **0.6 - 0.7** : Moyen (amélioration nécessaire)\n• **0.5 - 0.6** : Faible (à peine mieux que le hasard)\n• **< 0.5** : Pire que le hasard (inverser les prédictions !)\n\n**🔍 Construction Mathématique :**\n\n**Courbe ROC :**\n- **Axe X** : Taux de Faux Positifs (1 - Spécificité)\n- **Axe Y** : Taux de Vrais Positifs (Sensibilité)\n- **Points** : Performance à différents seuils\n\n**Calcul de l'AUC :**\n```\nAUC = ∫₀¹ TPR(FPR) d(FPR)\n```\n\n**Méthode Trapézoïdale :**\n- Approximation numérique par trapèzes\n- Précision dépendante du nombre de seuils\n- Implémentation standard dans sklearn\n\n**⚡ Avantages Distinctifs :**\n\n**Invariance au Seuil :**\n- Évalue toutes les performances possibles\n- Pas besoin de choisir un seuil optimal\n- Vision globale du modèle\n\n**Invariance à l'Échelle :**\n- Mesure qualité du ranking, pas valeurs absolues\n- Robuste aux transformations monotones\n- Comparable entre modèles différents\n\n**🚨 Limitations Critiques :**\n\n**Classes Déséquilibrées :**\n- AUC peut être optimiste\n- Privilégie la classe majoritaire\n- Préférer AUC-PR (Precision-Recall)\n\n**Interprétation Métier :**\n- Pas directement liée aux coûts business\n- Ne reflète pas l'impact des erreurs\n- Complément nécessaire avec métriques métier\n\n**🎯 Applications Sectorielles :**\n\n**Médecine :**\n- **Diagnostic** : AUC > 0.95 pour tests critiques\n- **Screening** : Balance sensibilité/spécificité\n- **Biomarqueurs** : Validation de nouveaux tests\n\n**Finance :**\n- **Crédit** : Scoring de risque de défaut\n- **Fraude** : Détection transactions suspectes\n- **Trading** : Signaux d'achat/vente\n\n**Marketing :**\n- **Churn** : Prédiction désabonnement\n- **Conversion** : Probabilité d'achat\n- **Segmentation** : Classification clients\n\n**🛠️ Variantes Spécialisées :**\n\n**AUC-PR (Precision-Recall) :**\n- Meilleure pour classes déséquilibrées\n- Focus sur la classe positive\n- Moins sensible aux vrais négatifs\n\n**Partial AUC :**\n- AUC dans une région spécifique\n- Utile pour contraintes métier\n- Ex: FPR < 0.1 pour applications critiques\n\n**Multi-class AUC :**\n- **One-vs-Rest** : AUC moyenne par classe\n- **One-vs-One** : AUC pour chaque paire\n- **Macro/Micro averaging** : Stratégies d'agrégation\n\n**📈 Optimisation Pratique :**\n\n**Feature Engineering :**\n- Sélection basée sur AUC individuelle\n- Interactions augmentant la séparabilité\n- Transformations non-linéaires\n\n**Hyperparameter Tuning :**\n- Validation croisée avec AUC\n- Optimisation bayésienne\n- Early stopping basé sur AUC validation\n\n**🔬 Tests Statistiques :**\n\n**Comparaison de Modèles :**\n- Test de DeLong pour AUC\n- Bootstrap pour intervalles de confiance\n- Correction de Bonferroni pour tests multiples\n\n**Significativité :**\n- p-value < 0.05 pour différence significative\n- Taille d'effet (différence d'AUC)\n- Puissance statistique du test\n\n**💡 Bonnes Pratiques :**\n- **Validation croisée** stratifiée\n- **Intervalles de confiance** systématiques\n- **Comparaison** avec baseline simple\n- **Analyse** des courbes ROC complètes\n- **Contexte métier** toujours considéré\n\n**📊 Impact Mesurable :**\nGoogle améliore ses modèles publicitaires de 0.001 AUC par trimestre, générant des millions de revenus supplémentaires. En médecine, une amélioration d'AUC de 0.05 peut sauver des milliers de vies.",
    category: "evaluation",
    icon: "BarChart3"
  },
  {
    term: "Courbe Précision-Rappel",
    description: "Graphique montrant le compromis entre précision et rappel à différents seuils. Particulièrement utile pour les datasets déséquilibrés.",
    category: "evaluation",
    icon: "LineChart"
  },
  {
    term: "Erreur quadratique moyenne (MSE)",
    description: "Métrique de régression calculant la moyenne des carrés des erreurs entre prédictions et valeurs réelles. Pénalise fortement les grandes erreurs.",
    category: "evaluation",
    icon: "Calculator"
  },
  {
    term: "Erreur absolue moyenne (MAE)",
    description: "Métrique de régression calculant la moyenne des valeurs absolues des erreurs. Moins sensible aux outliers que MSE.",
    category: "evaluation",
    icon: "Calculator"
  },
  {
    term: "R² (Coefficient de détermination)",
    description: "Mesure la proportion de variance dans la variable dépendante expliquée par les variables indépendantes. Varie de 0 à 1, 1 indiquant un ajustement parfait.",
    category: "evaluation",
    icon: "TrendingUp"
  },
  {
    term: "RMSE (Root Mean Square Error)",
    description: "Racine carrée de MSE, exprimée dans les mêmes unités que la variable cible. Facilite l'interprétation de l'erreur moyenne.",
    category: "evaluation",
    icon: "Calculator"
  },
  {
    term: "Validation croisée (Cross-Validation)",
    description: "La validation croisée est comme faire passer plusieurs examens différents à un étudiant pour avoir une note vraiment représentative ! **Principe d'or** : ne jamais faire confiance à une seule évaluation - multiplier les tests pour une estimation robuste des performances. **K-Fold classique** : diviser les données en k 'plis' égaux, entraîner sur k-1 plis, tester sur le pli restant, répéter k fois, moyenner les résultats. **Analogie pédagogique** : comme évaluer un étudiant avec 5 examens différents plutôt qu'un seul - plus fiable et moins dépendant du hasard ! **Variantes populaires** : **Stratified K-Fold** (préserve les proportions de classes), **Leave-One-Out** (k = n, très coûteux), **Time Series Split** (respecte l'ordre temporel). **Avantages magiques** : utilise **toutes** les données pour entraînement ET validation, réduit la variance de l'estimation, détecte l'instabilité du modèle. **Coût computationnel** : k fois plus cher qu'une validation simple, mais investissement rentable ! **Règle empirique** : k=5 ou k=10 sont des choix populaires (compromis biais-variance). **Piège à éviter** : data leakage entre plis (preprocessing sur tout le dataset). **Interprétation** : moyenne ± écart-type des k scores révèle performance ET stabilité. **Applications critiques** : sélection de modèles, tuning d'hyperparamètres, estimation finale de performance. La validation croisée transforme une évaluation fragile en diagnostic robuste !",
    category: "evaluation",
    icon: "RefreshCw"
  },
  {
    term: "Validation holdout",
    description: "Division simple des données en ensembles d'entraînement et de validation. Rapide mais peut être moins fiable que la validation croisée.",
    category: "evaluation",
    icon: "Divide"
  },
  {
    term: "Bootstrap",
    description: "Technique de rééchantillonnage avec remise pour estimer la distribution des statistiques et évaluer la variabilité des performances du modèle.",
    category: "evaluation",
    icon: "Shuffle"
  },
  {
    term: "Biais-Variance Tradeoff",
    description: "**Le dilemme fondamental du machine learning !** Comme un archer qui doit choisir entre viser toujours au même endroit (biais) ou avoir une visée variable mais centrée (variance), tout modèle ML navigue entre ces deux sources d'erreur antagonistes.\n\n**🎯 Analogie de l'Archer :**\n\n**Biais Élevé, Variance Faible :**\n- Flèches groupées mais loin du centre\n- Modèle simple, prédictions cohérentes mais fausses\n- Sous-apprentissage (underfitting)\n\n**Biais Faible, Variance Élevée :**\n- Flèches dispersées autour du centre\n- Modèle complexe, prédictions variables\n- Sur-apprentissage (overfitting)\n\n**Équilibre Optimal :**\n- Flèches groupées près du centre\n- Compromis entre simplicité et précision\n\n**📊 Décomposition Mathématique :**\n\n**Erreur Totale :**\n```\nE[Erreur] = Biais² + Variance + Bruit\n```\n\n**Biais :**\n```\nBiais = E[f̂(x)] - f(x)\n```\n- Différence entre prédiction moyenne et vraie valeur\n- Erreur systématique du modèle\n- Indépendant des données d'entraînement\n\n**Variance :**\n```\nVariance = E[(f̂(x) - E[f̂(x)])²]\n```\n- Variabilité des prédictions entre datasets\n- Sensibilité aux données d'entraînement\n- Instabilité du modèle\n\n**🔍 Sources et Manifestations :**\n\n**Biais Élevé (Underfitting) :**\n- **Modèles trop simples** : Régression linéaire sur données non-linéaires\n- **Features insuffisantes** : Variables explicatives manquantes\n- **Hypothèses fortes** : Assumptions incorrectes sur les données\n- **Régularisation excessive** : Pénalités trop importantes\n\n**Variance Élevée (Overfitting) :**\n- **Modèles trop complexes** : Réseaux profonds sur petits datasets\n- **Trop de paramètres** : Plus de paramètres que d'exemples\n- **Pas de régularisation** : Liberté totale d'apprentissage\n- **Données bruitées** : Apprentissage du bruit\n\n**⚖️ Stratégies d'Équilibrage :**\n\n**Réduction du Biais :**\n- **Complexité accrue** : Plus de couches, polynômes d'ordre supérieur\n- **Feature engineering** : Variables dérivées, interactions\n- **Ensembles** : Combinaison de modèles faibles\n- **Moins de régularisation** : Réduction des pénalités\n\n**Réduction de la Variance :**\n- **Régularisation** : L1, L2, Dropout, Early stopping\n- **Plus de données** : Datasets plus larges\n- **Validation croisée** : Évaluation robuste\n- **Bagging** : Moyennage de modèles\n\n**🛠️ Techniques Pratiques :**\n\n**Courbes d'Apprentissage :**\n- **Gap train/validation** : Indicateur de variance\n- **Plateau précoce** : Signe de biais élevé\n- **Convergence lente** : Besoin de plus de données\n\n**Validation Croisée :**\n- **Score moyen** : Estimation du biais\n- **Écart-type** : Mesure de la variance\n- **Stabilité** : Robustesse du modèle\n\n**📈 Modèles et Tradeoff :**\n\n**Biais Élevé, Variance Faible :**\n- **Régression linéaire** : Assumptions fortes\n- **Naive Bayes** : Indépendance des features\n- **k-NN avec k élevé** : Moyennage local important\n\n**Biais Faible, Variance Élevée :**\n- **Arbres de décision profonds** : Mémorisation possible\n- **k-NN avec k=1** : Sensible au bruit\n- **Réseaux de neurones** : Grande capacité\n\n**Équilibre Naturel :**\n- **Random Forest** : Bagging d'arbres\n- **SVM avec RBF** : Régularisation intégrée\n- **Gradient Boosting** : Correction itérative\n\n**🎯 Applications Sectorielles :**\n\n**Finance :**\n- **Trading** : Variance élevée = stratégies instables\n- **Crédit** : Biais élevé = discrimination systémique\n- **Risque** : Équilibre pour robustesse\n\n**Médecine :**\n- **Diagnostic** : Biais = erreurs systématiques dangereuses\n- **Pronostic** : Variance = prédictions incohérentes\n- **Essais cliniques** : Validation rigoureuse nécessaire\n\n**🔬 Méthodes d'Analyse :**\n\n**Bootstrap :**\n- Estimation empirique biais/variance\n- Rééchantillonnage avec remise\n- Intervalles de confiance\n\n**Simulation Monte Carlo :**\n- Génération de datasets multiples\n- Calcul exact des composantes\n- Validation théorique\n\n**💡 Insights Stratégiques :**\n\n**Règles Empiriques :**\n- **Petits datasets** : Privilégier modèles simples (biais acceptable)\n- **Gros datasets** : Modèles complexes viables (variance contrôlée)\n- **Données bruitées** : Régularisation forte nécessaire\n\n**Optimisation Pratique :**\n- **Commencer simple** : Baseline avec biais élevé\n- **Complexifier graduellement** : Monitoring de la variance\n- **Validation rigoureuse** : Éviter l'overfitting\n- **Ensembles** : Meilleur des deux mondes\n\n**📊 Impact Mesurable :**\nNetflix réduit l'erreur de recommandation de 15% en optimisant le tradeoff biais-variance via des ensembles de 100+ modèles. Google améliore la précision de recherche de 8% en équilibrant complexité et généralisation.",
    category: "evaluation",
    icon: "Scale"
  },
  {
    term: "Courbe d'apprentissage (Learning Curve)",
    description: "Graphique montrant l'évolution des performances du modèle en fonction de la taille de l'ensemble d'entraînement. Aide à diagnostiquer le sur/sous-apprentissage.",
    category: "evaluation",
    icon: "TrendingUp"
  },
  {
    term: "Courbe de validation (Validation Curve)",
    description: "Graphique montrant les performances d'entraînement et validation en fonction d'un hyperparamètre. Aide à identifier la valeur optimale.",
    category: "evaluation",
    icon: "LineChart"
  },
  {
    term: "Test statistique",
    description: "Méthodes pour déterminer si les différences de performance entre modèles sont statistiquement significatives (t-test, test de Wilcoxon, etc.).",
    category: "evaluation",
    icon: "BarChart3"
  },
  {
    term: "Intervalles de confiance",
    description: "Plages de valeurs qui contiennent probablement la vraie valeur d'une métrique de performance avec un niveau de confiance donné.",
    category: "evaluation",
    icon: "Target"
  },
  {
    term: "Métriques métier (Business Metrics)",
    description: "Mesures alignées sur les objectifs commerciaux plutôt que purement techniques, comme le ROI, satisfaction client, ou réduction des coûts.",
    category: "evaluation",
    icon: "DollarSign"
  },
  {
    term: "A/B Testing",
    description: "Méthode d'expérimentation comparant deux versions (A et B) pour déterminer laquelle performe mieux selon une métrique définie.",
    category: "evaluation",
    icon: "GitCompare"
  },
  {
    term: "Significance Testing",
    description: "Tests statistiques pour déterminer si les résultats observés sont dus au hasard ou représentent une différence réelle entre les conditions.",
    category: "evaluation",
    icon: "CheckCircle"
  },
  {
    term: "Power Analysis",
    description: "Calcul de la taille d'échantillon nécessaire pour détecter un effet de taille donnée avec une probabilité spécifiée.",
    category: "evaluation",
    icon: "Calculator"
  },
  {
    term: "Métriques de ranking",
    description: "Mesures pour évaluer la qualité des systèmes de classement : NDCG, MAP, MRR. Importantes pour les moteurs de recherche et recommandations.",
    category: "evaluation",
    icon: "List"
  },
  {
    term: "Métriques de clustering",
    description: "Mesures pour évaluer la qualité des clusters : silhouette score, inertie, indice de Davies-Bouldin. Aident à choisir le nombre optimal de clusters.",
    category: "evaluation",
    icon: "Layers"
  },
  {
    term: "Métriques de génération de texte",
    description: "Mesures spécialisées pour évaluer la qualité du texte généré : BLEU, ROUGE, perplexité, cohérence sémantique.",
    category: "evaluation",
    icon: "MessageSquare"
  },
  {
    term: "Fairness Metrics",
    description: "Mesures pour évaluer l'équité des modèles ML : parité démographique, égalité des chances, calibration équitable.",
    category: "evaluation",
    icon: "Scale"
  },
  {
    term: "Robustness Testing",
    description: "Évaluation de la stabilité du modèle face aux perturbations des données, changements de distribution, ou attaques adverses.",
    category: "evaluation",
    icon: "Shield"
  },
  {
    term: "Ablation Study",
    description: "Analyse systématique de l'impact de chaque composant du modèle en les retirant un par un pour comprendre leur contribution.",
    category: "evaluation",
    icon: "Minus"
  },
  {
    term: "Baseline Models",
    description: "Modèles simples utilisés comme référence pour évaluer si des approches plus complexes apportent une amélioration significative.",
    category: "evaluation",
    icon: "BarChart3"
  },
  {
    term: "Human Evaluation",
    description: "Évaluation par des experts humains, particulièrement importante pour les tâches subjectives comme la génération de texte créatif.",
    category: "evaluation",
    icon: "Users"
  }
];