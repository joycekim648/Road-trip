function Contact(name, email){
  this.name = name;
  this.email = email;
}
$(document).ready(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedEmail = $("input#new-email").val();
  })
  alert(your suggestion was received);
})

 function names = ("enter your name");
 function email = ("enter your email");

 alert(your suggestion was received);
