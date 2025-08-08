
import ProjectsSection from "../shared/ProjectsSection";

const projects = [
  {
    title: "🛒 Segmentation Client E-commerce : Analyse RFM avancée",
    description: "Analysez le comportement d'achat des clients pour créer des segments marketing précis.",
    problem: "Vous disposez d'un dataset de transactions e-commerce avec 100,000 clients sur 2 ans. Créez un système de segmentation client sophistiqué utilisant l'analyse RFM (Récence, Fréquence, Montant) enrichie d'autres variables comportementales. Implémentez plusieurs algorithmes de clustering, comparez leurs résultats, et créez des personas détaillés pour chaque segment avec des recommandations marketing spécifiques.",
    solution: `# Solution complète de segmentation client
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.cluster import KMeans, DBSCAN, AgglomerativeClustering
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score
from sklearn.decomposition import PCA
from datetime import datetime, timedelta
import warnings
warnings.filterwarnings('ignore')

class CustomerSegmentation:
    def __init__(self, data_path=None):
        """
        Classe pour la segmentation client avancée
        """
        self.data = None
        self.rfm_data = None
        self.scaler = StandardScaler()
        self.optimal_clusters = None
        self.cluster_labels = None
        
    def load_and_prepare_data(self, data_path=None):
        """
        Charge et prépare les données de transactions
        """
        if data_path:
            self.data = pd.read_csv(data_path)
        else:
            # Génération de données synthétiques pour démonstration
            np.random.seed(42)
            n_customers = 10000
            n_transactions = 50000
            
            # Génération de clients avec différents profils
            customers = []
            for i in range(n_customers):
                customer_type = np.random.choice(['high_value', 'regular', 'occasional', 'churned'], 
                                               p=[0.1, 0.4, 0.4, 0.1])
                
                if customer_type == 'high_value':
                    freq = np.random.poisson(20)
                    avg_amount = np.random.normal(150, 50)
                    recency_days = np.random.exponential(30)
                elif customer_type == 'regular':
                    freq = np.random.poisson(8)
                    avg_amount = np.random.normal(75, 25)
                    recency_days = np.random.exponential(60)
                elif customer_type == 'occasional':
                    freq = np.random.poisson(3)
                    avg_amount = np.random.normal(50, 20)
                    recency_days = np.random.exponential(120)
                else:  # churned
                    freq = np.random.poisson(1)
                    avg_amount = np.random.normal(30, 15)
                    recency_days = np.random.exponential(300)
                
                customers.append({
                    'customer_id': f'C{i:06d}',
                    'frequency': max(1, freq),
                    'avg_amount': max(10, avg_amount),
                    'recency_days': max(1, recency_days),
                    'true_segment': customer_type
                })
            
            # Conversion en DataFrame
            self.data = pd.DataFrame(customers)
            
        return self.data
    
    def calculate_rfm_features(self):
        """
        Calcule les métriques RFM et features additionnelles
        """
        # Calcul RFM de base
        self.rfm_data = self.data.copy()
        
        # Ajout de features comportementales avancées
        self.rfm_data['monetary_per_transaction'] = (
            self.rfm_data['avg_amount']
        )
        
        # Score de engagement (fréquence vs récence)
        self.rfm_data['engagement_score'] = (
            self.rfm_data['frequency'] / (self.rfm_data['recency_days'] / 30 + 1)
        )
        
        # CLV approximation (Customer Lifetime Value)
        self.rfm_data['clv_estimate'] = (
            self.rfm_data['frequency'] * self.rfm_data['avg_amount'] * 
            (365 / (self.rfm_data['recency_days'] + 1))
        )
        
        # Scores RFM normalisés (1-5)
        self.rfm_data['recency_score'] = pd.qcut(
            self.rfm_data['recency_days'], 5, labels=[5,4,3,2,1]
        ).astype(int)
        
        self.rfm_data['frequency_score'] = pd.qcut(
            self.rfm_data['frequency'].rank(method='first'), 5, labels=[1,2,3,4,5]
        ).astype(int)
        
        self.rfm_data['monetary_score'] = pd.qcut(
            self.rfm_data['avg_amount'], 5, labels=[1,2,3,4,5]
        ).astype(int)
        
        # Score RFM combiné
        self.rfm_data['rfm_score'] = (
            self.rfm_data['recency_score'].astype(str) +
            self.rfm_data['frequency_score'].astype(str) +
            self.rfm_data['monetary_score'].astype(str)
        )
        
        print("Features RFM calculées:")
        print(self.rfm_data[['recency_days', 'frequency', 'avg_amount', 
                            'engagement_score', 'clv_estimate']].describe())
        
        return self.rfm_data
    
    def find_optimal_clusters(self, features, max_k=10):
        """
        Trouve le nombre optimal de clusters avec plusieurs méthodes
        """
        # Préparation des données
        X = self.rfm_data[features].copy()
        X_scaled = self.scaler.fit_transform(X)
        
        # Méthode du coude
        sse = []
        silhouette_scores = []
        k_range = range(2, max_k + 1)
        
        for k in k_range:
            kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
            kmeans.fit(X_scaled)
            sse.append(kmeans.inertia_)
            silhouette_scores.append(silhouette_score(X_scaled, kmeans.labels_))
        
        # Visualisation
        fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(15, 5))
        
        # Méthode du coude
        ax1.plot(k_range, sse, 'bo-')
        ax1.set_xlabel('Nombre de clusters (k)')
        ax1.set_ylabel('Sum of Squared Errors')
        ax1.set_title('Méthode du Coude')
        ax1.grid(True)
        
        # Score de silhouette
        ax2.plot(k_range, silhouette_scores, 'ro-')
        ax2.set_xlabel('Nombre de clusters (k)')
        ax2.set_ylabel('Score de Silhouette')
        ax2.set_title('Score de Silhouette')
        ax2.grid(True)
        
        plt.tight_layout()
        plt.show()
        
        # Choix optimal basé sur silhouette score
        optimal_k = k_range[np.argmax(silhouette_scores)]
        self.optimal_clusters = optimal_k
        
        print(f"Nombre optimal de clusters: {optimal_k}")
        print(f"Score de silhouette: {max(silhouette_scores):.3f}")
        
        return optimal_k, silhouette_scores
    
    def perform_clustering(self, features, n_clusters=None):
        """
        Effectue le clustering avec plusieurs algorithmes
        """
        if n_clusters is None:
            n_clusters = self.optimal_clusters or 4
        
        X = self.rfm_data[features].copy()
        X_scaled = self.scaler.fit_transform(X)
        
        # Différents algorithmes
        algorithms = {
            'KMeans': KMeans(n_clusters=n_clusters, random_state=42),
            'Agglomerative': AgglomerativeClustering(n_clusters=n_clusters),
            'DBSCAN': DBSCAN(eps=0.5, min_samples=50)
        }
        
        results = {}
        
        for name, algorithm in algorithms.items():
            labels = algorithm.fit_predict(X_scaled)
            
            if len(np.unique(labels)) > 1:  # Si plus d'un cluster
                silhouette = silhouette_score(X_scaled, labels)
                results[name] = {
                    'labels': labels,
                    'silhouette': silhouette,
                    'n_clusters': len(np.unique(labels))
                }
                print(f"{name}: {len(np.unique(labels))} clusters, "
                      f"Silhouette: {silhouette:.3f}")
        
        # Choix du meilleur algorithme
        best_algo = max(results.keys(), key=lambda x: results[x]['silhouette'])
        self.cluster_labels = results[best_algo]['labels']
        
        print(f"Meilleur algorithme: {best_algo}")
        
        return results, best_algo
    
    def analyze_segments(self, features):
        """
        Analyse détaillée des segments créés
        """
        # Ajout des labels au dataset
        self.rfm_data['cluster'] = self.cluster_labels
        
        # Analyse par cluster
        cluster_summary = self.rfm_data.groupby('cluster')[features].agg([
            'count', 'mean', 'std', 'min', 'max'
        ]).round(2)
        
        print("Résumé des clusters:")
        print(cluster_summary)
        
        # Création de personas
        personas = {}
        for cluster in sorted(self.rfm_data['cluster'].unique()):
            if cluster == -1:  # DBSCAN outliers
                continue
                
            cluster_data = self.rfm_data[self.rfm_data['cluster'] == cluster]
            
            # Caractéristiques moyennes
            avg_recency = cluster_data['recency_days'].mean()
            avg_frequency = cluster_data['frequency'].mean()
            avg_monetary = cluster_data['avg_amount'].mean()
            avg_clv = cluster_data['clv_estimate'].mean()
            size = len(cluster_data)
            
            # Définition du persona
            if avg_clv > self.rfm_data['clv_estimate'].quantile(0.8):
                persona_name = "Champions"
                description = "Clients les plus précieux"
                strategy = "Programmes VIP, early access, services premium"
            elif avg_frequency > self.rfm_data['frequency'].quantile(0.6):
                persona_name = "Fidèles"
                description = "Achètent régulièrement"
                strategy = "Programmes de fidélité, recommandations personnalisées"
            elif avg_recency > self.rfm_data['recency_days'].quantile(0.7):
                persona_name = "En sommeil"
                description = "N'ont pas acheté récemment"
                strategy = "Campagnes de réactivation, offres spéciales"
            else:
                persona_name = "Occasionnels"
                description = "Achètent peu fréquemment"
                strategy = "Incitations à l'achat, éducation produit"
            
            personas[cluster] = {
                'name': persona_name,
                'description': description,
                'strategy': strategy,
                'size': size,
                'avg_recency': avg_recency,
                'avg_frequency': avg_frequency,
                'avg_monetary': avg_monetary,
                'avg_clv': avg_clv
            }
        
        return personas
    
    def visualize_segments(self, features):
        """
        Visualisations des segments
        """
        # PCA pour visualisation 2D
        pca = PCA(n_components=2, random_state=42)
        X_scaled = self.scaler.fit_transform(self.rfm_data[features])
        X_pca = pca.fit_transform(X_scaled)
        
        # Création des visualisations
        fig, axes = plt.subplots(2, 2, figsize=(15, 12))
        
        # 1. Scatter plot PCA
        scatter = axes[0,0].scatter(X_pca[:, 0], X_pca[:, 1], 
                                   c=self.cluster_labels, cmap='viridis', alpha=0.6)
        axes[0,0].set_title('Clusters dans l\'espace PCA')
        axes[0,0].set_xlabel(f'PC1 ({pca.explained_variance_ratio_[0]:.1%} variance)')
        axes[0,0].set_ylabel(f'PC2 ({pca.explained_variance_ratio_[1]:.1%} variance)')
        plt.colorbar(scatter, ax=axes[0,0])
        
        # 2. Distribution RFM par cluster
        rfm_cols = ['recency_days', 'frequency', 'avg_amount']
        for i, col in enumerate(rfm_cols):
            if i < 3:
                row, col_idx = (0, 1) if i == 0 else (1, i-1)
                self.rfm_data.boxplot(column=col, by='cluster', ax=axes[row, col_idx])
                axes[row, col_idx].set_title(f'Distribution {col} par cluster')
                axes[row, col_idx].set_xlabel('Cluster')
        
        plt.suptitle('Analyse des Segments Clients', fontsize=16)
        plt.tight_layout()
        plt.show()
        
        # Heatmap des moyennes par cluster
        cluster_means = self.rfm_data.groupby('cluster')[features].mean()
        
        plt.figure(figsize=(12, 8))
        sns.heatmap(cluster_means.T, annot=True, cmap='YlOrRd', 
                   fmt='.2f', cbar_kws={'label': 'Valeur moyenne'})
        plt.title('Profil moyen des segments clients')
        plt.xlabel('Cluster')
        plt.ylabel('Caractéristiques')
        plt.tight_layout()
        plt.show()

# Utilisation complète
def main():
    # Initialisation
    segmentation = CustomerSegmentation()
    
    # Chargement des données
    data = segmentation.load_and_prepare_data()
    
    # Calcul des features RFM
    rfm_data = segmentation.calculate_rfm_features()
    
    # Features pour le clustering
    clustering_features = [
        'recency_days', 'frequency', 'avg_amount', 
        'engagement_score', 'clv_estimate'
    ]
    
    # Recherche du nombre optimal de clusters
    optimal_k, silhouette_scores = segmentation.find_optimal_clusters(
        clustering_features, max_k=8
    )
    
    # Clustering
    results, best_algo = segmentation.perform_clustering(
        clustering_features, n_clusters=optimal_k
    )
    
    # Analyse des segments
    personas = segmentation.analyze_segments(clustering_features)
    
    # Affichage des personas
    print("\n=== PERSONAS CLIENTS ===")
    for cluster, persona in personas.items():
        print(f"\nCluster {cluster}: {persona['name']}")
        print(f"Description: {persona['description']}")
        print(f"Taille: {persona['size']} clients")
        print(f"CLV moyenne: {persona['avg_clv']:.2f}€")
        print(f"Stratégie: {persona['strategy']}")
    
    # Visualisations
    segmentation.visualize_segments(clustering_features)
    
    return segmentation, personas

# Exécution
if __name__ == "__main__":
    segmentation, personas = main()`,
    hints: [
      "Explorez d'abord vos données avec des statistiques descriptives",
      "Créez des features dérivées comme l'engagement score et CLV",
      "Utilisez plusieurs méthodes pour trouver le nombre optimal de clusters",
      "Comparez différents algorithmes de clustering (K-means, DBSCAN, Hierarchique)",
      "Validez vos segments avec des métriques business et créez des personas détaillés"
    ],
    difficulty: "intermédiaire" as const,
    estimatedTime: "180 min",
    skills: ["Clustering", "Feature Engineering", "Business Intelligence", "Data Visualization"],
    tools: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Matplotlib"],
    category: "Business Analytics"
  },
  {
    title: "🔍 Détection d'Anomalies : Surveillance Système",
    description: "Créez un système de détection d'anomalies pour surveiller des métriques système en temps réel.",
    problem: "Développez un système complet de détection d'anomalies pour surveiller les métriques d'un serveur web (CPU, mémoire, latence, trafic, erreurs). Le système doit détecter automatiquement les comportements anormaux, classer les anomalies par type et sévérité, et fournir des alertes en temps réel. Implémentez plusieurs approches de détection et créez un dashboard de monitoring.",
    solution: `# Système de détection d'anomalies multi-algorithmes
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.ensemble import IsolationForest
from sklearn.svm import OneClassSVM
from sklearn.cluster import DBSCAN
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
from sklearn.covariance import EllipticEnvelope
import warnings
warnings.filterwarnings('ignore')

class AnomalyDetectionSystem:
    def __init__(self):
        self.scalers = {}
        self.models = {}
        self.thresholds = {}
        self.anomaly_scores = {}
        
    def generate_system_data(self, n_days=30, anomaly_rate=0.05):
        """
        Génère des données de métriques système avec anomalies
        """
        np.random.seed(42)
        
        # Génération de timestamps
        dates = pd.date_range(
            start='2024-01-01', 
            periods=n_days * 24 * 60,  # 1 point par minute
            freq='1min'
        )
        
        n_points = len(dates)
        
        # Patterns temporels réalistes
        hour_of_day = dates.hour
        day_of_week = dates.dayofweek
        
        # CPU Usage (0-100%)
        cpu_base = 30 + 20 * np.sin(2 * np.pi * hour_of_day / 24)  # Cycle journalier
        cpu_base += 5 * (day_of_week < 5)  # Plus élevé en semaine
        cpu_noise = np.random.normal(0, 5, n_points)
        cpu_usage = np.clip(cpu_base + cpu_noise, 0, 100)
        
        # Memory Usage (0-100%)
        memory_base = 45 + 15 * np.sin(2 * np.pi * hour_of_day / 24 + np.pi/4)
        memory_base += 10 * (day_of_week < 5)
        memory_noise = np.random.normal(0, 3, n_points)
        memory_usage = np.clip(memory_base + memory_noise, 0, 100)
        
        # Network Traffic (MB/s)
        traffic_base = 100 + 50 * np.sin(2 * np.pi * hour_of_day / 24)
        traffic_base += 30 * (day_of_week < 5)
        traffic_noise = np.random.exponential(20, n_points)
        network_traffic = np.maximum(traffic_base + traffic_noise, 0)
        
        # Response Time (ms)
        response_base = 200 + 50 * np.sin(2 * np.pi * hour_of_day / 24 + np.pi/3)
        response_base += 100 * (cpu_usage > 80)  # Corrélation avec CPU
        response_noise = np.random.gamma(2, 20, n_points)
        response_time = np.maximum(response_base + response_noise, 50)
        
        # Error Rate (%)
        error_base = 0.5 + 0.3 * np.sin(2 * np.pi * hour_of_day / 24)
        error_base += 2 * (response_time > 500)  # Plus d'erreurs si lent
        error_noise = np.random.exponential(0.2, n_points)
        error_rate = np.maximum(error_base + error_noise, 0)
        
        # Création du DataFrame
        data = pd.DataFrame({
            'timestamp': dates,
            'cpu_usage': cpu_usage,
            'memory_usage': memory_usage,
            'network_traffic': network_traffic,
            'response_time': response_time,
            'error_rate': error_rate
        })
        
        # Injection d'anomalies
        n_anomalies = int(n_points * anomaly_rate)
        anomaly_indices = np.random.choice(n_points, n_anomalies, replace=False)
        
        data['is_anomaly'] = False
        data.loc[anomaly_indices, 'is_anomaly'] = True
        
        # Types d'anomalies
        for idx in anomaly_indices:
            anomaly_type = np.random.choice([
                'cpu_spike', 'memory_leak', 'network_flood', 
                'response_spike', 'error_burst'
            ])
            
            if anomaly_type == 'cpu_spike':
                data.loc[idx, 'cpu_usage'] = np.random.uniform(90, 100)
            elif anomaly_type == 'memory_leak':
                data.loc[idx, 'memory_usage'] = np.random.uniform(85, 100)
            elif anomaly_type == 'network_flood':
                data.loc[idx, 'network_traffic'] = np.random.uniform(500, 1000)
            elif anomaly_type == 'response_spike':
                data.loc[idx, 'response_time'] = np.random.uniform(2000, 5000)
            elif anomaly_type == 'error_burst':
                data.loc[idx, 'error_rate'] = np.random.uniform(10, 30)
        
        return data
    
    def preprocess_features(self, data):
        """
        Préparation des features pour la détection d'anomalies
        """
        features = data.copy()
        
        # Features temporelles
        features['hour'] = features['timestamp'].dt.hour
        features['day_of_week'] = features['timestamp'].dt.dayofweek
        features['is_weekend'] = (features['day_of_week'] >= 5).astype(int)
        
        # Features dérivées
        features['cpu_memory_ratio'] = features['cpu_usage'] / (features['memory_usage'] + 1)
        features['traffic_per_response'] = features['network_traffic'] / (features['response_time'] + 1)
        features['error_response_product'] = features['error_rate'] * features['response_time']
        
        # Rolling statistics (tendances)
        for col in ['cpu_usage', 'memory_usage', 'network_traffic', 'response_time']:
            features[f'{col}_rolling_mean'] = features[col].rolling(window=10).mean()
            features[f'{col}_rolling_std'] = features[col].rolling(window=10).std()
            features[f'{col}_deviation'] = (
                features[col] - features[f'{col}_rolling_mean']
            ) / (features[f'{col}_rolling_std'] + 1e-6)
        
        # Suppression des NaN
        features = features.fillna(method='bfill').fillna(method='ffill')
        
        return features
    
    def train_anomaly_detectors(self, train_data):
        """
        Entraîne plusieurs algorithmes de détection d'anomalies
        """
        # Sélection des features pour l'entraînement
        feature_columns = [
            'cpu_usage', 'memory_usage', 'network_traffic', 
            'response_time', 'error_rate', 'hour', 'day_of_week',
            'cpu_memory_ratio', 'traffic_per_response', 'error_response_product'
        ]
        
        X = train_data[feature_columns].copy()
        
        # Normalisation
        self.scalers['main'] = StandardScaler()
        X_scaled = self.scalers['main'].fit_transform(X)
        
        # Modèles de détection d'anomalies
        self.models = {
            'isolation_forest': IsolationForest(
                contamination=0.1, random_state=42, n_estimators=200
            ),
            'one_class_svm': OneClassSVM(
                kernel='rbf', gamma='scale', nu=0.1
            ),
            'elliptic_envelope': EllipticEnvelope(
                contamination=0.1, random_state=42
            ),
            'dbscan': DBSCAN(
                eps=0.5, min_samples=10
            )
        }
        
        # Entraînement des modèles
        model_scores = {}
        
        for name, model in self.models.items():
            print(f"Entraînement {name}...")
            
            if name == 'dbscan':
                labels = model.fit_predict(X_scaled)
                # DBSCAN: -1 = anomalie, autres = normal
                anomaly_scores = (labels == -1).astype(int)
            else:
                model.fit(X_scaled)
                anomaly_scores = model.decision_function(X_scaled)
            
            model_scores[name] = anomaly_scores
        
        self.anomaly_scores = model_scores
        return model_scores
    
    def detect_anomalies(self, test_data, threshold_percentile=95):
        """
        Détecte les anomalies sur nouvelles données
        """
        feature_columns = [
            'cpu_usage', 'memory_usage', 'network_traffic', 
            'response_time', 'error_rate', 'hour', 'day_of_week',
            'cpu_memory_ratio', 'traffic_per_response', 'error_response_product'
        ]
        
        X = test_data[feature_columns].copy()
        X_scaled = self.scalers['main'].transform(X)
        
        predictions = {}
        consensus_scores = np.zeros(len(X))
        
        for name, model in self.models.items():
            if name == 'dbscan':
                # DBSCAN nécessite un re-fit sur nouvelles données
                labels = model.fit_predict(X_scaled)
                pred = (labels == -1).astype(int)
            else:
                scores = model.decision_function(X_scaled)
                # Seuil basé sur les données d'entraînement
                threshold = np.percentile(self.anomaly_scores[name], threshold_percentile)
                pred = (scores < threshold).astype(int) if name != 'elliptic_envelope' else (scores < 0).astype(int)
            
            predictions[name] = pred
            consensus_scores += pred
        
        # Consensus: anomalie si détectée par au moins 2 modèles
        consensus_anomalies = (consensus_scores >= 2).astype(int)
        
        return predictions, consensus_anomalies
    
    def classify_anomaly_severity(self, data, anomaly_mask):
        """
        Classifie la sévérité des anomalies détectées
        """
        severity_scores = []
        
        for idx in range(len(data)):
            if not anomaly_mask[idx]:
                severity_scores.append(0)  # Normal
                continue
            
            row = data.iloc[idx]
            severity = 0
            
            # Facteurs de sévérité
            if row['cpu_usage'] > 90:
                severity += 3
            elif row['cpu_usage'] > 80:
                severity += 2
            elif row['cpu_usage'] > 70:
                severity += 1
                
            if row['memory_usage'] > 90:
                severity += 3
            elif row['memory_usage'] > 80:
                severity += 2
                
            if row['response_time'] > 2000:
                severity += 3
            elif row['response_time'] > 1000:
                severity += 2
            elif row['response_time'] > 500:
                severity += 1
                
            if row['error_rate'] > 10:
                severity += 3
            elif row['error_rate'] > 5:
                severity += 2
            elif row['error_rate'] > 2:
                severity += 1
            
            # Classification finale
            if severity >= 8:
                severity_level = 'Critical'
            elif severity >= 5:
                severity_level = 'High'
            elif severity >= 3:
                severity_level = 'Medium'
            else:
                severity_level = 'Low'
                
            severity_scores.append(severity_level)
        
        return severity_scores
    
    def generate_alerts(self, data, anomalies, severities):
        """
        Génère des alertes basées sur les anomalies détectées
        """
        alerts = []
        
        for idx in range(len(data)):
            if anomalies[idx]:
                row = data.iloc[idx]
                severity = severities[idx]
                
                # Identification du type d'anomalie principal
                anomaly_type = "Unknown"
                if row['cpu_usage'] > 85:
                    anomaly_type = "High CPU Usage"
                elif row['memory_usage'] > 85:
                    anomaly_type = "High Memory Usage"
                elif row['response_time'] > 1000:
                    anomaly_type = "High Response Time"
                elif row['error_rate'] > 5:
                    anomaly_type = "High Error Rate"
                elif row['network_traffic'] > 400:
                    anomaly_type = "High Network Traffic"
                
                alert = {
                    'timestamp': row['timestamp'],
                    'severity': severity,
                    'type': anomaly_type,
                    'cpu_usage': row['cpu_usage'],
                    'memory_usage': row['memory_usage'],
                    'response_time': row['response_time'],
                    'error_rate': row['error_rate'],
                    'description': f"{anomaly_type} detected at {row['timestamp']}"
                }
                
                alerts.append(alert)
        
        return pd.DataFrame(alerts)
    
    def visualize_results(self, data, anomalies, severities):
        """
        Visualise les résultats de détection d'anomalies
        """
        fig, axes = plt.subplots(3, 2, figsize=(20, 15))
        
        # Métriques avec anomalies
        metrics = ['cpu_usage', 'memory_usage', 'network_traffic', 
                  'response_time', 'error_rate']
        
        for i, metric in enumerate(metrics):
            row, col = i // 2, i % 2
            if i >= len(axes.flat) - 1:
                break
                
            # Points normaux
            normal_mask = ~anomalies.astype(bool)
            axes[row, col].scatter(
                data.loc[normal_mask, 'timestamp'], 
                data.loc[normal_mask, metric],
                alpha=0.6, s=1, color='blue', label='Normal'
            )
            
            # Points anomalies avec couleur par sévérité
            anomaly_mask = anomalies.astype(bool)
            if anomaly_mask.sum() > 0:
                severity_colors = {
                    'Low': 'yellow', 'Medium': 'orange', 
                    'High': 'red', 'Critical': 'darkred'
                }
                
                for severity, color in severity_colors.items():
                    severity_mask = [s == severity for s in severities]
                    mask = anomaly_mask & severity_mask
                    if mask.sum() > 0:
                        axes[row, col].scatter(
                            data.loc[mask, 'timestamp'],
                            data.loc[mask, metric],
                            alpha=0.8, s=10, color=color, label=f'Anomaly ({severity})'
                        )
            
            axes[row, col].set_title(f'{metric.replace("_", " ").title()}')
            axes[row, col].set_xlabel('Time')
            axes[row, col].legend()
            axes[row, col].tick_params(axis='x', rotation=45)
        
        # Distribution des anomalies par heure
        if anomalies.sum() > 0:
            anomaly_data = data[anomalies.astype(bool)].copy()
            anomaly_data['hour'] = anomaly_data['timestamp'].dt.hour
            hour_counts = anomaly_data['hour'].value_counts().sort_index()
            
            axes[2, 1].bar(hour_counts.index, hour_counts.values, alpha=0.7)
            axes[2, 1].set_title('Distribution des Anomalies par Heure')
            axes[2, 1].set_xlabel('Heure du jour')
            axes[2, 1].set_ylabel('Nombre d\'anomalies')
        
        plt.tight_layout()
        plt.show()
        
        # Matrice de corrélation des anomalies
        if len(data) > 100:
            correlation_data = data[['cpu_usage', 'memory_usage', 'network_traffic', 
                                   'response_time', 'error_rate']].copy()
            correlation_data['anomaly'] = anomalies
            
            plt.figure(figsize=(10, 8))
            corr_matrix = correlation_data.corr()
            sns.heatmap(corr_matrix, annot=True, cmap='coolwarm', center=0,
                       square=True, linewidths=0.5)
            plt.title('Matrice de Corrélation (avec Anomalies)')
            plt.tight_layout()
            plt.show()

def main():
    # Initialisation du système
    detector = AnomalyDetectionSystem()
    
    # Génération des données
    print("Génération des données système...")
    data = detector.generate_system_data(n_days=7, anomaly_rate=0.08)
    
    # Préparation des features
    print("Préparation des features...")
    features = detector.preprocess_features(data)
    
    # Division train/test
    split_point = int(len(features) * 0.7)
    train_data = features[:split_point]
    test_data = features[split_point:]
    
    # Entraînement
    print("Entraînement des modèles de détection...")
    model_scores = detector.train_anomaly_detectors(train_data)
    
    # Détection sur données test
    print("Détection d'anomalies...")
    predictions, consensus = detector.detect_anomalies(test_data)
    
    # Classification de sévérité
    severities = detector.classify_anomaly_severity(test_data, consensus)
    
    # Génération d'alertes
    alerts = detector.generate_alerts(test_data, consensus, severities)
    
    # Évaluation
    true_anomalies = test_data['is_anomaly'].values
    detected_anomalies = consensus
    
    from sklearn.metrics import classification_report, confusion_matrix
    print("\n=== ÉVALUATION DES PERFORMANCES ===")
    print(classification_report(true_anomalies, detected_anomalies))
    
    print(f"\nNombre d'alertes générées: {len(alerts)}")
    if len(alerts) > 0:
        print("Distribution par sévérité:")
        print(alerts['severity'].value_counts())
    
    # Visualisations
    detector.visualize_results(test_data, detected_anomalies, severities)
    
    return detector, alerts

if __name__ == "__main__":
    detector, alerts = main()`,
    hints: [
      "Générez des données synthétiques réalistes avec patterns temporels",
      "Créez des features dérivées et rolling statistics",
      "Utilisez un ensemble d'algorithmes pour réduire les faux positifs",
      "Implémentez un système de scoring de sévérité basé sur le contexte métier",
      "Visualisez les résultats pour valider et améliorer votre système"
    ],
    difficulty: "avancé" as const,
    estimatedTime: "240 min",
    skills: ["Anomaly Detection", "Time Series Analysis", "Ensemble Methods", "System Monitoring"],
    tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    category: "Sécurité & Monitoring"
  }
];

const UnsupervisedProjectsSection = () => {
  return (
    <ProjectsSection
      title="Projets Pratiques en Apprentissage Non Supervisé"
      projects={projects}
      description="Explorez la puissance de l'apprentissage non supervisé à travers ces projets concrets qui couvrent les principales techniques : clustering, détection d'anomalies, et réduction de dimensionnalité. Chaque projet simule des défis réels du monde professionnel."
    />
  );
};

export default UnsupervisedProjectsSection;
