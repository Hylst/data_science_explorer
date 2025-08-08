
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlossaryTerm } from "@/components/ui/glossary-term";
import { mlDefinitions } from "@/data/glossary/ml-definitions";

const IntroSection = () => {
  return (
    <section id="introduction" className="space-y-8">
      <h2 className="text-3xl font-bold mb-6">Introduction au Machine Learning</h2>
      <div className="flex justify-center mb-8">
        <img 
          src="/img/machine_learning.jpg" 
          alt="Concepts du Machine Learning"
          className="w-[60%] rounded-lg shadow-lg"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <p className="mb-4">
            Le <GlossaryTerm definition={mlDefinitions["machine-learning"]} highlightStyle="underline">
              Machine Learning (ML)
            </GlossaryTerm> est une branche de l'intelligence artificielle qui permet aux 
            systèmes informatiques d'apprendre à partir de données sans être explicitement programmés.
          </p>
          <p className="mb-4">
            Contrairement à la programmation traditionnelle où les règles sont définies manuellement, 
            le ML permet aux algorithmes de découvrir des patterns et de faire des prédictions à partir 
            de données.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Types d'apprentissage</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>
                <GlossaryTerm definition={mlDefinitions["apprentissage-supervise"]} highlightStyle="dotted">
                  Supervisé
                </GlossaryTerm>
              </strong> : Apprentissage à partir d'exemples étiquetés
            </li>
            <li>
              <strong>
                <GlossaryTerm definition={mlDefinitions["apprentissage-non-supervise"]} highlightStyle="dotted">
                  Non supervisé
                </GlossaryTerm>
              </strong> : Découverte de patterns dans des données non étiquetées
            </li>
            <li><strong>Par renforcement</strong> : Apprentissage par essais et erreurs avec récompenses</li>
          </ul>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Processus du Machine Learning</CardTitle>
              <CardDescription>Un cycle d'apprentissage typique</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="bg-primary/10 p-4 rounded-md">
                  <p className="font-medium">1. Collecte et préparation des données</p>
                  <p className="text-sm text-muted-foreground">Acquisition, nettoyage et transformation</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-md">
                  <p className="font-medium">2. Choix et entraînement du modèle</p>
                  <p className="text-sm text-muted-foreground">Sélection de l'algorithme et optimisation</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-md">
                  <p className="font-medium">3. Évaluation du modèle</p>
                  <p className="text-sm text-muted-foreground">Mesure des performances sur de nouvelles données</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-md">
                  <p className="font-medium">4. Déploiement et maintenance</p>
                  <p className="text-sm text-muted-foreground">Mise en production et amélioration continue</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="mb-10">
        <CardHeader>
          <CardTitle>Applications du Machine Learning</CardTitle>
          <CardDescription>Domaines où le ML révolutionne les approches traditionnelles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="border p-4 rounded-md">
              <h4 className="font-semibold mb-2">Santé</h4>
              <p className="text-sm">Diagnostic médical, découverte de médicaments, imagerie médicale</p>
            </div>
            <div className="border p-4 rounded-md">
              <h4 className="font-semibold mb-2">Finance</h4>
              <p className="text-sm">Détection de fraude, trading algorithmique, évaluation des risques</p>
            </div>
            <div className="border p-4 rounded-md">
              <h4 className="font-semibold mb-2">Marketing</h4>
              <p className="text-sm">Segmentation client, recommandations personnalisées, prédiction des ventes</p>
            </div>
            <div className="border p-4 rounded-md">
              <h4 className="font-semibold mb-2">Transport</h4>
              <p className="text-sm">Véhicules autonomes, optimisation des itinéraires, maintenance prédictive</p>
            </div>
            <div className="border p-4 rounded-md">
              <h4 className="font-semibold mb-2">Communication</h4>
              <p className="text-sm">Traitement du langage naturel, traduction automatique, chatbots</p>
            </div>
            <div className="border p-4 rounded-md">
              <h4 className="font-semibold mb-2">Énergie</h4>
              <p className="text-sm">Prévision de consommation, optimisation des réseaux, détection d'anomalies</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default IntroSection;
