// Initialize Firebase
var config = {
    apiKey: "AIzaSyA9g_qC6yTTKNtOkXUYbl87aV66XxgKpAI",
    authDomain: "roshambo-tb.firebaseapp.com",
    databaseURL: "https://roshambo-tb.firebaseio.com",
    projectId: "roshambo-tb",
    storageBucket: "",
    messagingSenderId: "995835380271"
  };
  firebase.initializeApp(config);



  $(document).ready(function(){
    $('.carousel').carousel();
  });
      


var player1 = {
  name: "",
  wins: "",
  losses: ""
};

var player2 = {
  name: "",
  wins: "",
  losses: ""
};

var round = {
  p1Choice: "",
  p2Choice: "",
  p1Ready: "",
  p2Ready: ""
};


$("#form").submit(function(){
  var n = $("#playerName").val().trim();
  if (player1.name === null) {
    player1.name = n
} else {
  player2.name = n
}
  setPlayerNames();
});

function setPlayerNames() {
  $("#p1Name").text(player1.name);
  $("#p2Name").text(player2.name);
}
