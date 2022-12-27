const firebaseConfig = {
    apiKey: "AIzaSyAKHFnFlUzZaga3tWpLLo5zHht0-iIVNjw",
    authDomain: "let-chat-e1beb.firebaseapp.com",
    projectId: "let-chat-e1beb",
    storageBucket: "let-chat-e1beb.appspot.com",
    messagingSenderId: "942952508132",
    appId: "1:942952508132:web:aa855023b8537830bc5af1"
  };
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console. log ("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.1d)' >#"+ Room_names+"</div><hr>";
    document.getElementById("output"). innerHTML+=row;
    });});}
getData();

function addRoom(){
    room_name=document.getElementById("room_name").ariaValueMax;
    firebase.database().ref("/").child(room_name).update({purpose: "adding room name"});
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
