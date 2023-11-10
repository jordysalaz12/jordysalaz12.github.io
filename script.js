const boton = document.querySelector("button");
const color= document.getElementById("color");



function generarColorHexAleatorio(){
    let digitos="0123456789ABCDEF";
    let colorHex ="#"
    for(i=0;i<6;i++){
       let indiceAleatorio=Math.floor(Math.random()*16);
       colorHex +=digitos[indiceAleatorio];
    }
    return colorHex
}


boton.addEventListener("click",function(){
    let colorAleatorio =generarColorHexAleatorio();
    //Actualizar el texto.
    //Actualizar el color de fondo.
    document.body.style.backgroundColor=colorAleatorio;
})




function generarFrases(){
    const frasesMotivacion = [
        "El único modo de hacer un gran trabajo es amar lo que haces.",
        "La vida es 10% lo que nos sucede y 90% cómo reaccionamos ante ello.",
        "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "La persistencia es la clave del éxito.",
        "Cree en ti mismo y todo será posible.",
        "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
        "No importa lo lento que vayas, siempre y cuando no te detengas.",
        "La única forma de hacer un gran trabajo es amar lo que haces.",
        "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
        "El mayor logro se logra cuando nos levantamos después de cada caída.",
        "Tus limitaciones son solo tus miedos.",
        "Cada día es una nueva oportunidad para cambiar tu vida.",
        "No te preocupes por los fracasos, preocúpate por las posibilidades que pierdes cuando ni siquiera lo intentas.",
        "El éxito no está en vencer siempre, sino en no rendirse nunca.",
        "La diferencia entre un día bueno y uno malo es tu actitud.",
        "No cuentes los días, haz que los días cuenten.",
        "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "Cada día es una nueva oportunidad para aprender y crecer.",
        "No dejes que tus sueños sean solo sueños.",
        "El trabajo duro vence al talento cuando el talento no trabaja duro.",
        "El éxito no es final, el fracaso no es fatal: es el coraje para continuar lo que cuenta.",
        "La disciplina es el puente entre metas y logros.",
        "Si puedes soñarlo, puedes lograrlo.",
        "La confianza en uno mismo es el primer secreto del éxito.",
        "No tienes que ser grande para empezar, pero debes empezar para ser grande.",
        "La excelencia no es un acto, sino un hábito.",
        "Nunca es tarde para ser lo que podrías haber sido.",
        "La única manera de hacer un gran trabajo es amar lo que haces.",
        "No busques el éxito, busca la felicidad. Si lo encuentras en el camino, el éxito vendrá de forma natural.",
        "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "Nuestro mayor miedo no es que seamos inadecuados. Nuestro mayor miedo es que somos poderosos más allá de toda medida.",
        "La vida es 10% lo que nos sucede y 90% cómo reaccionamos ante ello.",
        "La diferencia entre una persona exitosa y otras no es la falta de fuerza, no la falta de conocimiento, sino la falta de voluntad.",
        "La mente es todo. Lo que piensas, te conviertes.",
        "No te preocupes por los fracasos, preocúpate por las posibilidades que pierdes cuando ni siquiera lo intentas.",
        "Haz hoy lo que otros no quieren, haz mañana lo que otros no pueden.",
        "El éxito no se trata de lo que logras, sino de lo que superas.",
        "El éxito no es para los débiles de corazón, es para los que no se rinden a pesar de los obstáculos.",
        "Tu tiempo es limitado, no lo gastes viviendo la vida de otra persona.",
        "No busques el éxito, busca la realización personal. El éxito seguirá.",
        "La mejor forma de predecir el futuro es crearlo.",
        "Lo que tienes hoy, muchos lo desearían. Aprecia lo que tienes antes de que se convierta en lo que tenías.",
        "La única forma de hacer un gran trabajo es amar lo que haces.",
        "No hay atajos para cualquier lugar que valga la pena ir.",
        "No te preocupes por los errores y fracasos, preocúpate por las posibilidades que pierdes cuando ni siquiera lo intentas.",
        "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
        "El éxito no es el final, el fracaso no es fatal: lo que cuenta es el coraje de continuar.",
        "Sigue tus sueños, ellos conocen el camino.",
        "La única forma de hacer un gran trabajo es amar lo que haces.",
        "Si puedes soñarlo, puedes lograrlo.",
        "No tienes que ser grande para empezar, pero debes empezar para ser grande.",
        "La excelencia no es un acto, sino un hábito.",
        "Nunca es tarde para ser lo que podrías haber sido.",
        "La única manera de hacer un gran trabajo es amar lo que haces.",
        "No busques el éxito, busca la felicidad. Si lo encuentras en el camino, el éxito vendrá de forma natural.",
        "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "Nuestro mayor miedo no es que seamos inadecuados. Nuestro mayor miedo es que somos poderosos más allá de toda medida.",
        "La vida es 10% lo que nos sucede y 90% cómo reaccionamos ante ello.",
        "La diferencia entre una persona exitosa y otras no es la falta de fuerza, no la falta de conocimiento, sino la falta de voluntad.",
        "La mente es todo. Lo que piensas, te conviertes.",
        "No te preocupes por los fracasos, preocúpate por las posibilidades que pierdes cuando ni siquiera lo intentas.",
        "Haz hoy lo que otros no quieren, haz mañana lo que otros no pueden.",
        "El éxito no se trata de lo que logras, sino de lo que superas.",
        "El éxito no es para los débiles de corazón, es para los que no se rinden a pesar de los obstáculos.",
        "Tu tiempo es limitado, no lo gastes viviendo la vida de otra persona.",
        "No busques el éxito, busca la realización personal. El éxito seguirá.",
        "La mejor forma de predecir el futuro es crearlo.",
        "Lo que tienes hoy, muchos lo desearían. Aprecia lo que tienes antes de que se convierta en lo que tenías.",
        "No hay atajos para cualquier lugar que valga la pena ir.",
        "No te preocupes por los errores y fracasos, preocúpate por las posibilidades que pierdes cuando ni siquiera lo intentas.",
        "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
        "El éxito no es el final, el fracaso no es fatal: lo que cuenta es el coraje de continuar.",
        "Sigue tus sueños, ellos conocen el camino.",
        "La única forma de hacer un gran trabajo es amar lo que haces.",
        "Si puedes soñarlo, puedes lograrlo.",
        "No tienes que ser grande para empezar, pero debes empezar para ser grande.",
        "La excelencia no es un acto, sino un hábito.",
        "Nunca es tarde para ser lo que podrías haber sido.",
        "La única manera de hacer un gran trabajo es amar lo que haces.",
        "No busques el éxito, busca la felicidad. Si lo encuentras en el camino, el éxito vendrá de forma natural.",
        "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "Nuestro mayor miedo no es que seamos inadecuados. Nuestro mayor miedo es que somos poderosos más allá de toda medida.",
        "La vida es 10% lo que nos sucede y 90% cómo reaccionamos ante ello.",
        "La diferencia entre una persona exitosa y otras no es la falta de fuerza, no la falta de conocimiento, sino la falta de voluntad.",
        "La mente es todo. Lo que piensas, te conviertes.",
        "No te preocupes por los fracasos, preocúpate por las posibilidades que pierdes cuando ni siquiera lo intentas.",
        "Haz hoy lo que otros no quieren, haz mañana lo que otros no pueden.",
        "El éxito no se trata de lo que logras, sino de lo que superas.",
        "El éxito no es para los débiles de corazón, es para los que no se rinden a pesar de los obstáculos.",
        "Tu tiempo es limitado, no lo gastes viviendo la vida de otra persona.",
        "No busques el éxito, busca la realización personal. El éxito seguirá.",
        "La mejor forma de predecir el futuro es crearlo.",
        "Lo que tienes hoy, muchos lo desearían. Aprecia lo que tienes antes de que se convierta en lo que tenías.",
        "No hay atajos para cualquier lugar que valga la pena ir.",
        "No te preocupes por los errores y fracasos, preocúpate por las posibilidades que pierdes cuando ni siquiera lo intentas.",
        "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
        "El éxito no es el final, el fracaso no es fatal: lo que cuenta es el coraje de continuar.",
        "Sigue tus sueños, ellos conocen el camino.",
    ];
       let acumulador;
       let indiceAleatorio=Math.floor(Math.random()*100);
       acumulador =frasesMotivacion[indiceAleatorio];
   
    return acumulador
}

boton.addEventListener("click",function(){
    let frasesAleatorias =generarFrases();
    //Actualizar el texto.
    color.textContent = frasesAleatorias;
})