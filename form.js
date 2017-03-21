$(document).ready(function()
{
    $("#result").on("click", function()
    {
        window.location.href='display.php';
    });

    $("#user_form").submit(function() {
        event.preventDefault();

        var fname = document.forms["user_details"]["fname"].value;
        var lname = document.forms["user_details"]["lname"].value;
        var dob = document.forms["user_details"]["dob"].value;
        var phone = document.forms["user_details"]["phone"].value;

        if(fname == "" || lname == "" ||  dob == "" ||  phone == "")
        {
            alert("Please fill in all fields");
        }
        else
        {
            if(phone.length != 10)
            {
                alert("Please enter a valid 10 digit phone number");
            }
            else
            {
                $.ajax({  
                    type: 'POST',  
                    url: 'form.php', 
                    data: { "fname": fname, "lname": lname, "dob": dob, "phone":phone},
                    success: function(data) 
                    {
                        alert("Your data has been saved successfully.");
                        window.location.reload(true);
                    }
               });
            }
        }
    });
});


