var firebaseConfig = {
      apiKey: "AIzaSyB9DzMNvWl1zmfJikuGlmLLkyFCV4Kgv8Q",
      authDomain: "kwiiter-a9c97.firebaseapp.com",
      databaseURL:"https://kwiiter-a9c97-default-rtdb.firebaseio.com/",
      projectId: "kwiiter-a9c97",
      storageBucket: "kwiiter-a9c97.appspot.com",
      messagingSenderId: "110972326260",
      appId: "1:110972326260:web:d55d6dc9a5fb97fb0b9c21"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//AÑADE TUS ENLACES DE FIREBASE
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
 
document.getElementById("user_name").innerHTML = "¡Hola " + user_name+ " !";
 
function addRoom(){
   room_name = document.getElementById("room_name").value;
 
   firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
   });
   localStorage.setItem("room_name",room_name);
    //window.location.replace("kwitter_page.html");
 
}
 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      row="<div class='room_name' id="+ Room_names +" onclick='redirect(this.id)'>#"+Room_names +"</div>"
      document.getElementById("output").innerHTML =+ row;
      //Final del código"
      });});}
getData();
function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location.replace("index.html")
}
function redirect(name){
   console.log(name);
   localStorage.setItem("room_name",room_name);
   window.location("kwitter_page.html")
}