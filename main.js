{
//clase de arrow functions
{/*   

const MAYOR_DE_EDAD = 18;

var juan = {
    nombre: 'juan',
    apellido: 'perez',
    edad: 28
}

var maria = {
    nombre: 'maria',
    apellido: 'monaco',
    edad: 16
}

var esMayorDeEdad = ({ edad }) => edad >= MAYOR_DE_EDAD //recibe solo el parametro edad y lo compara con la constante (retorna un bool)
var esMenorDeEdad = ({edad}) => !esMayorDeEdad(edad) //niega la funcion de arriba

var concederAcceso = (persona) => {
    esMayor = esMenorDeEdad(persona);
    if(esMayor){
        console.log('Acceso concedido');
    }else{
        console.log('Acceso denegado');
    }
}

*/}


// clase de manejo de arrays
{/*(async ()=>{
    const MAYOR_DE_EDAD = 30;
    const HOMBRE = 'male';

    async function getRandomUsers(results){
        const random_user = await fetch('https://randomuser.me/api/?results=' + results).then( (data) => { return data.json(); } );
        return random_user;
    }

    
    const {results: randomUsers} = await getRandomUsers(20);

    console.log(randomUsers);    

    const male = randomUsers.filter((_users) => {
        return _users.gender === HOMBRE; // devuelve TODOS los resultados en forma de objeto a diferencia del .find() Que lo que hace es devolver solo la primera coincidencia
    });

    console.log(male);
    
    var acum_age = 0; 
    randomUsers.map( randomUsers =>  acum_age += randomUsers.dob.age); // Pasa por cada uno de los nodos y realiza la operacion
    console.log("En total las 20 personas acumulan un total de " + acum_age + " años");


    const reductor = (cont, { dob: {age} }) => cont + age; // Otra forma de hacer lo de arriba pero con reducer
    var totalDeLibros = randomUsers.reduce(reductor, 0); // El segundo parametro seria el numero inicial que posee el contador
    console.log(totalDeLibros);
})()*/}


// clase de objetos vieja   NO SIRVE EN LA ACTUALIDAD, ES UNA MANERA VIEJISIMA
{
/*     const IS_TALL = 1.8;
    const IS_ADULT = 18;

    function heredaDe(prototipoHijo, prototipoPadre){
        var noHaceNada = function (){}
        noHaceNada.prototype = prototipoPadre.prototype;
        prototipoHijo.prototype = new noHaceNada;
        prototipoHijo.prototype.constructor = prototipoHijo;
    }

    function Persona(firstName, lastName, age, height){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.height = height;

        this.hello = () => console.log(`Hi! My name is ${this.firstName} ${this.lastName}`)
        this.isTall = () => this.height >= IS_TALL;
        this.isAdult = () => this.age >= IS_ADULT;   
    }

    function Developer(){
        this.hello = () => console.log(`Hi! My name is ${this.firstName} ${this.lastName} and I am a developer`);
    }

    // A tener en cuenta: tambien se pueden agregar funciones a el objeto Persona con -> Persona.prototype.'nombre de la funcion' = () => {}
    // El problema con esto es que si uso la palabra reservada this. this va a contener window
    // La solucion a esto es haciendo Persona.prototype.'nombre de la funcion' = function () { return 'operacion'}

    var maria = new Persona('maria', 'perez', 16, 1.8);
    console.log(`Maria es adulta? ${maria.isAdult()}`);
    console.log(`Maria es alta? ${maria.isTall()}`); */
}

// new way to declare classes or objects
{
/* 
    const IS_TALL = 1.8;
    const IS_ADULT = 18;


    class Persona{
        constructor(firstName, lastName, age, height){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.height = height;
        }

        hello (_function){
            console.log(`Hi! My name is ${this.firstName} ${this.lastName}`);
            if(_function){
                _function(this.firstName, this.lastName, false);
            }
        } 

        isTall () {
            return this.height >= IS_TALL;
        }

        isAdult () {
            return  this.age >= IS_ADULT;
        }
    }

    class Developer extends Persona{
        constructor(firstName, lastName, age, height){
            super(firstName, lastName, age, height);
        }

        hello(_function){
            console.log(`Hi! My name is ${this.firstName} ${this.lastName} and I am a developer`);
            if(_function){
                _function(this.firstName, this.lastName, true);
            }
        }
    }

    function responceHello(firstName, lastName, isDev){
        console.log(`Hi ${firstName} ${lastName}!`);
        if(isDev){
            console.log("Wow! I didn't know you were developer...");
        }
    }

    // A tener en cuenta: tambien se pueden agregar funciones a el objeto Persona con -> Persona.prototype.'nombre de la funcion' = () => {}
    // El problema con esto es que si uso la palabra reservada this. this va a contener window
    // La solucion a esto es haciendo Persona.prototype.'nombre de la funcion' = function () { return 'operacion'}

    var maria = new Persona('maria', 'alvarez', 16, 1.8);
    maria.hello(responceHello);
    console.log(`Maria es adulta? ${maria.isAdult()}`);
    console.log(`Maria es alta? ${maria.isTall()}`);

    console.log('\n');

    var carlos = new Persona('carlos', 'perez', 21, 1.9);
    carlos.hello();
    console.log(`Carlos es adulto? ${carlos.isAdult()}`);
    console.log(`Carlos es alto? ${carlos.isTall()}`);

    console.log('\n');

    var matias = new Developer('matias', 'perez', 18, 1.7);
    matias.hello(responceHello);
    console.log(`Matias es adulto? ${matias.isAdult()}`);
    console.log(`Matias es alto? ${matias.isTall()}`);
 */
}

//Promesas
{   
    //My way
    
    /* function fetchPeople(id){
        return fetch(`https://swapi.co/api/people/${id}`).then((data) => data.json()).then((data) => data).catch(() => id);
    }


    function onError(id){
        console.log('No se ha podido traer el personaje numero ' + id);
    }

    fetchPeople(1).then((data) => {
        console.log(`Hola me llamo ${data.name}`);
    }).catch((id) => {
        onError(id);
    }) */

    
    

    //Sacha way
    /* function getCharacter(id){
        return new Promise((resolve, reject) => {
            fetch(`https://swapi.co/api/people/${id}`).then( (data) => data.json())
            .then((data) => {
                resolve(data)
            }).catch(() => reject(id));
        })
    }

    getCharacter(4).then((data) => {
        console.log(`Hola me llamo ${data.name}`);
    }).catch((id) => {
      console.log('No se ha podido traer el personaje numero ' + id);  
    }) */
}


//Promesas encadenadas en serie
{
/* 
    function getCharacter(id){
        return new Promise((resolve, reject) => {
            fetch(`https://swapi.co/api/people/${id}`).then( (data) => data.json())
            .then((data) => {
                resolve(data)
            }).catch(() => reject(id));
        })
    }

    getCharacter(1).then((data) => {
        console.log(`Hola me llamo ${data.name}`);
        return getCharacter(2);
    }).then((data) => {
        console.log(`Hola me llamo ${data.name}`);
        return getCharacter(3);
    }).then((data) => {
        console.log(`Hola me llamo ${data.name}`);
        return getCharacter(4);
    }).then((data) => {
        console.log(`Hola me llamo ${data.name}`);
        return getCharacter(5);
    }).then((data) => {
        console.log(`Hola me llamo ${data.name}`);
        return getCharacter(6);
    }).then((data) => {
        console.log(`Hola me llamo ${data.name}`);
        return getCharacter(7);
    }).then((data) => {
        console.log(`Hola me llamo ${data.name}`);
        return getCharacter(8);
    }).then((data) => {
        console.log(`Hola me llamo ${data.name}`);
    }).catch((id) => {
      console.log('No se ha podido traer el personaje numero ' + id);  
    })
 */
}

//Promesas en paralelo
{
    // Esta funcion es la de la pregunta a @okbel es la que anda con el catch
    {/* function getCharacter(id){
        return new Promise((resolve, reject) => {
            fetch(`https://swapi.co/api/people/${id}`).then( (data) => data.json()) // Traigo el dato de la api y lo hago un json
            .then((data) => {
                resolve(data)   // Agarro el json y lo retorno
            }).catch(() => reject(id)); // Si ocurre un error devuelvo el id (que es un numero) del personaje que generó el error
        })
    }

    function onError(id){
        console.log('No se ha podido traer el personaje numero ' + id); // Recibo el id para mostrar el mensaje
    }

    getCharacter(1).then((data) => {
        console.log(`Hola me llamo ${data.name}`); //Saludo con el nombre del personaje
    }).catch((id) => {
        onError(id); // Llamo a la funcion onError que mostrara el mensaje de error
    }) */}

    // Una forma de hacerlo
    /* function getCharacter(id){
        return new Promise((resolve, reject) => {
            fetch(`https://swapi.co/api/people/${id}`).then( (data) => data.json())
            .then((data) => {
                resolve(data)
            }).catch(() => reject(id));
        })
    }

    var ids = [1, 2, 3, 4, 5];
    var promesas = ids.map( id => getCharacter(id) );

    Promise.all(promesas)
    .then(data => data.map( data => console.log(`Hola soy ${data.name}`) ))
    .catch(id => console.log(`Ha ocurrido un error con el id ${id}`)); */

    

    //Una forma mas clara de hacerlo
    /* function getCharacter(id){
        return new Promise((resolve, reject) => {
            fetch(`https://swapi.co/api/people/${id}`).then( (data) => data.json())
            .then((data) => {
                resolve(data)
            }).catch(() => reject(id));
        })
    }


    (async () => {
        
        var ids = [1, 2, 3, 4, 5];
        var promesas = ids.map( id => getCharacter(id) );

        try{
            var personajes = await Promise.all(promesas);
            personajes.map( data => console.log(`Hola soy ${data.name}`) )
        }
        catch(id){
            console.log(`Ha ocurrido un error con el id ${id}`);
        }

    })() */

    
}

}

