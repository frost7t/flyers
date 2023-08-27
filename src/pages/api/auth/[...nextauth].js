import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../../lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";

export const NextAuthOption = {
  providers: [
    //Fournisseurs d'authentification OAuth...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      // Le nom à afficher sur le formulaire de connexion (par exemple, "Se connecter avec...")
      name: "Credentials",
      // `credentials` est utilisé pour générer un formulaire sur la page de connexion.
      // Vous pouvez spécifier les champs qui doivent être soumis en ajoutant des clés à l'objet `credentials`.
      // Par exemple : domaine, nom d'utilisateur, mot de passe, jeton 2FA, etc.
      // Vous pouvez passer n'importe quel attribut HTML à la balise <input> via l'objet.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Ajoutez ici la logique pour rechercher l'utilisateur en utilisant les informations d'identification fournies.
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          // Tout objet retourné sera enregistré dans la propriété `user` du JWT
          return user;
        } else {
          // Si vous retournez null, une erreur sera affichée, conseillant à l'utilisateur de vérifier ses informations.
          return null;
          // Vous pouvez également rejeter cette fonction de rappel avec une erreur, ce qui enverra l'utilisateur à la page d'erreur avec le message d'erreur en tant que paramètre de requête.
        }
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt" },
  // Stratégie Json Web Token
};
export default NextAuth(NextAuthOption);