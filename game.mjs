import { db, set, ref, onValue, push, remove } from './module.js';

const branch = ref(db, '/players')
var userName;
var choice = null;

$("#click").on("click", function (e) {
    e.preventDefault
    userName = $("#userName").val();
    arr.push({ 
        name: userName,
        choice: choice,
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



})
var arr = [];
onValue(branch, function (snapshot) {
    var obj = snapshot.val();
    console.log(obj);



    arr = obj || [];
    if (arr.length > 2) {
        arr = [];
    }
    
    


    if (arr[0] && arr[0].name === userName) {

        $('#userName1').empty();
        $('#userName1').append(arr[0].name);
        

        if (arr[1]) {
            $('#userName2').empty();
            $('#userName2').append(arr[1].name);
            


        }
    } else if (arr[0] && arr[0].name !== userName) {
        $('#userName1').empty();
        $('#userName1').append(arr[1].name);
        $('#userName2').empty();
        $('#userName2').append(arr[0].name);
        $('#choice1').show();
        $('#choice2').show();
        
    }
    



});


$('#inp-form').on('click', function(e){
    e.preventDefault();

    const message = $('#message').val();

    var messagePush = push(ref(db, '/messages'));
    set(messagePush, message);

    $('#message').val() = '';
});

onValue(ref(db, '/messages'), function(snapshot) {
    const message = snapshot.val();
    const chat = $('#chat');

    $(chat).empty();

    for(let [key, message] of Object.entries(message)) {
        
       
    }
});