const TRAMOS_DE_ARRAY = 5;

const $playButton = document.querySelector('#btnEmpezar');
const $gameBoard = document.querySelector('#gameBoard');
const $overlay = document.querySelector('#overlay');
const $center = document.querySelector('#center');
const $level = document.querySelector('#level');
const $game_container = document.querySelector('#game-container');

const $violeta = document.querySelector('#violet');
const $naranja = document.querySelector('#orange');
const $verde = document.querySelector('#green');
const $celeste = document.querySelector('#lightblue');


class Juego{
    constructor(){
        this.puntos = 0;
        this.addEventListeners_var = this.receiveInteraction.bind(this); //Aca creo esta variable igual a la funcion para poder referenciarla en el remove sino no funciona
        this.init();
    }

    init() {
        $playButton.classList.add('hide');
        this.sequence = []
        this.level = 1;
        this.subnivel = 0;
        this.newSequence();
        this.colors = {
            violet: $violeta,
            orange: $naranja,
            green: $verde,
            lightblue: $celeste
        }
        this.nextLevel();
    }

    newSequence(){
        var new_sequence = new Array(TRAMOS_DE_ARRAY).fill(0).map( pos => pos = Math.floor(Math.random()*4) );
        this.sequence = this.sequence.concat(new_sequence);
    }

