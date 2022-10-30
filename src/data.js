const data = [
    {
        id: 1,
        name: "Red Tailed Tinfoil Barb",
        img: "https://i.imgur.com/R6sRxwv.jpg",
        habitat: "freshwater",
        price: "5.99",
        description: "Our freshwater fish are lovingly cared for and delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    },
    {
        id: 2,
        name: "Red Rainbow Fish",
        img: "https://i.imgur.com/vp42LWX.jpg",
        habitat: "freshwater",
        price: "6.99",
        description: "Our freshwater fish are lovingly cared for and delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    },
    {
        id: 3,
        name: "Oscar",
        img: "https://i.imgur.com/rIs1jtZ.jpg",
        habitat: "freshwater",
        price: "7.99",
        description: "Our freshwater fish are lovingly cared for and delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    },
    {
        id: 4,
        name: "Red Top Albino Zebra",
        img: "https://i.imgur.com/QyLgMRh.jpg",
        habitat: "freshwater",
        price: "7.99",
        description: "Our freshwater fish are lovingly cared for and delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    },
    {
        id: 5,
        name: "Bluespine Unicornfish",
        img: "https://i.imgur.com/ZPP0Jlr.jpg",
        habitat: "saltwater",
        price: "11.99",
        description: "Our saltwater fish are lovingly cared for and delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    },
    {   
        id: 6,
        name: "Soldierfish",
        img: "https://i.imgur.com/Cjhryx2.jpg",
        habitat: "saltwater",
        price: "12.99",
        description: "Our saltwater fish are lovingly cared for and delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    },
    { 
        id: 7,
        name: "Surgeonfish",
        img: "https://i.imgur.com/Ur6DbgZ.jpg",
        habitat: "saltwater",
        price: "17.99",
        description: "Our saltwater fish are lovingly cared for and delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    },
    {
        id: 8,
        name: "Scribbled Unicornfish",
        img: "https://i.imgur.com/lLV8JNP.jpg",
        habitat: "saltwater",
        price: "15.99",
        description: "Our saltwater fish are lovingly cared for and delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    },
    {
        id: 9,
        name: "Bartlett's Anthias",
        img: "https://i.imgur.com/PnmAuiW.jpg",
        habitat: "saltwater",
        price: "10.99",
        description: "Our saltwater fish are lovingly cared for and delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    },
    {
        id:10,
        name: "Copperband Butterflyfish",
        img: "https://i.imgur.com/SNYIEjS.jpg",
        habitat: "saltwater",
        price: "18.99",
        description: "Our saltwater fish are lovingly cared for and delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    },
    {
        id: 11,
        name: "Multicolored Beta",
        img: "https://i.imgur.com/wArCoSk.jpg",
        habitat: "freshwater",
        price: "5.99",
        description: "Our freshwater fish are lovingly cared for and delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    },
    {
        id: 12,
        name: "Rabbitfish",
        img: "https://i.imgur.com/o2k0KGU.jpg",
        habitat: "saltwater",
        price: "9.99",
        description: "Our saltwater fish are lovingly cared for and delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    },
    {
        id: 13,
        name: "Clownfish",
        img: "https://i.imgur.com/veIHLqV.jpg",
        habitat: "saltwater",
        price: "13.99",
        description: "Our saltwater fish are lovingly cared for and delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1  
    },
    {
        id: 14,
        name: "Red beta",
        img: "https://i.imgur.com/QK6weUu.jpg",
        habitat: "freshwater",
        price: "8.99",
        description: "Our freshwater fish are lovingly cared for and delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    },
    {
        id:15,
        name: "Lionfish",
        img: "https://i.imgur.com/2lfZBQU.jpg",
        habitat: "saltwater",
        price: "12.99",
        description: "Our saltwater fish are lovingly cared for and delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    },
    {
        id: 16,
        name: "Yellow Tang",
        img: "https://i.imgur.com/1yoTRjk.jpg",
        habitat: "saltwater",
        price: "15.99",
        description: "Our saltwater fish are lovingly cared for and delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    },
   {
        id: 17,
        name: "Goldfish",
        img: "https://i.imgur.com/5dQIdUP.jpg",
        habitat: "freshwater",
        price: "2.99",
        description: "Our freshwater fish are lovingly cared for and delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    },
    {
        id: 18,
        name: "Vermillion Rockfish",
        img: "https://i.imgur.com/RQdwg39.jpg",
        habitat: "saltwater",
        price: "12.99",
        description: "Our saltwater fish are lovingly cared for and delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    },
    {
        id:19,
        name: "Seahorse",
        img: "https://i.imgur.com/OLDLnjz.jpg",
        habitat: "saltwater",
        price: "28.99",
        description: "Our saltwater fish are lovingly cared for and delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    },
    {
        id:20,
        name: "Discus",
        img: "https://i.imgur.com/p1w0amt.jpg",
        price: "16.99",
        description: "Our freshwater fish are lovingly cared for and delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    },
    {
        id: 21,
        name: "Small Fish Bowl Aquarium",
        img: "https://i.imgur.com/Ea5ZPLA.jpg",
        price: "14.99",
        description: "Quality habitat for your fish delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    },
    {
        id: 22,
        name: "1.5 Gallon Aquarium",
        img: "https://i.imgur.com/wJuE8i5.jpg",
        price: "19.99",
        description: "Quality habitat for your fish delivered directly to your door. Please contact us if you have any questions or need assistance.",
        volume: 1
    }

]

  export default data