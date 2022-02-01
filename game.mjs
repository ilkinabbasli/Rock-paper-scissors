import {db, set, ref, onValue, push, remove} from './module.js';

const branch = ref(db, '/players')

// $("#click").on("click", function(){
//     var userName = $("#userName").val();
//     var obj = push (branch);
//     set (obj, {
//         userName
//     });
    
//     // var userNamePush = push(ref(db, '/'));
//     // set(messagePush, message);
//     $('#user').empty();
//     var h2 = $('<h2>');
//     h2.html('Hi ' + userName + ' ! You are player 1' );
//     h2.attr('class', 'text-center');
//     $('#user').append(h2);
// })



$('#click').on('click', function(){
    var playerNameValue = $('#userName').val();
    var player = 'players';
    var playerCount = 0
    playerCount++;
    var playerName = 'player' + playerCount;
    var path = ref(db, `/${player}/${playerName}`);
    const playerData = {
        name: playerNameValue,
    }
    set(path, playerData);
    $('#user').empty();
    var h2 = $('<h2>');
    h2.html('Hi ' + playerNameValue + ' ! You are player ' + playerCount );
    h2.attr('class', 'text-center');
    $('#user').append(h2);
})