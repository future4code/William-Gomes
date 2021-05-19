import express, { Request, Response } from "express";
import cors from "cors";
import { countries } from "./countries";

const app = express();

app.use(express.json());
app.use(cors());



app.get("/test", (req: Request, res: Response) => {

    const nome = req.body.nome;
    const cabelo = req.query.cabelo;

    res.send({ message: `Hello, ${nome}, seu é cabelo é ${cabelo}.` });

});


app.get("/countries/all", (req: Request, res: Response) => {
    res
        .status(200)
        .send(countries);
});


app.get("/countries/search", (req: Request, res: Response) => {

    const name = req.query.name as string;
    const result = countries.filter
        ((country) => country.name.toLowerCase().includes(name.toLowerCase()))

    res.status(200).send(result);
});

app.get("/countries/:id", (req: Request, res: Response) => {
    //inicio de um sonho
    try {

        //if(isNaN(Number(req.params.id)))

        //path param sempre é uma string
        //nesse caso, eu preciso que ele seja um number,
        //porque meus ids sao numericos
        //preciso transformar o id em number Number(valor)
        //pode ser que o id nao chegue como numero
        //isNaN Not a Number.
        if (isNaN(Number(req.params.id))) {
            throw new Error("Id must be a number");
        }
        const id = Number(req.params.id);

        const result = countries.find((country => country.id === id));

        if (!result) {
            throw new Error("Could not find country with specified id");
        }

        const resultado = {
            antes: result,

            depois: {
                id: result.id,
                name: 'william',
                continente: result.continent,
                capital: 'gomes',
            }

        }

        //deu tudo certo
        res
            .status(200)

            .send
            (resultado);



    } catch (error) {
        //deu tudo errado
        res.status(400).send({ message: error.message });
    }
});


app.listen(3003, () => {
    console.log("Server is running at http://localhost:3003");

});