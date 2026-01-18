import { useEffect, useState } from "react";

const productosPeruanos = [
  {
    id: 1,
    name: "Ceviche",
    description: "Fresh fish marinated in lime juice with onions and chili",
    price: 25,
    category: "Seafood",
    img: "https://images.pexels.com/photos/1292984/pexels-photo-1292984.jpeg"
  },
  {
    id: 2,
    name: "Seafood Rice",
    description: "Rice with mixed seafood and Peruvian spices",
    price: 30,
    category: "Seafood",
    img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
  },
  {
    id: 3,
    name: "Grilled Fish",
    description: "Seasoned grilled fish fillet",
    price: 29,
    category: "Seafood",
    img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
  },

  {
    id: 4,
    name: "Lomo Saltado",
    description: "Stir-fried beef with vegetables and fries",
    price: 32,
    category: "Creole",
    img: "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg"
  },
  {
    id: 5,
    name: "Aji de Gallina",
    description: "Creamy spicy chicken with rice",
    price: 22,
    category: "Creole",
    img: "https://images.pexels.com/photos/4061528/pexels-photo-4061528.jpeg"
  },
  {
    id: 6,
    name: "Peruvian Chicken Rice",
    description: "Green seasoned rice with chicken",
    price: 24,
    category: "Creole",
    img: "https://images.pexels.com/photos/4109990/pexels-photo-4109990.jpeg"
  },
  {
    id: 7,
    name: "Tacu Tacu",
    description: "Fried rice and beans mix",
    price: 23,
    category: "Creole",
    img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
  },

  {
    id: 8,
    name: "Anticuchos",
    description: "Grilled beef heart skewers",
    price: 18,
    category: "Grilled",
    img: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg"
  },
  {
    id: 9,
    name: "Peruvian Sausage",
    description: "Traditional grilled sausage",
    price: 17,
    category: "Grilled",
    img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
  },
  {
    id: 10,
    name: "Pachamanca",
    description: "Traditional Andean meat and vegetables dish",
    price: 35,
    category: "Grilled",
    img: "https://images.pexels.com/photos/1292984/pexels-photo-1292984.jpeg"
  },

  {
    id: 11,
    name: "Causa Limeña",
    description: "Mashed yellow potato layered with chicken",
    price: 20,
    category: "Starters",
    img: "https://images.pexels.com/photos/30766469/pexels-photo-30766469.jpeg"
  },
  {
    id: 12,
    name: "Papa a la Huancaina",
    description: "Potatoes with spicy cheese sauce",
    price: 18,
    category: "Starters",
    img: "https://images.pexels.com/photos/1292984/pexels-photo-1292984.jpeg"
  },
  {
    id: 13,
    name: "Cheese Sticks",
    description: "Fried cheese appetizer",
    price: 15,
    category: "Starters",
    img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
  },

  {
    id: 14,
    name: "Chicha Morada",
    description: "Purple corn drink with spices",
    price: 8,
    category: "Beverages",
    img: "https://images.pexels.com/photos/1292984/pexels-photo-1292984.jpeg"
  },
  {
    id: 15,
    name: "Inca Kola",
    description: "Traditional Peruvian soft drink",
    price: 7,
    category: "Beverages",
    img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
  }
];


// se crea una const para exportar SOLO LA PROMESA de este mock

export const getProducts=()=>{

  let mock= true

    return new Promise((resolve, reject) => {
       setTimeout(()=>{
         if(mock){
            resolve(productosPeruanos)
        }
        else{
            reject('algo salio mal')
        }
       },2000)
    })
   
}