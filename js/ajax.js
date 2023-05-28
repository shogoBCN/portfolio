$(document).ready(function () {
    $(".contact-form").submit(function (e) {
        e.preventDefault();

        var form = this;

        $.ajax({
            url: $(this).attr('action'),
            method: "POST",
            data: $(this).serialize(),
            dataType: "json",
            success: function () {
                alert("Message sent successfully!");
                form.reset(); // Reset form fields
            },
            error: function () {
                alert("An error occurred, please try again.");
            }
        });
    });
});
