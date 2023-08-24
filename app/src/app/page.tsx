import Blog from "./components/Blog";
import Card, { CardProps } from "./components/Card";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";

const cards: CardProps[] = [
  {
    title: 'Use Cases',
    description: "Our authenticity protocol is designed to cater to various industries such as retail, finance, digital media, and more.",
    image: '/tags.png',
    button: 'Discover +100 cases',
    color: '#E7E0EB',
    url: '/cases'
  },
  {
    title: 'Innovation with Digital Scratchable Cards',
    description: "We're creating an engaging and intuitive way to verify authenticity.",
    image: '/card.png',
    button: 'View Digital Scratchable',
    color: '#DFEFD7',
    url: '/innovation'
  },
  {
    title: 'Reward your communnity using POAPs',
    description: "",
    image: '/people.png',
    button: 'View Digital Scratchable',
    color: '#D1EAFA',
    url: '/poaps'
  },
  {
    title: 'Integration of Phala Network',
    description: "Leveraging Phala Network's capabilities.",
    image: '/phala.png',
    button: 'View Digital Scratchable',
    color: '#FAE5D1',
    url: '/phala'
  },
]

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="w-full flex flex-col gap-20 mt-20">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <Roadmap />
      <Blog />
      <FAQ/>
    </div>
  )
}
