export const currentMovies = [
  {
    rank: 1,
    title: "The Shawshank Redemption",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "9.3",
    id: "top1",
    year: 1994,
    genre: ["Drama"],
    // ...ostali podaci
  },
  {
    rank: 2,
    title: "The Godfather",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
    rating: "9.2",
    id: "top2",
    year: 1972,
    genre: ["Crime", "Drama"],
    // ...ostali podaci
  },
  {
    rank: 15,
    title: "Star Wars: Episode V - The Empire Strikes Back",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.7",
    id: "top15",
    year: 1980,
    image:
      "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    description:
      "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
    trailer: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    genre: ["Action", "Adventure", "Fantasy"],
    director: ["Irvin Kershner"],
    writers: [
      "Leigh Brackett (screenplay by)",
      "Lawrence Kasdan (screenplay by)",
      "George Lucas (story by)",
    ],
    imdbid: "tt0080684",
  },
  {
    rank: 52,
    title: "Cinema Paradiso",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top52",
    year: 1988,
    image:
      "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    description:
      "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist.",
    trailer: "https://www.youtube.com/embed/C2-GX0Tltgw",
    genre: ["Drama", "Romance"],
    director: ["Giuseppe Tornatore"],
    writers: [
      "Giuseppe Tornatore (story)",
      "Vanna Paoli (collaborating writer)",
    ],
    imdbid: "tt0095765",
  },
  {
    rank: 85,
    title: "Toy Story 3",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_UY67_CR1,0,45,67_AL_.jpg",
    rating: "8.3",
    id: "top85",
    year: 2010,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_QL75_UY562_CR9,0,380,562_.jpg",
    description:
      "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
    trailer: "https://www.youtube.com/embed/JcpWXaA2qeg",
    genre: ["Animation", "Adventure", "Comedy"],
    director: ["Lee Unkrich"],
    writers: [
      "John Lasseter (story by)",
      "Andrew Stanton (story by)",
      "Lee Unkrich (story by)",
    ],
    imdbid: "tt0435761",
  },
  {
    rank: 91,
    title: "Eternal Sunshine of the Spotless Mind",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.3",
    id: "top91",
    year: 2004,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    description:
      "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    trailer: "https://www.youtube.com/embed/07-QBnEkgXU",
    genre: ["Drama", "Romance", "Sci-Fi"],
    director: ["Michel Gondry"],
    writers: [
      "Charlie Kaufman (story)",
      "Michel Gondry (story)",
      "Pierre Bismuth (story)",
    ],
    imdbid: "tt0338013",
  },
  {
    rank: 43,
    title: "Casablanca",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top43",
    year: 1942,
    image:
      "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UX380_CR0,5,380,562_.jpg",
    description:
      "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
    trailer: "https://www.youtube.com/embed/BkL9l7qovsE",
    genre: ["Drama", "Romance", "War"],
    director: ["Michael Curtiz"],
    writers: [
      "Julius J. Epstein (screenplay)",
      "Philip G. Epstein (screenplay)",
      "Howard Koch (screenplay)",
    ],
    imdbid: "tt0034583",
  },
  {
    rank: 43,
    title: "Casablanca",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top43",
    year: 1942,
    image:
      "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UX380_CR0,5,380,562_.jpg",
    description:
      "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
    trailer: "https://www.youtube.com/embed/BkL9l7qovsE",
    genre: ["Drama", "Romance", "War"],
    director: ["Michael Curtiz"],
    writers: [
      "Julius J. Epstein (screenplay)",
      "Philip G. Epstein (screenplay)",
      "Howard Koch (screenplay)",
    ],
    imdbid: "tt0034583",
  },
  {
    rank: 33,
    title: "The Pianist",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR2,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top33",
    year: 2002,
    image:
      "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR14,0,380,562_.jpg",
    description:
      "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    trailer: "https://www.youtube.com/embed/BFwGqLa_oAo",
    genre: ["Biography", "Drama", "Music"],
    director: ["Roman Polanski"],
    writers: [
      "Ronald Harwood (screenplay by)",
      "Wladyslaw Szpilman (based on the book by)",
    ],
    imdbid: "tt0253474",
  },
  {
    rank: 35,
    title: "Léon: The Professional",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top35",
    year: 1994,
    image:
      "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    description:
      "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
    trailer: "https://www.youtube.com/embed/jawVxq1Iyl0",
    genre: ["Action", "Crime", "Drama"],
    director: ["Luc Besson"],
    writers: ["Luc Besson"],
    imdbid: "tt0110413",
  },
  {
    rank: 37,
    title: "Gladiator",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top37",
    year: 1994,
    image:
      "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    trailer: "https://www.youtube.com/embed/uvbavW31adA",
    genre: ["Action", "Adventure", "Drama"],
    director: ["Ridley Scott"],
    writers: [
      "David Franzoni (story)",
      "John Logan (screenplay)",
      "William Nicholson (screenplay)",
    ],
    imdbid: "tt0172495",
  },
  {
    rank: 39,
    title: "The Departed",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top39",
    year: 1998,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_QL75_UY562_CR0,0,380,562_.jpg",
    description:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    trailer: "https://www.youtube.com/embed/iojhqm0JTW4",
    genre: ["Crime", "Drama", "Thriller"],
    director: ["Martin Scorsese"],
    writers: [
      "William Monahan (screenplay)",
      "Alan Mak (2002 screenplay Mou gaan dou)",
      "Felix Chong (2002 screenplay Mou gaan dou)",
    ],
    imdbid: "tt0407887",
  },
  {
    rank: 15,
    title: "Star Wars: Episode V - The Empire Strikes Back",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.7",
    id: "top15",
    year: 1980,
    image:
      "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    description:
      "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
    trailer: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    genre: ["Action", "Adventure", "Fantasy"],
    director: ["Irvin Kershner"],
    writers: [
      "Leigh Brackett (screenplay by)",
      "Lawrence Kasdan (screenplay by)",
      "George Lucas (story by)",
    ],
    imdbid: "tt0080684",
  },
];
