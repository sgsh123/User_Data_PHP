$(document).ready(function()
{   
    document.getElementById("server_msg").style.visibility = "hidden";
    document.getElementById("fname_err").style.visibility = "hidden";
    document.getElementById("lname_err").style.visibility = "hidden";
    document.getElementById("dob_err").style.visibility = "hidden";
    document.getElementById("phone_err").style.visibility = "hidden";

    $("#result").on("click", function()
    {
        window.location.href='display.php';
    });

    $("#user_form").submit(function() {
        event.preventDefault();
        
        //form values
        var fname = document.forms["user_details"]["fname"].value;
        var lname = document.forms["user_details"]["lname"].value;
        var dob = document.forms["user_details"]["dob"].value;
        var phone = document.forms["user_details"]["phone"].value;
        var gender = document.querySelector('input[name="gender"]:checked').value;
        

        //variables for validation
        var okay = true;
        var alpha = /^[a-z]+$/i;
        var num = /^[0-9]+$/;

        if(!fname.match(alpha))
        {
            okay = false;
            $("#fname_err").text("First name should not be empty or have numbers or special characters");
            document.getElementById("fname_err").style.color = "red";
            document.getElementById("fname_err").style.visibility = "visible";
        }

        if(!lname.match(alpha))
        {
            okay = false;
            $("#lname_err").text("Last name should not be empty or have numbers or special characters");
            document.getElementById("lname_err").style.color = "red";
            document.getElementById("lname_err").style.visibility = "visible";
        }

        if(!phone.match(num))
        {
            okay = false;
            $("#phone_err").text("Phone Number should not be empty or have numbers or special characters");
            document.getElementById("phone_err").style.color = "red";
            document.getElementById("phone_err").style.visibility = "visible";
        }
        else if(phone.length != 10)
        {
            okay = false;
            $("#phone_err").text("Please enter a valid 10 digit phone number");
            document.getElementById("phone_err").style.color = "red";
            document.getElementById("phone_err").style.visibility = "visible";
        }

        if(dob == "")
        {
            okay = false;
            $("#dob_err").text("Date of Birth should not be empty");
            document.getElementById("dob_err").style.color = "red";
            document.getElementById("dob_err").style.visibility = "visible";
        }
        
        if(okay)
        {
            $.ajax({  
            type: 'POST',  
            url: 'form.php', 
            data: { "fname": fname, "lname": lname, "dob": dob, "phone":phone, "gender": gender},
            success: function(response) 
             {  
                var array = JSON.parse(response)
                $("#server_msg").text(array.msg);
                document.getElementById("server_msg").style.color = array.color;
                document.getElementById("server_msg").style.visibility = "visible";    
                setTimeout(function() 
                { 
                 document.getElementById("server_msg").style.visibility = "hidden"; 
                 //window.location.reload(true);
                }, 3000);
             }
           });       
        }
    });
});


