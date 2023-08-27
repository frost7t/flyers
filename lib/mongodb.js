import { MongoClient } from "mongodb";
// Vérifiez si la variable d'environnement "MONGODB_URI" est valide ou manquante.
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
// Récupére l'URI de la base de données MongoDB à partir des variables d'environnement.
const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // En mode développement, utilisez une variable globale pour conserver la valeur
  // entre les rechargements de module provoqués par HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    // Créez un client MongoClient et connectez-le à l'URI de la base de données.
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // En mode production, il est préférable de ne pas utiliser de variable globale.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Exportez une promesse de MongoClient au niveau du module. En faisant cela dans un
// module séparé, le client peut être partagé entre les fonctions.
export default clientPromise;
