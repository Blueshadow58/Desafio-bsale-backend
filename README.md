
# API - Desafio Backend bsale

Api funcional en heroku: https://desafio-bsale-api-heroku.herokuapp.com/api/products


## Instalación

Instalación del proyecto

```bash
  git clone https://github.com/Blueshadow58/Desafio-bsale-backend.git
  cd Desafio-bsale-backend
  npm install 
  npm start  
```
    
## Herramientas & tecnologias utilizadas 

- Visual Studio Code
- Node.js + Express
- Rapid Api (extension)
- Heroku

## API Referencia

#### **GET** |  Productos

- Tipo de dato / data type
```
  [
    {
      "id": int,
      "name": string,
      "url_image": string,
      "price": int,
      "discount": int,
      "category": int
    }
  ]
```

- URL: /api/products

Retorna una lista de productos: 
```
  [
    {
      "id": 25,
      "name": "RON ABUELO",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/abuelo9475.jpg",
      "price": 3990,
      "discount": 0,
      "category": 3
    },
    {
      "id": 26,
      "name": "RON BARCELO AÑEJO",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/barceloanejo9553.jpg",
      "price": 4990,
      "discount": 0,
      "category": 3
    },
    ...
  ]
```

- **Paginación URL :** 

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `page`      | `int` | **Required**. numero de pagina (cada pagina contiene de la cantidad del limite) |
| `limit`      | `int` | **Required**. cantidad maxima de productos |

```
api/products?page=1&limit=10
```


#### **GET** | Producto por id



- URL: /api/products/${id}


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id requerido para la consulta |

Retorna el producto con el id ingresado: ej: /api/products/25

```
 [
    {
      "id": 25,
      "name": "RON ABUELO",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/abuelo9475.jpg",
      "price": 3990,
      "discount": 0,
      "category": 3
    },        
  ]

```

#### **POST** | Producto(s) buscador

- URL: /api/products

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Nombre requerido para la consulta |

Retorna los productos que comienzen con dicho string: ej: energe

```
  [
    {
      "id": 5,
      "name": "ENERGETICA MR BIG",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
      "price": 1490,
      "discount": 20,
      "category": 1
    },
    {
      "id": 6,
      "name": "ENERGETICA RED BULL",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
      "price": 1490,
      "discount": 0,
      "category": 1
    },
    ...
  ]
```


#### **GET** | Categorias 

- Tipo de dato / data type
```
  [
    {
      "id": int,
      "name": string
    }    
  ]
```
- URL: /api/categories

Retorna todas las categorias

```
  [
    {
      "id": 1,
      "name": "bebida energetica"
    },
    {
      "id": 2,
      "name": "pisco"
    },
    ...
  ]

```

## Tecnologias utilizadas

**Server:** Node, Express


## 🔗 Links - Portafolio - Linkedin 
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://gamonal-portfolio.netlify.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/franco-gamonal-developer/)


