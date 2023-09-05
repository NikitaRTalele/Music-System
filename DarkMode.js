
          
          $(document).ready(function()
          {
            $("#Bright").css({"display":"None"});
              $("#formm").css({"background-color":"rgb(241, 158, 158)","color":"black"});
              $("input").css({"background-color":"rgb(241, 158, 158)"});
             
              $("#Dark").click(function()
              {
                  $("#Dark").css({"display":"none"});
                  $("#Bright").css({"display":"block"});
                  $("body").css({"background-color":"black","color":"white"});
            //     //   $(".photo").css({"background-color":"black","color":"white"});
                  $(".navbar").css({"background-color":"1A1A40","color":"white"});
                  $("#formm").css({"background-color":"#282A3A","color":"white"});
                  $("input").css({"background-color":"#282A3A"});
            // $("meta").content="dark"
              })
              $("#Bright").click(function()
              {
                $("meta").content="light"

                  $("#Bright").css({"display":"none"});
                  $("#Dark").css({"display":"block"});
                  $("body").css({"background-color":"white","color":"black"});
                  $(".navbar").css({"background-color":"teal","color":"white"});
              })
             

              
             
             
          })













          