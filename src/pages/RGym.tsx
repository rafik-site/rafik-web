import React from 'react';
import { 
  Check, 
  MessageCircle, 
  Dumbbell, 
  Users, 
  ClipboardList, 
  CreditCard, 
  Fingerprint, 
  LayoutDashboard, 
  ShieldCheck, 
  Smartphone,
  Zap,
  Download,
  Database,
  Monitor
} from 'lucide-react';

const WHATSAPP_NUMBER = "+212639083315"; // Replace with actual number
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;

export default function RGym() {
  const features = [
    {
      title: "Gestion des Empreintes (ZKTeco)",
      description: "Support complet des terminaux biométriques. Configuration multi-dispositifs par IP et Port.",
      icon: <Fingerprint className="w-6 h-6 text-orange-600" />
    },
    {
      title: "Tableau de Bord Moderne",
      description: "Statistiques en temps réel et métriques visuelles pour une gestion simplifiée.",
      icon: <LayoutDashboard className="w-6 h-6 text-orange-600" />
    },
    {
      title: "Gestion des Membres",
      description: "Suivi complet des adhésions, dates d'expiration et export de rapports PDF.",
      icon: <Users className="w-6 h-6 text-orange-600" />
    },
    {
      title: "Programmes d'Entraînement",
      description: "Création de routines personnalisées, gestion des exercices et suivi des niveaux.",
      icon: <Dumbbell className="w-6 h-6 text-orange-600" />
    },
    {
      title: "Gestion des Paiements",
      description: "Suivi détaillé des revenus, historique des paiements et statistiques financières.",
      icon: <CreditCard className="w-6 h-6 text-orange-600" />
    },
    {
      title: "Sincronisation Cloud/Locale",
      description: "Upload/Download d'utilisateurs et logs d'assistance avec les terminaux.",
      icon: <Zap className="w-6 h-6 text-orange-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/ricon.png" alt="R-GYM Logo" className="w-10 h-10 rounded-lg shadow-lg" />
            <span className="text-2xl font-black tracking-tighter text-white">R-GYM</span>
          </div>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-orange-700 transition-all flex items-center gap-2 shadow-lg shadow-orange-600/20 active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Contactez-nous</span>
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-4 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-orange-500 text-sm font-bold mb-8 animate-fade-in">
              <ShieldCheck className="w-4 h-4" />
              LICENCE DE PAIEMENT UNIQUE - À VIE
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
              GESTION DE GYM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
                PROFESSIONNELLE
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Application de bureau complète développée en Python avec CustomTkinter. 
              Intégration biométrique ZKTeco, gestion des membres, paiements et programmes d'entraînement.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={WHATSAPP_LINK}
                className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold rounded-xl transition-all shadow-xl shadow-orange-600/20 flex items-center justify-center gap-3 active:scale-95"
              >
                <MessageCircle className="w-6 h-6" />
                Demander le Prix
              </a>
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white text-lg font-bold rounded-xl transition-all flex items-center justify-center gap-3 active:scale-95">
                <Monitor className="w-6 h-6" />
                Démo Desktop
              </button>
            </div>
          </div>
        </section>

        {/* Image Preview / Icon Showcase */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="max-w-5xl mx-auto text-center">
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <img 
                src="/ricon.png" 
                alt="R-GYM App Icon" 
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-3xl shadow-2xl mx-auto"
              />
            </div>
            <p className="mt-8 text-slate-500 font-medium">Design moderne avec CustomTkinter</p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Tout ce dont vous avez besoin</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Une solution robuste et locale pour gérer votre salle de sport sans abonnement mensuel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-orange-600/50 transition-all hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Activation Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-[3rem] overflow-hidden p-8 md:p-16 relative">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <ShieldCheck className="w-48 h-48 text-orange-600" />
            </div>
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black mb-6">Système d'Activation Sécurisé</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                R-GYM fonctionne avec une licence de paiement unique. Pas d'abonnements cachés.
                Le système d'activation génère un fichier permanent sur votre ordinateur.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Licence à vie (Lifetime)",
                  "Support multi-terminaux ZKTeco",
                  "Base de données SQLite sécurisée",
                  "Mises à jour gratuites incluses"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-slate-200">
                    <Check className="w-5 h-5 text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <a 
                href={WHATSAPP_LINK}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 text-lg font-bold rounded-xl hover:bg-slate-200 transition-all active:scale-95"
              >
                Acheter Maintenant
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black mb-8">Prêt à moderniser votre salle ?</h2>
            <p className="text-xl text-slate-400 mb-12">
              Contactez-nous pour une démonstration personnalisée et discutez de l'implémentation dans votre établissement.
            </p>
            <a 
              href={WHATSAPP_LINK}
              className="px-12 py-6 bg-orange-600 hover:bg-orange-700 text-white text-2xl font-black rounded-2xl transition-all shadow-2xl shadow-orange-600/40 active:scale-95 flex items-center justify-center gap-4 mx-auto w-full sm:w-max"
            >
              <MessageCircle className="w-8 h-8" />
              Contactez-nous sur WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800 text-center text-slate-500">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src="/ricon.png" alt="R-GYM Logo" className="w-6 h-6 grayscale opacity-50" />
          <span className="font-bold text-slate-400 tracking-tighter">R-GYM</span>
        </div>
        <p className="text-sm">© 2024 R-GYM - Tous droits réservés. Développé avec ❤️ en Python.</p>
      </footer>
    </div>
  );
}
