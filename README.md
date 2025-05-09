# 🎮 API de Gestión de Juegos con Mongoose

Este módulo permite conectar a una base de datos MongoDB y realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una colección de videojuegos. Está implementado usando **Mongoose** en **TypeScript**.

---

## 📦 Requisitos

- Node.js  
- MongoDB local  
- TypeScript  
- Archivo `.env` con URI de conexión  

---

## ⚙️ Configuración Inicial

Instalar dependencias:

```bash
npm install mongoose
```

Crear un archivo `.env` en la raíz del proyecto con la siguiente variable:

```
URI_DB=mongodb://localhost:27017/db-juegos
```

Activar la carga de variables con:

```ts
process.loadEnvFile()
```

---

## 📖 Estructura del Modelo

```ts
interface IGame {
  title: string
  year: Number
  rating: Number
  gender: string
}

const gamesSchema = new Schema({
  title: { type: String, required: true, unique: true },
  year: { type: Number, required: true, },
  rating: { type: Number, default: 0 },
  gender: { type: String, required: true },
}, {
  versionKey: false
})
```

---

## 📚 Funciones Disponibles

### 🔗 Conectar a la Base de Datos

```ts
await connectMongoDb()
```

Conecta a MongoDB usando la URI definida en `.env`.

---

### ✅ Agregar Juego

```ts
await addNewGame({ title, year, rating, gender })
```

- Valida que los campos estén presentes  
- Devuelve un objeto con `success`, `data` y `message`  
- En caso de error, incluye `error.message`  

---

### 📜 Obtener Todos los Juegos

```ts
await getGames()
```

- Recupera todos los documentos de la colección  
- Devuelve `success`, `data` y `message`  

---

### 📃 Obtener Juego por ID

```ts
await getGame(id)
```

- Devuelve un juego según su ID  
- Si no se encuentra, devuelve `message: "Error al encontrar el juego"`  

---

### ✏️ Actualizar Juego

```ts
await updateGame(id, { rating: 10 })
```

- Permite actualizar cualquier campo definido  
- Devuelve el documento actualizado  

---

### 🔥 Eliminar Juego

```ts
await deleteGame(id)
```

- Elimina un juego por su ID  
- Devuelve `data` del juego eliminado o mensaje de error si no se encuentra  

---

## 🎮 Ejemplo de Uso

```ts
const main = async () => {
  connectMongoDb()

  // const savedGame = await addNewGame({
  //   title: "Minecraft: Bedrock Edition",
  //   year: 2011,
  //   rating: 93,
  //   gender: "Sandbox / Survival"
  // })

  const allGames = await getGames()
  console.log(allGames)
}

main()
```

---

## 📆 Errores Comunes

- URI de conexión inválida  
- Campos faltantes al crear un juego  
- ID inválido o inexistente  
- Conflictos por campos `unique` (título)  

---

## 🤖 Contribuciones

Pull requests, sugerencias o mejoras son bienvenidas.

---

## 📧 Contacto

Para consultas técnicas, contactar a **Daniel Matías Fernández**.
