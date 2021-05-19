// console.log("Hello, Mundo!");

// let nome: any;

// nome = 0;
// let age: number = 5;
// let age2: number = 6;

// const ages: (number|string)[] = [];

// ages.push(age);


/*enum MARCA_DE_CARRO {
    FORD = "Ford",
    VOLKSWAGEN = "Volkswagen",
    PEUGEOUT = "Peugeout",
    CITROEN = "Citroen"
}

type carro = {
    marca: MARCA_DE_CARRO,
    volumeDoTanque: number,
    temMotorFlex: boolean,
    calcularAutonomia: (combustivel: number) => number
}

function calcAutonomia(combustivel: number): number {
    return combustivel * 15;
}

const mustang: carro = {
    marca: MARCA_DE_CARRO.FORD,
    volumeDoTanque: 61,
    temMotorFlex: false,
    calcularAutonomia: calcAutonomia
}

const gol: carro = {
    marca: MARCA_DE_CARRO.VOLKSWAGEN,
    volumeDoTanque: 55,
    temMotorFlex: true,
    calcularAutonomia: calcAutonomia
}

const garagem: carro[] = [];
garagem.push(mustang);
garagem.push(gol);
// console.table(garagem);

function buscarCarrosPorMarca(frota: carro[], marca?: string | undefined): carro[] {

    if (marca === undefined) {
        return frota
    }
 
    return frota.filter(
        (carro) => {
            return carro.marca === marca
        }
    )
 }
 
const minhaFrota: carro[] = buscarCarrosPorMarca(garagem);
console.table(minhaFrota)
//vendo a km do gol
const kmDoGol = gol.calcularAutonomia(gol.volumeDoTanque);
console.log(`um gol de tanque cheio faz ${kmDoGol} quilômetros.`)
*/


//const minhaString: string = 0 --- error 

//const meuNumero: number | string = 0

/*enum CORES_ARCOIRIS {
    AZUL = "Azul",
    VERMELHO = "Vermelho",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    VIOLETA = "Violeta"
}

type person = {
    nome: string,
    idade: number,
    corFavorita: CORES_ARCOIRIS,
}

const pessoa1: person = {
    nome: 'William',
    idade: 18,
    corFavorita: CORES_ARCOIRIS.VERMELHO
}
const pessoa2: person = {
    nome: 'Adeise',
    idade: 20,
    corFavorita: CORES_ARCOIRIS.AZUL
}
const pessoa3: person = {
    nome: 'Theo',
    idade: 1,
    corFavorita: CORES_ARCOIRIS.VIOLETA
}

console.log(pessoa1)*/



// 2-A) Entradas: numerosOrdenados , soma, for. Saidas: estatiticas



/*
 function obterEstatisticas(numeros:number[]=[]) {

    const numerosOrdenados = numeros.sort((a, b) => a - b)

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

const amostraDeIdades:number[]=[21,18,65,44,15,18]
 


console.log(obterEstatisticas(amostraDeIdades))
*/
//----------------------------------------------------


type person = 
    {
        autor: string,
        texto: string
    }



const post: person[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]



function buscarPostsPorAutor(posts:person[], autorInformado: string) {
  return  posts.filter(
        (post) => {
            return post.autor === autorInformado
        }
    )
}

console.table(buscarPostsPorAutor(post,"Dobby"))