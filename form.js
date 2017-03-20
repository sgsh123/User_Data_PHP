$(document).ready(function()
{
    $("#result").on("click", function()
    {
        window.location.href='display.php';
    });    

});

function validate_form()
{

    var fname = document.forms["user_details"]["fname"].value;
    var lname = document.forms["user_details"]["lname"].value;
    var dob = document.forms["user_details"]["dob"].value;
    var phone = document.forms["user_details"]["phone"].value;

    if(fname == "" || lname == "" ||  dob == "" ||  phone == "")
    {
        alert("Please fill in all fields");
        return false;
    }
    else
    {
        if(phone.length != 10)
        {
            alert("Please enter a valid 10 digit phone number");
            return false;
        }
        else
        {
            return true;
        }
        
    }
}


