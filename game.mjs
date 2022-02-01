import {db, set, ref, onValue, push, remove} from './module.js';

const branch = ref(db, '/players')

$("#click").on("click", function(){
    var userName = $("#userName").val();
    var obj = push (branch);
    set (obj, {
        userName
    });
    
    // var userNamePush = push(ref(db, '/'));
    // set(messagePush, message);
    $('#user').empty();
    var h2 = $('<h2>');
    h2.html('Hi ' + userName + ' ! You are player 1' );
    h2.attr('class', 'text-center');
    $('#user').append(h2);
})