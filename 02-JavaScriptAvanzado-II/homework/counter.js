function counter() {
    // Retorna una funcion que cuando sea invocada retorne un valor creciente.
    // el primer valor deberia ser 1.
    // Vas a tener que usar closures.
    // ejemplo: const newCounter = counter();
    // newCounter(); // 1
    // newCounter(); // 2
   
    var num = 0 //primer valor sin iniciar lafuncion
  
    return function (num) {
      num = num + 1 ;
      return num
    }
    
  }
  counter (5) ;
  console.log(counter())
      

