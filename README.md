# Nightwatch-split
## Tableau recettage
*Légende* :  
🏆 = Usecase réussi     
💥 = Erreur dans le parcours  
|  N° |  Action | Attendu|  Résultat |  | 
|---|---|---|---|---|
|  1 | Connexion à l'application Split avec compte existant  |  Arrivée sur l'url : http://localhost:3000/app/home | OK  | 🏆  |
|   2|  Connexion à l'application sans @ | Message d'erreur : "Email invalide"  | OK  | 🏆  |
|   3|  Connexion à l'application avec un compte non existant | Message d'erreur : "Email inexistant" | Pas le bon message d'erreur  | 💥 |
|   4|   Connexion à l'application avec un faux mot de passe | Message d'erreur : "Erreur de mot de passe"  |  OK | 🏆  |
|   5|  Envoyer un message |  Le message envoyé remonte dans la messagerie | OK  | 🏆   |
|   6|  Envoyer un message | Destinataire reçoit le même message que l'expéditeur  | OK  | 🏆   |
|   7|  Changer son mot de passe en mettant un deuxième mot de passe différent |  Message d'erreur "Mot de passe faux | OK  |  🏆  |
|   8|  Changer son mot de passe avec moins de 8 caractères |  Message d'erreur : "Mot de passe invalide"  |  OK | 🏆  |
|   9|  Changer son mot de passe en respectant les critères | Message "Mot de passe modifié avec succès"  | OK  | 🏆  |
|   10| Changement de prénom  |  Message "Informations mises à jour" | OK  |  🏆 |
