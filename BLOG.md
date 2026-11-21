# Blog / Journal

Le blog du site vit dans le dépôt : un article = un fichier Markdown. Publier revient à commiter et pousser, Vercel redéploie automatiquement.

## Publier un article

1. Dupliquer `src/lib/content/blog/_TEMPLATE.md`.
2. Le renommer avec le slug voulu : `mon-super-article.md` donne l'URL `/blog/mon-super-article`.
   Slug en minuscules, sans accents ni espaces, séparé par des tirets. C'est une URL, elle ne se change plus une fois publiée.
3. Remplir le frontmatter, écrire l'article, passer `published` à `true`.
4. `git add`, `git commit`, `git push`.

Les fichiers dont le nom commence par `_` sont ignorés par le blog (gabarits, notes).

## Frontmatter

| Champ         | Obligatoire | Rôle                                                                  |
| ------------- | ----------- | --------------------------------------------------------------------- |
| `title`       | oui         | Titre de l'article, du référencement et du flux RSS                   |
| `description` | oui         | Résumé affiché sur les cartes, en meta description et dans le RSS     |
| `date`        | oui         | Format `AAAA-MM-JJ`. Sert au tri, du plus récent au plus ancien       |
| `category`    | non         | Étiquette affichée sur la carte et l'article. Défaut : « Article »    |
| `author`      | non         | Défaut : « Le Labo Jaune »                                            |
| `cover`       | non         | Chemin d'une image dans `static/`, ex. `/images/blog/mon-article.jpg` |
| `coverAlt`    | non         | Texte alternatif de l'image de couverture                             |
| `published`   | non         | `false` pour un brouillon. Défaut : `true`                            |

Les valeurs contenant une apostrophe ou deux points doivent être entre guillemets doubles.

## Brouillons

Un article avec `published: false` :

- est visible en local (`npm run dev`) avec un badge « Brouillon » ;
- est invisible en production, absent du flux RSS et du sitemap.

C'est la façon de préparer un article dans le dépôt sans le publier.

## Images

Déposer les images dans `static/images/blog/`, les référencer par `/images/blog/nom.jpg`.
Sans `cover`, la carte affiche un bloc jaune typographique avec la catégorie. C'est volontaire, un article sans image reste présentable.

Compresser les images avant de les commiter, viser moins de 300 Ko.

## Ce qui est généré automatiquement

- `/blog` : liste, article le plus récent mis en avant
- `/blog/<slug>` : page de l'article, données structurées `Article` incluses
- `/blog/rss.xml` : flux RSS des articles publiés
- `/sitemap.xml` : pages statiques, projets et articles publiés
- Section « Le journal » en bas de la page d'accueil : les 3 derniers articles

## Où est le code

| Fichier                                        | Rôle                                                     |
| ---------------------------------------------- | -------------------------------------------------------- |
| `src/lib/server/blog.js`                       | Index des articles, tri, temps de lecture, articles liés |
| `src/lib/components/molecules/BlogCard.svelte` | Carte d'article                                          |
| `src/routes/blog/+page.svelte`                 | Page liste                                               |
| `src/routes/blog/[slug]/+page.svelte`          | Page article et styles du contenu Markdown               |
| `src/routes/blog/rss.xml/+server.js`           | Flux RSS                                                 |
| `src/routes/sitemap.xml/+server.js`            | Sitemap                                                  |

L'index est côté serveur : le contenu des articles n'est jamais embarqué dans le bundle JavaScript envoyé au navigateur.
