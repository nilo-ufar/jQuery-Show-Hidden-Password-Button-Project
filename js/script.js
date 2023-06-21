$(document).ready(function () {
    $("#show-pass").click(function () {
        if ($(".pass").attr("type") === "password") {
            $(".pass").attr("type", "text");
            $("#show-pass").removeClass("fa-eye-slash").addClass("fa-eye");
        } else {
            $(".pass").attr("type", "password");
            $("#show-pass").removeClass("fa-eye").addClass("fa-eye-slash");
        }
    });
});
