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
      $("#python").show();
    } else if(pokemon === 'squirtle' && ear === 'detached' || pokemon === 'bulbasaur' && god === 'no') {
      $("#results").show();
      $("#ruby").show();
    } else if(pokemon === 'charmander' & god === 'yes' || ears === 'attached' && age <= 13) {
      $("#results").show();
      $("#c").show();
    }


    
    if (god === "blood") {
      alert("1-877-726-4727 -Get general information on mental health and locate treatment services in your area. Speak to a live person, Monday through Friday from 8 a.m. to 8 p.m. EST.");
    }

    if (drink === 'yes') {
      $("#results").append(";) how u doin'");
    }
    
 
 

    event.preventDefault();
  });
});