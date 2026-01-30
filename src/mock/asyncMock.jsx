
const productosPeruanos = [
  {
    id:'1',
    name: "Ceviche",
    description: "Pesce fresco marinato nel succo di lime con cipolla e peperoncino",
    price: 25,
    category: "Frutti di mare",
    img: "https://images.pexels.com/photos/1292984/pexels-photo-1292984.jpeg"
  },
  {
    id:'2',
    name: "Riso ai frutti di mare",
    description: "Riso con frutti di mare misti e spezie peruviane",
    price: 30,
    category: "Frutti di mare",
    img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
  },
  {
    id:'3',
    name: "Pesce alla griglia",
    description: "Filetto di pesce alla griglia condito",
    price: 29,
    category: "Frutti di mare",
    img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
  },

  {
    id:'4',
    name: "Lomo Saltado",
    description: "Manzo saltato in padella con verdure e patatine fritte",
    price: 32,
    category: "Cucina creola",
    img: "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg"
  },
  {
    id:'5',
    name: "Aji de Gallina",
    description: "Pollo cremoso e piccante servito con riso",
    price: 22,
    category: "Cucina creola",
    img: "https://images.pexels.com/photos/14205797/pexels-photo-14205797.png"
  },
  {
    id:'6',
    name: "Riso con pollo peruviano",
    description: "Riso verde speziato con pollo",
    price: 24,
    category: "Cucina creola",
    img: "https://images.pexels.com/photos/28503590/pexels-photo-28503590.jpeg"
  },
  {
    id:'7',
    name: "Tacu Tacu",
    description: "Miscela fritta di riso e fagioli",
    price: 23,
    category: "Cucina creola",
    img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
  },

  {
    id:'8',
    name: "Anticuchos",
    description: "Spiedini di cuore di manzo alla griglia",
    price: 18,
    category: "Alla griglia",
    img: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg"
  },
  {
    id:'9',
    name: "Salsiccia peruviana",
    description: "Salsiccia tradizionale alla griglia",
    price: 17,
    category: "Alla griglia",
    img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
  },
  {
    id:'10',
    name: "Pachamanca",
    description: "Piatto tradizionale andino di carne e verdure",
    price: 35,
    category: "Alla griglia",
    img: "https://images.pexels.com/photos/1292984/pexels-photo-1292984.jpeg"
  },

  {
    id:'11',
    name: "Causa Limeña",
    description: "Purè di patate gialle a strati con pollo",
    price: 20,
    category: "Antipasti",
    img: "https://images.pexels.com/photos/30766469/pexels-photo-30766469.jpeg"
  },
  {
    id:'12',
    name: "Papa alla Huancaina",
    description: "Patate con salsa piccante al formaggio",
    price: 18,
    category: "Antipasti",
    img:  "https://images.pexels.com/photos/28448378/pexels-photo-28448378.jpeg"
  },
  {
    id:'13',
    name: "Bastoncini di formaggio",
    description: "Antipasto di formaggio fritto",
    price: 15,
    category: "Antipasti",
    img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
  },

  {
    id:'14',
    name: "Chicha Morada",
    description: "Bevanda di mais viola con spezie",
    price: 8,
    category: "Bevande",
    img: "https://images.pexels.com/photos/17806617/pexels-photo-17806617.jpeg"
  },
  {
    id:'15',
    name: "Inca Kola",
    description: "Bevanda analcolica tradizionale peruviana",
    price: 7,
    category: "Bevande",
    img: "https://images.pexels.com/photos/1990025/pexels-photo-1990025.jpeg"
  }
];

// se crea una const para exportar SOLO LA PROMESA de este mock

export const getProducts = () => {
  let mock = true

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mock) {
        resolve(productosPeruanos)
      } else {
        reject('qualcosa è andato storto')
      }
    }, 2000)
  })
}

export const getItem =(id)=>{
  return new Promise((resolve) => {
    setTimeout(() => {
   
      let product =productosPeruanos.find((cada)=>cada.id===id)
      resolve(product)
    }, 2000);
  })
  }
    
