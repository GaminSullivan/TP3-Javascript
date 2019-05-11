function estMultipleDeTrois(nombre) {
    return nombre % 3 === 0;
  }
  function estMultipleDeCinq(nombre) {
    return nombre % 5 === 0;
  }

  for (var i = 0; i <= 199; i++) {
      if (estMultipleDeCinq(i))
      {
          console.log("Buzz");
      }
      else if (estMultipleDeTrois(i))
      {
          console.log("Fizz");
      }
      else {
          console.log(i);
      }
  }