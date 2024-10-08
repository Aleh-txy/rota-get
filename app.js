
import express from "express"

const app = express()
//mock
const selecoes = [
   /* {id:1, selecao:'brazil', grupo:'6'},
    {id:2, selecao:'França', grupo:'5'},
    {id:3, selecao:'Noruega', grupo:'4'},
    {id:4, selecao:'Japao', grupo:'3'},*/
    {
        "address": {
          "geolocation": {
            "lat": "-37.3159",
            "long": "81.1496"
          },
          "city": "kilcoole",
          "street": "new road",
          "number": 7682,
          "zipcode": "12926-3874"
        },
        "id": 1,
        "email": "john@gmail.com",
        "username": "johnd",
        "password": "m38rmF$",
        "name": {
          "firstname": "john",
          "lastname": "doe"
        },
        "phone": "1-570-236-7033",
        "__v": 0
      }
]

//criar rota padrão ou raiz
app.get('/', (req, res)=>{
    res.send('hello world')
})
  app.get('/selecoes', (req, res)=>{
    res.send(selecoes)
  })
export default app