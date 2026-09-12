# 📝🛡️ Blog Cybersécurité — Roadmap d'équipe

> 🎓 Projet étudiant en cybersécurité — réalisé en équipe.

## 🎯 Objectif

Créer un blog personnel destiné à publier des notes, write-ups de CTF et
analyses de notions de cybersécurité (réseau, pentest, malware,
cryptographie, forensic, etc.), rédigé par un étudiant en cybersécurité
pour partager et structurer ses apprentissages.

## 👥 Public cible

- 🎓 Étudiants et débutants en cybersécurité cherchant des explications
  pédagogiques.
- 💼 Recruteurs / communauté tech consultant le blog comme portfolio.

## 🧰 Prérequis

- 📄 Notions de base en Markdown.
- 💻 Notions de base en développement web (HTML/CSS, un peu de JS selon la
  stack choisie).
- 🔧 Un éditeur de code et Git installés.

## 🤝 Équipe & organisation

- 🧭 **Coordinateur (transverse aux 3 projets du groupe) :** Malick Ramzy SOPODOU.
- 🧑‍🤝‍🧑 **Coéquipier·ère dédié·e à ce projet :** Daniella.
- 🎓 **Mentor :** [nom du mentor] — voir "📊 Suivi & compte-rendu au mentor"
  ci-dessous.

### 🧩 Répartition des rôles proposée (à ajuster ensemble)

| Rôle | Responsabilités principales |
|---|---|
| **📝 Contenu & structuration** | Catégories/tags, identité du blog, rédaction et relecture des articles (Phases 1, 3, 5). |
| **💻 Développement & plateforme** | Stack technique, pages, style/accessibilité, SEO, déploiement (Phases 2, 4, 6, 7, 8). |

Chacun peut contribuer aux deux rôles ; l'idée est d'avoir un
responsable clair par phase pour éviter les doublons de travail, pas
une séparation stricte.

## 🛠️ Choix techniques (indicatif, adaptable)

| Besoin | Option recommandée | Alternatives |
|---|---|---|
| Générateur de site | Astro (Content Collections) | Hugo, Jekyll, Next.js + MDX |
| Contenu | Fichiers Markdown versionnés dans le repo | CMS headless (si édition hors code souhaitée) |
| Hébergement | Netlify / Vercel / GitHub Pages | VPS perso |
| Style | CSS simple / Tailwind | Framework CSS au choix |

Le choix exact de la stack n'est pas figé : l'important est de respecter
la structure de contenu et les fonctionnalités décrites ci-dessous.

## ✨ Fonctionnalités attendues

### 🚀 MVP (indispensable)

- [ ] Page d'accueil listant les derniers articles.
- [ ] Page listant tous les articles, filtrable par catégorie.
- [ ] Page de détail d'un article (rendu Markdown).
- [ ] Chaque article a : titre, description, date de publication,
      catégorie, tags, statut brouillon/publié.
- [ ] Page "À propos" présentant l'auteur.
- [ ] Design responsive (mobile/desktop).

### 🎁 Bonus (si le temps le permet)

- [ ] Flux RSS.
- [ ] Recherche full-text dans les articles.
- [ ] Mode sombre.
- [ ] Statistiques de visite respectueuses de la vie privée (ex. Plausible, Umami).
- [ ] Table des matières auto-générée pour les articles longs.
- [ ] Coloration syntaxique du code (utile pour les extraits de scripts/exploits).

## 🗺️ Étapes de réalisation

### 🔸 Phase 1 — Cadrage
- [ ] Choisir la stack technique définitive.
- [ ] Définir la liste des catégories (ex. `pentest`, `reseau`,
      `malware`, `ctf`, `cryptographie`, `veille`, `forensic`).
- [ ] Définir le nom / l'identité du blog.

### 🔸 Phase 2 — Setup du projet
- [ ] Initialiser le repo Git.
- [ ] Installer et configurer la stack choisie.
- [ ] Mettre en place la structure de dossiers (contenu, layouts, pages,
      composants).

### 🔸 Phase 3 — Modèle de contenu
- [ ] Définir le schéma d'un article (frontmatter : title, description,
      pubDate, tags, category, draft).
- [ ] Créer un article d'exemple pour valider le rendu.

### 🔸 Phase 4 — Pages principales
- [ ] Page d'accueil (derniers articles).
- [ ] Page liste des articles + filtre par catégorie.
- [ ] Page de détail d'article.
- [ ] Page "À propos".

### 🔸 Phase 5 — Contenu
- [ ] Rédiger 3 à 5 premiers articles pour peupler le blog et valider
      l'expérience de lecture réelle.

### 🔸 Phase 6 — Style & accessibilité
- [ ] Mise en page responsive.
- [ ] Vérifier la lisibilité (contraste, taille de police, code blocks).

### 🔸 Phase 7 — SEO & partage
- [ ] Meta tags (titre, description, Open Graph).
- [ ] `sitemap.xml`.
- [ ] Flux RSS (si retenu).

### 🔸 Phase 8 — Déploiement
- [ ] Choisir l'hébergement.
- [ ] Mettre en place le déploiement (idéalement automatique à chaque
      push).
- [ ] Vérifier le site en production (liens, responsive, performance).

## ✅ Définition de "terminé" (Definition of Done)

- ✅ Le site est accessible en ligne.
- ✅ Au moins 3 articles publiés, dans au moins 2 catégories différentes.
- ✅ Navigation fonctionnelle entre accueil / liste / article / à propos.
- ✅ Le site s'affiche correctement sur mobile.

## 🔀 Workflow Git & collaboration

- 📦 Un repo GitHub dédié à ce projet, avec vous deux comme
  collaborateurs.
- 🌿 `main` reste toujours stable/déployable ; le travail se fait sur des
  branches `feature/nom-court` (ex. `feature/page-accueil`).
- 🔍 Une Pull Request par fonctionnalité ou par phase, relue par l'autre
  avant merge (même à 2, ça évite les régressions et garde les deux
  personnes au courant de l'avancement).
- 📋 Idéalement, chaque tâche de la roadmap devient une Issue GitHub ; la
  PR qui la résout la référence (`Closes #12`) pour garder un
  historique clair.
- 📝 Messages de commit clairs et descriptifs (ex.
  `feat: ajoute la page liste des articles`,
  `fix: corrige le filtre par catégorie`).

## 📊 Suivi & compte-rendu au mentor

À mettre à jour régulièrement (ex. avant chaque point avec le mentor)
pour garder une trace de l'avancement sans dépendre de la mémoire de
chacun :

| Date | Fait | En cours | Bloquants | Prochaine étape |
|---|---|---|---|---|
| | | | | |

## 🌱 Pistes d'évolution futures

- 💬 Système de commentaires (ex. Giscus basé sur GitHub Discussions).
- 📧 Newsletter de notification de nouvel article.
- 🔗 Intégration avec le projet `tryhackme-scraper` (ex. un article "par où
  commencer" qui pointe vers les rooms débutant classées).
