$(function () {
    $(".devour-burg").on("click", function (event) {
        // Grab id from the button
        var id = $(this).data("id");
        // Grab devoured state from the button
        var devour = $(this).data("devour");
        // Set the devoured boolean to the button data value
        var devState = {
            devoured: devour
        };
        // Send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devState,
        }).then(
            function () {
                console.log("devoured or not: ", devState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurg = {
            burger_name: $("#burg").val().trim(),
            devoured: false
        };

        // Send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurg
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});
