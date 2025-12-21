import json

# Portuguese translations
pt = {
    "common": {
        "loading": "Carregando...",
        "error": "Erro",
        "success": "Sucesso",
        "cancel": "Cancelar",
        "save": "Salvar",
        "delete": "Excluir",
        "edit": "Editar",
        "view": "Ver",
        "search": "Pesquisar",
        "filter": "Filtrar",
        "sort": "Ordenar",
        "all": "Todos",
        "none": "Nenhum",
        "yes": "Sim",
        "no": "Não",
        "back": "Voltar",
        "next": "Próximo",
        "previous": "Anterior",
        "submit": "Enviar",
        "close": "Fechar",
        "open": "Abrir"
    },
    "nav": {
        "home": "Início",
        "ultras": "Ultras",
        "articles": "Artigos",
        "about": "Sobre",
        "contact": "Contato",
        "login": "Entrar",
        "register": "Registrar",
        "logout": "Sair",
        "profile": "Perfil",
        "settings": "Configurações",
        "admin": "Admin",
        "dashboard": "Painel"
    },
    "home": {
        "hero": {
            "title": "Cultura Ultra",
            "subtitle": "Descubra a paixão das torcidas organizadas ao redor do mundo",
            "cta": "Explorar Grupos",
            "secondary": "Ver Mapa"
        },
        "featured": {
            "title": "Grupos em Destaque",
            "subtitle": "Descubra os grupos ultras mais icônicos ao redor do mundo",
            "viewAll": "Ver Todos os Grupos"
        },
        "stats": {
            "groups": "Grupos",
            "countries": "Países",
            "members": "Membros",
            "years": "Anos de História"
        },
        "latest": {
            "title": "Últimos Artigos",
            "subtitle": "Mantenha-se atualizado com as últimas notícias e histórias do mundo ultra",
            "viewAll": "Ver Todos os Artigos"
        },
        "map": {
            "title": "Mapa Mundial",
            "subtitle": "Explore grupos ultras ao redor do mundo",
            "viewMap": "Ver Mapa Interativo"
        },
        "newsletter": {
            "title": "Mantenha-se Atualizado",
            "subtitle": "Inscreva-se em nossa newsletter para as últimas notícias",
            "placeholder": "Seu email",
            "button": "Inscrever-se"
        }
    },
    "ultras": {
        "title": "Grupos Ultra",
        "subtitle": "Explore grupos de torcidas organizadas ao redor do mundo",
        "search": "Pesquisar grupos...",
        "filterByCountry": "Filtrar por país",
        "allCountries": "Todos os países",
        "sortBy": "Ordenar por",
        "name": "Nome",
        "yearFounded": "Ano de fundação",
        "country": "País",
        "city": "Cidade",
        "club": "Clube",
        "members": "membros",
        "founded": "Fundado em",
        "colors": "Cores",
        "noResults": "Nenhum grupo encontrado",
        "viewProfile": "Ver Perfil",
        "viewOnMap": "Ver no Mapa",
        "share": "Compartilhar",
        "history": "História",
        "gallery": "Galeria",
        "rivalries": "Rivalidades",
        "alliances": "Alianças",
        "tifos": "Tifos",
        "chants": "Cantos",
        "achievements": "Conquistas",
        "all": "grupos",
        "map": "Mapa dos Ultras",
        "gridView": "Visualização em Grade",
        "listView": "Visualização em Lista",
        "mapView": "Visualização em Mapa"
    },
    "articles": {
        "title": "Artigos",
        "subtitle": "Notícias, histórias e análises do mundo ultra",
        "search": "Pesquisar artigos...",
        "filterByCategory": "Filtrar por categoria",
        "allCategories": "Todas as categorias",
        "readMore": "Ler mais",
        "readTime": "min de leitura",
        "by": "Por",
        "publishedOn": "Publicado em",
        "noResults": "Nenhum artigo encontrado",
        "categories": {
            "news": "Notícias",
            "history": "História",
            "culture": "Cultura",
            "interviews": "Entrevistas",
            "opinion": "Opinião",
            "tifos": "Tifos",
            "matchReports": "Relatórios de Jogos"
        },
        "featured": "Destaque",
        "latest": "Últimos",
        "popular": "Populares",
        "related": "Artigos Relacionados",
        "share": "Compartilhar",
        "comments": "Comentários",
        "writeComment": "Escrever um comentário...",
        "postComment": "Publicar Comentário"
    },
    "auth": {
        "login": {
            "title": "Bem-vindo de volta",
            "subtitle": "Entre na sua conta para continuar",
            "email": "Email",
            "password": "Senha",
            "rememberMe": "Lembrar de mim",
            "forgotPassword": "Esqueceu a senha?",
            "submit": "Entrar",
            "noAccount": "Não tem uma conta?",
            "signUp": "Registrar-se",
            "or": "ou",
            "withGoogle": "Continuar com Google",
            "withFacebook": "Continuar com Facebook"
        },
        "register": {
            "title": "Criar Conta",
            "subtitle": "Junte-se à comunidade ultra",
            "name": "Nome completo",
            "email": "Email",
            "password": "Senha",
            "confirmPassword": "Confirmar senha",
            "submit": "Criar Conta",
            "hasAccount": "Já tem uma conta?",
            "signIn": "Entrar",
            "terms": "Ao se registrar, você concorda com nossos",
            "termsLink": "Termos de Serviço",
            "and": "e",
            "privacyLink": "Política de Privacidade"
        },
        "errors": {
            "invalidEmail": "Email inválido",
            "passwordShort": "A senha deve ter pelo menos 8 caracteres",
            "passwordMismatch": "As senhas não coincidem",
            "invalidCredentials": "Email ou senha inválidos",
            "emailExists": "Este email já está registrado"
        }
    },
    "about": {
        "title": "Sobre Nós",
        "subtitle": "Nossa missão é documentar e celebrar a cultura ultra",
        "mission": {
            "title": "Nossa Missão",
            "description": "Somos apaixonados por documentar a rica história e cultura vibrante dos grupos ultras ao redor do mundo."
        },
        "team": {
            "title": "Nossa Equipe",
            "subtitle": "Conheça as pessoas por trás do projeto"
        },
        "contact": {
            "title": "Entre em Contato",
            "subtitle": "Tem perguntas ou quer contribuir? Fale conosco",
            "email": "Email",
            "message": "Mensagem",
            "send": "Enviar Mensagem"
        }
    },
    "footer": {
        "about": "Sobre",
        "contact": "Contato",
        "privacy": "Privacidade",
        "terms": "Termos",
        "copyright": "Todos os direitos reservados",
        "social": {
            "followUs": "Siga-nos",
            "twitter": "Twitter",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "youtube": "YouTube"
        },
        "newsletter": {
            "title": "Newsletter",
            "subtitle": "Inscreva-se para receber atualizações",
            "placeholder": "Seu email",
            "button": "Inscrever-se"
        }
    },
    "errors": {
        "404": {
            "title": "Página Não Encontrada",
            "description": "A página que você está procurando não existe.",
            "backHome": "Voltar ao Início"
        },
        "500": {
            "title": "Erro do Servidor",
            "description": "Algo deu errado. Por favor, tente novamente mais tarde.",
            "backHome": "Voltar ao Início"
        }
    }
}

