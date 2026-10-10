import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/beliefs')({
  component: Beliefs,
})

function Beliefs() {
  return (
    <div className="page">
      <h1>Beliefs</h1>
      <p className="lead">Victorians argued about God, fairies, love, and whether the world was getting better. They did not all believe the same thing.</p>

      <section className="card">
        <h2>Church, chapel, and Sunday</h2>
        <p>Many families went to church on Sunday. The Church of England was the official church. In Scotland, most people were Presbyterian.</p>
        <p>Other families went to chapels: Baptists, Methodists, Quakers, and more. Roman Catholics worshipped too, and so did Jewish families and, in port cities, people of other faiths.</p>
        <p>Sunday schools taught reading as well as Bible stories. Charity meant giving money, soup, a bed, or a visit. William and Catherine Booth took preaching into the street with the Salvation Army.</p>
      </section>

      <section className="scotland">
        <strong>A split in Scotland</strong>
        <p>In 1843 Thomas Chalmers led the Disruption. Hundreds of ministers left the national church and formed the Free Church of Scotland. They said landlords should not pick the minister. New churches rose in towns and glens. Faith and power were the same argument.</p>
      </section>

      <section className="panel gold">
        <h2>Family and love</h2>
        <p>Queen Victoria and Prince Albert became the picture of a devoted marriage. They had nine children. When Albert died in 1861, Victoria wore black for the rest of her life. In Scotland she relied on John Brown, a Highland servant and friend. Later she was close to Abdul Karim, an Indian Muslim teacher. People gossiped about both friendships.</p>
        <p>Elizabeth Barrett left a father who forbade marriage and ran away with Robert Browning. Their letters are a famous love story.</p>
        <p>Not every home matched the poem. Charles Dickens and his wife lived apart. John Ruskin and Effie Gray were unhappy, and the marriage ended. Effie later married the painter Millais and had eight children. Coventry Patmore's poem The Angel in the House told women to be sweet and self-forgetting. Many women, including preachers and campaigners, refused that job.</p>
        <p>Oscar Wilde wrote gentle fairy tales and also loved men. The law then sent him to prison. That law was cruel. His wife Constance and their sons suffered as well.</p>
      </section>

      <section className="card">
        <h2>Fairy stories</h2>
        <p>Fairies were not only for babies. Painters filled canvases with them. Richard Doyle drew woods full of winged people. Joseph Noel Paton, in Scotland, painted the quarrel of Oberon and Titania. Edward Burne-Jones painted sleeping princesses and myths.</p>
        <p>George MacDonald, a Scottish minister, wrote The Princess and the Goblin. He thought a fairy tale could teach courage and a loving God without sounding like a lecture. Andrew Lang's Colour Fairy Books put Scottish tales next to stories from many countries. His wife Leonora did much of the work.</p>
        <p>Lewis Carroll's Alice books are dream-stories told like fairy tales. Charles Kingsley's The Water-Babies sends a chimney sweep into a magical world and protests against cruel work. Christina Rossetti's Goblin Market is a poem about magic fruit, temptation, and a sister who saves her sister.</p>
        <p>Arthur Conan Doyle, who invented Sherlock Holmes, also believed the living might hear from the dead. In 1922 he defended photos of fairies taken at Cottingley in 1917. That was after Queen Victoria had died. Two cousins, Elsie Wright and Frances Griffiths, later said they had used paper cut-outs. Doyle had wanted the fairies to be real. A good detective looks at the date and the evidence.</p>
        <p>J. M. Barrie grew up in Kirriemuir in Victorian Scotland. His brother died, and their mother never got over it. Peter Pan, staged in 1904, comes from that childhood wish that a boy might never be lost.</p>
      </section>

      <section className="panel cream">
        <h2>Spirits, science, and doubt</h2>
        <p>Some people held seances and hoped a lost child or husband could speak. Alfred Russel Wallace, who shared Darwin's idea of evolution, believed in spirits. Churches often said that was dangerous nonsense. Both views were Victorian.</p>
        <p>Charles Darwin studied how living things change. His wife Emma trusted God and feared his book might part them after death. They stayed loving. James Clerk Maxwell, in Scotland, thought science and Christian faith fitted together. Philip Henry Gosse tried to force the rocks to match a very literal Bible. His son later wrote that the love was real and the pressure hurt.</p>
        <p>Progress was the belief that railways, lamps, and clean water proved the world was improving. New drains did save lives. Ruling faraway lands did not become fair just because Britain was proud. Mary Kingsley said empire could be arrogant. People already living in those countries had their own families, gods, and laws.</p>
      </section>

      <p className="copy">Read more in People. Try <Link to="/people/$personId" params={{ personId: 'doyle' }}>Arthur Conan Doyle</Link>, <Link to="/people/$personId" params={{ personId: 'macdonald' }}>George MacDonald</Link>, and <Link to="/people/$personId" params={{ personId: 'ebrowning' }}>Elizabeth Barrett Browning</Link>.</p>
    </div>
  )
}
