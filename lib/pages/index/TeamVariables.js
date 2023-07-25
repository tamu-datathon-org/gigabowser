const execColor = "#FDEFEF";
const designColor = "#F4DFD0";
const logisticsColor = "#DAD0C2";
const devColor = "#CDBBA7";

const TeamVariables = {
  memberInfo: [{
    name: "Apsara Mitra",
    position: "President",
    links: {
      "fa-linkedin": "https://www.linkedin.com/in/apsaramitra/",
      "fa-instagram": "https://www.instagram.com/apsaramitra/"
    },
    weapon: "candlestick",
    fact: "I have been to 30+ countries",
    words: "nice bamboozled foodie",
    color: execColor
  }, {
    name: "Jack Sebastian",
    position: "Vice President",
    links: {
      "fa-instagram": "https://www.instagram.com/jacksebastian17/",
      "fa-linkedin": "https://www.linkedin.com/in/jacksebastian/",
      "fa-github-square": "https://github.com/jacksebastian17"
    },
    weapon: "candlestick",
    fact: "I hate red bull",
    words: "outgoing funny clever",
    color: execColor
  }, {
    name: "Abby Xu",
    position: "Design Lead",
    links: {
      "fa-linkedin": "http://www.linkedin.com/in/abbyxu",
      "fa-github-square": "https://github.com/Abby-xu",
      "fa-instagram": "https://www.instagram.com/abby.xu_"
    },
    weapon: "dagger",
    fact: "I watched Person of Interest three times in high school",
    words: "boba-addict pluviophile happy-go-lucky",
    color: designColor
  }, {
    name: "Kelsie Sheridan",
    position: "Design",
    links: {},
    weapon: "lead-pipe",
    fact: "I love bugs (especially spiders and bees) and snakes",
    words: "Artsy opinionated introvert",
    color: designColor
  }, {
    name: "Mualla Argin",
    position: "Design",
    links: {
      "fa-linkedin": "http://linkedin.com/in/muallaargin/"
    },
    weapon: "dagger",
    fact: "I once found a snake in my boot like woody from toy story",
    words: "energetic joyous curious",
    color: designColor
  }, {
    name: "Jordan Hassmann",
    position: "Design",
    links: {
      "fa-linkedin": "https://www.linkedin.com/in/jordan-hassmann-7694a0199",
      "fa-instagram": "https://www.instagram.com/jordan.hassmann/"
    },
    weapon: "lead-pipe",
    fact: "I drive with 2 feet",
    words: "meticulous resourceful jaunty",
    color: designColor
  }, {
    name: "Gaby Wu",
    position: "Logistics Lead",
    links: {
      "fa-linkedin": "http://www.linkedin.com/in/gabriella-wu-624573191/",
      "fa-instagram": "https://www.instagram.com/gaby_wooo86/"
    },
    weapon: "candlestick",
    fact: "I've played the oboe since third grade",
    words: "lazy fake gamer",
    color: logisticsColor
  }, {
    name: "Emma Ong",
    position: "Logistics",
    links: {
      "fa-linkedin": "https://www.linkedin.com/in/emma-ong"
    },
    weapon: "lead-pipe",
    fact: "I love dancing hip hop and placed with my dance team at a competition",
    words: "bean with dreams",
    color: logisticsColor
  }, {
    name: "Eric Lee",
    position: "Logistics",
    links: {
      "fa-linkedin": "https://www.linkedin.com/in/eric-lee-9558a21bb/"
    },
    weapon: "dagger",
    fact: 'Once held a Puyo Puyo Tetris Record for "Longest Marathon Game"',
    words: "driven passionate pokemon-addict",
    color: logisticsColor
  }, {
    name: "Ronald Lee",
    position: "Logistics",
    links: {
      "fa-globe": "https://leeroddy17.github.io/",
      "fa-linkedin": "https://www.linkedin.com/in/ronaldlee7/",
      "fa-github-square": "https://github.com/leeroddy17",
      "fa-instagram": "https://www.instagram.com/ronald_lee7/"
    },
    weapon: "dagger",
    fact: "My dream job is to work at a National Park",
    words: "spontaneous frivolous inquisitive",
    color: logisticsColor
  }, {
    name: "Luis Martinez",
    position: "Logistics",
    links: {
      "fa-linkedin": "https://www.linkedin.com/in/luis-martinez-morales-8a761b16a/",
      "fa-instagram": "https://www.instagram.com/luismartinez_morales/"
    },
    weapon: "revolver",
    fact: "I was born in Mexico City",
    words: "optimistic talkative easygoing",
    color: logisticsColor
  }, {
    name: "Shri Mathavan",
    position: "Logistics",
    links: {
      "fa-linkedin": "https://www.linkedin.com/in/shri-mathavan/",
      "fa-instagram": "https://www.instagram.com/gluten_shri/?hl=en"
    },
    weapon: "lead-pipe",
    fact: "I've owned water buffalos",
    words: "dog-mom outdoorsy healthy",
    color: logisticsColor
  }, {
    name: "Anna Huang",
    position: "Logistics",
    links: {
      "fa-linkedin": "https://www.linkedin.com/in/annahuangg/"
    },
    weapon: "dagger",
    fact: "I'm a published author",
    words: "cool interesting person",
    color: logisticsColor
  }, {
    name: "Jenna Jung",
    position: "Logistics",
    links: {
      "fa-linkedin": "https://www.linkedin.com/in/jenna-jung/",
      "fa-instagram": "https://www.instagram.com/y.s.__.jung/"
    },
    weapon: "candlestick",
    fact: "My favorite season is spring",
    words: "adventurous optimistic flexible",
    color: logisticsColor
  }, {
    name: "Dan Abreo",
    position: "Dev Lead",
    links: {
      "fa-linkedin": "https://www.linkedin.com/in/danabreo",
      "fa-github-square": "https://github.com/danabreo"
    },
    weapon: "wrench",
    fact: "I have 3 siblings who are also Aggies",
    words: "humble detail-oriented dabbler",
    color: devColor
  }, {
    name: "Rishabh Tatia",
    position: "Dev",
    links: {
      "fa-globe": "https://tatiaris.com/",
      "fa-github-square": "https://github.com/tatiaris"
    },
    weapon: "dagger",
    fact: "I love playing rocket league",
    words: "foodie traveler gamer",
    color: devColor
  }, {
    name: "Samarth Dave",
    position: "Dev",
    links: {
      "fa-instagram": "https://www.instagram.com/samarthdave"
    },
    weapon: "candlestick",
    fact: "I've been to the DMZ in N. Korea",
    words: "adventurous",
    color: devColor
  }, {
    name: "Gregory Petri",
    position: "Dev",
    links: {
      "fa-linkedin": "https://www.linkedin.com/in/gregory-petri/",
      "fa-github-square": "https://github.com/gcpetri",
      "fa-instagram": "https://www.instagram.com/gregorycpetri/",
      "fa-spotify": "https://open.spotify.com/user/idyan9qq9n7t5lefa2hr4s96n?si=384556ee7330406a"
    },
    weapon: "rope",
    fact: "I've been on the roof of the Vatican at Sunrise, looking over the city of Rome",
    words: "tall artistic coffee-addict",
    color: devColor
  }, {
    name: "Jaesun Park",
    position: "Dev",
    links: {},
    weapon: "dagger",
    fact: "I play the cello",
    words: "energetic shy sincere",
    color: devColor
  }, {
    name: "Shreyes Kaliyur",
    position: "Dev",
    links: {
      "fa-linkedin": "https://www.linkedin.com/in/shreyesk/",
      "fa-github-square": "https://github.com/shreyesk",
      "/static/img/icons/dev-post.svg": "https://devpost.com/kaliyur-shreyes"
    },
    weapon: "candlestick",
    fact: "I've been to the Colosseum",
    words: "amiable immersed optimistic",
    color: devColor
  }, {
    name: "Christopher Vu",
    position: "Dev",
    links: {
      "fa-linkedin": "https://www.linkedin.com/in/christopher-vu-91259b22a/"
    },
    weapon: "dagger",
    fact: "I can speak 3 languages",
    words: "genuine level-headed witty",
    color: devColor
  }]
};

module.exports = TeamVariables;