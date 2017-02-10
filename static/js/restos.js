var res = alasql('SELECT *, LCASE(album) AS lalbum, LCASE(title) as ltitle FROM ? \
     ORDER BY lalbum DESC, disk, ltrack, ltitle',[library]);



{ "title": "40 Years Later",       "album": "Tears of Steel", "year": 2012, "track": 1, "disk": 1, "time": 31  },
{ "title": "The Dome",             "album": "Tears of Steel", "year": 2012, "track": 2, "disk": 1, "time": 311 },
{ "title": "The Battle",           "album": "Tears of Steel", "year": 2012, "track": 3, "disk": 1, "time": 123 },
{ "title": "End Credits",          "album": "Tears of Steel", "year": 2012, "track": 4, "disk": 1, "time": 103 },
{ "title": "The Wires",           "album": "Elephants Dream", "year": 2006, "track": 1, "disk": 1, "time": 75  },
{ "title": "Typewriter Dance",    "album": "Elephants Dream", "year": 2006, "track": 2, "disk": 1, "time": 70  },
{ "title": "The Safest Place",    "album": "Elephants Dream", "year": 2006, "track": 3, "disk": 1, "time": 45  },
{ "title": "Emo Creates",         "album": "Elephants Dream", "year": 2006, "track": 4, "disk": 1, "time": 60  },
{ "title": "End Title",           "album": "Elephants Dream", "year": 2006, "track": 5, "disk": 1, "time": 91  },
{ "title": "Teaser Music",        "album": "Elephants Dream", "year": 2006, "track": 6, "disk": 1, "time": 75  },
{ "title": "Ambience",            "album": "Elephants Dream", "year": 2006, "track": 7, "disk": 1, "time": 110 },
{ "title": "Snow Fight",                   "album": "Sintel", "year": 2010, "track": 1, "disk": 1, "time": 107 },
{ "title": "Finding Scales / Chicken Run", "album": "Sintel", "year": 2010, "track": 2, "disk": 1, "time": 107 },
{ "title": "The Ziggurat",                 "album": "Sintel", "year": 2010, "track": 3, "disk": 1, "time": 78  },
{ "title": "Expedition",                   "album": "Sintel", "year": 2010, "track": 4, "disk": 1, "time": 93  },
{ "title": "Dragon Blood Tree",            "album": "Sintel", "year": 2010, "track": 5, "disk": 1, "time": 47  },
{ "title": "Cave Fight / Lament",          "album": "Sintel", "year": 2010, "track": 6, "disk": 1, "time": 145 },
{ "title": "I Move On (Sintel's Song)",    "album": "Sintel", "year": 2010, "track": 7, "disk": 1, "time": 169 },
{ "title": "Circling Dragons",             "album": "Sintel", "year": 2010, "track": 8, "disk": 1, "time": 28  },
{ "title": "Trailer Music",                "album": "Sintel", "year": 2010, "track": 9, "disk": 1, "time": 44  }
];
