const games = [
    // --- JUEGOS ---
    {
        id: 1,
        title: "Cyberpunk 2077",
        description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in Night City. Customize your character and playstyle.",
        longDescription: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades. The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?",
        price: 59.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GbeGqyYp09n2JEwRgrD6clTv4DJnm0zoGhfoV3bzIb64gYiJUSHtoLs&s=10",
        platform: "PC",
        category: "Accion",
        status: "trending",
        trailer: "https://www.youtube.com/embed/8X2kIfS6fb8",
        hoverVideo: "https://cdn.akamai.steamstatic.com/steam/apps/256931557/movie480_vp9.webm",
        score: 9.1,
        features: ["Mundo Abierto", "RPG", "Primera Persona", "Sci-Fi", "Gran Historia"],
        metadata: {
            developer: "CD PROJEKT RED",
            publisher: "CD PROJEKT RED",
            releaseDate: "10 Dic 2020",
            genre: "RPG, Accion"
        },
        requirements: {
            minimum: {
                os: "Windows 10 64-bit",
                processor: "Intel Core i5-3570K or AMD FX-8310",
                memory: "8 GB RAM",
                graphics: "NVIDIA GeForce GTX 970 or AMD Radeon RX 470",
                storage: "70 GB (SSD recommended)"
            },
            recommended: {
                os: "Windows 10 64-bit",
                processor: "Intel Core i7-4790 or AMD Ryzen 3 3200G",
                memory: "12 GB RAM",
                graphics: "NVIDIA GeForce GTX 1060 6GB or AMD Radeon V1 II",
                storage: "70 GB SSD"
            }
        },
        news: [
            { title: "Actualización 2.1 ya disponible", date: "5 Dic 2023", image: "https://vms-static.cdprojektred.com/news/3840/large/97960677846549.jpg" },
            { title: "Cyberpunk 2077: Phantom Liberty", date: "26 Sep 2023", image: "https://vms-static.cdprojektred.com/news/3840/large/97960677846549.jpg" }
        ]
    },
    {
        id: 2,
        title: "Elden Ring",
        description: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring.",
        longDescription: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. In the Lands Between ruled by Queen Marika the Eternal, the Elden Ring, the source of the Erdtree, has been shattered. Marika's offspring, demigods all, claimed the shards of the Elden Ring known as the Great Runes, and the mad taint of their newfound strength triggered a war: The Shattering. A war that meant abandonment by the Greater Will.",
        price: 49.99,
        discount: 15,
        image: "https://i1.ruliweb.com/img/23/01/01/1856a9e5756534fb6.jpg",
        platform: "Playstation",
        category: "Aventura",
        status: "best_seller",
        trailer: "https://www.youtube.com/embed/E3Huy2cdih0",
        hoverVideo: "https://cdn.akamai.steamstatic.com/steam/apps/256872051/movie480_vp9.webm",
        score: 9.5,
        features: ["Dificil", "Souls-like", "Exploración", "Fantasía Oscura"],
        metadata: {
            developer: "FromSoftware Inc.",
            publisher: "Bandai Namco Entertainment",
            releaseDate: "25 Feb 2022",
            genre: "Accion, RPG"
        },
        requirements: {
            minimum: {
                os: "Windows 10",
                processor: "Intel Core i5-8400 or AMD Ryzen 3 3300X",
                memory: "12 GB RAM",
                graphics: "NVIDIA GeForce GTX 1060 3GB or AMD Radeon RX 580 4GB",
                storage: "60 GB"
            },
            recommended: {
                os: "Windows 11/10",
                processor: "Intel Core i7-8700K or AMD Ryzen 5 3600X",
                memory: "16 GB RAM",
                graphics: "NVIDIA GeForce GTX 1070 8GB or AMD Radeon RX Vega 56 8GB",
                storage: "60 GB"
            }
        },
        news: [
            { title: "Shadow of the Erdtree anunciado", date: "21 Feb 2024", image: "https://image.api.playstation.com/vulcan/ap/rnd/202402/1614/3ccfba714a6015b6d7ea6b251a37c02b11e2f3d53b6f9d78.png" }
        ]
    },
    {
        id: 3,
        title: "Need for Speed Unbound",
        description: "Race against time, outsmart the cops, and take on weekly qualifiers.",
        longDescription: "Race against time, outsmart the cops, and take on weekly qualifiers to reach The Grand, Lakeshore's ultimate street racing challenge. Pack your garage with precision-tuned, custom rides and light up the streets with your style, exclusive fits, and a vibrant global soundtrack that bumps in every corner of the world.",
        price: 39.99,
        discount: 50,
        image: "https://m.media-amazon.com/images/M/MV5BNThlMTc1Y2EtY2IwYS00YzdhLWJjNjItOTk1MGU4OWFlNDFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        platform: "PC",
        category: "Arcade",
        status: "recent",
        trailer: "https://www.youtube.com/embed/H2Y8XCe7F9E",
        hoverVideo: "https://cdn.akamai.steamstatic.com/steam/apps/256917631/movie480_vp9.webm",
        score: 7.8,
        features: ["Carreras", "Personalización", "Persecuciones Policiales"],
        metadata: {
            developer: "Criterion Games",
            publisher: "Electronic Arts",
            releaseDate: "2 Dic 2022",
            genre: "Carreras, Arcade"
        },
        requirements: {
            minimum: {
                os: "Windows 10 64-bit",
                processor: "Intel Core i5-8600 or AMD Ryzen 5 2600",
                memory: "8 GB RAM",
                graphics: "NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 570",
                storage: "50 GB"
            },
            recommended: {
                os: "Windows 10 64-bit",
                processor: "Intel Core i7-8700 or AMD Ryzen 5 3600",
                memory: "16 GB RAM",
                graphics: "NVIDIA GeForce RTX 2070 or AMD Radeon RX 6700 XT",
                storage: "50 GB"
            }
        },
        news: []
    },
    {
        id: 5,
        title: "GTA V",
        description: "When a young street hustler, a retired bank robber and a terrifying psychopath find themselves.",
        longDescription: "Experience GTA Online, a dynamic and ever-evolving online universe for up to 30 players, where you can rise from street-level hustler to become a kingpin of your own criminal empire. Enjoy new high-performance vehicle upgrades and improvements like the Career Builder as well as all GTA Online gameplay upgrades, expansions, and content released since launch, ready to enjoy solo or with friends.",
        price: 29.99,
        discount: 60,
        image: "https://store-images.s-microsoft.com/image/apps.32034.13531476541866969.9b83558e-4d72-4ee5-9214-3504337b32f8.172b1ccc-6da2-44b4-828d-7cda66b22f85",
        platform: "Xbox",
        category: "Accion",
        status: "best_seller",
        trailer: "https://www.youtube.com/embed/QkkoHAzjnUs",
        hoverVideo: "https://cdn.akamai.steamstatic.com/steam/apps/256658589/movie480_vp9.webm",
        score: 9.7,
        features: ["Mundo Abierto", "Multijugador", "Crimen", "Tercera Persona"],
        metadata: {
            developer: "Rockstar North",
            publisher: "Rockstar Games",
            releaseDate: "14 Abr 2015",
            genre: "Accion, Aventura"
        },
        requirements: {
            minimum: {
                os: "Windows 10 64 Bit",
                processor: "Intel Core 2 Quad CPU Q6600 @ 2.40GHz / AMD Phenom 9850 Quad-Core Processor @ 2.5GHz",
                memory: "4 GB RAM",
                graphics: "NVIDIA 9800 GT 1GB / AMD HD 4870 1GB",
                storage: "72 GB"
            },
            recommended: {
                os: "Windows 10 64 Bit",
                processor: "Intel Core i5 3470 @ 3.2GHz / AMD X8 FX-8350 @ 4GHz",
                memory: "8 GB RAM",
                graphics: "NVIDIA GTX 660 2GB / AMD HD 7870 2GB",
                storage: "72 GB"
            }
        },
        news: []
    },
    {
        id: 6,
        title: "Hogwarts Legacy",
        description: "Hogwarts Legacy is an immersive, open-world action RPG.",
        longDescription: "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. For the first time, experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart. Now you can take control of the action and be at the center of your own adventure in the wizarding world. Your legacy is what you make of it. Live the Unwritten.",
        price: 59.99,
        discount: 10,
        image: "https://store-images.s-microsoft.com/image/apps.6642.13814785456466922.0fef76f8-710d-4aca-b42f-c45e536f8d2b.012a86fe-8506-4e46-8e5a-1ec47e011f62",
        platform: "Playstation",
        category: "Aventura",
        status: "trending",
        trailer: "https://www.youtube.com/embed/1O6Q7DcGu6c",
        score: 8.8,
        features: ["Magia", "Harry Potter", "Mundo Abierto", "RPG"],
        metadata: {
            developer: "Avalanche Software",
            publisher: "Warner Bros. Games",
            releaseDate: "10 Feb 2023",
            genre: "RPG, Aventura"
        },
        news: []
    },
    {
        id: 7,
        title: "Street Fighter 6",
        description: "Street Fighter 6 is the next evolution of the Street Fighter series.",
        longDescription: "Powered by Capcom’s proprietary RE ENGINE, the Street Fighter 6 experience spans across three distinct game modes featuring World Tour, Fighting Ground and Battle Hub. Your Path to Becoming a World Warrior Starts Here. Your Moment. Your Fight.",
        price: 59.99,
        discount: 5,
        image: "https://cdn.displate.com/artwork/857x1200/2023-10-27/9b8f9abfe4adf2f84978898519681fb2_cc17b5d09db02e44d6ceb74acab8f3b6.jpg",
        platform: "PC",
        category: "Arcade",
        status: "recent",
        trailer: "https://www.youtube.com/embed/6iX6R7H8K64",
        score: 8.9,
        features: ["Lucha", "Competitivo", "Arcade", "2D/3D"],
        metadata: {
            developer: "Capcom",
            publisher: "Capcom",
            releaseDate: "2 Jun 2023",
            genre: "Lucha"
        },
        news: []
    },
    {
        id: 8,
        title: "Star Wars Jedi: Survivor",
        description: "The story of Cal Kestis continues in Star Wars Jedi: Survivor™.",
        longDescription: "The story of Cal Kestis continues in Star Wars Jedi: Survivor™, a third-person, galaxy-spanning, action-adventure game from Respawn Entertainment, developed in collaboration with Lucasfilm Games. This narratively driven, single-player title picks up 5 years after the events of Star Wars Jedi: Fallen Order™ and follows Cal’s increasingly desperate fight as the galaxy descends further into darkness.",
        price: 69.99,
        discount: 20,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202304/1016/d3301d4f55e2eb38bfe3b5cb3274fcc601902eacbd947b6a.png",
        platform: "Xbox",
        category: "Accion",
        status: "upcoming",
        trailer: "https://www.youtube.com/embed/VRaobDJjiec",
        score: 8.6,
        features: ["Star Wars", "Accion", "Aventura", "Souls-lite"],
        metadata: {
            developer: "Respawn Entertainment",
            publisher: "Electronic Arts",
            releaseDate: "28 Abr 2023",
            genre: "Accion, Aventura"
        },
        news: []
    },

    // --- RECARGAS ---
    {
        id: 101,
        title: "Free Fire - 500 Diamantes",
        description: "Recarga inmediata de 500 diamantes para tu cuenta de Free Fire.",
        longDescription: "Recarga diamantes para Free Fire de manera rápida y segura. Con 500 diamantes podrás comprar el Pase Élite, personajes, skins y mucho más. Entrega inmediata mediante ID de jugador.",
        price: 35.00,
        discount: 0,
        image: "https://gamescenter.pe/wp-content/uploads/2024/12/Free-Fire-Recarga-de-Diamantes.webp",
        platform: "Mobile",
        category: "Recarga",
        status: "trending",
        score: 9.9,
        features: ["Entrega Inmediata", "Seguro", "Mobile"],
        metadata: {
            developer: "Garena",
            publisher: "Garena",
            releaseDate: "N/A",
            genre: "Recarga, Mobile"
        },
        news: []
    }
];

export default games;

