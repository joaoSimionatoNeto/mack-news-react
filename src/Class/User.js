//import bcrypt from "bcrypt";
let users = [];
let currentUser;

    export function createUser(userName, unit, email, password, profilePic){
        //    const salt = bcrypt.genSaltSync();
        //    const hashedPassword = bcrypt.hashSync(password, salt);
               let user = {
                   "unit": unit,
                   "email": email,
                   "password": password,
                   "userName": userName,
                   "profilePic": profilePic,
               }
               users.push(user);
               currentUser = user;
               return (user);
   }
   
    export function ensureUser(email){
       return users.find((obj) => obj.email === email);
   }
   
    export function login(email, password){
       const user = ensureUser(email);
       if(user != null){
           if(password === user.password){
               return user;
               currentUser = user;
           }else{
               return ("Senha incorreta!")
           }
       }else{
           return ("Usuário não encontrado")
       }
   }

   export function getCurrentUser(){
    return currentUser;
   }

