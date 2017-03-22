$(document).ready(function()
{   $("#success_msg").hide();
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

        if(fname == "")
        {
            $("#msg").text("Please fill in your First Name");
                         $("#success_msg").show();
                            setTimeout(function() 
                        { 
                            $("#success_msg").hide(); 
                        }, 3000);
        }
        else if(lname == "")
        {
            $("#msg").text("Please fill in your Last Name");
                         $("#success_msg").show();
                            setTimeout(function() 
                        { 
                            $("#success_msg").hide(); 
                        }, 3000);
        }
        else if(dob == "")
        {
            $("#msg").text("Please fill in your Date of Birth");
                         $("#success_msg").show();
                            setTimeout(function() 
                        { 
                            $("#success_msg").hide(); 
                        }, 3000);
        }
        else if(phone == "")
        {
            $("#msg").text("Please fill in your Phone Number");
                         $("#success_msg").show();
                            setTimeout(function() 
                        { 
                            $("#success_msg").hide(); 
                        }, 3000);
        }
        else
        {
            if(phone.length != 10)
            {
                $("#msg").text("Please enter a valid 10 digit phone number");
                         $("#success_msg").show();
                            setTimeout(function() 
                        { 
                            $("#success_msg").hide(); 
                            //window.location.reload(true);
                        }, 3000);
            }
            else
            {
                $.ajax({  
                    type: 'POST',  
                    url: 'form.php', 
                    data: { "fname": fname, "lname": lname, "dob": dob, "phone":phone},
                    success: function(response) 
                    {   
                         $("#msg").text(response);
                         $("#success_msg").show();
                            setTimeout(function() 
                        { 
                            $("#success_msg").hide(); 
                            //window.location.reload(true);
                        }, 3000);
                    }
               });
            }
        }
    });
});


