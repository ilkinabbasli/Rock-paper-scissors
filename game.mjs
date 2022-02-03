import { db, set, ref, onValue, push, remove } from './module.js';

const branch = ref(db, '/players');
var userName;
var choice;

$("#click").on("click", function (e) {
    e.preventDefault();
    userName = $("#userName").val();
    arr.push({ 
        name: userName,
        choice: null
    });
    set(branch, arr);
    console.log(arr.length);
    $('#user').empty();
    var h2 = $('<h2>');
    if (arr.length === 1) {

        h2.html('Hi ' + userName + ' ! You are player 1');

    }
    else {

        h2.html('Hi ' + userName + ' ! You are player 2');

    }

    h2.attr('class', 'text-center');
    $('#user').append(h2);



});
$('#choice1 li').on('click', function(e){
    e.preventDefault();
    choice = $(this).html();
    console.log(choice);
    set(ref(db, '/players/0/'), {choice,name:userName});
    
});
$('#choice2 li').on('click', function(e){
    e.preventDefault();
    choice = $(this).html();
    console.log(choice);
    set(ref(db, '/players/1/'), {choice,name:userName});
});
var arr = [];
onValue(branch, function (snapshot) {
    var obj = snapshot.val();
    console.log(obj);
    arr = obj || [];
    if (arr.length > 1) {
        arr = [];
    }
    if (arr[0] && arr[0].name === userName) {
        $('#userName1').empty();
        $('#userName1').append(arr[0].name);
        $('#choice1').show();
        $('#choice2').show();
        if (arr[1]) {
            $('#userName2').empty();
            $('#userName2').append(arr[1].name);
            $('#choice1').show();
            $('#choice2').show();
        }
    } else if (arr[0] && arr[0].name !== userName) {
        $('#userName1').empty();
        $('#userName1').append(arr[0].name);
        $('#userName2').empty();
        $('#userName2').append(arr[1].name);
        $('#choice1').show();
        $('#choice2').show();
    }
    // console.log(work);
    // if (work) {loadGame()}
    //     function loadGame () {
    //     var playerOneWon = function() {
    //         $("#result").html("<h2>" + arr[0].name + "</h2><h2>Wins!</h2>");
            
    //       };
        
    //       var playerTwoWon = function() {
    //         $("#result").html("<h2>" + arr[1].name + "</h2><h2>Wins!</h2>");
            
    //       };
        
    //       var tie = function() {
    //         $("#result").html("<h2>Tie Game!</h2>");
    //       };

    //     if (player1choice === "Rock" && player2choice === "Rock") {
    //         tie();
    //       }
    //       else if (player1choice === "Paper" && player2choice === "Paper") {
    //         tie();
    //       }
    //       else if (player1choice === "Scissors" && player2choice === "Scissors") {
    //         tie();
    //       }
    //       else if (player1choice === "Rock" && player2choice === "Paper") {
    //         playerTwoWon();
    //       }
    //       else if (player1choice === "Rock" && player2choice === "Scissors") {
    //         playerOneWon();
    //       }
    //       else if (player1choice === "Paper" && player2choice === "Rock") {
    //         playerOneWon();
    //       }
    //       else if (player1choice === "Paper" && player2choice === "Scissors") {
    //         playerTwoWon();
    //       }
    //       else if (player1choice === "Scissors" && player2choice === "Rock") {
    //         playerTwoWon();
    //       }
    //       else if (player1choice === "Scissors" && player2choice === "Paper") {
    //         playerOneWon();
    //       }
    //     }
});

