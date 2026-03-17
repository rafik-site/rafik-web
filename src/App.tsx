/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Wrench, Palette, Search, Settings, FileText, 
  Check, X, FileDown, MessageCircle, Rocket,
  Trophy, Clock, MessagesSquare, ChevronDown, ChevronUp,
  Globe, ShoppingCart, LayoutTemplate, Plug, Server
} from 'lucide-react';

const WHATSAPP_NUMBER = "+212639083315"; // Replace with actual number
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-orange-600">Rafik Web Design</div>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-orange-700 transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Contactez-nous</span>
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Création de Sites Web <span className="text-orange-600">Professionnels</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10">
            Obtenez un site web sur mesure qui convertit vos visiteurs en clients. Transparence totale sur les prix et les délais.
          </p>
          <a href="#calculateur" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Calculer Mon Devis
          </a>
        </section>

        {/* Calculator Section */}
        <section id="calculateur" className="py-16 px-4 max-w-5xl mx-auto scroll-mt-20">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
            <div className="bg-slate-900 p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Calculateur de Devis</h2>
              <p className="text-slate-400">Estimez le coût de votre projet web en quelques clics. (Prix en MAD)</p>
            </div>
            <div className="p-8">
              <Calculator />
            </div>
          </div>
        </section>

        {/* Cost Components */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">Principaux Composants du Coût</h2>
              <p className="text-slate-500 text-lg">Comprendre ces facteurs vous aide à prendre des décisions éclairées pour votre projet</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-orange-50/50 rounded-2xl p-6 border-l-4 border-orange-500">
                <Wrench className="w-8 h-8 text-slate-700 mb-4" />
                <h3 className="text-xl font-bold text-orange-600 mb-3">1. Configuration Technique</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Serveur optimisé, certificat SSL, configuration de sécurité, design responsive, performance et vitesse de chargement. <strong className="text-slate-800">Plus de complexité = plus de temps et de coût.</strong>
                </p>
              </div>

              <div className="bg-blue-50/50 rounded-2xl p-6 border-l-4 border-blue-500">
                <Palette className="w-8 h-8 text-slate-700 mb-4" />
                <h3 className="text-xl font-bold text-blue-600 mb-3">2. Complexité du Design</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Template adapté vs design 100% personnalisé de zéro. Animations, illustrations sur mesure, interactions avancées. <strong className="text-slate-800">Le design unique coûte plus cher mais s'adapte parfaitement à votre marque.</strong>
                </p>
              </div>

              <div className="bg-purple-50/50 rounded-2xl p-6 border-l-4 border-purple-500">
                <Search className="w-8 h-8 text-slate-700 mb-4" />
                <h3 className="text-xl font-bold text-purple-600 mb-3">3. SEO et Optimisation</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Recherche de mots-clés, optimisation technique, contenu SEO, structure des URLs, schema markup. <strong className="text-slate-800">L'investissement en SEO se rentabilise avec une meilleure visibilité sur Google.</strong>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-pink-50/50 rounded-2xl p-6 border-l-4 border-pink-500">
                <Settings className="w-8 h-8 text-slate-700 mb-4" />
                <h3 className="text-xl font-bold text-pink-600 mb-3">4. Fonctionnalités Spéciales</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  eCommerce, systèmes de réservation, espaces membres, intégrations avec CRM/ERP, passerelles de paiement. <strong className="text-slate-800">Chaque fonctionnalité ajoute de la complexité et du développement.</strong>
                </p>
              </div>

              <div className="bg-yellow-50/50 rounded-2xl p-6 border-l-4 border-yellow-500">
                <FileText className="w-8 h-8 text-slate-700 mb-4" />
                <h3 className="text-xl font-bold text-yellow-600 mb-3">5. Gestion de Contenu</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Copywriting professionnel, photographie de produits, vidéos, traduction en plusieurs langues. <strong className="text-slate-800">Fournissez-vous le contenu ou le créons-nous ?</strong> Cela affecte considérablement le coût.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center text-sm text-slate-600">
              <span className="font-bold text-slate-800">💡 Conseil :</span> Notre calculateur prend en compte TOUS ces facteurs pour vous donner un devis réaliste et transparent. Chaque projet est unique, et le prix final reflète exactement ce dont vous avez besoin.
            </div>
          </div>
        </section>

        {/* Who Should Build */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">Qui Devrait Créer Votre Site Web ?</h2>
              <p className="text-slate-500 text-lg">Vous avez plusieurs options. Voici pour vous aider à décider laquelle est la meilleure pour vous.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* DIY */}
              <div className="border border-slate-200 rounded-2xl p-6 flex flex-col">
                <h3 className="text-xl font-bold text-purple-600 mb-6 flex items-center gap-2">
                  <Wrench className="w-5 h-5" /> Plateformes DIY
                </h3>
                
                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold text-slate-800 mb-3">Avantages:</h4>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Très économique mensuellement</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Contrôle total</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Pas besoin de développeur</li>
                  </ul>

                  <h4 className="font-semibold text-slate-800 mb-3">Inconvénients:</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /> Limites de design</li>
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /> SEO limité</li>
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /> Impossible d'exporter votre site</li>
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /> Vous dépendez de la plateforme</li>
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /> Demande BEAUCOUP de votre temps</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-4 text-center">
                  <div className="text-xl font-bold text-orange-600">150 - 500 MAD/mois</div>
                  <div className="text-sm text-orange-600 font-medium">+ votre temps</div>
                </div>
              </div>

              {/* Freelancers */}
              <div className="border border-slate-200 rounded-2xl p-6 flex flex-col">
                <h3 className="text-xl font-bold text-blue-600 mb-6 flex items-center gap-2">
                  <Settings className="w-5 h-5" /> Freelancers
                </h3>
                
                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold text-slate-800 mb-3">Avantages:</h4>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> L'option la plus économique</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Communication directe</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Flexibilité des horaires</li>
                  </ul>

                  <h4 className="font-semibold text-slate-800 mb-3">Inconvénients:</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /> Une seule personne fait tout</li>
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /> Disponibilité limitée</li>
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /> Risque d'abandon du projet</li>
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /> Sans garanties formelles</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-4 text-center">
                  <div className="text-xl font-bold text-orange-600">5,000 - 30,000 MAD</div>
                </div>
              </div>

              {/* Agencies */}
              <div className="border border-slate-200 rounded-2xl p-6 flex flex-col">
                <h3 className="text-xl font-bold text-purple-600 mb-6 flex items-center gap-2">
                  <Globe className="w-5 h-5" /> Agences Internationales
                </h3>
                
                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold text-slate-800 mb-3">Avantages:</h4>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Livraison rapide</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Prix compétitifs</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Processus établis</li>
                  </ul>

                  <h4 className="font-semibold text-slate-800 mb-3">Inconvénients:</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /> Vous êtes un numéro de plus</li>
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /> Designs peu créatifs</li>
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /> Décalages horaires</li>
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /> Barrières linguistiques</li>
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /> Support post-lancement limité</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-4 text-center">
                  <div className="text-xl font-bold text-orange-600">20,000 - 80,000 MAD</div>
                </div>
              </div>
            </div>

            {/* Recommended */}
            <div className="border-2 border-orange-500 rounded-2xl p-8 relative mt-12">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                <Trophy className="w-4 h-4" /> Recommandé
              </div>
              
              <h3 className="text-2xl font-bold text-orange-600 mb-6 text-center flex items-center justify-center gap-2">
                <Check className="w-6 h-6" /> Agences Spécialisées Locales / Experts Indépendants
              </h3>
              
              <div className="bg-slate-50 rounded-xl p-4 text-center mb-8">
                <div className="text-3xl font-bold text-orange-600">30,000 - 150,000+ MAD</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-4">Avantages:</h4>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Équipe complète dédiée à votre projet</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Communication fluide dans votre langue et fuseau horaire</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Design 100% personnalisé sur mesure</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Support continu post-lancement</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Connaissent le marché local et les réglementations</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Garanties formelles et contrats clairs</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Accès direct à l'équipe de développement</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-4">Inconvénients:</h4>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /> Investissement initial plus élevé que les freelancers basiques</li>
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /> Processus plus détaillé (nécessite plus de temps initial)</li>
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /> Plus grand engagement du client dans le processus</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-4">Pourquoi ça vaut le coup ?</h4>
                  <ul className="space-y-4 text-sm text-slate-600">
                    <li><strong className="text-slate-800 block">ROI prouvé:</strong> sites qui convertissent les visiteurs en clients</li>
                    <li><strong className="text-slate-800 block">Évolutivité:</strong> votre site grandit avec votre entreprise</li>
                    <li><strong className="text-slate-800 block">Tranquillité:</strong> vous savez qu'il y a une équipe qui vous soutient</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 text-sm text-slate-600 border border-slate-200 text-center">
                <strong className="text-slate-800">Rafik Web Design se trouve dans cette catégorie.</strong> Nous sommes transparents : nous ne sommes pas l'option la moins chère du marché, mais chaque dirham investi se reflète dans une qualité professionnelle, un support dédié et des résultats mesurables qui impactent votre entreprise. Notre approche est de construire des relations à long terme, pas des projets ponctuels.
              </div>
            </div>
          </div>
        </section>

        {/* Glossary */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">Glossaire des Termes Techniques</h2>
              <p className="text-slate-500 text-lg">Pour que vous compreniez exactement ce que comprend votre devis.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-2xl p-6 border-l-4 border-orange-500">
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5" /> Design Responsive
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Votre site web sera parfait sur mobiles, tablettes et ordinateurs. Le design s'adapte automatiquement à la taille de l'écran. Aujourd'hui, plus de 60% du trafic web provient des mobiles, c'est donc essentiel.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border-l-4 border-blue-500">
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" /> eCommerce
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Fonctionnalité de boutique en ligne qui permet de vendre des produits directement depuis votre site web. Comprend le panier d'achat, la passerelle de paiement, la gestion des stocks et des commandes.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border-l-4 border-purple-500">
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Search className="w-5 h-5" /> SEO (Référencement)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Optimisation pour que votre site apparaisse sur Google lorsque vos clients potentiels recherchent vos services. Comprend la recherche de mots-clés, l'optimisation technique et le contenu stratégique.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border-l-4 border-pink-500">
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <LayoutTemplate className="w-5 h-5" /> CMS (Système de Gestion)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Plateforme comme WordPress qui vous permet de mettre à jour votre site sans savoir programmer. Vous pouvez ajouter des pages, télécharger des images, écrire des articles de blog, etc.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border-l-4 border-yellow-500">
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Plug className="w-5 h-5" /> Intégrations API
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Connexions avec d'autres services comme CRM, email marketing, systèmes de réservation, passerelles de paiement, etc. Automatise les processus et connecte vos outils.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Server className="w-5 h-5" /> Hébergement (Hosting)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Le serveur où est hébergé votre site web. Comprend l'espace de stockage, la bande passante, le certificat SSL de sécurité et les sauvegardes automatiques.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Next */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">Et Après ?</h2>
              <p className="text-slate-500 text-lg">Trois étapes simples pour transformer votre devis en réalité</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative">
              {/* Step 1 */}
              <div className="border border-slate-200 rounded-2xl p-8 pt-12 relative text-center flex flex-col items-center">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-white">1</div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2 justify-center">
                  <FileDown className="w-5 h-5" /> Révisez votre Devis
                </h3>
                <p className="text-sm text-slate-600 mb-8 flex-grow">
                  Utilisez le calculateur ci-dessus pour obtenir votre estimation détaillée instantanément, ou téléchargez le PDF pour le revoir calmement.
                </p>
                <a href="#calculateur" className="bg-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors w-full flex justify-center items-center gap-2">
                  <FileText className="w-5 h-5" /> Aller au Calculateur
                </a>
              </div>

              {/* Step 2 */}
              <div className="border border-slate-200 rounded-2xl p-8 pt-12 relative text-center flex flex-col items-center">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-white">2</div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2 justify-center">
                  <MessageCircle className="w-5 h-5" /> Consultez par WhatsApp
                </h3>
                <p className="text-sm text-slate-600 mb-8 flex-grow">
                  Discutez avec nous pour affiner votre projet, résoudre vos doutes et ajuster les détails.
                </p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors w-full flex justify-center items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Contacter Maintenant
                </a>
              </div>

              {/* Step 3 */}
              <div className="border border-slate-200 rounded-2xl p-8 pt-12 relative text-center flex flex-col items-center">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-white">3</div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2 justify-center">
                  <Rocket className="w-5 h-5" /> Commencez Votre Projet
                </h3>
                <p className="text-sm text-slate-600 mb-8 flex-grow">
                  Une fois les détails confirmés, nous initions le développement dans les prochaines 48 heures.
                </p>
                <button className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors w-full flex justify-center items-center gap-2">
                  <Rocket className="w-5 h-5" /> Commencer Maintenant
                </button>
              </div>
            </div>


          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 max-w-7xl mx-auto space-y-8">
          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-indigo-500 to-blue-500 rounded-3xl p-8 md:p-12 text-white shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Nous Choisir ?</h2>
              <p className="text-blue-100 text-lg">Plus de 50 projets réussis nous soutiennent</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center flex flex-col items-center">
                <Trophy className="w-12 h-12 mb-6 text-white" />
                <h3 className="text-xl font-bold mb-4">Qualité & Sécurité Garanties</h3>
                <p className="text-sm text-blue-100 mb-6 leading-relaxed flex-grow">
                  Code propre suivant les meilleures pratiques, design professionnel responsive, et architecture évolutive dans chaque projet.
                </p>
                <p className="text-xs text-blue-200 border-t border-white/20 pt-4">
                  <strong className="text-white">Inclus :</strong> SSL gratuit, backups automatiques quotidiens, protection anti-malware, et mises à jour de sécurité continues.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center flex flex-col items-center">
                <Rocket className="w-12 h-12 mb-6 text-white" />
                <h3 className="text-xl font-bold mb-4">Livraison Ponctuelle & Support Rapide</h3>
                <p className="text-sm text-blue-100 mb-6 leading-relaxed flex-grow">
                  Nous respectons les délais convenus sans exceptions. Votre projet prêt quand vous en avez besoin, avec une transparence totale à chaque étape.
                </p>
                <p className="text-xs text-blue-200 border-t border-white/20 pt-4">
                  <strong className="text-white">Inclus :</strong> Mises à jour hebdomadaires de l'avancement, temps de réponse &lt;24h, et 30 jours de support post-lancement gratuit.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center flex flex-col items-center">
                <MessagesSquare className="w-12 h-12 mb-6 text-white" />
                <h3 className="text-xl font-bold mb-4">Communication Claire & Transparente</h3>
                <p className="text-sm text-blue-100 mb-6 leading-relaxed flex-grow">
                  Sans jargon technique inutile. Nous vous expliquons tout en langage clair. Vous savez toujours sur quoi nous travaillons et pourquoi.
                </p>
                <p className="text-xs text-blue-200 border-t border-white/20 pt-4">
                  <strong className="text-white">Inclus :</strong> Chef de projet dédié, accès au portail de suivi en temps réel, et réunions de révision régulières.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">Questions Fréquentes</h2>
          </div>

          <div className="space-y-4">
            <FAQItem 
              question="Que comprend exactement le prix ? Y a-t-il des coûts cachés ?"
              answer="Zéro surprise. Votre devis comprend TOUT : design personnalisé, développement complet, hébergement pour 1 an, certificat SSL de sécurité, formation pour que vous gériez votre site, et 30 jours de support post-lancement. Les seuls coûts supplémentaires seraient des fonctionnalités supplémentaires que vous demandez par la suite ou le renouvellement annuel de l'hébergement (que nous vous signalons 60 jours à l'avance)."
              color="blue"
            />

            <FAQItem 
              question="Combien de temps faut-il pour réaliser un projet ?"
              answer="Cela dépend de la complexité. Un site vitrine basique (5-10 pages) prend 2-3 semaines. Un eCommerce moyen peut prendre 6-8 semaines. L'estimation des heures dans votre devis vous donne une idée claire. Si vous sélectionnez l'option « urgent », nous priorisons votre projet et réduisons le délai de moitié (avec une majoration de 30%)."
              color="pink"
            />
            <FAQItem 
              question="Comment fonctionne le paiement ? Dois-je tout payer d'avance ?"
              answer={
                <div>
                  <p className="mb-2">Pas du tout. Nous divisons le paiement en 3 phases pour que ce soit confortable et transparent :</p>
                  <ul className="space-y-1">
                    <li><strong className="text-orange-600">Phase 1 - Lancement (30%) :</strong> Nous confirmons le projet et commençons le design.</li>
                    <li><strong className="text-orange-600">Phase 2 - MVP (40%) :</strong> Nous livrons le Produit Minimum Viable fonctionnel pour votre révision.</li>
                    <li><strong className="text-orange-600">Phase 3 - Mise en ligne (30%) :</strong> Nous mettons le site en production après les tests finaux.</li>
                  </ul>
                </div>
              }
              color="orange"
            />
            <FAQItem 
              question="Puis-je apporter des modifications au projet une fois commencé ?"
              answer="Oui, dans la limite du raisonnable. De petits ajustements et raffinements sont inclus. Si vous souhaitez ajouter de nouvelles fonctionnalités qui n'étaient pas dans le devis initial, nous vous donnerons un devis supplémentaire avant de procéder. Toujours avec transparence."
              color="blue"
            />
            <FAQItem 
              question="Quelles technologies utilisez-vous ?"
              answer={
                <p>Selon vos besoins, nous utilisons les meilleurs outils pour chaque cas : <strong className="text-orange-600">WordPress</strong> (sites vitrines et blogs), <strong className="text-orange-600">WooCommerce</strong> (eCommerce), <strong className="text-orange-600">React</strong> (applications web interactives), <strong className="text-orange-600">Node.js</strong> (backend robuste), et <strong className="text-orange-600">Laravel</strong> (systèmes d'entreprise). Nous choisissons toujours la technologie la plus appropriée pour TU projet spécifique.</p>
              }
              color="blue"
            />
            <FAQItem 
              question="Offrez-vous une maintenance et un support après le lancement ?"
              answer="Oui. Nous incluons 30 jours de support gratuit post-lancement pour toute question ou ajustement mineur. Ensuite, nous proposons des plans de maintenance mensuels à partir de 990 MAD/mois qui incluent : mises à jour de sécurité, sauvegardes quotidiennes, support technique prioritaire, et heures de développement pour des améliorations continues."
              color="blue"
            />
            <FAQItem 
              question="Puis-je ajouter des fonctionnalités avancées après le devis initial ?"
              answer="Oui, absolument. Le calculateur inclut des options pour des fonctions avancées comme l'intelligence artificielle, des lecteurs vidéo/audio personnalisés, des passerelles de paiement sur mesure, des intégrations avec des API tierces, et plus encore. Si vous avez besoin de quelque chose de spécifique qui n'est pas listé, mentionnez-le simplement dans le champ des commentaires supplémentaires et nous vous donnerons un devis personnalisé."
              color="blue"
            />
            <FAQItem 
              question="Le prix inclut-il les intégrations avec des services tiers (API, CRM, etc.) ?"
              answer="Oui. Le coût de développement inclut l'intégration technique avec des services externes comme Stripe, PayPal, Mailchimp, Google Maps, CRM (HubSpot, Salesforce), ERP, et autres API. Vous ne payez que les licences ou abonnements de ces services directement à leurs fournisseurs. Nous vous aidons à choisir les meilleures options selon votre budget et vos besoins."
              color="blue"
            />
            <FAQItem 
              question="Puis-je demander des animations personnalisées et des éléments interactifs ?"
              answer="Absolument. Le calculateur permet d'estimer des designs avec des animations complexes, des micro-interactions, du défilement parallaxe, des effets de survol personnalisés, et des éléments visuels uniques. Ces améliorations augmentent le temps de conception et de développement, mais transforment complètement l'expérience utilisateur. Lors de la consultation initiale, nous pouvons montrer des exemples et définir le niveau d'interactivité idéal pour votre marque."
              color="blue"
            />
            <FAQItem 
              question="Offrez-vous des plans de paiement flexibles ?"
              answer={
                <div>
                  <p className="mb-4">Oui, nous comprenons que l'investissement dans un site web professionnel est important. En plus du modèle standard 30-40-30 (30% initial, 40% développement, 30% livraison), nous offrons :</p>
                  <ul className="space-y-2">
                    <li><strong className="text-orange-600">• Paiement mensuel :</strong> Jusqu'à 6 versements sans intérêt pour les projets supérieurs à 50,000 MAD</li>
                    <li><strong className="text-orange-600">• Paiement par étapes personnalisées :</strong> Définissez vos propres points de paiement selon les fonctionnalités livrées</li>
                    <li><strong className="text-orange-600">• Remise pour paiement unique :</strong> 5% de réduction si vous payez la totalité d'avance</li>
                    <li><strong className="text-orange-600">• Financement :</strong> Nous travaillons avec des partenaires financiers pour les grands projets (150k+ MAD)</li>
                  </ul>
                </div>
              }
              color="blue"
            />
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto bg-orange-50 rounded-3xl p-10 md:p-16 text-center border border-orange-100">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">Prêt à Commencer Votre Projet ?</h2>
            <p className="text-slate-600 text-lg mb-8">Obtenez votre devis personnalisé maintenant et téléchargez votre proposition en PDF</p>
            <a href="#calculateur" className="inline-block bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Calculer Mon Devis Gratuit
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-2xl font-bold text-white mb-6">Rafik Web Design</div>
          <p className="mb-6">Création de sites web professionnels au Maroc.</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href={WHATSAPP_LINK} className="hover:text-white transition-colors">WhatsApp: {WHATSAPP_NUMBER}</a>
            <a href="mailto:contact@rafik.tech" className="hover:text-white transition-colors">contact@rafik.tech</a>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Rafik Web Design. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

function FAQItem({ question, answer, color }: { question: string, answer: React.ReactNode, color: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const colorClasses: Record<string, string> = {
    blue: "border-blue-500",
    purple: "border-purple-500",
    pink: "border-pink-500",
    orange: "border-orange-500",
  };

  return (
    <div className={`bg-white rounded-xl border-l-4 ${colorClasses[color] || "border-slate-300"} shadow-sm overflow-hidden`}>
      <button 
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-slate-800 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-sm text-slate-600">
          {answer}
        </div>
      )}
    </div>
  );
}

function Calculator() {
  // Define prices here so they are easy to change
  const PRICES = {
    type: {
      vitrine: 3000,
      ecommerce: 8000,
      portfolio: 2500,
      blog: 2000
    },
    pages: {
      small: 0, // 1-5 pages (included in base)
      medium: 1500, // 6-10 pages
      large: 3500, // 11-20 pages
      xlarge: 6000 // 20+ pages
    },
    design: {
      template: 0,
      custom: 3000,
      premium: 6000
    },
    seo: {
      basic: 0,
      advanced: 2500
    },
    extras: {
      multilingual: 2000,
      booking: 1500,
      login: 3000
    }
  };

  const [selections, setSelections] = useState({
    type: 'vitrine',
    pages: 'small',
    design: 'template',
    seo: 'basic',
    extras: {
      multilingual: false,
      booking: false,
      login: false
    }
  });

  const calculateTotal = () => {
    let total = 0;
    total += PRICES.type[selections.type as keyof typeof PRICES.type];
    total += PRICES.pages[selections.pages as keyof typeof PRICES.pages];
    total += PRICES.design[selections.design as keyof typeof PRICES.design];
    total += PRICES.seo[selections.seo as keyof typeof PRICES.seo];
    
    if (selections.extras.multilingual) total += PRICES.extras.multilingual;
    if (selections.extras.booking) total += PRICES.extras.booking;
    if (selections.extras.login) total += PRICES.extras.login;

    return total;
  };

  const handleExtraChange = (extra: keyof typeof selections.extras) => {
    setSelections(prev => ({
      ...prev,
      extras: {
        ...prev.extras,
        [extra]: !prev.extras[extra]
      }
    }));
  };

  const total = calculateTotal();
  const whatsappMessage = encodeURIComponent(`Bonjour Rafik, je souhaite avoir un devis pour la création d'un site web. Mon estimation sur le calculateur est de ${total} MAD.`);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        {/* Type de site */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-4">1. Type de site web</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { id: 'vitrine', label: 'Site Vitrine' },
              { id: 'ecommerce', label: 'E-commerce' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'blog', label: 'Blog' }
            ].map(option => (
              <button
                key={option.id}
                onClick={() => setSelections({...selections, type: option.id})}
                className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                  selections.type === option.id 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-slate-200 hover:border-blue-200 text-slate-600'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Nombre de pages */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-4">2. Nombre de pages</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { id: 'small', label: '1 - 5 pages' },
              { id: 'medium', label: '6 - 10 pages' },
              { id: 'large', label: '11 - 20 pages' },
              { id: 'xlarge', label: '20+ pages' }
            ].map(option => (
              <button
                key={option.id}
                onClick={() => setSelections({...selections, pages: option.id})}
                className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                  selections.pages === option.id 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-slate-200 hover:border-blue-200 text-slate-600'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Design */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-4">3. Qualité du Design</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'template', label: 'Template Adapté', desc: 'Design préconçu personnalisé' },
              { id: 'custom', label: 'Sur Mesure', desc: 'Design unique de zéro' },
              { id: 'premium', label: 'Premium', desc: 'Animations & interactions avancées' }
            ].map(option => (
              <button
                key={option.id}
                onClick={() => setSelections({...selections, design: option.id})}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  selections.design === option.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-slate-200 hover:border-blue-200'
                }`}
              >
                <div className={`font-bold text-sm mb-1 ${selections.design === option.id ? 'text-blue-700' : 'text-slate-800'}`}>
                  {option.label}
                </div>
                <div className="text-xs text-slate-500">{option.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* SEO */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-4">4. Optimisation SEO</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => setSelections({...selections, seo: 'basic'})}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                selections.seo === 'basic' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-slate-200 hover:border-blue-200'
              }`}
            >
              <div className={`font-bold text-sm mb-1 ${selections.seo === 'basic' ? 'text-blue-700' : 'text-slate-800'}`}>SEO Basique</div>
              <div className="text-xs text-slate-500">Mots-clés standards, balises meta</div>
            </button>
            <button
              onClick={() => setSelections({...selections, seo: 'advanced'})}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                selections.seo === 'advanced' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-slate-200 hover:border-blue-200'
              }`}
            >
              <div className={`font-bold text-sm mb-1 ${selections.seo === 'advanced' ? 'text-blue-700' : 'text-slate-800'}`}>SEO Avancé</div>
              <div className="text-xs text-slate-500">Recherche approfondie, optimisation vitesse, schema markup</div>
            </button>
          </div>
        </div>

        {/* Extras */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-4">5. Fonctionnalités supplémentaires</h3>
          <div className="space-y-3">
            {[
              { id: 'multilingual', label: 'Site Multilingue (Français, Arabe, Anglais...)' },
              { id: 'booking', label: 'Système de réservation / Prise de RDV' },
              { id: 'login', label: 'Espace membre / Connexion utilisateur' }
            ].map(option => (
              <label key={option.id} className="flex items-center p-4 border-2 border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                  checked={selections.extras[option.id as keyof typeof selections.extras]}
                  onChange={() => handleExtraChange(option.id as keyof typeof selections.extras)}
                />
                <span className="ml-3 text-sm font-medium text-slate-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Result Panel */}
      <div className="lg:col-span-1">
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 sticky top-24">
          <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">Estimation du Projet</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Type de site:</span>
              <span className="font-medium text-slate-800 capitalize">{selections.type}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Pages:</span>
              <span className="font-medium text-slate-800">{selections.pages === 'small' ? '1-5' : selections.pages === 'medium' ? '6-10' : selections.pages === 'large' ? '11-20' : '20+'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Design:</span>
              <span className="font-medium text-slate-800 capitalize">{selections.design}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">SEO:</span>
              <span className="font-medium text-slate-800 capitalize">{selections.seo}</span>
            </div>
            
            {(selections.extras.multilingual || selections.extras.booking || selections.extras.login) && (
              <div className="pt-4 border-t">
                <span className="text-sm text-slate-600 block mb-2">Extras inclus:</span>
                <ul className="text-xs text-slate-500 space-y-1">
                  {selections.extras.multilingual && <li>• Multilingue</li>}
                  {selections.extras.booking && <li>• Réservation</li>}
                  {selections.extras.login && <li>• Espace membre</li>}
                </ul>
              </div>
            )}
          </div>

          <div className="border-t-2 border-slate-200 pt-6 mb-6">
            <div className="text-sm text-slate-500 mb-1">Coût estimé (Création)</div>
            <div className="text-4xl font-extrabold text-blue-600">{total.toLocaleString()} <span className="text-2xl">MAD</span></div>
            <p className="text-xs text-slate-400 mt-2">*Ceci est une estimation pour la création. Le prix final peut varier.</p>
          </div>

          <div className="bg-blue-50/50 rounded-xl p-4 mb-8 border border-blue-100">
            <h4 className="font-bold text-slate-800 text-sm mb-3">Frais récurrents annuels (Non inclus) :</h4>
            <ul className="text-sm text-slate-600 space-y-2 mb-4">
              <li className="flex justify-between">
                <span>Hébergement web</span>
                <span className="font-medium">à partir de 400 MAD/an</span>
              </li>
              <li className="flex justify-between">
                <span>Nom de domaine</span>
                <span className="font-medium">à partir de 150 MAD/an</span>
              </li>
            </ul>
            <div className="text-xs text-slate-500 space-y-2">
              <p><strong>Autonomie totale :</strong> Vous recevrez tous les accès pour renouveler vous-même votre hébergement et domaine chaque année, sans frais supplémentaires de notre part.</p>
              <p><strong>Option "Tranquillité" :</strong> Si vous préférez que nous gérions les renouvellements et la maintenance technique pour vous, un frais unique de configuration de <strong>500 MAD</strong> s'applique au début du projet.</p>
            </div>
          </div>

          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Discuter de ce devis
          </a>
        </div>
      </div>
    </div>
  );
}

