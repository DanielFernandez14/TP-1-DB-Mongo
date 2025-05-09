import { Schema, model, connect } from "mongoose";
process.loadEnvFile()

const URI_DB = process.env.URI_DB || "";

const connectMongoDb = async () => {
    try {
    await connect(URI_DB);
    console.log("Conectado a MongoDB");
    } catch (error) {
    console.log("Error al conectar a MongoDB");
    }
};

interface IGame{
    title: string,
    year: Number,
    rating: Number,
    gender: string
}

const gamesSchema = new Schema({
    title: { type: String, required: true, unique: true },
    year: { type: Number, required: true, unique: true },
    rating: { type: Number, default: 0 },
    gender: { type: String, required: true },
}, {
    versionKey: false
});

const Game = model ("Game", gamesSchema)


// Creo un NUEVO JUEGO.
const addNewGame = async (newGame: IGame) => {
    try{
        const {title, year, rating, gender} = newGame
        if(!title || !year || !rating || !gender) {
            return{success: false, error : "Data incorrecta"}
        }
    
    
        const newGameToBD = new Game ({title, year, rating, gender})
        await newGameToBD.save()
        return{
            success: true,
            data: newGameToBD,
            message: "Juego añadido correctamente"
        }

        } catch (error: any) {
            return{success: false, error: error.message};
    }
}


// Llamo a TODOS LOS JUEGOS
const getGames = async () => {
    try{
        const allGames = await Game.find(); 
        return{
            success: true,
            data: allGames,
            message: "Estos son los juegos en la DB"
        }
    } catch (error: any) {
        return {
            success: false,
            error: error.message
        }
    }
}


// Llamo UN solo juego por ID.
const getGame = async (id: string) => {
    try{
        const foundGame = await Game.findById(id)
        if (!foundGame) {
            return {
                success: false,
                message: "Error al encontrar el juego"
            }
        }
        return{
            success: true,
            data: foundGame,
            message: "Juego encontrado por ID correctamente"
        }
    } catch (error) {

    }
}


// Actualizo UN juego por ID.
const updateGame = async (id: string) => {
    try{

    } catch (error) {

    }
}


// Borro UN juego por ID.
const deleteGame = async (id: string) => {
    try{

    } catch {

    }
}







const main = async ( ) => {
    connectMongoDb()

    // const saveGame = await addNewGame({title: "Grand Theft Auto V", year: 2013, rating: 97, gender: "Action-adventure" })

    // const games = await getGames()

    const games = await getGame("681d40b32ac55b0959c9b0f2")

    console.log(games)
}

main()

