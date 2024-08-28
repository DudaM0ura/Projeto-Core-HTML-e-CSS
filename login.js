$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "",
        data: form.serialized(),
        dataType: "JSON",
        success: function (response) {
            response.success = true;
        }
    });
});