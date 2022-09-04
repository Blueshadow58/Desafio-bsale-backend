
# API - Desafio Backend bsale

Api funcional en heroku: https://desafio-bsale-api-heroku.herokuapp.com/


## Instalacion

Install my-project with npm

```bash
  git clone https://github.com/Blueshadow58/Desafio-bsale-backend.git
  cd Desafio-bsale-backend
  npm install 
  npm start  
```
    
## Herramientas & tecnologias utilizadas 

- Visual Studio Code
- Node.js + Express
- Vanilla JS
- Bootstrap
- Html5
- Rapid Api (extension)
- Heroku

## API Reference

#### Get Productos

```http
  GET /
```
Retorna todos los productos de la base de datos

#### Get producto por id

```http
  GET /api/product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id requerido para la consulta |

#### Get producto(s) buscador

```http
  POST /product
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Nombre requerido para la consulta |

Retorna los productos que comienzen con dicho string (like query)

#### Get categorias 

```http
  GET /categories
```

Retorna todas las categorias 
