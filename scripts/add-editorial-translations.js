const fs = require('fs');
const path = require('path');

const messagesDir = 'src/i18n/messages';

const translations = {
  fr: {
    groupOfWeek: "Groupe de la Semaine",
    culturalPoll: "Sondage Culturel",
    thisWeek: "Cette Semaine",
    voteNow: "Voter Maintenant",
    previousWinners: "Gagnants Précédents",
    tifoSpotlight: "Tifo en Vedette",
    viewDetails: "Voir les Détails",
    votes: "votes"
  },
  es: {
    groupOfWeek: "Grupo de la Semana",
    culturalPoll: "Encuesta Cultural",
    thisWeek: "Esta Semana",
    voteNow: "Votar Ahora",
    previousWinners: "Ganadores Anteriores",
    tifoSpotlight: "Tifo Destacado",
    viewDetails: "Ver Detalles",
    votes: "votos"
  },
  it: {
    groupOfWeek: "Gruppo della Settimana",
    culturalPoll: "Sondaggio Culturale",
    thisWeek: "Questa Settimana",
    voteNow: "Vota Ora",
    previousWinners: "Vincitori Precedenti",
    tifoSpotlight: "Tifo in Evidenza",
    viewDetails: "Vedi Dettagli",
    votes: "voti"
  },
  'pt-br': {
    groupOfWeek: "Grupo da Semana",
    culturalPoll: "Enquete Cultural",
    thisWeek: "Esta Semana",
    voteNow: "Vote Agora",
    previousWinners: "Vencedores Anteriores",
    tifoSpotlight: "Tifo em Destaque",
    viewDetails: "Ver Detalhes",
    votes: "votos"
  }
};

Object.keys(translations).forEach(locale => {
  const filePath = path.join(messagesDir, `${locale}.json`);
  if (fs.existsSync(filePath)) {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    if (!content.editorial) {
      content.editorial = translations[locale];
      fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
      console.log(`Added editorial to ${locale}.json`);
    } else {
      console.log(`${locale}.json already has editorial`);
    }
  }
});
