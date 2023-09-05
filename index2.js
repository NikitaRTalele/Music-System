const ul2=document.getElementById("ul2");
             ul3=document.getElementById("ul3");
             const btn = document.getElementById('btn');
             const btn2 = document.getElementById('btn2');
             
             btn.addEventListener('click', function handleClick() {
                
                if (ul2.style.display === 'none') {
                  ul3.style.display = 'flex';
                }
                else   
                {
                    ul2.style.display='flex';
                    ul3.style.display="none"
                }
            
              });
              btn2.addEventListener('click',
               function handleClick() {
                if (ul3.style.display === 'none') {
                  ul3.style.display = 'none';
                  ul2.style.display='flex';
                }
                else   
                {
                    ul3.style.display='flex';
                    ul2.style.display="none"
                }
            
              });

              
            
        


              