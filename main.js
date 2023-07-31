function doPOST(){

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

function doGET(){

    // ajax for send request
    $.ajax({
        type: "GET",
        cache: false,
        url: 
        "https://docs.google.com/spreadsheets/d/e/"+
        "2PACX-1vSjdzAYbEobDW5nNAeCIiExTzkCnZ7_APZ1CBj_G-AjSklucvYtCZevSiAPTym4ItyI_WVAHw8o0U_K"+
        "/pub?gid=103926250&single=true&output=csv",
        success: function(response) {
            // Success section
            document.getElementById("ajax_result").innerText = response
            console.log('sucessfully send!');
        },
        error: function(error) {
            console.log(error);
        },
    })

    /*
    let url = 
    "https://docs.google.com/spreadsheets/d/e/"+
    "2PACX-1vSjdzAYbEobDW5nNAeCIiExTzkCnZ7_APZ1CBj_G-AjSklucvYtCZevSiAPTym4ItyI_WVAHw8o0U_K"+
    "/pub?gid=103926250&single=true&output=csv";
    $.get(url, 
    function(data, status){
      if (status == "success"){
          //console.log(status);
          let i = 1;	
          // get all data, separated in lines
          var array_list = data.split("\r\n");
          // search line by line e breaks fields
          array_list.forEach((item) => {
            console.log("# line "+i+"________________________");i++;
            // when the fields are breakeds
            var item_list = item.split(",");
            item_list.forEach((item_) => {
                console.table(item_);
            });
          });
          document.getElementById("ajax_result").innerText = data
      }
    });
    */
};