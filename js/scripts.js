//business
function Pet(name, species, breed, age, hair, sex){
  this.name = name;
  this.species = species;
  this.breed = breed;
  this.age = age;
  this.hair = hair;
  this.sex = sex;
}

Pet.prototype.Description = function(){
  return "This is one of our " + this.species + "s, " + this.name + ", he is a " + this.sex +  " " + this.breed + " with " + this.hair + " hair. " + this.name + " is " + this.age + " years old."
}

// user logic
  $(document).ready(function(){
    $("form").submit(function(){
      event.preventDefault();
      var name = ($("#name").val());
      var species = ($("#species").val());
      var breed = ($("#breed").val());
// yet another conflict memo
      var age = ($("#age").val());
      var hair = ($("#hair").val());
      var sex = ($("#sex").val());
      var newPet = new Pet(name,species,breed,age,hair,sex);
      $("#output").append(newPet.Description());
    })
  })

// another comment
//test comment here from pair1
//test comment 2
// test comment 3 from pair1
// another test comment from pair1
//cheese
