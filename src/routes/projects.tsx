import { createFileRoute } from '@tanstack/react-router'
import { Picture } from '../components/Picture'
import { useT } from '../i18n/language'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

type Task = { title: string; time: string; steps: string[] }

const stages: { id: string; years: string; age: string; note: string; image: string; imageAlt: string; alone: Task[]; team: Task[] }[] = [
  {
    id: 'P1',
    years: 'Age 5-6',
    age: 'About age 5–6',
    note: 'A grown-up stays close. Talking counts as much as writing.',
    image: '/art/homes.jpg',
    imageAlt: 'A big house beside a small home, shown in full',
    alone: [
      {
        title: 'Two homes',
        time: 'One sitting',
        steps: [
          'Draw a big house and a small home on one page.',
          'Say who might live in each one.',
          'Point to one thing that is the same.',
        ],
      },
      {
        title: 'A paper crown',
        time: 'One sitting',
        steps: [
          'Make a paper crown.',
          'Say one true thing: Queen Victoria ruled from 1837 to 1901.',
          'Say one more: she loved Scotland and stayed at Balmoral.',
        ],
      },
      {
        title: "Balmoral in the hills",
        time: "One sitting",
        steps: [
          "Draw a castle with hills behind it.",
          "Say: this is Balmoral, in Scotland.",
          "Say one more true thing: Queen Victoria liked to stay there.",
        ],
      },
      {
        title: "Sunday bells",
        time: "One sitting",
        steps: [
          "Draw a church or a chapel.",
          "Say that many families went there on Sunday.",
          "Point to one person in your drawing and say who they might be.",
        ],
      },
      {
        title: "A lamp for the street",
        time: "One sitting",
        steps: [
          "Draw a street with one lamp.",
          "Say that gas lamps lit many streets.",
          "Say whether the street feels safe or dark, and why.",
        ],
      },

    ],
    team: [
      {
        title: 'Our street',
        time: 'One afternoon',
        steps: [
          'Each child makes one paper house.',
          'Put the big houses at one end and the small homes at the other.',
          'Walk the street and say what you notice. No one laughs at a small home.',
        ],
      },
      {
        title: 'The train arrives',
        time: 'One afternoon',
        steps: [
          'One group is the train. One group waits at a Scottish station.',
          'Act the arrival. Someone calls “Edinburgh” or “Glasgow”.',
          'Tell the class one sound you would hear.',
        ],
      },
      {
        title: "Build Balmoral",
        time: "One afternoon",
        steps: [
          "Use boxes to make one castle.",
          "Put it on green paper for the Highlands.",
          "Tell the class one true thing about Queen Victoria and Scotland.",
        ],
      },
      {
        title: "The Clyde boats",
        time: "One afternoon",
        steps: [
          "Each child folds or draws one boat.",
          "Put the boats on a blue strip called the Clyde.",
          "Say that Glasgow built ships. Say that your boat is only a model.",
        ],
      },

    ],
  },
  {
    id: 'P2',
    years: 'Age 6-7',
    age: 'About age 6–7',
    note: 'Short sentences. Pictures can hold the idea.',
    image: '/art/inventions.jpg',
    imageAlt: 'A stamp, a camera, water, and a lamp, shown in full',
    alone: [
      {
        title: 'My Penny Black',
        time: 'One sitting',
        steps: [
          'Draw a stamp. Put a face on it and write 1d.',
          'The real Penny Black came out in 1840.',
          'Tell a partner why a cheap stamp helped families write letters.',
        ],
      },
      {
        title: 'Balmoral card',
        time: 'One sitting',
        steps: [
          'Draw a castle in the hills.',
          'Write three sentences. Use the words Scotland, queen, and hills.',
          'Read it aloud.',
        ],
      },
      {
        title: "A letter home",
        time: "One sitting",
        steps: [
          "Draw a stamp and a short letter.",
          "Write or say one sentence a child might send to Scotland.",
          "Tell a partner why a penny stamp mattered.",
        ],
      },
      {
        title: "Church or chapel",
        time: "One sitting",
        steps: [
          "Draw where a family might go on Sunday.",
          "Write the words church or chapel.",
          "Say one kind thing people did to help a neighbour.",
        ],
      },
      {
        title: "Nine children",
        time: "One sitting",
        steps: [
          "Draw Queen Victoria and Prince Albert.",
          "Add nine small figures for their children.",
          "Say the years 1837 and 1901 out loud.",
        ],
      },

    ],
    team: [
      {
        title: 'Class post office',
        time: 'One afternoon',
        steps: [
          'Set up a table with a sign that says Post.',
          'Each child writes a short letter to someone in another group.',
          'Use one counter as a penny. A post worker delivers it.',
          'Say how this is like the Penny Post, and how it is only a game.',
        ],
      },
      {
        title: 'Railway to Scotland',
        time: 'One afternoon',
        steps: [
          'On a long strip of paper, mark London, Birmingham, Edinburgh, and Glasgow.',
          'Draw the train moving north.',
          'Colour Scotland at the top. Tell the class why the line matters.',
        ],
      },
      {
        title: "Lamp street",
        time: "One afternoon",
        steps: [
          "Each child makes one paper lamp.",
          "Stand the lamps along a paper street.",
          "Say what a night walk was like before electric bulbs.",
        ],
      },
      {
        title: "Train names",
        time: "One afternoon",
        steps: [
          "Make station cards for London, Edinburgh, and Glasgow.",
          "Walk the cards from south to north.",
          "Stop at Edinburgh and say one thing the city had: schools, publishers, or the New Town.",
        ],
      },

    ],
  },
  {
    id: 'P3',
    years: 'Age 7-8',
    age: 'About age 7–8',
    note: 'Use the People pages. Copy facts. Do not invent a new life story.',
    image: '/photos/edinburgh.jpg',
    imageAlt: 'Edinburgh Castle in 1861, the whole picture',
    alone: [
      {
        title: 'Scottish fact file',
        time: 'Two sittings',
        steps: [
          'Choose one person: Bell, Livingstone, Slessor, Stevenson, Hardie, MacDonald, or Lang.',
          'Write their name, job, and one family fact.',
          'Write one faith fact, or say if the page does not give one.',
          'Add one sentence that begins “Scotland matters here because…”.',
        ],
      },
      {
        title: 'Tartan is not the whole story',
        time: 'One sitting',
        steps: [
          'Colour a tartan square.',
          'Under it, write: Victorians liked a Highland holiday look.',
          'Add one real job from Glasgow or Edinburgh that tartan does not show.',
        ],
      },
      {
        title: "Clyde label",
        time: "One sitting",
        steps: [
          "Draw a ship. Write River Clyde and Glasgow on the label.",
          "Write one sentence: Glasgow built ships and engines.",
          "Read the sentence to a partner. Change any word that is not true.",
        ],
      },
      {
        title: "1843 in two sentences",
        time: "One sitting",
        steps: [
          "Read the Beliefs note about the Disruption.",
          "Write two sentences. Name Thomas Chalmers and Scotland.",
          "Say what the ministers wanted: a congregation should choose its minister.",
        ],
      },
      {
        title: "Map words",
        time: "One sitting",
        steps: [
          "Write Scotland, England, Wales, and Ireland on a page.",
          "Add London and Edinburgh in the right countries.",
          "Check the Places map before you finish.",
        ],
      },

    ],
    team: [
      {
        title: 'Tabletop museum',
        time: 'Two afternoons',
        steps: [
          'Each pair chooses one object: lamp, stamp, ship, book, or loaf.',
          'Make or draw it. Write a label: what it is, who used it, and one careful sentence.',
          'Include at least one Scottish object, such as a Clyde ship or a New Town house.',
          'Invite another class to walk the table and ask one question.',
        ],
      },
      {
        title: 'Glasgow and Edinburgh',
        time: 'One afternoon',
        steps: [
          'Team A prepares Glasgow: ships and engines.',
          'Team B prepares Edinburgh: schools, publishers, and the New Town.',
          'Each team speaks for one minute.',
          'The class says one way the cities were different, and one way they both belonged to Victorian Scotland.',
        ],
      },
      {
        title: "New Town walk",
        time: "One afternoon",
        steps: [
          "Plan a pretend walk through Edinburgh’s New Town.",
          "One child is the guide. Others ask one question each.",
          "The guide may use only facts from this site.",
        ],
      },
      {
        title: "Two Sundays",
        time: "One afternoon",
        steps: [
          "One group acts out a church Sunday. One group acts out a chapel Sunday.",
          "Each group says who is there and what they do.",
          "End by saying that Victorians did not all worship in the same way.",
        ],
      },

    ],
  },
  {
    id: 'P4',
    years: 'Age 8-9',
    age: 'About age 8–9',
    note: 'Keep the diary kind. Do not joke about hunger or dangerous work.',
    image: '/photos/balmoral.jpg',
    imageAlt: 'Balmoral Castle, the whole painting',
    alone: [
      {
        title: 'One day diary',
        time: 'Two sittings',
        steps: [
          'Choose a mill child or a Highland crofter’s child.',
          'Write morning, midday, and night.',
          'Include food, work or school, and one adult.',
          'End with one sentence: what was hard, and what you are not sure about.',
        ],
      },
      {
        title: 'Label the real map',
        time: 'One sitting',
        steps: [
          'Use the blank map on the Work page, or a fresh copy.',
          'Mark Scotland, England, Wales, Ireland, London, Edinburgh, Glasgow, and Balmoral.',
          'Write one sentence about why Balmoral is in the Highlands, not in London.',
        ],
      },
      {
        title: "Albert’s years",
        time: "One sitting",
        steps: [
          "Make a short line: 1840, 1851, 1861.",
          "Write what happened: the wedding, the Great Exhibition, Albert’s death.",
          "Add one sentence about Victoria wearing black after 1861.",
        ],
      },
      {
        title: "Sunday school card",
        time: "One sitting",
        steps: [
          "Make a card a Sunday school child might take home.",
          "Put one Bible-story picture and one sentence about reading.",
          "Say how this is different from a whole day at work.",
        ],
      },
      {
        title: "Tartan, true or not",
        time: "One sitting",
        steps: [
          "Write one true sentence about tartan and holidays.",
          "Write one false sentence, then cross it out.",
          "Tell a partner why the Highland look was fashion, not the whole of Scottish life.",
        ],
      },

    ],
    team: [
      {
        title: 'A Clyde ship',
        time: 'Two afternoons',
        steps: [
          'Build a ship from boxes. Label bow, stern, and funnel.',
          'Write who might build it and who might sail on it.',
          'Add a small sign: Glasgow, River Clyde.',
          'Tell the class one true limit of your model. It is not a real ship.',
        ],
      },
      {
        title: 'The Disruption, told fairly',
        time: 'Two afternoons',
        steps: [
          'Read the Scotland note on Beliefs about 1843.',
          'One group stays in the national church. One group walks out with Thomas Chalmers.',
          'Each group says what it wanted, in two sentences, with no villains.',
          'End by saying this was a fight about faith and power in Scotland.',
        ],
      },
      {
        title: "Scotland at the Exhibition",
        time: "Two afternoons",
        steps: [
          "Set a table for 1851.",
          "Show one Scottish thing: a Clyde engine, a Highland picture, or a book from Edinburgh.",
          "Visitors must hear the year 1851 and the words Crystal Palace.",
        ],
      },
      {
        title: "Fact choir",
        time: "One afternoon",
        steps: [
          "Each child speaks one short true sentence.",
          "At least two sentences must be about Scotland.",
          "The class repeats only the sentences everyone can check on this site.",
        ],
      },

    ],
  },
  {
    id: 'P5',
    years: 'Age 9-10',
    age: 'About age 9–10',
    note: 'Use evidence from this site. If you are not sure, write “the page does not say”.',
    image: '/photos/dublin.jpg',
    imageAlt: 'Sackville Street, Dublin, in 1853, shown in full',
    alone: [
      {
        title: 'Family and faith',
        time: 'Two sittings',
        steps: [
          'Choose two people. One must be Scottish, or one story must happen in Scotland.',
          'Make a chart: family, love, faith, one hard fact.',
          'Write a paragraph that compares them. Do not say one home was simply better.',
        ],
      },
      {
        title: 'A careful letter from Ireland',
        time: 'Two sittings',
        steps: [
          'Read the Ireland section on Places.',
          'Write as a child after the potato crop has failed.',
          'Include hunger, family, and the fact that help was too small.',
          'Do not add gory detail. Do not blame a whole people. Say what you know and what you are guessing.',
        ],
      },
      {
        title: "Check the fairy date",
        time: "One sitting",
        steps: [
          "Write 1901 and 1917 on a line.",
          "Mark the year Victoria died and the year of the Cottingley photographs.",
          "Write one sentence: the fairy photos came after the Victorian age.",
        ],
      },
      {
        title: "Four lines on a family",
        time: "Two sittings",
        steps: [
          "Choose one person from the People pages.",
          "Write who they were, whom they loved, what they believed, and one Scottish link if the page has one.",
          "If the page has no Scottish link, write “This life was not mainly in Scotland.”",
        ],
      },
      {
        title: "A fair sentence on empire",
        time: "One sitting",
        steps: [
          "Read what Mary Kingsley said about empire.",
          "Write one sentence that shows pride in invention and one that shows harm.",
          "Do not write that nobody lived in the lands Britain ruled.",
        ],
      },

    ],
    team: [
      {
        title: 'Exhibition stall',
        time: 'Two or three afternoons',
        steps: [
          'Each group picks one invention: stamp, railway, photograph, sewer, or telephone.',
          'Card 1: what it did for daily life.',
          'Card 2: who did the hard work, including people outside Britain if the cotton or the empire is part of the story.',
          'One stall must be Scottish. Bell’s telephone or a Clyde engine will do.',
          'Visitors ask one question. The group must answer from the cards, not from a wild guess.',
        ],
      },
      {
        title: 'Was the empire fair?',
        time: 'Two afternoons',
        steps: [
          'Two teams. A chair keeps the talk slow and kind.',
          'One team lists what Victorians called progress.',
          'The other lists who was ruled, moved, or left out.',
          'Scotland is not an escape from the question. Say how Scottish soldiers, missionaries, and shipyards were part of the empire too.',
          'End with a class sentence that can hold two truths.',
        ],
      },
      {
        title: "Eight quiz cards",
        time: "Two afternoons",
        steps: [
          "Write eight questions with four answers each.",
          "Two questions must be about Scotland. Two must be about family or faith.",
          "Another group tries the cards. Fix any question that is only a trick.",
        ],
      },
      {
        title: "One room or many",
        time: "One afternoon",
        steps: [
          "Two teams describe a rich home and a poor home.",
          "Use facts, not jokes about hunger.",
          "End with one way Sunday might feel different in each house.",
        ],
      },

    ],
  },
  {
    id: 'P6',
    years: 'Age 10-11',
    age: 'About age 10–11',
    note: 'Dates matter. A story can be famous and still be untrue.',
    image: '/photos/london.jpg',
    imageAlt: 'Fleet Street about 1890, the whole photograph',
    alone: [
      {
        title: 'Fairy or fact?',
        time: 'Two or three sittings',
        steps: [
          'Read the fairy section on Beliefs and the page for Arthur Conan Doyle.',
          'Make a timeline: Victoria dies in 1901. Cottingley photos in 1917. Doyle’s fairy book in 1922.',
          'Write what Doyle wanted to be true.',
          'Write what Elsie and Frances later said.',
          'Add one Scottish fairy writer, MacDonald or Lang, and say how a story book is different from a claimed photograph.',
        ],
      },
      {
        title: 'Look at one photograph',
        time: 'Two sittings',
        steps: [
          'Choose one picture on Places.',
          'List five things you can actually see.',
          'List three things the picture cannot tell you.',
          'Write the credit and the date, if the caption gives one.',
          'Say whether it is a photograph or a painting, and why that matters.',
        ],
      },
      {
        title: "Chalmers in a paragraph",
        time: "Two sittings",
        steps: [
          "Write one paragraph about Thomas Chalmers and 1843.",
          "Include the Free Church of Scotland and the word congregation.",
          "Read it aloud and cut any sentence you cannot support.",
        ],
      },
      {
        title: "Two nurses",
        time: "Two sittings",
        steps: [
          "Compare Florence Nightingale and Mary Seacole.",
          "Write what each did, and where Mary Seacole came from.",
          "Do not say they did the same job in the same place.",
        ],
      },
      {
        title: "Caption a photograph",
        time: "One sitting",
        steps: [
          "Choose one photograph on this site.",
          "Write a caption with a place and, if the page gives it, a year.",
          "Add one sentence a careful child should not guess.",
        ],
      },

    ],
    team: [
      {
        title: 'A newspaper for 1890',
        time: 'Three afternoons',
        steps: [
          'Choose Glasgow, Cardiff, or Dublin.',
          'Jobs: reporter, picture editor, headline writer, fact checker.',
          'Four short pieces: work, home, faith, and one problem.',
          'The checker strikes out anything the class cannot support from this site or a book the teacher provides.',
          'If you chose Glasgow, the Clyde must be in the paper. If you chose Dublin, the Famine is a memory, not the news of that week. Say so.',
        ],
      },
      {
        title: 'Three cities, one argument',
        time: 'Two afternoons',
        steps: [
          'Groups take Dublin, Belfast, and London.',
          'Each writes what many people there hoped for near the end of Victoria’s reign.',
          'Remember: Northern Ireland was not a separate state yet.',
          'Meet and compare. Where do the hopes clash? Where do families in all three cities still want the same things?',
        ],
      },
      {
        title: "A paper for 1843",
        time: "Two afternoons",
        steps: [
          "Make a one-page newspaper about the Disruption.",
          "Include a headline, a picture, and two short reports.",
          "A fact checker marks anything that is not on this site.",
        ],
      },
      {
        title: "Fairy evidence",
        time: "Two afternoons",
        steps: [
          "One side argues that Doyle wanted the fairies to be real.",
          "The other side shows the date 1917 and the paper cut-outs.",
          "The class writes a verdict in three sentences.",
        ],
      },

    ],
  },
  {
    id: 'P7',
    years: 'Age 11-12',
    age: 'About age 11–12',
    note: 'This is the year to hold a hard idea without flattening it.',
    image: '/photos/glasgow.jpg',
    imageAlt: 'Shipping on the Clyde in 1881, the whole painting',
    alone: [
      {
        title: 'Progress was real, and it was not fair',
        time: 'A week of short sittings',
        steps: [
          'Plan four parts: sewers or clean water, school, empire, and one Scottish example.',
          'The Scottish example can be Glasgow’s water, the Clyde, the Disruption, or the Clearances.',
          'Each part needs one fact and one limit on that fact.',
          'End with your own sentence. It may not be “everything got better”.',
          'Read it to a partner. They mark any claim that has no fact beside it.',
        ],
      },
      {
        title: 'A person you do not already love',
        time: 'A week of short sittings',
        steps: [
          'Pick someone you have not studied before.',
          'Cover the story, family and love, and faith.',
          'Add the hard part: a failure, a cruel law, a sad home, or a belief you do not share.',
          'Say what a child in 1890 might have admired, and what you question now.',
          'List what this website does not know.',
        ],
      },
      {
        title: "A cruel law",
        time: "Two sittings",
        steps: [
          "Read the lines about Oscar Wilde on the Beliefs page.",
          "Write what the law did, and who else suffered.",
          "Keep the tone serious. Do not turn a prison story into a joke.",
        ],
      },
      {
        title: "Darwin and Emma",
        time: "Two sittings",
        steps: [
          "Write what Charles Darwin studied.",
          "Write what worried Emma, and say that they stayed loving.",
          "Add one sentence on Alfred Russel Wallace, who shared the idea.",
        ],
      },
      {
        title: "Progress, with a limit",
        time: "Two sittings",
        steps: [
          "List three changes that saved or eased lives: trains, lamps, or drains.",
          "List one way empire was not fair.",
          "Close with a sentence that can hold both ideas.",
        ],
      },

    ],
    team: [
      {
        title: 'Museum of Victorian Scotland',
        time: 'A week',
        steps: [
          'Four panels: Highlands, Glasgow, Edinburgh, and the church split.',
          'Each team writes 120 to 180 words, chooses one picture or drawing, and prepares a two-minute tour.',
          'The Highlands panel must include both Balmoral’s holiday picture and the Clearances.',
          'A fifth child, or the teacher, listens as a visitor and asks for the source of one claim.',
          'Leave a comment card: one thing the museum still leaves out.',
        ],
      },
      {
        title: 'Write a quiz for another class',
        time: 'Two or three afternoons',
        steps: [
          'Write eight questions. Each has four answers and one that is clearly right.',
          'At least two questions are about Scotland.',
          'At least two are about family, faith, or a fairy story, and the right answer must be checkable.',
          'No trick spelling. No question whose answer is only “the poor were sad”.',
          'Try the quiz on another group. If two teams tie, play one sudden-death question.',
          'Fix any question that good readers still miss for an unfair reason.',
        ],
      },
      {
        title: "Teach a younger class",
        time: "Two afternoons",
        steps: [
          "Choose one true story for Age 5-6.",
          "Tell it in short sentences. Include Scotland once.",
          "Ask the listeners one question with a checkable answer.",
        ],
      },
      {
        title: "Labels for a Scottish case",
        time: "Two afternoons",
        steps: [
          "Make four museum labels: Balmoral, the Clyde, the New Town, and 1843.",
          "Each label has a fact and a limit: what the label does not prove.",
          "A visitor from another team must find one missing fact.",
        ],
      },

    ],
  },
]

