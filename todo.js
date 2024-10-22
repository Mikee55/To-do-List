$(document).ready(function() {
    $('#button').click(function() {
        
        var item = $('form input')
        var todo = {item: item.val()};

        $.ajax({
            type: 'POST',
            url: '/add-todo',
            data: todo,
            success: function(data) {
                location.reload();
            }
        })
    })
});



 