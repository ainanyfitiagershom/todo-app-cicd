# To-Do List - Démo CI/CD

Projet simple pour démontrer GitHub Actions.

## Commandes

```bash
# Lancer les tests
npm test

# Lancer le build
npm run build
```

## Pipeline CI/CD

À chaque `push` sur `main` :
1. ✅ Récupération du code
2. ✅ Installation de Node.js
3. ✅ Exécution des tests
4. ✅ Build du projet
5. ✅ Déploiement (simulé)
