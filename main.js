var typed = new typed(".text", {
  Strings: [
    "Aspiring HR Professional",
    "Passionate HR Learner",
    "HR Career stater",
    "Emerging HR Specilist",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

(funtion() {
  [...document.querySelectorAll(".nav")].forEach(button =>{
    button.addEventListener("click",function()  {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
    })
  });
  document.querySelector(".theme.btn").addEventListener("click",()=>{
    document.body.classList.toggle("light-mode")
  })



})





