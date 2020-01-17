$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var age = parseInt($("input#age").val());
    console.log(age)
    
    var ears = $("#ears").val();
    console.log(ears)
    
    var war = $("input:radio[name=war]:checked").val();
    console.log(war)
    
    var pokemon = $("input:radio[name=pokemon]:checked").val();
    console.log(pokemon)

    var god = $("#god").val();
    console.log(god)

    var drink = $("#drink").val();
    console.log(drink)

    if (age >= 50 || war === 'what') {
      $("#results").show();
      $("#python").show().replace;
    }
    
 
 

    event.preventDefault();
  });
});