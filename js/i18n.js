'use strict';

var TRANSLATIONS = {
  en: {
    'nav-home': 'Home',
    'hero-h1': 'I build digital products, tools & ecosystems.',
    'hero-sub': 'Product Builder · AI-assisted Development · Agile Mindset · Privacy-First',
    'hero-cta': 'View Projects',
    'about-text': 'Side projects where I connect professional expertise with my passion for software development and creativity.',
    'skills-heading': 'What I do',
    'skill-1': 'Product Builder – from idea to launch',
    'skill-2': 'AI-assisted Development (GitHub Copilot, VS Code)',
    'skill-3': 'Agile Mindset & iterative work',
    'skill-4': 'Privacy-First Design',
    'skill-5': 'Android & Web Apps',
    'projects-heading': 'Projects',
    'group-general-title': 'Developer Profiles',
    'group-trivia-title': 'Trivia Quiz Platform — triviaquiz.games',
    'group-trivia-desc': 'Modular quiz platform · Web + Android',
    'group-birds-title': 'Micro-Apps for Parents — birdsfamily.com',
    'group-birds-desc': 'Apps for parents · Web + Android',
    'group-snap-title': 'Snap it. Keep it. — snapitkeep.it',
    'group-snap-desc': 'Memory app · Rebranding in progress',
    'group-npuppy-title': 'npuppy™ — NOSTR Address Service',
    'group-npuppy-desc': 'Concept phase · Trademark registered',
    'group-meta-title': 'Infrastructure & Legal',
    'group-meta-label': 'Infrastructure & Meta',
    'group-meta-desc': 'Modular legal & web infrastructure – one framework, multiple products',
    'group-microapps-label': 'Micro Apps',
    'group-platforms-label': 'Platforms',
    'group-infra-label': 'Infrastructure & Meta',
    'group-concept-label': 'Concept Phase',
    'group-cocktail-title': 'Cocktail or Color? — cocktailorcolor.com',
    'group-cocktail-desc': 'Fun quiz with only two options · Web',
    'group-coming-title': 'Coming Soon',
    'tile-github-h3': 'GitHub',
    'tile-github-p': 'Visit my GitHub profile to explore all projects and repositories',
    'tile-github-status': 'Developer Account',
    'tile-playstore-trivia-h3': 'Google Play Store',
    'tile-playstore-trivia-p': 'Published mobile apps on the "lueders.app" developer page',
    'tile-playstore-trivia-status': 'Developer Account',
    'tile-multi-trivia-h3': 'Multi Trivia Quiz App',
    'tile-multi-trivia-p': 'A modular platform for multiple trivia apps – one codebase, many topics.',
    'tile-multi-trivia-status': 'Multi Trivia Quiz Platform',
    'tile-triviaquiz-h3': 'Trivia Quiz Games Hub',
    'tile-triviaquiz-p': 'Your central hub for diverse trivia games across multiple topics',
    'tile-triviaquiz-status': 'Web Platform · Live',
    'tile-playstore-birds-h3': 'Google Play Store',
    'tile-playstore-birds-p': 'Published mobile apps on the "BIRDS.family" developer page',
    'tile-playstore-birds-status': 'Developer Account',
    'tile-birds-desc-h3': 'BIRDS Ecosystem',
    'tile-birds-desc-p': 'A collection of small, focused apps — each designed to solve one clearly defined problem.',
    'tile-birds-desc-status': 'Overview · In Development',
    'tile-birds-hub-h3': 'BIRDS Tools Hub',
    'tile-birds-hub-p': 'A warm, lightweight toolset for everyday family moments.',
    'tile-birds-hub-status': 'Web Platform · Live',
    'tile-snap-h3': 'Snap it. Keep it.',
    'tile-snap-p': 'A modular family of tools for capturing and keeping what matters. Offline, private, no account needed.',
    'tile-snap-status': 'Web Platform · Live',
    'tile-npuppy-h3': 'npuppy™',
    'tile-npuppy-p': 'NOSTR address service — concept phase. Trademark registered.',
    'tile-npuppy-status': 'Private Beta',
    'tile-legal-h3': 'legal.lueders.solutions',
    'tile-legal-p': 'Modular legal page system – one framework, deployed across multiple products.',
    'tile-legal-status': 'Infrastructure · Live',
    'tile-solutions-h3': 'lueders.solutions',
    'tile-solutions-p': 'The main platform behind all lueders.app projects.',
    'tile-solutions-status': 'Platform · Live',
    'tile-coming-h3': 'to be continued...',
    'tile-coming-p': 'More projects are in the making.',
    'tile-coming-stay': 'Stay tuned',
    'btn-github': 'Visit on GitHub',
    'btn-playstore-trivia': 'Google Play Store',
    'btn-playstore-birds': 'Google Play Store',
    'btn-multi-trivia': 'Project Description',
    'btn-triviaquiz': 'triviaquiz.games',
    'btn-birds-desc': 'Project Description',
    'btn-birds-hub': 'BIRDS.family',
    'btn-snap': 'snapitkeep.it',
    'btn-npuppy': 'npuppy.io',
    'btn-legal': 'legal.lueders.solutions',
    'btn-solutions': 'lueders.solutions',
    'badge-setup': 'Setup',
    'badge-rebranding': 'Rebranding',
    'group-analytics-title': 'Data Analytics',
    'group-analytics-desc': 'Search Console & Play · BigQuery + Looker Studio',
    'group-workspace-title': 'Google Workspace',
    'group-workspace-desc': 'Foundation for all projects.',
    'group-cloudflare-title': 'Cloudflare DNS & Domains',
    'group-cloudflare-desc': 'Central DNS routing for all projects — fast, secure & scalable',
    'btn-coming': 'Coming Soon',
    'contact-desc': 'Open to interesting projects & collaborations.',
    'footer-imprint': 'Imprint',
    'footer-privacy': 'Privacy',
    // Trivia project page
    'trivia-h2': 'Multi Trivia App – Project Description',
    'trivia-overview-h3': 'Overview',
    'trivia-overview-p1': 'The Multi Trivia App is a modular platform designed to power multiple trivia applications from a single, unified codebase. Each trivia app is implemented as a separate flavor with its own branding, question catalog, and domain, while all core logic, UI components, and infrastructure are shared.',
    'trivia-overview-p2': 'This architecture enables fast development, minimal maintenance effort, and clean separation between product variants.',
    'trivia-features-h3': 'Key Features',
    'trivia-arch-h3': 'Architecture',
    'trivia-arch-p1': 'The platform follows a layered, modular structure:',
    'trivia-arch-p2': 'This approach ensures clean boundaries and long‑term maintainability.',
    'trivia-usecases-h3': 'Use Cases',
    'trivia-status-h3': 'Current Status',
    'trivia-status-p1': 'The platform is actively in development. The first app, Bitcoin Trivia, is already based on this architecture. Additional trivia topics are planned.',
    // Birds project page
    'birds-h2': '🐦 The Bird Ecosystem – Apps That Belong to You',
    'birds-intro-h3': 'Introduction',
    'birds-intro-p1': 'The Bird Ecosystem is a collection of small, focused apps — each designed to solve one clearly defined problem.',
    'birds-intro-p2': 'Every app is represented by its own bird, symbolizing its character and purpose. Together, they form a lightweight, private, and expandable system that works without cloud services, accounts, or distractions.',
    'birds-list-h3': 'The Birds and Their Meaning',
    'birds-phil-h3': 'Philosophy of the Bird Ecosystem',
    'birds-current-h3': 'Current Apps in the Bird Ecosystem',
    'philosophy-heading': 'Product Philosophy',
    'phil-privacy-title': 'Privacy-First',
    'phil-privacy-back': 'Privacy is a base assumption, not a feature.',
    'phil-offline-title': 'Offline-First',
    'phil-offline-back': "Apps must work, even when the connection doesn't.",
    'phil-modular-title': 'Modular',
    'phil-modular-back': 'Small, isolated apps with a shared codebase — testable, flexible, different flavors.',
    'phil-simple-title': 'Simple First',
    'phil-simple-back': 'Start simple to avoid AI overengineering — complexity grows with knowledge.'
  },
  de: {
    'nav-home': 'Start',
    'hero-h1': 'Ich baue digitale Produkte, Tools & Ökosysteme.',
    'hero-sub': 'Product Builder · KI-unterstützte Entwicklung · Agiles Mindset · Privacy-First',
    'hero-cta': 'Projekte ansehen',
    'about-text': 'Nebenprojekte, in denen ich berufliches Wissen mit meiner Leidenschaft für Softwareentwicklung und Kreativität verbinde.',
    'skills-heading': 'Was ich mache',
    'skill-1': 'Product Builder – von der Idee bis zum Launch',
    'skill-2': 'KI-unterstützte Entwicklung (GitHub Copilot, VS Code)',
    'skill-3': 'Agiles Mindset & iteratives Arbeiten',
    'skill-4': 'Privacy-First Design',
    'skill-5': 'Android & Web-Apps',
    'projects-heading': 'Projekte',
    'group-general-title': 'Entwicklerprofile',
    'projects-heading': 'Projekte',
    'group-trivia-title': 'Trivia Quiz Plattform — triviaquiz.games',
    'group-trivia-desc': 'Modulare Quiz-Plattform · Web + Android',
    'group-birds-title': 'Micro-Apps für Eltern — birdsfamily.com',
    'group-birds-desc': 'Apps für Eltern · Web + Android',
    'group-snap-title': 'Snap it. Keep it. — snapitkeep.it',
    'group-snap-desc': 'Erinnerungs-App · Rebranding in Arbeit',
    'group-npuppy-title': 'npuppy™ — NOSTR-Adressdienst',
    'group-npuppy-desc': 'Konzeptphase · Marke eingetragen',
    'group-meta-title': 'Infrastruktur & Rechtliches',
    'group-meta-label': 'Infrastruktur & Meta',
    'group-meta-desc': 'Modulares System für rechtliche Seiten & Web-Infrastruktur – ein Framework, viele Produkte',
    'group-microapps-label': 'Micro Apps',
    'group-platforms-label': 'Plattformen',
    'group-infra-label': 'Infrastruktur & Meta',
    'group-concept-label': 'Konzeptphase',
    'group-cocktail-title': 'Cocktail or Color? — cocktailorcolor.com',
    'group-cocktail-desc': 'Spaß-Quiz mit nur zwei Optionen · Web',
    'group-coming-title': 'Demnächst',
    'tile-github-h3': 'GitHub',
    'tile-github-p': 'Alle Projekte und Repositories auf meinem GitHub-Profil',
    'tile-github-status': 'Entwickler-Account',
    'tile-playstore-trivia-h3': 'Google Play Store',
    'tile-playstore-trivia-p': 'Veröffentlichte Mobile Apps unter der Entwicklerseite "lueders.app"',
    'tile-playstore-trivia-status': 'Entwickler-Account',
    'tile-multi-trivia-h3': 'Multi Trivia Quiz App',
    'tile-multi-trivia-p': 'Eine modulare Plattform für mehrere Trivia-Apps – eine Codebasis, viele Themen.',
    'tile-multi-trivia-status': 'Multi Trivia Quiz Plattform',
    'tile-triviaquiz-h3': 'Trivia Quiz Games Hub',
    'tile-triviaquiz-p': 'Der zentrale Hub für verschiedene Trivia-Spiele zu vielen Themen',
    'tile-triviaquiz-status': 'Web-Plattform · Live',
    'tile-playstore-birds-h3': 'Google Play Store',
    'tile-playstore-birds-p': 'Veröffentlichte Mobile Apps unter der Entwicklerseite "BIRDS.family"',
    'tile-playstore-birds-status': 'Entwickler-Account',
    'tile-birds-desc-h3': 'BIRDS Ökosystem',
    'tile-birds-desc-p': 'Eine Sammlung kleiner, fokussierter Apps – jede löst ein klar definiertes Problem.',
    'tile-birds-desc-status': 'Übersicht · In Entwicklung',
    'tile-birds-hub-h3': 'BIRDS Tools Hub',
    'tile-birds-hub-p': 'Ein warmes, leichtgewichtiges Toolset für Familienmomente im Alltag.',
    'tile-birds-hub-status': 'Web-Plattform · Live',
    'tile-snap-h3': 'Snap it. Keep it.',
    'tile-snap-p': 'Eine modulare Familie von Tools zum Festhalten, was zählt. Offline, privat, kein Account nötig.',
    'tile-snap-status': 'Web-Plattform · Live',
    'tile-npuppy-h3': 'npuppy™',
    'tile-npuppy-p': 'NOSTR-Adressdienst – Konzeptphase. Marke eingetragen.',
    'tile-npuppy-status': 'Private Beta',
    'tile-legal-h3': 'legal.lueders.solutions',
    'tile-legal-p': 'Modulares System für Impressum & Datenschutz – ein Framework für mehrere Produkte.',
    'tile-legal-status': 'Infrastruktur · Live',
    'tile-solutions-h3': 'lueders.solutions',
    'tile-solutions-p': 'Die Hauptplattform hinter allen lueders.app-Projekten.',
    'tile-solutions-status': 'Plattform · Live',
    'tile-coming-h3': 'wird fortgesetzt...',
    'tile-coming-p': 'Weitere Projekte sind in Arbeit.',
    'tile-coming-stay': 'Stay tuned',
    'btn-github': 'Auf GitHub ansehen',
    'btn-playstore-trivia': 'Google Play Store',
    'btn-playstore-birds': 'Google Play Store',
    'btn-multi-trivia': 'Projektbeschreibung',
    'btn-triviaquiz': 'triviaquiz.games',
    'btn-birds-desc': 'Projektbeschreibung',
    'btn-birds-hub': 'BIRDS.family',
    'btn-snap': 'snapitkeep.it',
    'btn-npuppy': 'npuppy.io',
    'btn-legal': 'legal.lueders.solutions',
    'btn-solutions': 'lueders.solutions',
    'badge-setup': 'Im Aufbau',
    'badge-rebranding': 'Rebranding',
    'group-analytics-title': 'Datenanalyse',
    'group-analytics-desc': 'Search Console & Play · BigQuery + Looker Studio',
    'group-workspace-title': 'Google Workspace',
    'group-workspace-desc': 'Grundlage für alle Projekte.',
    'group-cloudflare-title': 'Cloudflare DNS & Domains',
    'group-cloudflare-desc': 'Zentrales DNS-Routing für alle Projekte — schnell, sicher & skalierbar',
    'btn-coming': 'Demnächst',
    'contact-desc': 'Offen für interessante Projekte & Kooperationen.',
    'footer-imprint': 'Impressum',
    'footer-privacy': 'Datenschutz',
    // Trivia project page
    'trivia-h2': 'Multi Trivia App – Projektbeschreibung',
    'trivia-overview-h3': 'Überblick',
    'trivia-overview-p1': 'Die Multi Trivia App ist eine modulare Plattform, die mehrere Trivia-Anwendungen aus einer einzigen, einheitlichen Codebasis betreibt. Jede Trivia-App ist als separate Variante mit eigenem Branding, Fragenkatalog und Domain umgesetzt, während alle Kernlogik, UI-Komponenten und Infrastruktur gemeinsam genutzt werden.',
    'trivia-overview-p2': 'Diese Architektur ermöglicht schnelle Entwicklung, minimalen Wartungsaufwand und eine saubere Trennung zwischen Produktvarianten.',
    'trivia-features-h3': 'Hauptmerkmale',
    'trivia-arch-h3': 'Architektur',
    'trivia-arch-p1': 'Die Plattform folgt einer geschichteten, modularen Struktur:',
    'trivia-arch-p2': 'Dieser Ansatz gewährleistet klare Grenzen und langfristige Wartbarkeit.',
    'trivia-usecases-h3': 'Anwendungsfälle',
    'trivia-status-h3': 'Aktueller Stand',
    'trivia-status-p1': 'Die Plattform befindet sich in aktiver Entwicklung. Die erste App, Bitcoin Trivia, basiert bereits auf dieser Architektur. Weitere Trivia-Themen sind geplant.',
    // Birds project page
    'birds-h2': '🐦 Das Bird Ecosystem – Apps, die dir gehören',
    'birds-intro-h3': 'Einleitung',
    'birds-intro-p1': 'Das Bird Ecosystem ist eine Sammlung kleiner, fokussierter Apps – jede designed, um ein klar definiertes Problem zu lösen.',
    'birds-intro-p2': 'Jede App wird durch einen eigenen Vogel repräsentiert, der ihren Charakter und Zweck symbolisiert. Gemeinsam bilden sie ein leichtgewichtiges, privates und erweiterbares System, das ohne Cloud-Dienste, Accounts oder Ablenkungen funktioniert.',
    'birds-list-h3': 'Die Vögel und ihre Bedeutung',
    'birds-phil-h3': 'Philosophie des Bird Ecosystems',
    'birds-current-h3': 'Aktuelle Apps im Bird Ecosystem',
    'philosophy-heading': 'Produkt-Philosophie',
    'phil-privacy-title': 'Privacy-First',
    'phil-privacy-back': 'Datenschutz ist eine Grundannahme, kein Feature.',
    'phil-offline-title': 'Offline-First',
    'phil-offline-back': 'Apps müssen funktionieren, auch wenn die Verbindung es nicht tut.',
    'phil-modular-title': 'Modular',
    'phil-modular-back': 'Kleine, isolierte Apps mit gemeinsamer Codebasis — testbar, flexibel, unterschiedliche Flavors.',
    'phil-simple-title': 'Simple First',
    'phil-simple-back': 'Einfach starten, um AI-Overengineering zu vermeiden — Komplexität wächst erst mit dem eigenen Wissen.'
  },
  fr: {
    'nav-home': 'Accueil',
    'hero-h1': 'Je construis des produits numériques, outils & écosystèmes.',
    'hero-sub': 'Product Builder · Développement assisté par IA · Mindset Agile · Privacy-First',
    'hero-cta': 'Voir les projets',
    'about-text': 'Des projets personnels où j\'allie expertise professionnelle, passion pour le développement logiciel et créativité.',
    'skills-heading': 'Ce que je fais',
    'skill-1': 'Product Builder – de la conception au lancement',
    'skill-2': 'Développement assisté par IA (GitHub Copilot, VS Code)',
    'skill-3': 'Mindset agile & travail itératif',
    'skill-4': 'Conception Privacy-First',
    'skill-5': 'Apps Android & Web',
    'group-general-title': 'Profils développeur',
    'projects-heading': 'Projets',
    'group-trivia-title': 'Plateforme Trivia Quiz — triviaquiz.games',
    'group-trivia-desc': 'Plateforme de quiz modulaire · Web + Android',
    'group-birds-title': 'Micro-Apps pour parents — birdsfamily.com',
    'group-birds-desc': 'Apps pour parents · Web + Android',
    'group-snap-title': 'Snap it. Keep it. — snapitkeep.it',
    'group-snap-desc': 'App mémoire · Rebranding en cours',
    'group-npuppy-title': 'npuppy™ — Service d\'adresse NOSTR',
    'group-npuppy-desc': 'Phase de concept · Marque déposée',
    'group-meta-title': 'Infrastructure & Légal',
    'group-meta-label': 'Infrastructure & Méta',
    'group-meta-desc': 'Système modulaire pour pages légales & infrastructure web – un framework, plusieurs produits',
    'group-microapps-label': 'Micro Apps',
    'group-platforms-label': 'Plateformes',
    'group-infra-label': 'Infrastructure & Méta',
    'group-concept-label': 'Phase Concept',
    'group-cocktail-title': 'Cocktail or Color? — cocktailorcolor.com',
    'group-cocktail-desc': 'Quiz amusant avec seulement deux options · Web',
    'group-coming-title': 'Bientôt disponible',
    'tile-github-h3': 'GitHub',
    'tile-github-p': 'Explorez tous mes projets et dépôts sur mon profil GitHub',
    'tile-github-status': 'Compte développeur',
    'tile-playstore-trivia-h3': 'Google Play Store',
    'tile-playstore-trivia-p': 'Applications mobiles publiées sous la page développeur "lueders.app"',
    'tile-playstore-trivia-status': 'Compte développeur',
    'tile-multi-trivia-h3': 'Multi Trivia Quiz App',
    'tile-multi-trivia-p': 'Une plateforme modulaire pour plusieurs apps de trivia – une base de code, de nombreux sujets.',
    'tile-multi-trivia-status': 'Plateforme Multi Trivia Quiz',
    'tile-triviaquiz-h3': 'Trivia Quiz Games Hub',
    'tile-triviaquiz-p': 'Votre hub central pour des jeux de trivia variés sur de nombreux sujets',
    'tile-triviaquiz-status': 'Plateforme Web · Live',
    'tile-playstore-birds-h3': 'Google Play Store',
    'tile-playstore-birds-p': 'Applications mobiles publiées sous la page développeur "BIRDS.family"',
    'tile-playstore-birds-status': 'Compte développeur',
    'tile-birds-desc-h3': 'Écosystème BIRDS',
    'tile-birds-desc-p': 'Une collection de petites apps ciblées – chacune résout un problème clairement défini.',
    'tile-birds-desc-status': 'Vue d\'ensemble · En développement',
    'tile-birds-hub-h3': 'BIRDS Tools Hub',
    'tile-birds-hub-p': 'Un ensemble d\'outils léger et chaleureux pour les moments en famille.',
    'tile-birds-hub-status': 'Plateforme Web · Live',
    'tile-snap-h3': 'Snap it. Keep it.',
    'tile-snap-p': 'Une famille modulaire d\'outils pour capturer ce qui compte. Hors ligne, privé, sans compte.',
    'tile-snap-status': 'Plateforme Web · Live',
    'tile-npuppy-h3': 'npuppy™',
    'tile-npuppy-p': 'Service d\'adresse NOSTR – phase de concept. Marque déposée.',
    'tile-npuppy-status': 'Bêta privée',
    'tile-legal-h3': 'legal.lueders.solutions',
    'tile-legal-p': 'Système modulaire pour mentions légales & confidentialité – un framework pour plusieurs produits.',
    'tile-legal-status': 'Infrastructure · Live',
    'tile-solutions-h3': 'lueders.solutions',
    'tile-solutions-p': 'La plateforme principale derrière tous les projets lueders.app.',
    'tile-solutions-status': 'Plateforme · Live',
    'tile-coming-h3': 'à suivre...',
    'tile-coming-p': 'D\'autres projets sont en cours.',
    'tile-coming-stay': 'Restez à l\'écoute',
    'btn-github': 'Voir sur GitHub',
    'btn-playstore-trivia': 'Google Play Store',
    'btn-playstore-birds': 'Google Play Store',
    'btn-multi-trivia': 'Description du projet',
    'btn-triviaquiz': 'triviaquiz.games',
    'btn-birds-desc': 'Description du projet',
    'btn-birds-hub': 'BIRDS.family',
    'btn-snap': 'snapitkeep.it',
    'btn-npuppy': 'npuppy.io',
    'btn-legal': 'legal.lueders.solutions',
    'btn-solutions': 'lueders.solutions',
    'badge-setup': 'En cours',
    'badge-rebranding': 'Rebranding',
    'group-analytics-title': 'Analyse de données',
    'group-analytics-desc': 'Search Console & Play · BigQuery + Looker Studio',
    'group-workspace-title': 'Google Workspace',
    'group-workspace-desc': 'Base de tous les projets.',
    'group-cloudflare-title': 'Cloudflare DNS & Domaines',
    'group-cloudflare-desc': 'Routage DNS central pour tous les projets — rapide, sécurisé & scalable',
    'btn-coming': 'Bientôt',
    'contact-desc': 'Ouvert à des projets intéressants & collaborations.',
    'footer-imprint': 'Mentions légales',
    'footer-privacy': 'Confidentialité',
    // Trivia project page
    'trivia-h2': 'Multi Trivia App – Description du projet',
    'trivia-overview-h3': "Vue d'ensemble",
    'trivia-overview-p1': "La Multi Trivia App est une plateforme modulaire conçue pour alimenter plusieurs applications de trivia à partir d'une base de code unique. Chaque app est une variante distincte avec son propre branding, catalogue de questions et domaine, tandis que la logique centrale, les composants UI et l'infrastructure sont partagés.",
    'trivia-overview-p2': "Cette architecture permet un développement rapide, un minimum de maintenance et une séparation claire entre les variantes de produits.",
    'trivia-features-h3': 'Fonctionnalités clés',
    'trivia-arch-h3': 'Architecture',
    'trivia-arch-p1': 'La plateforme suit une structure en couches modulaires :',
    'trivia-arch-p2': 'Cette approche garantit des frontières propres et une maintenabilité à long terme.',
    'trivia-usecases-h3': "Cas d'usage",
    'trivia-status-h3': 'Statut actuel',
    'trivia-status-p1': 'La plateforme est en développement actif. La première app, Bitcoin Trivia, est déjà basée sur cette architecture. Des sujets de trivia supplémentaires sont prévus.',
    // Birds project page
    'birds-h2': "🐦 L'Écosystème Bird – Des apps qui vous appartiennent",
    'birds-intro-h3': 'Introduction',
    'birds-intro-p1': "L'Écosystème Bird est une collection de petites apps ciblées — chacune conçue pour résoudre un problème clairement défini.",
    'birds-intro-p2': "Chaque app est représentée par son propre oiseau, symbolisant son caractère et son objectif. Ensemble, elles forment un système léger, privé et extensible qui fonctionne sans services cloud, comptes ou distractions.",
    'birds-list-h3': 'Les oiseaux et leur signification',
    'birds-phil-h3': "Philosophie de l'Écosystème Bird",
    'birds-current-h3': "Apps actuelles dans l'Écosystème Bird",
    'philosophy-heading': 'Philosophie Produit',
    'phil-privacy-title': 'Privacy-First',
    'phil-privacy-back': 'La confidentialité est un postulat de base, pas une fonctionnalité.',
    'phil-offline-title': 'Offline-First',
    'phil-offline-back': 'Les apps doivent fonctionner, même quand la connexion ne le fait pas.',
    'phil-modular-title': 'Modulaire',
    'phil-modular-back': 'Petites apps isolées avec une base de code partagée — testables, flexibles, différentes déclinaisons.',
    'phil-simple-title': 'Simple First',
    'phil-simple-back': 'Commencer simple pour éviter la surcomplexité — la complexité grandit avec la connaissance.'
  }
};

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  try { localStorage.setItem('lang', lang); } catch (e) {}
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang][key] !== undefined) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-lang'));
    });
  });
  var saved = 'en';
  try { saved = localStorage.getItem('lang') || 'en'; } catch (e) {}
  if (!TRANSLATIONS[saved]) saved = 'en';
  setLang(saved);
  document.querySelectorAll('.flip-card').forEach(function (card) {
    card.addEventListener('click', function (e) {
      var isFlipped = card.classList.contains('is-flipped');
      document.querySelectorAll('.flip-card').forEach(function (c) { c.classList.remove('is-flipped'); });
      if (!isFlipped) { card.classList.add('is-flipped'); }
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.flip-card')) {
      document.querySelectorAll('.flip-card').forEach(function (c) { c.classList.remove('is-flipped'); });
    }
  });

  // Scroll reveal
  var revealEls = document.querySelectorAll('.about-section, .skills-section, .philosophy-section, .hub-card, .hub-group-divider, .contact-section');
  revealEls.forEach(function (el) { el.classList.add('reveal'); });
  document.querySelectorAll('.hub-card').forEach(function (card, i) {
    card.style.transitionDelay = (i * 0.07) + 's';
  });
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // Skill rows stagger reveal
  document.querySelectorAll('.skill-row').forEach(function (row, i) {
    row.style.opacity = '0';
    row.style.transform = 'translateX(-12px)';
    row.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    row.style.transitionDelay = (i * 0.08) + 's';
  });
  if ('IntersectionObserver' in window) {
    var skillsObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-row').forEach(function (row) {
            row.style.opacity = '1';
            row.style.transform = 'translateX(0)';
          });
          skillsObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    var skillsCard = document.querySelector('.skills-card');
    if (skillsCard) skillsObs.observe(skillsCard);
  } else {
    document.querySelectorAll('.skill-row').forEach(function (row) {
      row.style.opacity = '1'; row.style.transform = 'none';
    });
  }

  // Cursor glow — smooth lerp follow
  var glow = document.getElementById('cursor-glow');
  if (glow && window.matchMedia('(hover: hover)').matches) {
    var targetX = window.innerWidth / 2;
    var targetY = window.innerHeight / 2;
    var currentX = targetX;
    var currentY = targetY;
    var glowVisible = false;

    document.addEventListener('mousemove', function (e) {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!glowVisible) {
        currentX = targetX; currentY = targetY;
        glow.style.left = currentX + 'px';
        glow.style.top  = currentY + 'px';
        glow.style.opacity = '1';
        glowVisible = true;
      }
    });

    document.addEventListener('mouseleave', function () {
      glow.style.opacity = '0';
      glowVisible = false;
    });

    (function animate() {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      glow.style.left = currentX + 'px';
      glow.style.top  = currentY + 'px';
      requestAnimationFrame(animate);
    })();
  }
});
