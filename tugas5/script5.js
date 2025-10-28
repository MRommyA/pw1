$(document).ready(function () {
    var input = $('#pw');
    var button = $('#btn');

    button.click(function () {
        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
            button.text('Hide Password');
        } else {
            input.attr('type', 'password');
            button.text('Show Password');
        }
    });
});