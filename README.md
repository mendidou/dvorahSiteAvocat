# Site Dvorah Avocat

Site web pour cabinet d'avocats avec CMS Netlify intégré.

## Déploiement sur Netlify

1. **Créer un compte Netlify** : [netlify.com](https://netlify.com)

2. **Connecter le repository Git** :
   - Créez un repository GitHub avec ces fichiers
   - Connectez-le à Netlify

3. **Configuration automatique** :
   - Build command: `npm run build-data` (déjà configuré dans netlify.toml)
   - Publish directory: `.`

4. **Activer Netlify Identity** :
   - Allez dans Settings > Identity
   - Activez Netlify Identity
   - Configurez les paramètres d'inscription

5. **Activer Git Gateway** :
   - Dans Identity > Services
   - Activez Git Gateway

## Accès au CMS

Une fois déployé, accédez au CMS via : `https://votre-site.netlify.app/admin`

## Comment ça fonctionne

1. **Netlify CMS** modifie les fichiers YAML dans `/data/`
2. **À chaque build**, le script `build-data.js` :
   - Lit tous les fichiers YAML
   - Génère automatiquement `data.js` 
   - Le site utilise ce fichier pour afficher le contenu

3. **Chaque modification dans le CMS** déclenche un nouveau build automatiquement

## Fonctionnalités

- ✅ Site responsive optimisé mobile
- ✅ Menu mobile fonctionnel
- ✅ CMS Netlify pour éditer le contenu
- ✅ Design professionnel identique à ory-avocats.com
- ✅ Animations au scroll
- ✅ Menu langue déroulant

## Structure du CMS

Le CMS permet de modifier :
- Informations générales (nom, contact, adresse)
- Section Hero (titre, boutons)
- Domaines d'expertise
- Présentation du cabinet
- Actualités (création/modification d'articles)
- Toutes les images et textes