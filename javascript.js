        //javascript for navigation bar effects on scroll
        window.addEventListener("scroll", function(){
            const header = document.querySelector("header");
            header.classList.toggle('sticky', window.scrollY > 0);
          });
          
          //javascript for responsive navigation sidebar menu
          const menuBtn = document.querySelector(".menu-btn");
          const navigation = document.querySelector(".navigation");
          const navigationItems = document.querySelectorAll(".navigation a")
          
          menuBtn.addEventListener("click",  () => {
            menuBtn.classList.toggle("active");
            navigation.classList.toggle("active");
          });
          
          navigationItems.forEach((navigationItem) => {
            navigationItem.addEventListener("click", () => {
              menuBtn.classList.remove("active");
              navigation.classList.remove("active");
            });
          });
          
          //javascript for scroll to top button
          const scrollBtn = document.querySelector(".scrollToTop-btn");
          window.addEventListener("scroll", function(){
            scrollBtn.classList.toggle("active", window.scrollY > 500);
          });
          
          //javascript for scroll back to top on click scroll-to-top button
          scrollBtn.addEventListener("click", () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          });
          
          //javascript for reveal website elements on scroll
          window.addEventListener("scroll", reveal);
          
          function reveal(){
            var reveals = document.querySelectorAll(".reveal");
          
            for(var i = 0; i < reveals.length; i++){
              var windowHeight = window.innerHeight;
              var revealTop = reveals[i].getBoundingClientRect().top;
              var revealPoint = 50;
          
              if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add("active");
              }
            }
          }



          // contact section

          const detail1=document.getElementById('detail1')
          const detail2=document.getElementById('detail2')
          const detail3=document.getElementById('detail3')


          detail1.onclick = ()=>{
            open('tel:+91 9052072735')
          }
          detail2.onclick = ()=>{
            open('mailto:gg345616@gmail.com')
          }
          detail3.onclick = ()=>{
            open('https://www.linkedin.com/in/gandavarapu-venkata-ganesh-b9a5161b8/')
          }


          

