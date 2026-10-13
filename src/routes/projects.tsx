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
    years: 'Primary 1',
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
    ],
  },
  {
    id: 'P2',
    years: 'Primary 2',
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
    ],
    team: [
      {
        title: 'Class post office',
        time: 'One afternoon',
        steps: [
          'Set up a table with a sign that says Post.',
          'Each child writes a short letter to someone in another group.',
          'Pay one counter as a penny. A post worker delivers it.',
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
    ],
  },
  {
    id: 'P3',
    years: 'Primary 3',
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
          'The class says one way the cities were different and one way both were Victorian Scotland.',
        ],
      },
    ],
  },
  {
    id: 'P4',
    years: 'Primary 4',
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
    ],
  },
  {
    id: 'P5',
    years: 'Primary 5',
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
    ],
  },
  {
    id: 'P6',
    years: 'Primary 6',
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
          'If you chose Glasgow, the Clyde must be in the paper. If you chose Dublin, the Famine is memory, not the news of that week. Say so.',
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
    ],
  },
  {
    id: 'P7',
    years: 'Primary 7',
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
          'Leave a comments card: one thing the museum still leaves out.',
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
    ],
  },
]

function Projects() {
  const t = useT()
  return (
    <div className="page">
      <h1>{t('Projects')}</h1>
      <p>{t('Work for Primary 1 to Primary 7. Individual means you. Team means a group. Scotland is part of every stage.')}</p>
      <nav className="chips" aria-label="Primary stages">
        {stages.map((stage) => (
          <a key={stage.id} className="chip" href={`#${stage.id}`}>{stage.id}</a>
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
