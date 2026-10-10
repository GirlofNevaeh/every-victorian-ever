export type Question = {
  id: number
  category: string
  question: string
  options: string[]
  answer: number
}

export const quizQuestions: Question[] = [
  {
    "id": 1,
    "category": "People",
    "question": "Who was queen from 1837 to 1901?",
    "options": [
      "Queen Victoria",
      "Prince Albert",
      "Florence Nightingale",
      "Mary Seacole"
    ],
    "answer": 0
  },
  {
    "id": 2,
    "category": "People",
    "question": "What did Queen Victoria do?",
    "options": [
      "She made hospitals cleaner",
      "She was queen from 1837 to 1901",
      "She helped soldiers with food and care",
      "He built bridges, ships, and railways"
    ],
    "answer": 1
  },
  {
    "id": 3,
    "category": "People",
    "question": "Who helped plan the Great Exhibition?",
    "options": [
      "Florence Nightingale",
      "Mary Seacole",
      "Prince Albert",
      "Isambard Kingdom Brunel"
    ],
    "answer": 2
  },
  {
    "id": 4,
    "category": "People",
    "question": "What did Prince Albert do?",
    "options": [
      "She helped soldiers with food and care",
      "He built bridges, ships, and railways",
      "He wrote stories about poor people in cities",
      "He helped plan the Great Exhibition"
    ],
    "answer": 3
  },
  {
    "id": 5,
    "category": "People",
    "question": "Who made hospitals cleaner?",
    "options": [
      "Florence Nightingale",
      "Mary Seacole",
      "Isambard Kingdom Brunel",
      "Charles Dickens"
    ],
    "answer": 0
  },
  {
    "id": 6,
    "category": "People",
    "question": "What did Florence Nightingale do?",
    "options": [
      "He built bridges, ships, and railways",
      "She made hospitals cleaner",
      "He wrote stories about poor people in cities",
      "He studied animals and plants"
    ],
    "answer": 1
  },
  {
    "id": 7,
    "category": "People",
    "question": "Who helped soldiers with food and care?",
    "options": [
      "Isambard Kingdom Brunel",
      "Charles Dickens",
      "Mary Seacole",
      "Charles Darwin"
    ],
    "answer": 2
  },
  {
    "id": 8,
    "category": "People",
    "question": "What did Mary Seacole do?",
    "options": [
      "He wrote stories about poor people in cities",
      "He studied animals and plants",
      "He invented the telephone",
      "She helped soldiers with food and care"
    ],
    "answer": 3
  },
  {
    "id": 9,
    "category": "People",
    "question": "Where was Mary Seacole from?",
    "options": [
      "Jamaica",
      "Scotland",
      "France",
      "Wales"
    ],
    "answer": 0
  },
  {
    "id": 10,
    "category": "People",
    "question": "Who built bridges, ships, and railways?",
    "options": [
      "Charles Dickens",
      "Isambard Kingdom Brunel",
      "Charles Darwin",
      "Alexander Graham Bell"
    ],
    "answer": 1
  },
  {
    "id": 11,
    "category": "People",
    "question": "What did Isambard Kingdom Brunel do?",
    "options": [
      "He studied animals and plants",
      "He invented the telephone",
      "He built bridges, ships, and railways",
      "He linked electricity, magnetism, and light"
    ],
    "answer": 2
  },
  {
    "id": 12,
    "category": "People",
    "question": "Who wrote stories about poor people in cities?",
    "options": [
      "Charles Darwin",
      "Alexander Graham Bell",
      "James Clerk Maxwell",
      "Charles Dickens"
    ],
    "answer": 3
  },
  {
    "id": 13,
    "category": "People",
    "question": "What did Charles Dickens do?",
    "options": [
      "He wrote stories about poor people in cities",
      "He invented the telephone",
      "He linked electricity, magnetism, and light",
      "He made surgery safer by keeping wounds clean"
    ],
    "answer": 0
  },
  {
    "id": 14,
    "category": "People",
    "question": "Who studied animals and plants?",
    "options": [
      "Alexander Graham Bell",
      "Charles Darwin",
      "James Clerk Maxwell",
      "Joseph Lister"
    ],
    "answer": 1
  },
  {
    "id": 15,
    "category": "People",
    "question": "What did Charles Darwin do?",
    "options": [
      "He linked electricity, magnetism, and light",
      "He made surgery safer by keeping wounds clean",
      "He studied animals and plants",
      "He traveled in Africa"
    ],
    "answer": 2
  },
  {
    "id": 16,
    "category": "People",
    "question": "Who invented the telephone?",
    "options": [
      "James Clerk Maxwell",
      "Joseph Lister",
      "David Livingstone",
      "Alexander Graham Bell"
    ],
    "answer": 3
  },
  {
    "id": 17,
    "category": "People",
    "question": "What did Alexander Graham Bell do?",
    "options": [
      "He invented the telephone",
      "He made surgery safer by keeping wounds clean",
      "He traveled in Africa",
      "She helped children in Africa"
    ],
    "answer": 0
  },
  {
    "id": 18,
    "category": "Scotland",
    "question": "Where was Alexander Graham Bell from?",
    "options": [
      "France",
      "Scotland",
      "Jamaica",
      "Wales"
    ],
    "answer": 1
  },
  {
    "id": 19,
    "category": "People",
    "question": "Who linked electricity, magnetism, and light?",
    "options": [
      "Joseph Lister",
      "David Livingstone",
      "James Clerk Maxwell",
      "Mary Slessor"
    ],
    "answer": 2
  },
  {
    "id": 20,
    "category": "People",
    "question": "What did James Clerk Maxwell do?",
    "options": [
      "He traveled in Africa",
      "She helped children in Africa",
      "He wrote Treasure Island",
      "He linked electricity, magnetism, and light"
    ],
    "answer": 3
  },
  {
    "id": 21,
    "category": "Scotland",
    "question": "Where was James Clerk Maxwell from?",
    "options": [
      "Scotland",
      "France",
      "Jamaica",
      "Wales"
    ],
    "answer": 0
  },
  {
    "id": 22,
    "category": "People",
    "question": "Who made surgery safer by keeping wounds clean?",
    "options": [
      "David Livingstone",
      "Joseph Lister",
      "Mary Slessor",
      "Robert Louis Stevenson"
    ],
    "answer": 1
  },
  {
    "id": 23,
    "category": "People",
    "question": "What did Joseph Lister do?",
    "options": [
      "She helped children in Africa",
      "He wrote Treasure Island",
      "He made surgery safer by keeping wounds clean",
      "She made the Peter Rabbit books"
    ],
    "answer": 2
  },
  {
    "id": 24,
    "category": "People",
    "question": "Who traveled in Africa?",
    "options": [
      "Mary Slessor",
      "Robert Louis Stevenson",
      "Beatrix Potter",
      "David Livingstone"
    ],
    "answer": 3
  },
  {
    "id": 25,
    "category": "People",
    "question": "What did David Livingstone do?",
    "options": [
      "He traveled in Africa",
      "He wrote Treasure Island",
      "She made the Peter Rabbit books",
      "He helped start the Labour Party"
    ],
    "answer": 0
  },
  {
    "id": 26,
    "category": "Scotland",
    "question": "Where was David Livingstone from?",
    "options": [
      "France",
      "Scotland",
      "Jamaica",
      "Wales"
    ],
    "answer": 1
  },
  {
    "id": 27,
    "category": "People",
    "question": "Who helped children in Africa?",
    "options": [
      "Robert Louis Stevenson",
      "Beatrix Potter",
      "Mary Slessor",
      "Keir Hardie"
    ],
    "answer": 2
  },
  {
    "id": 28,
    "category": "People",
    "question": "What did Mary Slessor do?",
    "options": [
      "She made the Peter Rabbit books",
      "He helped start the Labour Party",
      "He built the Rocket locomotive",
      "She helped children in Africa"
    ],
    "answer": 3
  },
  {
    "id": 29,
    "category": "Scotland",
    "question": "Where was Mary Slessor from?",
    "options": [
      "Scotland",
      "France",
      "Jamaica",
      "Wales"
    ],
    "answer": 0
  },
  {
    "id": 30,
    "category": "People",
    "question": "Who wrote Treasure Island?",
    "options": [
      "Beatrix Potter",
      "Robert Louis Stevenson",
      "Keir Hardie",
      "George Stephenson"
    ],
    "answer": 1
  },
  {
    "id": 31,
    "category": "People",
    "question": "What did Robert Louis Stevenson do?",
    "options": [
      "He helped start the Labour Party",
      "He built the Rocket locomotive",
      "He wrote Treasure Island",
      "He started the Penny Post"
    ],
    "answer": 2
  },
  {
    "id": 32,
    "category": "Scotland",
    "question": "Where was Robert Louis Stevenson from?",
    "options": [
      "France",
      "Jamaica",
      "Wales",
      "Scotland"
    ],
    "answer": 3
  },
  {
    "id": 33,
    "category": "People",
    "question": "Who made the Peter Rabbit books?",
    "options": [
      "Beatrix Potter",
      "Keir Hardie",
      "George Stephenson",
      "Rowland Hill"
    ],
    "answer": 0
  },
  {
    "id": 34,
    "category": "People",
    "question": "What did Beatrix Potter do?",
    "options": [
      "He built the Rocket locomotive",
      "She made the Peter Rabbit books",
      "He started the Penny Post",
      "He built London's new sewers"
    ],
    "answer": 1
  },
  {
    "id": 35,
    "category": "People",
    "question": "Who helped start the Labour Party?",
    "options": [
      "George Stephenson",
      "Rowland Hill",
      "Keir Hardie",
      "Joseph Bazalgette"
    ],
    "answer": 2
  },
  {
    "id": 36,
    "category": "People",
    "question": "What did Keir Hardie do?",
    "options": [
      "He started the Penny Post",
      "He built London's new sewers",
      "She was the first British woman to qualify as a doctor",
      "He helped start the Labour Party"
    ],
    "answer": 3
  },
  {
    "id": 37,
    "category": "Scotland",
    "question": "Where was Keir Hardie from?",
    "options": [
      "Scotland",
      "France",
      "Jamaica",
      "Wales"
    ],
    "answer": 0
  },
  {
    "id": 38,
    "category": "People",
    "question": "Who built the Rocket locomotive?",
    "options": [
      "Rowland Hill",
      "George Stephenson",
      "Joseph Bazalgette",
      "Elizabeth Garrett Anderson"
    ],
    "answer": 1
  },
  {
    "id": 39,
    "category": "People",
    "question": "What did George Stephenson do?",
    "options": [
      "He built London's new sewers",
      "She was the first British woman to qualify as a doctor",
      "He built the Rocket locomotive",
      "She thought about early computers"
    ],
    "answer": 2
  },
  {
    "id": 40,
    "category": "People",
    "question": "Who started the Penny Post?",
    "options": [
      "Joseph Bazalgette",
      "Elizabeth Garrett Anderson",
      "Ada Lovelace",
      "Rowland Hill"
    ],
    "answer": 3
  },
  {
    "id": 41,
    "category": "People",
    "question": "What did Rowland Hill do?",
    "options": [
      "He started the Penny Post",
      "She was the first British woman to qualify as a doctor",
      "She thought about early computers",
      "He designed wallpaper and books"
    ],
    "answer": 0
  },
  {
    "id": 42,
    "category": "People",
    "question": "Who built London's new sewers?",
    "options": [
      "Elizabeth Garrett Anderson",
      "Joseph Bazalgette",
      "Ada Lovelace",
      "William Morris"
    ],
    "answer": 1
  },
  {
    "id": 43,
    "category": "People",
    "question": "What did Joseph Bazalgette do?",
    "options": [
      "She thought about early computers",
      "He designed wallpaper and books",
      "He built London's new sewers",
      "He wrote Alice's Adventures in Wonderland"
    ],
    "answer": 2
  },
  {
    "id": 44,
    "category": "People",
    "question": "Who was the first British woman to qualify as a doctor?",
    "options": [
      "Ada Lovelace",
      "William Morris",
      "Lewis Carroll",
      "Elizabeth Garrett Anderson"
    ],
    "answer": 3
  },
  {
    "id": 45,
    "category": "People",
    "question": "What did Elizabeth Garrett Anderson do?",
    "options": [
      "She was the first British woman to qualify as a doctor",
      "He designed wallpaper and books",
      "He wrote Alice's Adventures in Wonderland",
      "She wrote Jane Eyre"
    ],
    "answer": 0
  },
  {
    "id": 46,
    "category": "People",
    "question": "Who thought about early computers?",
    "options": [
      "William Morris",
      "Ada Lovelace",
      "Lewis Carroll",
      "Charlotte Bronte"
    ],
    "answer": 1
  },
  {
    "id": 47,
    "category": "People",
    "question": "What did Ada Lovelace do?",
    "options": [
      "He wrote Alice's Adventures in Wonderland",
      "She wrote Jane Eyre",
      "She thought about early computers",
      "She wrote Wuthering Heights"
    ],
    "answer": 2
  },
  {
    "id": 48,
    "category": "People",
    "question": "Who designed wallpaper and books?",
    "options": [
      "Lewis Carroll",
      "Charlotte Bronte",
      "Emily Bronte",
      "William Morris"
    ],
    "answer": 3
  },
  {
    "id": 49,
    "category": "People",
    "question": "What did William Morris do?",
    "options": [
      "He designed wallpaper and books",
      "She wrote Jane Eyre",
      "She wrote Wuthering Heights",
      "He was a poet Queen Victoria liked"
    ],
    "answer": 0
  },
  {
    "id": 50,
    "category": "People",
    "question": "Who wrote Alice's Adventures in Wonderland?",
    "options": [
      "Charlotte Bronte",
      "Lewis Carroll",
      "Emily Bronte",
      "Alfred Tennyson"
    ],
    "answer": 1
  },
  {
    "id": 51,
    "category": "People",
    "question": "What did Lewis Carroll do?",
    "options": [
      "She wrote Wuthering Heights",
      "He was a poet Queen Victoria liked",
      "He wrote Alice's Adventures in Wonderland",
      "He studied electricity and magnets"
    ],
    "answer": 2
  },
  {
    "id": 52,
    "category": "People",
    "question": "Who wrote Jane Eyre?",
    "options": [
      "Emily Bronte",
      "Alfred Tennyson",
      "Michael Faraday",
      "Charlotte Bronte"
    ],
    "answer": 3
  },
  {
    "id": 53,
    "category": "People",
    "question": "What did Charlotte Bronte do?",
    "options": [
      "She wrote Jane Eyre",
      "He was a poet Queen Victoria liked",
      "He studied electricity and magnets",
      "He worked on heat and electricity"
    ],
    "answer": 0
  },
  {
    "id": 54,
    "category": "People",
    "question": "Who wrote Wuthering Heights?",
    "options": [
      "Alfred Tennyson",
      "Emily Bronte",
      "Michael Faraday",
      "Lord Kelvin"
    ],
    "answer": 1
  },
  {
    "id": 55,
    "category": "People",
    "question": "What did Emily Bronte do?",
    "options": [
      "He studied electricity and magnets",
      "He worked on heat and electricity",
      "She wrote Wuthering Heights",
      "He wrote stories about country life"
    ],
    "answer": 2
  },
  {
    "id": 56,
    "category": "People",
    "question": "Who was a poet Queen Victoria liked?",
    "options": [
      "Michael Faraday",
      "Lord Kelvin",
      "Thomas Hardy",
      "Alfred Tennyson"
    ],
    "answer": 3
  },
  {
    "id": 57,
    "category": "People",
    "question": "What did Alfred Tennyson do?",
    "options": [
      "He was a poet Queen Victoria liked",
      "He worked on heat and electricity",
      "He wrote stories about country life",
      "He wrote the Sherlock Holmes stories"
    ],
    "answer": 0
  },
  {
    "id": 58,
    "category": "People",
    "question": "Who studied electricity and magnets?",
    "options": [
      "Lord Kelvin",
      "Michael Faraday",
      "Thomas Hardy",
      "Arthur Conan Doyle"
    ],
    "answer": 1
  },
  {
    "id": 59,
    "category": "People",
    "question": "What did Michael Faraday do?",
    "options": [
      "He wrote stories about country life",
      "He wrote the Sherlock Holmes stories",
      "He studied electricity and magnets",
      "She wrote a book about running a home"
    ],
    "answer": 2
  },
  {
    "id": 60,
    "category": "People",
    "question": "Who worked on heat and electricity?",
    "options": [
      "Thomas Hardy",
      "Arthur Conan Doyle",
      "Isabella Beeton",
      "Lord Kelvin"
    ],
    "answer": 3
  },
  {
    "id": 61,
    "category": "People",
    "question": "What did Lord Kelvin do?",
    "options": [
      "He worked on heat and electricity",
      "He wrote the Sherlock Holmes stories",
      "She wrote a book about running a home",
      "He found a better way to make steel"
    ],
    "answer": 0
  },
  {
    "id": 62,
    "category": "Scotland",
    "question": "Where was Lord Kelvin from?",
    "options": [
      "France",
      "Scotland",
      "Jamaica",
      "Wales"
    ],
    "answer": 1
  },
  {
    "id": 63,
    "category": "People",
    "question": "Who wrote stories about country life?",
    "options": [
      "Arthur Conan Doyle",
      "Isabella Beeton",
      "Thomas Hardy",
      "Henry Bessemer"
    ],
    "answer": 2
  },
  {
    "id": 64,
    "category": "People",
    "question": "What did Thomas Hardy do?",
    "options": [
      "She wrote a book about running a home",
      "He found a better way to make steel",
      "He helped invent the electric light bulb",
      "He wrote stories about country life"
    ],
    "answer": 3
  },
  {
    "id": 65,
    "category": "People",
    "question": "Who wrote the Sherlock Holmes stories?",
    "options": [
      "Arthur Conan Doyle",
      "Isabella Beeton",
      "Henry Bessemer",
      "Joseph Swan"
    ],
    "answer": 0
  },
  {
    "id": 66,
    "category": "People",
    "question": "What did Arthur Conan Doyle do?",
    "options": [
      "He found a better way to make steel",
      "He wrote the Sherlock Holmes stories",
      "He helped invent the electric light bulb",
      "He improved the flushing toilet"
    ],
    "answer": 1
  },
  {
    "id": 67,
    "category": "Scotland",
    "question": "Where was Arthur Conan Doyle from?",
    "options": [
      "France",
      "Jamaica",
      "Scotland",
      "Wales"
    ],
    "answer": 2
  },
  {
    "id": 68,
    "category": "People",
    "question": "Who wrote a book about running a home?",
    "options": [
      "Henry Bessemer",
      "Joseph Swan",
      "Thomas Crapper",
      "Isabella Beeton"
    ],
    "answer": 3
  },
  {
    "id": 69,
    "category": "People",
    "question": "What did Isabella Beeton do?",
    "options": [
      "She wrote a book about running a home",
      "He helped invent the electric light bulb",
      "He improved the flushing toilet",
      "He designed public toilets for the Great Exhibition"
    ],
    "answer": 0
  },
  {
    "id": 70,
    "category": "People",
    "question": "Who found a better way to make steel?",
    "options": [
      "Joseph Swan",
      "Henry Bessemer",
      "Thomas Crapper",
      "George Jennings"
    ],
    "answer": 1
  },
  {
    "id": 71,
    "category": "People",
    "question": "What did Henry Bessemer do?",
    "options": [
      "He improved the flushing toilet",
      "He designed public toilets for the Great Exhibition",
      "He found a better way to make steel",
      "He designed early calculating machines"
    ],
    "answer": 2
  },
  {
    "id": 72,
    "category": "People",
    "question": "Who helped invent the electric light bulb?",
    "options": [
      "Thomas Crapper",
      "George Jennings",
      "Charles Babbage",
      "Joseph Swan"
    ],
    "answer": 3
  },
  {
    "id": 73,
    "category": "People",
    "question": "What did Joseph Swan do?",
    "options": [
      "He helped invent the electric light bulb",
      "He designed public toilets for the Great Exhibition",
      "He designed early calculating machines",
      "He tried better factories and schools"
    ],
    "answer": 0
  },
  {
    "id": 74,
    "category": "People",
    "question": "Who improved the flushing toilet?",
    "options": [
      "George Jennings",
      "Thomas Crapper",
      "Charles Babbage",
      "Robert Owen"
    ],
    "answer": 1
  },
  {
    "id": 75,
    "category": "People",
    "question": "What did Thomas Crapper do?",
    "options": [
      "He designed early calculating machines",
      "He tried better factories and schools",
      "He improved the flushing toilet",
      "She worked for better homes for poor people"
    ],
    "answer": 2
  },
  {
    "id": 76,
    "category": "People",
    "question": "Who designed public toilets for the Great Exhibition?",
    "options": [
      "Charles Babbage",
      "Robert Owen",
      "Octavia Hill",
      "George Jennings"
    ],
    "answer": 3
  },
  {
    "id": 77,
    "category": "People",
    "question": "What did George Jennings do?",
    "options": [
      "He designed public toilets for the Great Exhibition",
      "He tried better factories and schools",
      "She worked for better homes for poor people",
      "She gave money to help poor people"
    ],
    "answer": 0
  },
  {
    "id": 78,
    "category": "People",
    "question": "Who designed early calculating machines?",
    "options": [
      "Robert Owen",
      "Charles Babbage",
      "Octavia Hill",
      "Angela Burdett-Coutts"
    ],
    "answer": 1
  },
  {
    "id": 79,
    "category": "People",
    "question": "What did Charles Babbage do?",
    "options": [
      "She worked for better homes for poor people",
      "She gave money to help poor people",
      "He designed early calculating machines",
      "He set up an early oil works"
    ],
    "answer": 2
  },
  {
    "id": 80,
    "category": "People",
    "question": "Who tried better factories and schools?",
    "options": [
      "Octavia Hill",
      "Angela Burdett-Coutts",
      "James Young",
      "Robert Owen"
    ],
    "answer": 3
  },
  {
    "id": 81,
    "category": "People",
    "question": "What did Robert Owen do?",
    "options": [
      "He tried better factories and schools",
      "She gave money to help poor people",
      "He set up an early oil works",
      "She wrote about science and maths"
    ],
    "answer": 0
  },
  {
    "id": 82,
    "category": "Scotland",
    "question": "Where was Robert Owen from?",
    "options": [
      "France",
      "Scotland",
      "Jamaica",
      "Wales"
    ],
    "answer": 1
  },
  {
    "id": 83,
    "category": "People",
    "question": "Who worked for better homes for poor people?",
    "options": [
      "Angela Burdett-Coutts",
      "James Young",
      "Octavia Hill",
      "Mary Somerville"
    ],
    "answer": 2
  },
  {
    "id": 84,
    "category": "People",
    "question": "What did Octavia Hill do?",
    "options": [
      "He set up an early oil works",
      "She wrote about science and maths",
      "He passed laws that sent more children to school",
      "She worked for better homes for poor people"
    ],
    "answer": 3
  },
  {
    "id": 85,
    "category": "People",
    "question": "Who gave money to help poor people?",
    "options": [
      "Angela Burdett-Coutts",
      "James Young",
      "Mary Somerville",
      "William Gladstone"
    ],
    "answer": 0
  },
  {
    "id": 86,
    "category": "People",
    "question": "What did Angela Burdett-Coutts do?",
    "options": [
      "She wrote about science and maths",
      "She gave money to help poor people",
      "He passed laws that sent more children to school",
      "He was prime minister when Victoria became Empress of India"
    ],
    "answer": 1
  },
  {
    "id": 87,
    "category": "People",
    "question": "Who set up an early oil works?",
    "options": [
      "Mary Somerville",
      "William Gladstone",
      "James Young",
      "Benjamin Disraeli"
    ],
    "answer": 2
  },
  {
    "id": 88,
    "category": "People",
    "question": "What did James Young do?",
    "options": [
      "He passed laws that sent more children to school",
      "He was prime minister when Victoria became Empress of India",
      "He wrote about art",
      "He set up an early oil works"
    ],
    "answer": 3
  },
  {
    "id": 89,
    "category": "Scotland",
    "question": "Where was James Young from?",
    "options": [
      "Scotland",
      "France",
      "Jamaica",
      "Wales"
    ],
    "answer": 0
  },
  {
    "id": 90,
    "category": "People",
    "question": "Who wrote about science and maths?",
    "options": [
      "William Gladstone",
      "Mary Somerville",
      "Benjamin Disraeli",
      "John Ruskin"
    ],
    "answer": 1
  },
  {
    "id": 91,
    "category": "People",
    "question": "What did Mary Somerville do?",
    "options": [
      "He was prime minister when Victoria became Empress of India",
      "He wrote about art",
      "She wrote about science and maths",
      "He wrote nonsense poems for children"
    ],
    "answer": 2
  },
  {
    "id": 92,
    "category": "Scotland",
    "question": "Where was Mary Somerville from?",
    "options": [
      "France",
      "Jamaica",
      "Wales",
      "Scotland"
    ],
    "answer": 3
  },
  {
    "id": 93,
    "category": "People",
    "question": "Who passed laws that sent more children to school?",
    "options": [
      "William Gladstone",
      "Benjamin Disraeli",
      "John Ruskin",
      "Edward Lear"
    ],
    "answer": 0
  },
  {
    "id": 94,
    "category": "People",
    "question": "What did William Gladstone do?",
    "options": [
      "He wrote about art",
      "He passed laws that sent more children to school",
      "He wrote nonsense poems for children",
      "She drew pictures for children's books"
    ],
    "answer": 1
  },
  {
    "id": 95,
    "category": "People",
    "question": "Who was prime minister when Victoria became Empress of India?",
    "options": [
      "John Ruskin",
      "Edward Lear",
      "Benjamin Disraeli",
      "Kate Greenaway"
    ],
    "answer": 2
  },
  {
    "id": 96,
    "category": "People",
    "question": "What did Benjamin Disraeli do?",
    "options": [
      "He wrote nonsense poems for children",
      "She drew pictures for children's books",
      "He studied rocks and wrote about them",
      "He was prime minister when Victoria became Empress of India"
    ],
    "answer": 3
  },
  {
    "id": 97,
    "category": "People",
    "question": "Who wrote about art?",
    "options": [
      "John Ruskin",
      "Edward Lear",
      "Kate Greenaway",
      "Hugh Miller"
    ],
    "answer": 0
  },
  {
    "id": 98,
    "category": "People",
    "question": "What did John Ruskin do?",
    "options": [
      "She drew pictures for children's books",
      "He wrote about art",
      "He studied rocks and wrote about them",
      "She helped workers and women"
    ],
    "answer": 1
  },
  {
    "id": 99,
    "category": "People",
    "question": "Who wrote nonsense poems for children?",
    "options": [
      "Kate Greenaway",
      "Hugh Miller",
      "Edward Lear",
      "Annie Besant"
    ],
    "answer": 2
  },
  {
    "id": 100,
    "category": "People",
    "question": "What did Edward Lear do?",
    "options": [
      "He studied rocks and wrote about them",
      "She helped workers and women",
      "He built bridges and railways",
      "He wrote nonsense poems for children"
    ],
    "answer": 3
  },
  {
    "id": 101,
    "category": "People",
    "question": "Who drew pictures for children's books?",
    "options": [
      "Kate Greenaway",
      "Hugh Miller",
      "Annie Besant",
      "Robert Stephenson"
    ],
    "answer": 0
  },
  {
    "id": 102,
    "category": "People",
    "question": "What did Kate Greenaway do?",
    "options": [
      "She helped workers and women",
      "She drew pictures for children's books",
      "He built bridges and railways",
      "He designed the Crystal Palace"
    ],
    "answer": 1
  },
  {
    "id": 103,
    "category": "People",
    "question": "Who studied rocks and wrote about them?",
    "options": [
      "Annie Besant",
      "Robert Stephenson",
      "Hugh Miller",
      "Joseph Paxton"
    ],
    "answer": 2
  },
  {
    "id": 104,
    "category": "People",
    "question": "What did Hugh Miller do?",
    "options": [
      "He built bridges and railways",
      "He designed the Crystal Palace",
      "She wrote stories about ordinary people",
      "He studied rocks and wrote about them"
    ],
    "answer": 3
  },
  {
    "id": 105,
    "category": "Scotland",
    "question": "Where was Hugh Miller from?",
    "options": [
      "Scotland",
      "France",
      "Jamaica",
      "Wales"
    ],
    "answer": 0
  },
  {
    "id": 106,
    "category": "People",
    "question": "Who helped workers and women?",
    "options": [
      "Robert Stephenson",
      "Annie Besant",
      "Joseph Paxton",
      "George Eliot"
    ],
    "answer": 1
  },
  {
    "id": 107,
    "category": "People",
    "question": "What did Annie Besant do?",
    "options": [
      "He designed the Crystal Palace",
      "She wrote stories about ordinary people",
      "She helped workers and women",
      "She was queen from 1837 to 1901"
    ],
    "answer": 2
  },
  {
    "id": 108,
    "category": "People",
    "question": "Who built bridges and railways?",
    "options": [
      "Joseph Paxton",
      "George Eliot",
      "Queen Victoria",
      "Robert Stephenson"
    ],
    "answer": 3
  },
  {
    "id": 109,
    "category": "People",
    "question": "What did Robert Stephenson do?",
    "options": [
      "He built bridges and railways",
      "She wrote stories about ordinary people",
      "She was queen from 1837 to 1901",
      "He helped plan the Great Exhibition"
    ],
    "answer": 0
  },
  {
    "id": 110,
    "category": "People",
    "question": "Who designed the Crystal Palace?",
    "options": [
      "George Eliot",
      "Joseph Paxton",
      "Queen Victoria",
      "Prince Albert"
    ],
    "answer": 1
  },
  {
    "id": 111,
    "category": "People",
    "question": "What did Joseph Paxton do?",
    "options": [
      "She was queen from 1837 to 1901",
      "He helped plan the Great Exhibition",
      "He designed the Crystal Palace",
      "She made hospitals cleaner"
    ],
    "answer": 2
  },
  {
    "id": 112,
    "category": "People",
    "question": "Who wrote stories about ordinary people?",
    "options": [
      "Queen Victoria",
      "Prince Albert",
      "Florence Nightingale",
      "George Eliot"
    ],
    "answer": 3
  },
  {
    "id": 113,
    "category": "People",
    "question": "What did George Eliot do?",
    "options": [
      "She wrote stories about ordinary people",
      "She was queen from 1837 to 1901",
      "He helped plan the Great Exhibition",
      "She made hospitals cleaner"
    ],
    "answer": 0
  },
  {
    "id": 114,
    "category": "Queen",
    "question": "In which year did Queen Victoria become queen?",
    "options": [
      "1800",
      "1837",
      "1851",
      "1901"
    ],
    "answer": 1
  },
  {
    "id": 115,
    "category": "Queen",
    "question": "In which year did Queen Victoria's reign end?",
    "options": [
      "1837",
      "1840",
      "1901",
      "1851"
    ],
    "answer": 2
  },
  {
    "id": 116,
    "category": "Queen",
    "question": "How many children did Queen Victoria have?",
    "options": [
      "One",
      "Two",
      "Twelve",
      "Nine"
    ],
    "answer": 3
  },
  {
    "id": 117,
    "category": "Queen",
    "question": "Who was Queen Victoria's husband?",
    "options": [
      "Prince Albert",
      "Charles Dickens",
      "Keir Hardie",
      "Brunel"
    ],
    "answer": 0
  },
  {
    "id": 118,
    "category": "Scotland",
    "question": "Which Scottish castle did Queen Victoria love?",
    "options": [
      "The Tower of London",
      "Balmoral",
      "A Paris palace",
      "A Cardiff castle"
    ],
    "answer": 1
  },
  {
    "id": 119,
    "category": "Scotland",
    "question": "Where in Scotland is Balmoral?",
    "options": [
      "The middle of London",
      "Wales",
      "The Highlands",
      "France"
    ],
    "answer": 2
  },
  {
    "id": 120,
    "category": "Scotland",
    "question": "Which Scottish city built many ships?",
    "options": [
      "Paris",
      "London only",
      "Cardiff",
      "Glasgow"
    ],
    "answer": 3
  },
  {
    "id": 121,
    "category": "Scotland",
    "question": "What else did Glasgow build?",
    "options": [
      "Engines",
      "Postage stamps",
      "Crowns",
      "Only farm carts"
    ],
    "answer": 0
  },
  {
    "id": 122,
    "category": "Scotland",
    "question": "Which city had schools, publishers, and a New Town?",
    "options": [
      "Paris",
      "Edinburgh",
      "Balmoral village",
      "Madrid"
    ],
    "answer": 1
  },
  {
    "id": 123,
    "category": "Scotland",
    "question": "What was the name of Edinburgh's planned streets?",
    "options": [
      "The Penny Black",
      "The Crystal Palace",
      "The New Town",
      "The Rocket"
    ],
    "answer": 2
  },
  {
    "id": 124,
    "category": "Scotland",
    "question": "Why did many clan tartans become popular?",
    "options": [
      "They were a school uniform",
      "They came from France",
      "Only queens could wear cloth",
      "Victorians liked a Highland holiday look"
    ],
    "answer": 3
  },
  {
    "id": 125,
    "category": "Scotland",
    "question": "Scotland is in which part of Britain?",
    "options": [
      "The north",
      "The far south only",
      "Outside Britain",
      "Only an island called Wales"
    ],
    "answer": 0
  },
  {
    "id": 126,
    "category": "Inventions",
    "question": "What was the first postage stamp called?",
    "options": [
      "The Gold Crown",
      "The Penny Black",
      "The Blue Train",
      "The Lamp Card"
    ],
    "answer": 1
  },
  {
    "id": 127,
    "category": "Inventions",
    "question": "In which year did the Penny Black come out?",
    "options": [
      "1837",
      "1851",
      "1840",
      "1901"
    ],
    "answer": 2
  },
  {
    "id": 128,
    "category": "Inventions",
    "question": "Trains let people travel faster than what?",
    "options": [
      "Thoughts",
      "Birds",
      "Ships at sea only",
      "Horses"
    ],
    "answer": 3
  },
  {
    "id": 129,
    "category": "Inventions",
    "question": "Who built big bridges, ships, and railways?",
    "options": [
      "Isambard Kingdom Brunel",
      "Lewis Carroll",
      "Mary Slessor",
      "Edward Lear"
    ],
    "answer": 0
  },
  {
    "id": 130,
    "category": "Scotland",
    "question": "Alexander Graham Bell was from which country?",
    "options": [
      "Jamaica",
      "Scotland",
      "France",
      "Spain"
    ],
    "answer": 1
  },
  {
    "id": 131,
    "category": "Inventions",
    "question": "What lit many streets before electric bulbs?",
    "options": [
      "Moon mirrors",
      "Coal dust",
      "Gas",
      "Only candles on every roof"
    ],
    "answer": 2
  },
  {
    "id": 132,
    "category": "Inventions",
    "question": "James Clerk Maxwell linked light with what?",
    "options": [
      "Only tartan",
      "Only stamps",
      "Only ships",
      "Electricity and magnetism"
    ],
    "answer": 3
  },
  {
    "id": 133,
    "category": "Scotland",
    "question": "James Clerk Maxwell was a scientist from where?",
    "options": [
      "Scotland",
      "Jamaica",
      "India",
      "Spain"
    ],
    "answer": 0
  },
  {
    "id": 134,
    "category": "Inventions",
    "question": "Who built London's big new sewers?",
    "options": [
      "Beatrix Potter",
      "Joseph Bazalgette",
      "Keir Hardie",
      "Edward Lear"
    ],
    "answer": 1
  },
  {
    "id": 135,
    "category": "Inventions",
    "question": "The Great Stink of London was in which year?",
    "options": [
      "1837",
      "1840",
      "1858",
      "1901"
    ],
    "answer": 2
  },
  {
    "id": 136,
    "category": "Inventions",
    "question": "Clean sewers and drinking water helped stop what?",
    "options": [
      "Rain",
      "Schools",
      "Trains",
      "Disease"
    ],
    "answer": 3
  },
  {
    "id": 137,
    "category": "Inventions",
    "question": "The Great Exhibition opened in which year?",
    "options": [
      "1851",
      "1837",
      "1840",
      "1901"
    ],
    "answer": 0
  },
  {
    "id": 138,
    "category": "Inventions",
    "question": "The Great Exhibition was held in which building?",
    "options": [
      "Balmoral",
      "The Crystal Palace",
      "A Glasgow ship",
      "A one-room home"
    ],
    "answer": 1
  },
  {
    "id": 139,
    "category": "Inventions",
    "question": "Ada Lovelace thought about which new idea?",
    "options": [
      "Only tartan cloth",
      "Only soup recipes",
      "Early computers",
      "Only horses"
    ],
    "answer": 2
  },
  {
    "id": 140,
    "category": "People",
    "question": "Who was called the Lady with the Lamp?",
    "options": [
      "Mary Seacole",
      "Queen Victoria",
      "Kate Greenaway",
      "Florence Nightingale"
    ],
    "answer": 3
  },
  {
    "id": 141,
    "category": "People",
    "question": "Mary Seacole came from which place?",
    "options": [
      "Jamaica",
      "Glasgow",
      "Paris",
      "Edinburgh"
    ],
    "answer": 0
  },
  {
    "id": 142,
    "category": "People",
    "question": "Mary Seacole helped soldiers with what?",
    "options": [
      "New stamps",
      "Food and care",
      "A castle",
      "Steel mills"
    ],
    "answer": 1
  },
  {
    "id": 143,
    "category": "People",
    "question": "Who studied how animals and plants change?",
    "options": [
      "Charles Dickens",
      "Rowland Hill",
      "Charles Darwin",
      "Angela Burdett-Coutts"
    ],
    "answer": 2
  },
  {
    "id": 144,
    "category": "People",
    "question": "Charles Dickens wrote about which people?",
    "options": [
      "Only horses",
      "Only scientists",
      "Only kings at sea",
      "Poor people in cities"
    ],
    "answer": 3
  },
  {
    "id": 145,
    "category": "Scotland",
    "question": "Robert Louis Stevenson was from where?",
    "options": [
      "Scotland",
      "Jamaica",
      "India",
      "Wales"
    ],
    "answer": 0
  },
  {
    "id": 146,
    "category": "People",
    "question": "Who made books about Peter Rabbit?",
    "options": [
      "Keir Hardie",
      "Beatrix Potter",
      "Brunel",
      "Disraeli"
    ],
    "answer": 1
  },
  {
    "id": 147,
    "category": "People",
    "question": "George Eliot was the pen name of which woman?",
    "options": [
      "Queen Victoria",
      "Ada Lovelace",
      "Mary Ann Evans",
      "Mary Slessor"
    ],
    "answer": 2
  },
  {
    "id": 148,
    "category": "Scotland",
    "question": "Arthur Conan Doyle was from where?",
    "options": [
      "France",
      "Jamaica",
      "Spain",
      "Scotland"
    ],
    "answer": 3
  },
  {
    "id": 149,
    "category": "Scotland",
    "question": "David Livingstone traveled as which kind of Scottish worker?",
    "options": [
      "Explorer",
      "Stamp maker",
      "Queen",
      "Only a lamp lighter"
    ],
    "answer": 0
  },
  {
    "id": 150,
    "category": "People",
    "question": "Mary Slessor worked to help which people?",
    "options": [
      "Only railway owners",
      "Children",
      "Only kings",
      "Only painters"
    ],
    "answer": 1
  },
  {
    "id": 151,
    "category": "People",
    "question": "Keir Hardie wanted better lives for which people?",
    "options": [
      "Only princes",
      "Only horses",
      "Workers",
      "Only flower painters"
    ],
    "answer": 2
  },
  {
    "id": 152,
    "category": "People",
    "question": "Elizabeth Garrett Anderson was the first British woman to qualify as a doctor. What was her job?",
    "options": [
      "Queen",
      "Train driver",
      "Stamp printer",
      "Doctor"
    ],
    "answer": 3
  },
  {
    "id": 153,
    "category": "Scotland",
    "question": "Lord Kelvin was a scientist from where?",
    "options": [
      "Scotland",
      "Jamaica",
      "India",
      "France"
    ],
    "answer": 0
  },
  {
    "id": 154,
    "category": "People",
    "question": "Mary Somerville wrote about which subjects?",
    "options": [
      "Only ship menus",
      "Science and maths",
      "Only tartan shops",
      "Only wars"
    ],
    "answer": 1
  },
  {
    "id": 155,
    "category": "Scotland",
    "question": "Hugh Miller studied and wrote about what?",
    "options": [
      "Only postage stamps",
      "Only crowns",
      "Rocks",
      "Only toilets"
    ],
    "answer": 2
  },
  {
    "id": 156,
    "category": "Scotland",
    "question": "Who tried better factories and schools in Scotland?",
    "options": [
      "Thomas Crapper",
      "Joseph Paxton",
      "Benjamin Disraeli",
      "Robert Owen"
    ],
    "answer": 3
  },
  {
    "id": 157,
    "category": "People",
    "question": "Who gave a lot of money to charity?",
    "options": [
      "Angela Burdett-Coutts",
      "The Rocket locomotive",
      "The Penny Black",
      "A Glasgow crane"
    ],
    "answer": 0
  },
  {
    "id": 158,
    "category": "Schools",
    "question": "Which prime minister passed school laws?",
    "options": [
      "Beatrix Potter",
      "William Gladstone",
      "Mary Seacole",
      "James Clerk Maxwell"
    ],
    "answer": 1
  },
  {
    "id": 159,
    "category": "People",
    "question": "Who wrote a famous book on running a home?",
    "options": [
      "Brunel",
      "Faraday",
      "Isabella Beeton",
      "Lister"
    ],
    "answer": 2
  },
  {
    "id": 160,
    "category": "Schools",
    "question": "Early in Victorian times, what did many children do?",
    "options": [
      "They all stayed home to play",
      "They all went to college",
      "None of them worked",
      "They worked long days"
    ],
    "answer": 3
  },
  {
    "id": 161,
    "category": "Schools",
    "question": "Later laws sent more children where?",
    "options": [
      "To school",
      "To France",
      "Only onto ships",
      "To work even longer days"
    ],
    "answer": 0
  },
  {
    "id": 162,
    "category": "Schools",
    "question": "School boards started around which year?",
    "options": [
      "1837",
      "1870",
      "1600",
      "1914"
    ],
    "answer": 1
  },
  {
    "id": 163,
    "category": "Daily life",
    "question": "A rich Victorian home had what?",
    "options": [
      "Only one bed for a whole city",
      "No doors",
      "Many rooms",
      "No lights of any kind"
    ],
    "answer": 2
  },
  {
    "id": 164,
    "category": "Daily life",
    "question": "A poor city home might have how many rooms?",
    "options": [
      "Fifty rooms",
      "A whole castle",
      "No building at all",
      "One room"
    ],
    "answer": 3
  },
  {
    "id": 165,
    "category": "Daily life",
    "question": "What lit many streets at night?",
    "options": [
      "Gas lamps",
      "Only the moon by law",
      "Electric bulbs in 1837",
      "Candles on every roof"
    ],
    "answer": 0
  },
  {
    "id": 166,
    "category": "Beliefs",
    "question": "Where did many Victorians go on Sunday?",
    "options": [
      "A shipyard only",
      "Church",
      "Nowhere at all",
      "Only the railway works"
    ],
    "answer": 1
  },
  {
    "id": 167,
    "category": "Beliefs",
    "question": "What did charity mean?",
    "options": [
      "Closing every school",
      "Stopping all trains",
      "Giving help to poor people",
      "Hiding every book"
    ],
    "answer": 2
  },
  {
    "id": 168,
    "category": "Beliefs",
    "question": "The idea that the world was getting better was called what?",
    "options": [
      "The Penny Black",
      "The New Town",
      "The Rocket",
      "Progress"
    ],
    "answer": 3
  },
  {
    "id": 169,
    "category": "Beliefs",
    "question": "Did every Victorian believe the same thing?",
    "options": [
      "No",
      "Yes, every one",
      "Only children decided",
      "Ideas were not allowed"
    ],
    "answer": 0
  },
  {
    "id": 170,
    "category": "Beliefs",
    "question": "Was ruling faraway lands fair to the people who lived there?",
    "options": [
      "Yes, it was always fair",
      "No, it was not fair",
      "Nobody lived there",
      "They had all asked for a new queen"
    ],
    "answer": 1
  },
  {
    "id": 171,
    "category": "Places",
    "question": "A railway a child can follow starts in which city?",
    "options": [
      "Balmoral",
      "Paris",
      "London",
      "Glasgow first"
    ],
    "answer": 2
  },
  {
    "id": 172,
    "category": "Places",
    "question": "That railway runs toward which country?",
    "options": [
      "France",
      "Spain",
      "Only back to Wales",
      "Scotland"
    ],
    "answer": 3
  },
  {
    "id": 173,
    "category": "Places",
    "question": "Which list names the countries on the Britain map?",
    "options": [
      "Scotland, England, Wales, and Ireland",
      "Only London",
      "Only France and Spain",
      "Only ships"
    ],
    "answer": 0
  },
  {
    "id": 174,
    "category": "Places",
    "question": "Which place on the map is a Highland castle?",
    "options": [
      "The Crystal Palace",
      "Balmoral",
      "A London sewer",
      "The Penny Black"
    ],
    "answer": 1
  },
  {
    "id": 175,
    "category": "Inventions",
    "question": "Which things changed Victorian life?",
    "options": [
      "Moon rockets and radios",
      "Only castles",
      "Railways, stamps, photographs, gas lamps, and clean water",
      "Only tartan"
    ],
    "answer": 2
  },
  {
    "id": 176,
    "category": "Time",
    "question": "Victorian times in Britain ran from when to when?",
    "options": [
      "1066 to 1215",
      "1914 to 1918",
      "2000 to 2010",
      "1837 to 1901"
    ],
    "answer": 3
  },
  {
    "id": 177,
    "category": "Time",
    "question": "Queen Victoria first spent time in Scotland in which part of her reign?",
    "options": [
      "The early years, including the 1840s",
      "The year 1600",
      "After 1901",
      "Only in 1200"
    ],
    "answer": 0
  },
  {
    "id": 178,
    "category": "Inventions",
    "question": "Who designed public toilets shown at the Great Exhibition?",
    "options": [
      "Emily Bronte",
      "George Jennings",
      "Keir Hardie",
      "Hugh Miller"
    ],
    "answer": 1
  },
  {
    "id": 179,
    "category": "Scotland",
    "question": "James Young started which kind of works in Scotland?",
    "options": [
      "Post office",
      "Rabbit book shop",
      "Oil works",
      "Crown workshop"
    ],
    "answer": 2
  },
  {
    "id": 180,
    "category": "People",
    "question": "Prince Albert helped plan which big show?",
    "options": [
      "A stamp shop",
      "A school test",
      "A Paris fair only",
      "The Great Exhibition"
    ],
    "answer": 3
  },
  {
    "id": 181,
    "category": "People",
    "question": "William Morris made patterns for wallpaper and what else?",
    "options": [
      "Books",
      "Sewers only",
      "Warships only",
      "Stamps only"
    ],
    "answer": 0
  },
  {
    "id": 182,
    "category": "People",
    "question": "John Ruskin wrote about what?",
    "options": [
      "Only toilets",
      "Art",
      "Only oil",
      "Only tartan shops"
    ],
    "answer": 1
  },
  {
    "id": 183,
    "category": "People",
    "question": "Robert Stephenson built bridges with which family member?",
    "options": [
      "Queen Victoria",
      "Mary Seacole",
      "His father, George",
      "Beatrix Potter"
    ],
    "answer": 2
  },
  {
    "id": 184,
    "category": "People",
    "question": "Annie Besant worked to help which people?",
    "options": [
      "Only locomotive paint",
      "Only castle cooks",
      "Only rock collectors",
      "Workers and women"
    ],
    "answer": 3
  },
  {
    "id": 185,
    "category": "Daily life",
    "question": "Were rich homes and poor homes the same?",
    "options": [
      "No. Rich homes had many rooms. Poor homes might have one.",
      "Yes. Every home was a palace.",
      "Yes. Every home was a field.",
      "Homes were not used."
    ],
    "answer": 0
  },
  {
    "id": 186,
    "category": "Scotland",
    "question": "Who stayed at Balmoral?",
    "options": [
      "The Penny Black stamp",
      "Queen Victoria",
      "A mayor of Paris",
      "Only a train"
    ],
    "answer": 1
  },
  {
    "id": 187,
    "category": "People",
    "question": "Florence Nightingale is remembered for making which places cleaner?",
    "options": [
      "Shipyards",
      "Stamp shops",
      "Hospitals",
      "Castles"
    ],
    "answer": 2
  },
  {
    "id": 188,
    "category": "People",
    "question": "Charles Darwin's work was about living things. What did he study?",
    "options": [
      "Only railway tickets",
      "Only tartan",
      "Only sewers",
      "Animals and plants"
    ],
    "answer": 3
  },
  {
    "id": 189,
    "category": "Scotland",
    "question": "Which of these was true of Edinburgh?",
    "options": [
      "Publishers and a New Town",
      "Only coal mines",
      "Only a desert",
      "Only the Penny Black"
    ],
    "answer": 0
  },
  {
    "id": 190,
    "category": "Inventions",
    "question": "Photographs became more common in Victorian times. What else was new?",
    "options": [
      "Moon landings",
      "The telephone and electric light",
      "Television in every home in 1837",
      "Jet planes"
    ],
    "answer": 1
  },
  {
    "id": 191,
    "category": "Schools",
    "question": "What changed for many children later in Victorian times?",
    "options": [
      "Schools were banned",
      "They all became queens",
      "More of them went to school",
      "They stopped learning letters"
    ],
    "answer": 2
  },
  {
    "id": 192,
    "category": "Beliefs",
    "question": "Many people thought new lamps, trains, and clean water showed what?",
    "options": [
      "The end of all work",
      "That Scotland left Britain",
      "That stamps were food",
      "Progress"
    ],
    "answer": 3
  },
  {
    "id": 193,
    "category": "Places",
    "question": "Which city on the railway is in Scotland, along with Glasgow?",
    "options": [
      "Edinburgh",
      "Paris",
      "Madrid",
      "Rome"
    ],
    "answer": 0
  },
  {
    "id": 194,
    "category": "Inventions",
    "question": "The Penny Post made sending a letter cost how much at the start?",
    "options": [
      "One pound",
      "One penny",
      "Nothing ever",
      "A gold crown"
    ],
    "answer": 1
  },
  {
    "id": 195,
    "category": "Daily life",
    "question": "Servants worked in which kind of Victorian home?",
    "options": [
      "Every one-room home",
      "Only on trains",
      "Big houses with many rooms",
      "Only in France"
    ],
    "answer": 2
  },
  {
    "id": 196,
    "category": "Scotland",
    "question": "Balmoral was a holiday home for which queen?",
    "options": [
      "A queen of France",
      "Mary Seacole",
      "Beatrix Potter",
      "Queen Victoria"
    ],
    "answer": 3
  },
  {
    "id": 197,
    "category": "Schools",
    "question": "Before the later school laws, many children spent their days doing what?",
    "options": [
      "Working",
      "Sitting every exam in college",
      "Ruling the country",
      "Building only palaces"
    ],
    "answer": 0
  },
  {
    "id": 198,
    "category": "Beliefs",
    "question": "Church on Sunday was part of life for which group?",
    "options": [
      "Nobody at all",
      "Many Victorian families",
      "Only train engines",
      "Only people in 1600"
    ],
    "answer": 1
  },
  {
    "id": 199,
    "category": "People",
    "question": "Mary Ann Evans wrote books under which name?",
    "options": [
      "Florence Nightingale",
      "Prince Albert",
      "George Eliot",
      "James Young"
    ],
    "answer": 2
  },
  {
    "id": 200,
    "category": "Inventions",
    "question": "A box camera in Victorian times was used to make what?",
    "options": [
      "Steel",
      "Sewers",
      "Ships",
      "Photographs"
    ],
    "answer": 3
  }
]
