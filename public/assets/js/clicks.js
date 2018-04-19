$(function () {
    $(".devour-burg").on("click", function (event) {
        // Grab id from the button
        var id = $(this).data("id");
        // Set the devoured boolean to the button data value
        var devState = {
            devoured: true,
        };
        // Send the PUT request to BURGERS
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devState
        }).then(
            function () {
                console.log("devoured or not: ", devState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
        
        var custId = "#cust"+id;
        var newCust = {
            customer_name: $(custId).val().trim(),
            BurgerId: id
        }
        // Send the POST request to CUSTOMERS
        $.ajax("/api/customers", {
            type: "POST",
            data: newCust
        }).then(
            function () {
                console.log("customer: ", newCust);
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
