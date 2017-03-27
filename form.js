$(document).ready(function()
{   
    $("#server_msg").hide();
    $("#fname_err").hide();
    $("#lname_err").hide();
    $("#dob_err").hide();
    $("#phone_err").hide();
    $("#gen_err").hide();

    $("#result").on("click", function()
    {
        window.location.href='display.php';
    });

    $("#user_form").submit(function() {
        event.preventDefault();
        
        //form values
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var dob = $('#dob').val();
        var phone = $('#phone').val();
        var gender = $('input[name="gender"]:checked').val();

        //variables for validation
        var okay = true;
        var alpha = /^[a-z]+$/i;
        var num = /^[0-9]+$/;

        if(!fname.match(alpha))
        {
            okay = false;
            $("#fname_err").text("First name should not be empty or have numbers or special characters");
            $("#fname_err").css("color","red");
            $("#fname_err").show()
        }
        else
        {   
            $("#fname_err").hide();
        }

        if(!lname.match(alpha))
        {
            okay = false;
            $("#lname_err").text("Last name should not be empty or have numbers or special characters");
            $("#lname_err").css("color","red");
            $("#lname_err").show()
        }
        else
        {
            $("#lname_err").hide();
        }

        if(!phone.match(num))
        {
            okay = false;
            $("#phone_err").text("Phone Number should not be empty or have numbers or special characters");
            $("#phone_err").css("color","red");
            $("#phone_err").show()
        }
        else if(phone.length != 10)
        {
            okay = false;
            $("#phone_err").text("Please enter a valid 10 digit phone number");
            $("#phone_err").css("color","red");
            $("#phone_err").show()
        }
        else
        {
            $("#phone_err").hide();
        }

        if(dob == "")
        {
            okay = false;
            $("#dob_err").text("Date of Birth should not be empty");
            $("#dob_err").css("color","red");
            $("#dob_err").show()
        }
        else
        {
            $("#dob_err").hide();
        }
        
        if(gender == undefined)
        {
            okay = false;
            $("#gen_err").text("Gender should be selected");
            $("#gen_err").css("color","red");
            $("#gen_err").show()
        }
        else
        {
            $("#gen_err").hide();
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
                $("#server_msg").css("color",array.color);
                $("#server_msg").show()

                setTimeout(function() 
                { 
                 $("#server_msg").hide();
                 //window.location.reload(true);
                }, 3000);
             }
           });       
        }
    });
});


