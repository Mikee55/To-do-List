$(document).ready(function() {
    $('#button').click(function(event) {
        event.preventDefault();
        
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
                    $('#todoList').append(`
                        <li data-id="${data._id}">
                            <span class="task-text">${data.item}</span> 
                            <button class="clear">clear</button>
                        </li>
                        `);
                    $('#taskInput').val('');

                }
            });
        }
        
        return false;
    });

    $(document).on('click', '.clear', function() {
        const todoId = $(this).closest('li').data('id');
      
        $.ajax({
          type: 'DELETE',
          url: `/${todoId}`,
          success: function(data) {
            $('li[data-id="' + todoId + '"]').remove();
            // $('li').remove();
          }
         
        });
    });
});


 