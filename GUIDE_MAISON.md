# GUIDE COMPLET - À FAIRE CHEZ TOI

## Pré-requis
- Node.js installé (vérifie avec `node --version`)
- Git installé (vérifie avec `git --version`)
- Compte GitHub

---

## ÉTAPE 0 : Voir l'application (OPTIONNEL)

Pour voir l'interface de la To-Do List :
1. Double-clique sur le fichier `index.html`
2. Il s'ouvre dans ton navigateur
3. Tu peux ajouter/supprimer des tâches

---

## ÉTAPE 1 : Copier le projet chez toi

Copie tout le dossier `todo-app-cicd` sur une clé USB ou envoie-le toi par email.

---

## ÉTAPE 2 : Tester en local

Ouvre un terminal et tape :

```bash
cd todo-app-cicd
npm test
```

Tu dois voir :
```
✅ PASS: Ajouter une tâche fonctionne
✅ PASS: Supprimer une tâche fonctionne
✅ PASS: Ajouter une tâche vide échoue

RÉSULTAT: 3/3 tests passés
```

---

## ÉTAPE 3 : Créer le repository GitHub

1. Va sur https://github.com
2. Connecte-toi à ton compte
3. Clique sur le bouton vert **"New"** (ou "New repository")
4. Remplis :
   - Repository name : `todo-app-cicd`
   - Description : `Démo CI/CD avec GitHub Actions`
   - Laisse sur **Public**
   - ⚠️ NE COCHE PAS "Add a README file"
   - ⚠️ NE COCHE PAS "Add .gitignore"
5. Clique **"Create repository"**

---

## ÉTAPE 4 : Pousser le code sur GitHub

Dans ton terminal, tape ces commandes UNE PAR UNE :

```bash
cd todo-app-cicd
```

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Premier commit - To-Do List CI/CD"
```

```bash
git branch -M main
```

⚠️ IMPORTANT : Remplace TON_NOM_UTILISATEUR par ton vrai nom GitHub :

```bash
git remote add origin https://github.com/ainanyfitiagershom/todo-app-cicd.git
```

```bash
git push -u origin main
```

Si on te demande ton mot de passe, utilise un "Personal Access Token" :
- Va sur GitHub → Settings → Developer settings → Personal access tokens → Generate new token

---

## ÉTAPE 5 : Voir le pipeline CI/CD en action

1. Va sur ton repository : `https://github.com/TON_NOM_UTILISATEUR/todo-app-cicd`
2. Clique sur l'onglet **"Actions"** (en haut)
3. Tu verras ton pipeline qui s'exécute !
4. Clique dessus pour voir les détails
5. Attends que tout soit vert ✅

---

## ÉTAPE 6 : Démontrer un cas d'erreur (pour l'exposé)

Pour montrer ce qui se passe quand un test échoue :

1. Ouvre le fichier `todo.test.js`
2. Change la ligne :
   ```javascript
   assertEqual(result, true);
   ```
   en :
   ```javascript
   assertEqual(result, false);  // ERREUR VOLONTAIRE
   ```
3. Pousse le changement :
   ```bash
   git add .
   git commit -m "Test qui échoue volontairement"
   git push
   ```
4. Va sur GitHub → Actions
5. Tu verras le pipeline en ROUGE ❌

6. APRÈS LA DÉMO : Remets le code correct et repousse !

---

## RÉSUMÉ DES COMMANDES

```bash
# Tester en local
npm test

# Initialiser Git
git init
git add .
git commit -m "message"
git branch -M main
git remote add origin https://github.com/TON_NOM/todo-app-cicd.git
git push -u origin main

# Après modifications
git add .
git commit -m "description du changement"
git push
```

---

## EN CAS DE PROBLÈME

### "node: command not found"
→ Installe Node.js : https://nodejs.org

### "git: command not found"
→ Installe Git : https://git-scm.com

### "Permission denied" sur GitHub
→ Crée un Personal Access Token sur GitHub

### Le pipeline ne se lance pas
→ Vérifie que le fichier `.github/workflows/ci.yml` existe
→ Vérifie que tu as poussé sur la branche `main`

---

## CHECKLIST AVANT L'EXPOSÉ

- [ ] Le projet est sur GitHub
- [ ] Le pipeline fonctionne (vert ✅)
- [ ] J'ai testé le cas d'erreur (rouge ❌)
- [ ] J'ai remis le code correct après
- [ ] J'ai préparé mon discours oral

BONNE CHANCE ! 🎯