# French translations
fr = {
    "common": {
        "loading": "Chargement...",
        "error": "Erreur",
        "success": "Succès",
        "cancel": "Annuler",
        "save": "Enregistrer",
        "delete": "Supprimer",
        "edit": "Modifier",
        "view": "Voir",
        "search": "Rechercher",
        "filter": "Filtrer",
        "sort": "Trier",
        "all": "Tous",
        "none": "Aucun",
        "yes": "Oui",
        "no": "Non",
        "back": "Retour",
        "next": "Suivant",
        "previous": "Précédent",
        "submit": "Envoyer",
        "close": "Fermer",
        "open": "Ouvrir"
    },
    "nav": {
        "home": "Accueil",
        "ultras": "Ultras",
        "articles": "Articles",
        "about": "À propos",
        "contact": "Contact",
        "login": "Connexion",
        "register": "Inscription",
        "logout": "Déconnexion",
        "profile": "Profil",
        "settings": "Paramètres",
        "admin": "Admin",
        "dashboard": "Tableau de bord"
    },
    "home": {
        "hero": {
            "title": "Culture Ultra",
            "subtitle": "Découvrez la passion des supporters ultras à travers le monde",
            "cta": "Explorer les Groupes",
            "secondary": "Voir la Carte"
        },
        "featured": {
            "title": "Groupes en Vedette",
            "subtitle": "Découvrez les groupes ultras les plus emblématiques du monde",
            "viewAll": "Voir Tous les Groupes"
        },
        "stats": {
            "groups": "Groupes",
            "countries": "Pays",
            "members": "Membres",
            "years": "Années d'Histoire"
        },
        "latest": {
            "title": "Derniers Articles",
            "subtitle": "Restez informé des dernières nouvelles et histoires du monde ultra",
            "viewAll": "Voir Tous les Articles"
        },
        "map": {
            "title": "Carte Mondiale",
            "subtitle": "Explorez les groupes ultras à travers le monde",
            "viewMap": "Voir la Carte Interactive"
        },
        "newsletter": {
            "title": "Restez Informé",
            "subtitle": "Inscrivez-vous à notre newsletter pour les dernières nouvelles",
            "placeholder": "Votre email",
            "button": "S'inscrire"
        }
    },
    "ultras": {
        "title": "Groupes Ultra",
        "subtitle": "Explorez les groupes de supporters à travers le monde",
        "search": "Rechercher des groupes...",
        "filterByCountry": "Filtrer par pays",
        "allCountries": "Tous les pays",
        "sortBy": "Trier par",
        "name": "Nom",
        "yearFounded": "Année de fondation",
        "country": "Pays",
        "city": "Ville",
        "club": "Club",
        "members": "membres",
        "founded": "Fondé en",
        "colors": "Couleurs",
        "noResults": "Aucun groupe trouvé",
        "viewProfile": "Voir le Profil",
        "viewOnMap": "Voir sur la Carte",
        "share": "Partager",
        "history": "Histoire",
        "gallery": "Galerie",
        "rivalries": "Rivalités",
        "alliances": "Alliances",
        "tifos": "Tifos",
        "chants": "Chants",
        "achievements": "Réalisations",
        "all": "groupes",
        "map": "Carte des Ultras",
        "gridView": "Vue Grille",
        "listView": "Vue Liste",
        "mapView": "Vue Carte"
    },
    "articles": {
        "title": "Articles",
        "subtitle": "Actualités, histoires et analyses du monde ultra",
        "search": "Rechercher des articles...",
        "filterByCategory": "Filtrer par catégorie",
        "allCategories": "Toutes les catégories",
        "readMore": "Lire la suite",
        "readTime": "min de lecture",
        "by": "Par",
        "publishedOn": "Publié le",
        "noResults": "Aucun article trouvé",
        "categories": {
            "news": "Actualités",
            "history": "Histoire",
            "culture": "Culture",
            "interviews": "Interviews",
            "opinion": "Opinion",
            "tifos": "Tifos",
            "matchReports": "Comptes-rendus de Match"
        },
        "featured": "En vedette",
        "latest": "Derniers",
        "popular": "Populaires",
        "related": "Articles Connexes",
        "share": "Partager",
        "comments": "Commentaires",
        "writeComment": "Écrire un commentaire...",
        "postComment": "Publier le Commentaire"
    },
    "auth": {
        "login": {
            "title": "Bienvenue",
            "subtitle": "Connectez-vous à votre compte pour continuer",
            "email": "Email",
            "password": "Mot de passe",
            "rememberMe": "Se souvenir de moi",
            "forgotPassword": "Mot de passe oublié ?",
            "submit": "Se connecter",
            "noAccount": "Vous n'avez pas de compte ?",
            "signUp": "S'inscrire",
            "or": "ou",
            "withGoogle": "Continuer avec Google",
            "withFacebook": "Continuer avec Facebook"
        },
        "register": {
            "title": "Créer un Compte",
            "subtitle": "Rejoignez la communauté ultra",
            "name": "Nom complet",
            "email": "Email",
            "password": "Mot de passe",
            "confirmPassword": "Confirmer le mot de passe",
            "submit": "Créer un Compte",
            "hasAccount": "Vous avez déjà un compte ?",
            "signIn": "Se connecter",
            "terms": "En vous inscrivant, vous acceptez nos",
            "termsLink": "Conditions d'Utilisation",
            "and": "et",
            "privacyLink": "Politique de Confidentialité"
        },
        "errors": {
            "invalidEmail": "Email invalide",
            "passwordShort": "Le mot de passe doit contenir au moins 8 caractères",
            "passwordMismatch": "Les mots de passe ne correspondent pas",
            "invalidCredentials": "Email ou mot de passe invalide",
            "emailExists": "Cet email est déjà enregistré"
        }
    },
    "about": {
        "title": "À Propos",
        "subtitle": "Notre mission est de documenter et célébrer la culture ultra",
        "mission": {
            "title": "Notre Mission",
            "description": "Nous sommes passionnés par la documentation de la riche histoire et de la culture vibrante des groupes ultras à travers le monde."
        },
        "team": {
            "title": "Notre Équipe",
            "subtitle": "Rencontrez les personnes derrière le projet"
        },
        "contact": {
            "title": "Contactez-nous",
            "subtitle": "Vous avez des questions ou souhaitez contribuer ? Contactez-nous",
            "email": "Email",
            "message": "Message",
            "send": "Envoyer le Message"
        }
    },
    "footer": {
        "about": "À propos",
        "contact": "Contact",
        "privacy": "Confidentialité",
        "terms": "Conditions",
        "copyright": "Tous droits réservés",
        "social": {
            "followUs": "Suivez-nous",
            "twitter": "Twitter",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "youtube": "YouTube"
        },
        "newsletter": {
            "title": "Newsletter",
            "subtitle": "Inscrivez-vous pour recevoir les mises à jour",
            "placeholder": "Votre email",
            "button": "S'inscrire"
        }
    },
    "errors": {
        "404": {
            "title": "Page Non Trouvée",
            "description": "La page que vous recherchez n'existe pas.",
            "backHome": "Retour à l'Accueil"
        },
        "500": {
            "title": "Erreur Serveur",
            "description": "Quelque chose s'est mal passé. Veuillez réessayer plus tard.",
            "backHome": "Retour à l'Accueil"
        }
    }
}

# Save Portuguese
with open('messages/pt-br.json', 'w', encoding='utf-8') as f:
    json.dump(pt, f, ensure_ascii=False, indent=2)
print('Portuguese translations saved!')

# Save French
with open('messages/fr.json', 'w', encoding='utf-8') as f:
    json.dump(fr, f, ensure_ascii=False, indent=2)
print('French translations saved!')

print('All translations updated successfully!')
