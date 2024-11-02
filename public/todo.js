$(document).ready(function() {
    $('#button').click(function() {
        
        var item = $('form input');
        var todo = {item: item.val()};

        if ($('form input').val() === "") {
            $('form input').addClass('invalid');
            $('form input').attr('placeholder', "Please add text here");
        } else {
            $.ajax({
                type: 'POST',
                url: '/',
                data: todo,
                success: function(data) {
                    location.reload();
                }
            });
        }
        
        return false;
    });

    $('li').on('click', function() {
        var todoID = $(this).data('id');

        $.ajax({
            type: 'DELETE',
            url: '/' + todoID,
            success: function(data) {
                location.reload();
            }
        });
    });
});


 