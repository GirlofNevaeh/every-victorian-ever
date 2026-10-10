export type Role = 'Queen' | 'Prince' | 'Nurse' | 'Inventor' | 'Writer' | 'Scientist' | 'Explorer' | 'Reformer'
export type Period = '1837-1860' | '1861-1880' | '1881-1901'

export type Person = {
  id: string
  name: string
  role: Role
  period: Period
  bio: string
  scottish: boolean
}

export const people: Person[] = [
  {
    "id": "victoria",
    "name": "Queen Victoria",
    "role": "Queen",
    "period": "1837-1860",
    "bio": "Queen from 1837 to 1901. She loved Scotland and stayed at Balmoral. She had nine children.",
    "scottish": true
  },
  {
    "id": "albert",
    "name": "Prince Albert",
    "role": "Prince",
    "period": "1837-1860",
    "bio": "Victoria's husband. He helped plan the Great Exhibition. He liked science and Scotland.",
    "scottish": false
  },
  {
    "id": "nightingale",
    "name": "Florence Nightingale",
    "role": "Nurse",
    "period": "1861-1880",
    "bio": "A nurse who made hospitals cleaner. People called her the Lady with the Lamp.",
    "scottish": false
  },
  {
    "id": "seacole",
    "name": "Mary Seacole",
    "role": "Nurse",
    "period": "1861-1880",
    "bio": "A nurse from Jamaica. She helped soldiers in the Crimean War with food and care.",
    "scottish": false
  },
  {
    "id": "brunel",
    "name": "Isambard Kingdom Brunel",
    "role": "Inventor",
    "period": "1837-1860",
    "bio": "An engineer who built big bridges, tunnels, ships, and railways.",
    "scottish": false
  },
  {
    "id": "dickens",
    "name": "Charles Dickens",
    "role": "Writer",
    "period": "1837-1860",
    "bio": "He wrote books such as Oliver Twist. His stories showed poor people in cities.",
    "scottish": false
  },
  {
    "id": "darwin",
    "name": "Charles Darwin",
    "role": "Scientist",
    "period": "1861-1880",
    "bio": "A scientist who studied animals and plants. He wrote about how living things change.",
    "scottish": false
  },
  {
    "id": "bell",
    "name": "Alexander Graham Bell",
    "role": "Inventor",
    "period": "1881-1901",
    "bio": "A Scottish inventor of the telephone.",
    "scottish": true
  },
  {
    "id": "maxwell",
    "name": "James Clerk Maxwell",
    "role": "Scientist",
    "period": "1861-1880",
    "bio": "A Scottish scientist. He linked electricity, magnetism, and light. He made an early colour photo.",
    "scottish": true
  },
  {
    "id": "lister",
    "name": "Joseph Lister",
    "role": "Scientist",
    "period": "1861-1880",
    "bio": "A doctor who made surgery safer by keeping wounds clean.",
    "scottish": false
  },
  {
    "id": "livingstone",
    "name": "David Livingstone",
    "role": "Explorer",
    "period": "1837-1860",
    "bio": "A Scottish explorer and missionary who traveled in Africa.",
    "scottish": true
  },
  {
    "id": "slessor",
    "name": "Mary Slessor",
    "role": "Reformer",
    "period": "1881-1901",
    "bio": "A Scottish missionary who worked in Africa and helped children.",
    "scottish": true
  },
  {
    "id": "stevenson",
    "name": "Robert Louis Stevenson",
    "role": "Writer",
    "period": "1881-1901",
    "bio": "A Scottish writer of Treasure Island and other adventure books.",
    "scottish": true
  },
  {
    "id": "potter",
    "name": "Beatrix Potter",
    "role": "Writer",
    "period": "1881-1901",
    "bio": "A writer and artist. She made books about animals, including Peter Rabbit.",
    "scottish": false
  },
  {
    "id": "hardie",
    "name": "Keir Hardie",
    "role": "Reformer",
    "period": "1881-1901",
    "bio": "A Scottish leader who helped start the Labour Party to help workers.",
    "scottish": true
  },
  {
    "id": "stephenson",
    "name": "George Stephenson",
    "role": "Inventor",
    "period": "1837-1860",
    "bio": "He built early railways and the Rocket locomotive.",
    "scottish": false
  },
  {
    "id": "hill",
    "name": "Rowland Hill",
    "role": "Inventor",
    "period": "1837-1860",
    "bio": "He started the Penny Post. The first stamp was the Penny Black in 1840.",
    "scottish": false
  },
  {
    "id": "bazalgette",
    "name": "Joseph Bazalgette",
    "role": "Inventor",
    "period": "1861-1880",
    "bio": "He built London's big sewers after the Great Stink of 1858. Cleaner water followed.",
    "scottish": false
  },
  {
    "id": "anderson",
    "name": "Elizabeth Garrett Anderson",
    "role": "Scientist",
    "period": "1861-1880",
    "bio": "The first British woman to qualify as a doctor. She helped women and children.",
    "scottish": false
  },
  {
    "id": "lovelace",
    "name": "Ada Lovelace",
    "role": "Scientist",
    "period": "1837-1860",
    "bio": "She thought early about computers and math machines.",
    "scottish": false
  },
  {
    "id": "morris",
    "name": "William Morris",
    "role": "Writer",
    "period": "1861-1880",
    "bio": "He designed patterns for wallpaper and books. He loved careful crafts.",
    "scottish": false
  },
  {
    "id": "carroll",
    "name": "Lewis Carroll",
    "role": "Writer",
    "period": "1861-1880",
    "bio": "He wrote Alice's Adventures in Wonderland.",
    "scottish": false
  },
  {
    "id": "bronte-c",
    "name": "Charlotte Bronte",
    "role": "Writer",
    "period": "1837-1860",
    "bio": "She wrote Jane Eyre.",
    "scottish": false
  },
  {
    "id": "bronte-e",
    "name": "Emily Bronte",
    "role": "Writer",
    "period": "1837-1860",
    "bio": "She wrote Wuthering Heights.",
    "scottish": false
  },
  {
    "id": "tennyson",
    "name": "Alfred Tennyson",
    "role": "Writer",
    "period": "1837-1860",
    "bio": "A poet Queen Victoria liked. He wrote about nature and famous stories.",
    "scottish": false
  },
  {
    "id": "faraday",
    "name": "Michael Faraday",
    "role": "Scientist",
    "period": "1837-1860",
    "bio": "A scientist who studied electricity and magnets.",
    "scottish": false
  },
  {
    "id": "kelvin",
    "name": "Lord Kelvin",
    "role": "Scientist",
    "period": "1861-1880",
    "bio": "A Scottish scientist who worked on heat and electricity.",
    "scottish": true
  },
  {
    "id": "hardy",
    "name": "Thomas Hardy",
    "role": "Writer",
    "period": "1881-1901",
    "bio": "He wrote stories about country life.",
    "scottish": false
  },
  {
    "id": "doyle",
    "name": "Arthur Conan Doyle",
    "role": "Writer",
    "period": "1881-1901",
    "bio": "A Scottish writer of the Sherlock Holmes stories.",
    "scottish": true
  },
  {
    "id": "beeton",
    "name": "Isabella Beeton",
    "role": "Writer",
    "period": "1861-1880",
    "bio": "She wrote a famous book about running a home.",
    "scottish": false
  },
  {
    "id": "bessemer",
    "name": "Henry Bessemer",
    "role": "Inventor",
    "period": "1861-1880",
    "bio": "He found a better way to make steel.",
    "scottish": false
  },
  {
    "id": "swan",
    "name": "Joseph Swan",
    "role": "Inventor",
    "period": "1881-1901",
    "bio": "He helped invent the electric light bulb.",
    "scottish": false
  },
  {
    "id": "crapper",
    "name": "Thomas Crapper",
    "role": "Inventor",
    "period": "1881-1901",
    "bio": "He improved the flushing toilet.",
    "scottish": false
  },
  {
    "id": "jennings",
    "name": "George Jennings",
    "role": "Inventor",
    "period": "1861-1880",
    "bio": "He designed public toilets shown at the Great Exhibition.",
    "scottish": false
  },
  {
    "id": "babbage",
    "name": "Charles Babbage",
    "role": "Inventor",
    "period": "1837-1860",
    "bio": "He designed early calculating machines.",
    "scottish": false
  },
  {
    "id": "owen",
    "name": "Robert Owen",
    "role": "Reformer",
    "period": "1837-1860",
    "bio": "A Scottish reformer who tried better factories and schools.",
    "scottish": true
  },
  {
    "id": "octavia",
    "name": "Octavia Hill",
    "role": "Reformer",
    "period": "1861-1880",
    "bio": "She worked for better homes for poor people.",
    "scottish": false
  },
  {
    "id": "coutts",
    "name": "Angela Burdett-Coutts",
    "role": "Reformer",
    "period": "1861-1880",
    "bio": "A rich woman who gave money to charity.",
    "scottish": false
  },
  {
    "id": "young",
    "name": "James Young",
    "role": "Inventor",
    "period": "1861-1880",
    "bio": "A Scot who set up an early oil works.",
    "scottish": true
  },
  {
    "id": "somerville",
    "name": "Mary Somerville",
    "role": "Scientist",
    "period": "1837-1860",
    "bio": "A Scottish science writer and maths expert.",
    "scottish": true
  },
  {
    "id": "gladstone",
    "name": "William Gladstone",
    "role": "Reformer",
    "period": "1861-1880",
    "bio": "A prime minister who passed school laws.",
    "scottish": false
  },
  {
    "id": "disraeli",
    "name": "Benjamin Disraeli",
    "role": "Reformer",
    "period": "1861-1880",
    "bio": "A prime minister. In his time Victoria was made Empress of India.",
    "scottish": false
  },
  {
    "id": "ruskin",
    "name": "John Ruskin",
    "role": "Writer",
    "period": "1861-1880",
    "bio": "An art critic and writer.",
    "scottish": false
  },
  {
    "id": "lear",
    "name": "Edward Lear",
    "role": "Writer",
    "period": "1837-1860",
    "bio": "He wrote nonsense poems for children.",
    "scottish": false
  },
  {
    "id": "greenaway",
    "name": "Kate Greenaway",
    "role": "Writer",
    "period": "1881-1901",
    "bio": "An artist who drew children's books.",
    "scottish": false
  },
  {
    "id": "miller",
    "name": "Hugh Miller",
    "role": "Scientist",
    "period": "1837-1860",
    "bio": "A Scottish geologist and writer.",
    "scottish": true
  },
  {
    "id": "besant",
    "name": "Annie Besant",
    "role": "Reformer",
    "period": "1881-1901",
    "bio": "A reformer who helped workers and women.",
    "scottish": false
  },
  {
    "id": "rstephenson",
    "name": "Robert Stephenson",
    "role": "Inventor",
    "period": "1837-1860",
    "bio": "He built bridges and railways with his father, George.",
    "scottish": false
  },
  {
    "id": "paxton",
    "name": "Joseph Paxton",
    "role": "Inventor",
    "period": "1861-1880",
    "bio": "He designed the Crystal Palace for the Great Exhibition.",
    "scottish": false
  },
  {
    "id": "eliot",
    "name": "George Eliot",
    "role": "Writer",
    "period": "1861-1880",
    "bio": "The pen name of Mary Ann Evans. She wrote stories about ordinary people.",
    "scottish": false
  }
]
