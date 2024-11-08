$(document).ready(function() {
    // Add a new task
    $('#add-task').click(function() {
        const taskText = $('#new-task').val().trim();

        if (taskText) {
            // Append a new list item with the task text and a delete button
            $('#task-list').append(`
                <li>
                    <span class="task-text">${taskText}</span>
                    <button class="delete-btn">Delete</button>
                </li>
            `);
            $('#new-task').val(''); // Clear the input field
        } else {
            alert('Please enter a task!');
        }
    });

    // Mark a task as completed when clicking on the task text
    $('#task-list').on('click', '.task-text', function() {
        $(this).parent().toggleClass('completed');
    });

    // Delete a task when clicking the delete button
    $('#task-list').on('click', '.delete-btn', function() {
        $(this).parent().remove();
    });
});
