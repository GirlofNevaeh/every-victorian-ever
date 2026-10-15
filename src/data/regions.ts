export type RegionId = 'scotland' | 'england' | 'wales' | 'ulster' | 'ireland'

export type RegionPhoto = {
  src: string
  alt: string
  caption: string
}

export type RegionInfo = {
  id: RegionId
  name: string
  fill: string
  years: string
  summary: string
  sections: { title: string; text: string }[]
  places: { name: string; text: string }[]
  photos: RegionPhoto[]
}

export const regions: RegionInfo[] = [
  {
    id: 'scotland',
    name: 'Scotland',
    fill: '#1F6B4A',
    years: '1837–1901',
    summary: 'Scotland was a kingdom inside Britain, with its own church, laws, and schools. The north stayed rural. Glasgow and Edinburgh grew fast.',
    sections: [
      {
        title: 'Highlands and islands',
        text: 'Queen Victoria bought Balmoral and made the Highlands fashionable. Tartan, deer, and a holiday castle were the picture on Christmas cards. Real Highland life was harder. Landlords had already cleared many glens for sheep, and some clearances still went on. Families moved to coasts, to Glasgow, or overseas to Canada and Australia. Crofters won more legal protection only near the end of the century, after the Crofters Act of 1886.',
      },
      {
        title: 'Glasgow and the Clyde',
        text: 'Glasgow became a great industrial city. Shipyards on the Clyde built ships and engines for the world. A boy could grow up within sound of riveting. Pay was better than a croft, but tenements were crowded, and disease spread in closes and wynds. Clean water from Loch Katrine, brought to the city in 1859, was one of the answers.',
      },
      {
        title: 'Edinburgh',
        text: 'Edinburgh kept the old stone town on the ridge and the planned New Town below it. Publishers, lawyers, schools, and the university made it a city of books. It was not only pretty. The Old Town was packed and poor as well as famous.',
      },
      {
        title: 'Church and argument',
        text: 'In 1843 the Disruption split the Church of Scotland. Thomas Chalmers and hundreds of ministers walked out because they said landlords should not choose the minister. New Free churches rose in towns and glens. Faith was a public fight, not only a Sunday habit.',
      },
    ],
    places: [
      { name: 'Balmoral', text: 'A Highland estate on the Dee. Victoria and Albert rebuilt the castle in the 1850s. She felt freer there than in London and wrote about the hills in her journal.' },
      { name: 'Edinburgh', text: 'Capital for law, church, and publishing. The New Town was a Georgian and Victorian address for professional families.' },
      { name: 'Glasgow', text: 'Workshop of the Clyde. Ships, locomotives, and a huge population living close together.' },
    ],
    photos: [
      { src: '/photos/balmoral.jpg', alt: 'A nineteenth-century painting of Balmoral Castle among trees', caption: 'Balmoral Castle, painted by James Cassie. Public domain, Aberdeen Archives, Gallery and Museums.' },
      { src: '/photos/edinburgh.jpg', alt: 'Edinburgh Castle in 1861 with the noon gun firing', caption: 'Edinburgh Castle firing the noon gun, 1861. Public domain, from the Royal Observatory, Edinburgh.' },
      { src: '/photos/glasgow.jpg', alt: 'Ships and masts on the Clyde at Glasgow in 1881', caption: 'Shipping on the Clyde, 1881, by John Atkinson Grimshaw. Public domain.' },
    ],
  },
  {
    id: 'england',
    name: 'England',
    fill: '#E7B23C',
    years: '1837–1901',
    summary: 'England held most of the people, the money, and the government. London was the largest city on earth by the late century. The north made cloth, iron, and coal.',
    sections: [
      {
        title: 'London',
        text: 'London was a city of extremes on one river. The West End had clubs, parks, and big houses. The East End had docks, workshops, and streets where several families shared a house. In 1858 the Thames smelled so bad that Parliament could not work. That Great Stink pushed Joseph Bazalgette’s sewers. Railways then cut into the city and knocked down poor streets to build stations.',
      },
      {
        title: 'Mills, mines, and workshops',
        text: 'Manchester and the cotton towns spun cloth from American cotton, including cotton grown by enslaved people before 1865. Leeds and Bradford worked wool. Birmingham made metal goods in thousands of small workshops. Newcastle and the northeast shipped coal. A factory town had a different sound from a village: whistles, chimneys, and rows of brick houses.',
      },
      {
        title: 'The countryside',
        text: 'At the start of Victoria’s reign most people still lived in villages. By 1901 most people in Britain lived in towns. Farms fed the cities until cheap grain from overseas made farming harder after the 1870s. Landowners, farmers, and labourers did not live the same life, even in a pretty county.',
      },
      {
        title: 'Children, school, and show',
        text: 'Early on, many children worked in mills, mines, or as servants. Laws slowly raised the age and cut the hours. After about 1870, school boards sent more children into classrooms. In 1851 the Great Exhibition in the Crystal Palace told visitors that British machines led the world. That pride left out the people who dug the coal and the countries Britain ruled.',
      },
    ],
    places: [
      { name: 'London', text: 'Capital, port, and the seat of Parliament. Home of the queen for most of the year, and of more than four million people by 1901 if you count the whole built-up city.' },
      { name: 'Birmingham', text: 'A city of workshops rather than one giant mill. Guns, buttons, jewellery, and later bicycles. On the railway north toward Scotland.' },
    ],
    photos: [
      { src: '/photos/london.jpg', alt: 'Fleet Street in London about 1890, crowded with carriages and walkers', caption: 'Fleet Street, London, about 1890, photographed by James Valentine. Public domain.' },
      { src: '/photos/palace.jpg', alt: 'The Crystal Palace in Hyde Park at the Great Exhibition of 1851', caption: 'The Crystal Palace at the Great Exhibition, 1851, from Dickinson’s pictures, published 1854. Public domain.' },
    ],
  },
  {
    id: 'wales',
    name: 'Wales',
    fill: '#8d4a32',
    years: '1837–1901',
    summary: 'Wales was small in size and huge in coal, slate, and chapel life. Many families spoke Welsh at home. The law courts, and many of the bosses, used English.',
    sections: [
      {
        title: 'Coal valleys',
        text: 'The South Wales coalfield grew through the reign. Rhondda and the other valleys filled with pit villages. Coal went down to Cardiff, Barry, and Newport, and then onto ships for the world. Cardiff was a small town at the start of the century and a major coal port by the end. Miners’ wages rose and fell with the price of coal. Strikes were part of the job.',
      },
      {
        title: 'Slate in the north',
        text: 'Around Bethesda and Blaenau Ffestiniog, men split slate for roofs across Britain. Penrhyn quarry was one of the largest. The work was skilled and dangerous. Quarry owners lived very differently from the men on the galleries. A long strike at Penrhyn began in 1900, at the edge of Victoria’s reign, after years of hard feeling.',
      },
      {
        title: 'Chapel, language, and home',
        text: 'Most Welsh worshippers were Nonconformists: Methodists, Baptists, Independents, not the Church of England. Chapels were the centre of singing, Sunday school, and local argument. The Welsh language was still the home language of a majority in the middle of the reign, then English spread faster in the coalfield as people moved in. In 1847 a government report insulted Welsh education and the language. People remembered it as the Treachery of the Blue Books.',
      },
    ],
    places: [
      { name: 'Cardiff', text: 'The port that shipped South Wales coal. Docks, railways, and a fast-growing town, with grand buildings paid for by coal money.' },
    ],
    photos: [
      { src: '/photos/quarry.jpg', alt: 'The terraces of Penrhyn slate quarry in north Wales', caption: 'Penrhyn slate quarry, near Bethesda, photographed by John Thomas. Public domain, National Library of Wales.' },
      { src: '/photos/cardiff.jpg', alt: 'Ships and cranes at Cardiff docks', caption: 'Cardiff Docks, painted by Lionel Walden. Public domain, Amgueddfa Cymru.' },
    ],
  },
  {
    id: 'ireland',
    name: 'Ireland',
    fill: '#e6c56a',
    years: '1837–1901',
    summary: 'Ireland was part of the United Kingdom from 1801. It had no parliament of its own in Dublin. The Famine, land, and Home Rule shaped the reign.',
    sections: [
      {
        title: 'The Great Famine',
        text: 'From 1845 to about 1852 the potato crop failed, again and again, because of a plant disease. Poor families depended on the potato. About one million people died. More than a million left, for Britain, the United States, Canada, and Australia. Food was still exported from Ireland while people starved. Government help was late, harsh, and too small. Workhouses split families. This was the worst disaster in Victorian Ireland, and it was not a natural event alone. Choices about land and relief made it worse.',
      },
      {
        title: 'After the hunger',
        text: 'The population did not bounce back. Farms slowly got larger. Landlords still owned most of the land, and tenants wanted fair rent, fixity of tenure, and the right to sell their stake in a farm. Those were the “three Fs.” Land leagues and new laws in the 1870s and 1880s began to move ownership toward the farmers. The west stayed poorer. Irish was still spoken strongly along the Atlantic coast.',
      },
      {
        title: 'Dublin and Home Rule',
        text: 'Dublin was a capital without a parliament: law courts, a university, newspapers, grand squares, and terrible tenements. Charles Stewart Parnell and others demanded Home Rule, an Irish parliament for Irish affairs. Gladstone tried to pass it. Parliament in London said no, twice, in Victoria’s reign. The argument did not go away.',
      },
    ],
    places: [
      { name: 'Dublin', text: 'The old capital. Sackville Street, now O’Connell Street, was its wide processional road. Poverty was a few streets away from the shops.' },
    ],
    photos: [
      { src: '/photos/dublin.jpg', alt: 'Sackville Street in Dublin in 1853, with Nelson’s Pillar', caption: 'Sackville Street, Dublin, 1853, by Michael Angelo Hayes. Public domain.' },
    ],
  },
  {
    id: 'ulster',
    name: 'Ulster',
    fill: '#2c6b58',
    years: '1837–1901',
    summary: 'The northeast was still Ireland. The modern border of Northern Ireland was not drawn until 1921. Belfast, linen, and ships made this the industrial part of the island.',
    sections: [
      {
        title: 'Not a separate country yet',
        text: 'In Victoria’s reign Ulster was a province of Ireland inside the United Kingdom. People in the northeast did not live in a different state from Dublin. What was different was work, religion, and politics. The line you can click on this map is the later Northern Ireland boundary, drawn after Victoria’s death. It is here so you can see where Belfast sits.',
      },
      {
        title: 'Linen and ships',
        text: 'Belfast grew on linen and then on iron ships. Harland & Wolff became one of the great yards of the world. Women worked the mills. Men built hulls. The city filled with red-brick streets around the yards. The photograph here shows workers leaving the yard in the early twentieth century. The industry was already huge in the 1890s.',
      },
      {
        title: 'Two political hopes',
        text: 'Many Protestant families, especially in the northeast, wanted to stay tightly joined to Britain. They feared a Dublin parliament would favour Catholics and hurt their trade. Many Catholic families wanted Home Rule or, later, a more complete break. Parades, elections, and sometimes riots carried that argument. It was about power and belonging, not only about church on Sunday.',
      },
    ],
    places: [
      { name: 'Belfast', text: 'A linen town that became a shipbuilding city. Its growth in this reign was closer to Glasgow than to a market town in the Irish west.' },
    ],
    photos: [
      { src: '/photos/belfast.jpg', alt: 'Workers leaving the Harland and Wolff shipyard in Belfast', caption: 'Workers leaving Harland & Wolff, Belfast. Public domain. The photograph is from the years just after 1901. The yard was already a Victorian giant.' },
    ],
  },
]

export const regionById = Object.fromEntries(regions.map((region) => [region.id, region])) as Record<RegionId, RegionInfo>
