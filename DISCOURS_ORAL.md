# DISCOURS ORAL - 2 minutes 30

## Introduction (15 secondes)

> "Pour rendre la CI/CD concrète, j'ai créé un projet simple : une application To-Do List avec GitHub Actions."

---

## Présentation du projet (30 secondes)

> "Le projet contient trois éléments :
> - **L'application** : une To-Do List en JavaScript
> - **Les tests** : 3 tests automatiques qui vérifient le bon fonctionnement
> - **Le pipeline** : un fichier YAML qui configure GitHub Actions"

---

## Explication du pipeline (1 minute)

> "Voici comment fonctionne le pipeline :"
>
> *[Montre le schéma ou la slide]*
>
> "Quand un développeur pousse son code sur GitHub, le pipeline se déclenche automatiquement.
>
> **Étape 1** : GitHub récupère le code.
>
> **Étape 2** : Il lance les tests. Si les 3 tests passent, on continue.
>
> **Étape 3** : Il fait le build, c'est-à-dire préparer l'application.
>
> **Étape 4** : Il déploie l'application sur le serveur.
>
> Tout ça se fait **sans intervention humaine**. C'est ça l'automatisation CI/CD."

---

## Cas d'erreur (30 secondes)

> "Maintenant, que se passe-t-il si un test échoue ?"
>
> *[Montre le pipeline en rouge sur GitHub]*
>
> "Le pipeline s'arrête immédiatement. Pas de build, pas de déploiement.
>
> Le développeur reçoit une notification et doit corriger son code.
>
> **L'avantage** : le code défaillant n'arrive jamais en production. Les utilisateurs sont protégés."

---

## Conclusion + Transition (15 secondes)

> "Voilà comment GitHub Actions automatise le processus de développement.
>
> **Après avoir vu le pipeline en action, voyons maintenant les avantages et limites de la CI/CD.**"
>
> *[Passe la parole au membre 4]*

---

## RÉSUMÉ TIMING

| Section | Durée |
|---------|-------|
| Introduction | 15s |
| Présentation projet | 30s |
| Explication pipeline | 60s |
| Cas d'erreur | 30s |
| Conclusion + transition | 15s |
| **TOTAL** | **2min30** |

---

## CONSEILS POUR L'ORAL

1. **Parle lentement** - Tu as le temps
2. **Montre l'écran** - Pointe les éléments pendant que tu parles
3. **Regarde le public** - Pas seulement l'écran
4. **Si tu oublies quelque chose** - Passe à la suite, personne ne le saura

---

## MOTS-CLÉS À RETENIR

- **Push** = Envoyer le code
- **Pipeline** = Chaîne d'étapes automatiques
- **Tests** = Vérifications automatiques
- **Build** = Préparer l'application
- **Deploy** = Mettre en production
- **Automatisation** = Sans intervention humaine
