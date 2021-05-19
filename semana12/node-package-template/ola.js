// -------------- EX 1 ---------

/*const nome = process.argv[2];
const idade = Number(process.argv[3]);
const somaIdade = Number(idade + 7)
    console.log(`Hey, ${nome}. Sua idade é ${idade}, daqui sete anos você tera ${somaIdade} `);
 
 -----------------------------------   */


// -------------- EX 2 ------------------

/*const arg = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])
const add = Number(num1+num2)
const mult = Number(num1*num2)
const div = Number(num1/num2)
const sub = Number(num1-num2)

switch (arg) {
    case "add":
        console.log(`Resposta: ${add}`)
        break;
        case "mult":
            console.log(`Resposta: ${mult}`)
            break;
            case "div":
                console.log(`Resposta: ${div}`)
                break;
                case "sub":
                    console.log(`Resposta: ${sub}`)
                    break;
    default:
        console.log("verifique se esqueceu algum argumento")
        break;
}
----------------------------------------------*/

const tarefa = process.argv[2]

console.log(`Tarefa adicionada com sucesso`)

console.log(tarefa[2])

//console.log(process.argv[2]);
//console.log(process.argv[3]);
//é um array. De todos os argumentos de um processo
//process.argv[0] SEMPRE VALE o próprio node
//process.argv[1] SEMPRE VALE o arquivo que o node vai rodar
//portanto, process.argv[0] e process.argv[1] sempre estão ocupados