    transformateToColor(number){
        switch(number){
            case 0: 
                return 'lightblue'

            case 1: 
                return 'violet'

            case 2: 
                return 'green'

            case 3: 
                return 'orange'
        }
    }

    transformateToNumber(color){
        switch(color){
            case 'lightblue': 
                return 0

            case 'violet': 
                return 1

            case 'green': 
                return 2

            case 'orange': 
                return 3
        }
    }

    addEventListeners(){
        Object.keys(this.colors).map((key)=>{
            this.colors[key].addEventListener('click', this.addEventListeners_var);
            this.colors[key].style.cursor = 'pointer';
        });
    }

    removeEventListeners(){
        Object.keys(this.colors).map((key)=>{
            this.colors[key].removeEventListener('click', this.addEventListeners_var);
            this.colors[key].style.cursor = 'wait';
        });
    }

    illuminate(_color){
        this.colors[_color].classList.add('light');
        $center.classList.add(_color);
        setTimeout(()=>{
            this.colors[_color].classList.remove('light');
            $center.classList.remove(_color);
        }, 500);
    }

    doSequence(){
        for(let x=0 ; x < this.level ; x++){
            let _color = this.transformateToColor(this.sequence[x]); // Dato importantisimo si a _color lo declaro con var por cada siclo del for
            setTimeout(() => {                                      // this.illuminate(_color) se va a sobreescribir por lo tanto siempre se va
                this.illuminate(_color)                            // prender el mismo color **TAMBIEN SE PUEDE CON CONST**
            }, 700 * x); // Aca no pasa porque es un valor volatil ya que no hago referencia a ninguna variable sino a la operacion que se queda en memoria
        }
    }

    nextLevel(){
        this.subnivel = 0;
        setTimeout(()=>{
            $level.innerHTML = this.level;
            this.doSequence();
            this.addEventListeners();
        }, 1000);
    }

    receiveInteraction( { target } ){
        this.illuminate(target.dataset.color);
        const _color = this.transformateToNumber(target.dataset.color);
        if(_color === this.sequence[this.subnivel]){
            this.subnivel++;
            if(this.subnivel === this.level){
                this.level++;
                if(this.level === this.sequence.length){
                    this.newSequence();
                }
                this.nextLevel();
            }
        }else{
            this.lostGame();
        }
    }


    lostGame(){
        swal('Has perdido!', 'Vuelve a intentarlo', 'error')
        .then(() => {location.reload()})
    }

}


function empezarJuego(){
    $game_container.classList.add('unBlur');
    $game_container.classList.remove('notPlaying');
    $overlay.classList.add('hide');
    window.juego = new Juego;
}