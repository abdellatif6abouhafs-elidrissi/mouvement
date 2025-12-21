import mongoose from 'mongoose';
import * as fs from 'fs';
import * as path from 'path';

function loadEnv() {
  const envPath = path.join(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    envContent.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0 && !key.startsWith('#')) {
        let value = valueParts.join('=').trim();
        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        process.env[key.trim()] = value;
      }
    });
  }
}

loadEnv();
const MONGODB_URI = process.env.MONGODB_URI || '';

const italianHistory = `Definizione

La Curva Sud Milano è il settore sud dello stadio San Siro (Stadio Giuseppe Meazza) ed è da sempre la casa storica degli Ultras dell'AC Milan. Non rappresenta un singolo gruppo, ma un'entità collettiva che riunisce diverse fazioni ultras sotto un'unica identità, fondata sulla lealtà assoluta al club e sul rispetto delle tradizioni.

La Curva Sud è conosciuta a livello mondiale per la sua passione, la sua organizzazione rigorosa e per le spettacolari coreografie che trasformano lo stadio in uno spazio culturale e simbolico.

Storia e origini

La cultura ultras nella Curva Sud nasce tra la fine degli anni '60 e l'inizio degli anni '70, con la comparsa di gruppi storici come:

Fossa dei Leoni (1968) – il primo e più celebre gruppo ultras nella storia del Milan

Brigate Rossonere

Commandos Tigre

Ultras Milano

Nonostante lo scioglimento o la fusione di alcuni gruppi nel corso degli anni, lo spirito della Curva Sud è rimasto intatto, evolvendosi fino alla creazione dell'attuale identità collettiva conosciuta come Curva Sud Milano.

Attività culturali e coreografie

La Curva Sud Milano è considerata una delle realtà più creative del mondo ultras, famosa per:

Coreografie monumentali che coprono l'intero settore

Uso simbolico dei colori rosso e nero

Striscioni e messaggi storici, identitari e sportivi

Coordinazione perfetta tra bandiere, fumogeni e cori

Ogni coreografia è il risultato di un lavoro collettivo che richiede settimane di preparazione e rappresenta la memoria e l'orgoglio del club.

Partite iconiche

La forza della Curva Sud emerge soprattutto durante:

Il Derby della Madonnina contro l'Inter

Le notti di Champions League

Le partite decisive e le finali

In queste occasioni, San Siro diventa un tempio del tifo, dove i tifosi assumono un ruolo fondamentale nel sostenere la squadra.

Organizzazione e valori

La Curva Sud si basa su principi chiari e condivisi:

Fedeltà incondizionata all'AC Milan

Unità e disciplina collettiva

Indipendenza dalle dirigenze societarie

Rispetto della storia e delle tradizioni

Organizzazione rigorosa

Il tifo è guidato dal Capo, responsabile del coordinamento dei cori e dell'armonia del settore.

Influenza internazionale

La Curva Sud Milano è considerata una vera e propria scuola del tifo organizzato. Il suo stile ha influenzato numerosi gruppi ultras in:

Europa

Nord Africa

America Latina

Le sue coreografie sono spesso riprese e condivise in tutto il mondo, rendendola una delle curve più rispettate a livello internazionale.

Conclusione

La Curva Sud Milano non è solo un settore dello stadio, ma una comunità culturale viva, simbolo di identità, passione e appartenenza. È la voce autentica del Milan, il ponte tra passato e presente, e uno dei pilastri della cultura ultras mondiale.`;

async function updateCurvaSudItalian() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const UltraGroup = mongoose.connection.collection('ultragroups');

    const result = await UltraGroup.updateOne(
      { slug: 'curva-sud-milano' },
      {
        $set: {
          'historyTranslations.it': italianHistory,
          'mottoTranslations.it': 'Il cuore pulsante del Milan',
        }
      }
    );

    if (result.matchedCount > 0) {
      console.log('Curva Sud Milano Italian content updated!');
      console.log('Content length:', italianHistory.length, 'characters');
    } else {
      console.log('Group not found');
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

updateCurvaSudItalian();
