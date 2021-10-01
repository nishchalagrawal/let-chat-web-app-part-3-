const firebaseConfig = {
    apiKey: "AIzaSyCtjTUJab2UtmPrgJzMRxecV2pBeSAsnAw",
    authDomain: "let-chat-web-app-71417.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-71417-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-71417",
    storageBucket: "let-chat-web-app-71417.appspot.com",
    messagingSenderId: "131598919969",
    appId: "1:131598919969:web:6a0eafa9eac9f529503660"
  };
  
  // Initialize Firebase
firebase . initializeApp( firebaseConfig);
  
function logout(){
    window.location = "index.html"
}

function addroom(){
  room_name = document.getElementById("room_name").Value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  })
  localStorage.setItem("room_name"  , room_name);
  window.location = "kwitter_room.html"
}



function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console. log  = ("room_name - "+ Room_name);
row = "<div class = 'room_name' id = "+room_name+"onclick=  'redirecttoroomname() this.id'#" +room_name+"</div> "
document.getElementById("output").innerHTML+=row; 

});});}
getData();

function  redirecttoroomname(){
console.log("name");
localStorage.setItem("room_name" , room_name);
window.location = "kwitter_room.html"
}
