function test(){

    // list of fields
    var id              = document.getElementById('contentId').value;
    var description     = document.getElementById('contentDesc').value;

    // ajax for send request
    $.ajax({
        type: "POST",
        data: {
            "entry.788923433"  : id,
            "entry.414555233"  : description,
        },
        cache: false,
        url: 
        "https://docs.google.com/forms/u/0/d/e/"+
        "1FAIpQLSd0fzndGNUiiPaW_I0JhRDIf6plSUlFUQ8i3TIC_JF4-8fBYQ"+
        "/formResponse",
        success: function() {
            // Success section
            console.log('sucessfully send!');
        },
        error: function(error) {
            if ((!error.responseText) && (!error.status)){
                // Success section
                console.log('sucessfully send!');
            }else{
                // Fail section
                console.log('filed to send...');
            }
        },
    })
};