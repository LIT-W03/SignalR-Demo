$(function () {
    var id = 0;
    var hub = $.connection.simpleHub;
    $.connection.hub.start().done(function () {
        id++;
        hub.server.newUserConnected(id);
    });

    hub.client.newMessage = function(text) {
        $("#messages").append(`<li>${text}</li>`);
    }

    $("#send").on('click', function () {
        //$.post("/home/message", { text: $("#text").val() }, function() {
        //    $("#text").val('');
        //});
        hub.server.userSendMessageFoo($("#text").val());
        $("#text").val('');
    });
});