function Projects() {
  const t = useT()
  return (
    <div className="page">
      <h1>{t('Projects')}</h1>
      <p>{t('Work for Age 5-12. Individual means you. Team means a group. Scotland is part of every stage.')}</p>
      <nav className="chips" aria-label="Age groups">
        {stages.map((stage) => (
          <a key={stage.id} className="chip" href={`#${stage.id}`}>{t(stage.years)}</a>
        ))}
      </nav>
      {stages.map((stage) => (
        <section key={stage.id} id={stage.id} className="card">
          <p className="tag">{t(stage.age)}</p>
          <h2>{t(stage.years)}</h2>
          <Picture src={stage.image} alt={stage.imageAlt} />
          <p>{t(stage.note)}</p>
          <div className="grid-2">
            <div>
              <h3>{t('Individual')}</h3>
              {stage.alone.map((task) => (
                <TaskCard key={task.title} task={task} />
              ))}
            </div>
            <div>
              <h3>{t('Team')}</h3>
              {stage.team.map((task) => (
                <TaskCard key={task.title} task={task} />
              ))}
            </div>
          </div>
        </section>
      ))}
      <aside className="scotland">
        <strong>{t('Scotland in the projects')}</strong>
        <p>{t('Balmoral, the Clyde, Edinburgh’s New Town, and the church split in 1843 are not extras. If a project forgets Scotland, it is not finished.')}</p>
      </aside>
    </div>
  )
}

function TaskCard({ task }: { task: Task }) {
  const t = useT()
  return (
    <article className="panel cream">
      <h3>{t(task.title)}</h3>
      <p className="tag">{t(task.time)}</p>
      <ol>
        {task.steps.map((step) => (
          <li key={step}>{t(step)}</li>
        ))}
      </ol>
    </article>
  )
}
