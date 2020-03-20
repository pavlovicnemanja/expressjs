$(document).ready(function () {
    $('.modal-form').on('submit', (e) => {
        e.preventDefault();

        $.ajax({
            type: e.target.getAttribute('method'),
            url: e.target.getAttribute('action'),
            data: $(e.target).serialize(),
            success: () => {
                location.reload();
            }
        })

    })
});