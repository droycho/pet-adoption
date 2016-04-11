


















// user logic
  $(document).ready(function(){
    $("form").submit(function(){
      event.preventDefault();
      var name = ($("#name").val());
      var species = ($("#species").val());
      var breed = ($("#breed").val());
      var age = ($("#age").val());
      var hair = ($("#hair").val());
      var sex = ($("#sex").val());
      var newPet = new Pet(name,species,breed,age,hair,sex);
    })
  })
