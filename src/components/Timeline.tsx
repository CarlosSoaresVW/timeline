import TimelineCard from './TimelineCard';

const timelineData = [
  {
    title: 'O Começo',
    description: 'Onde tudo começou, com um olhar que mudou o mundo.',
    imageUrl: '/imagens/1.jpg',
    side: 'left' as const,
    icon: 'star' as const,
  },
  {
    title: 'Evolução e carisma',
    description: 'Desde o início encantando a todos.',
    imageUrl: '/imagens/2.jpg',
    side: 'right' as const,
  },
  {
    title: 'Agitada',
    description: 'Aqui já devia bater e dar bronca em 80% da sua turma.',
    imageUrl: '/imagens/3.jpg',
    side: 'left' as const,
    icon: 'heart' as const,
  },
  {
    title: 'Encantadora',
    description: 'Talento para modelar se mostrou cedo.',
    imageUrl: '/imagens/4.jpg',
    side: 'right' as const,
    icon: 'star' as const,
  },
  {
    title: 'Sorriso e covinhas',
    description: 'Conjunto que faria eu me apaixonar futuramente',
    imageUrl: '/imagens/5.jpg',
    side: 'left' as const,
  },
  {
    title: 'Espontânea',
    description: 'Sua felicidade se torna contagiante.',
    imageUrl: '/imagens/6 (2).jpg',
    side: 'right' as const,
    icon: 'flower' as const,
  },
  {
    title: 'Força e Delicadeza',
    description: 'O equilíbrio perfeito que define quem você é.',
    imageUrl: '/imagens/7.jpg',
    side: 'left' as const,
    icon: 'heart' as const,
  },
  {
    title: 'Olhar Profundo',
    description: 'Olhos que contam histórias sem dizer uma palavra.',
    imageUrl: '/imagens/8.jpg',
    side: 'right' as const,
    icon: 'star' as const,
  },
  {
    title: 'Momento de Paz',
    description: 'A paisagem se tornou um detalhe aos meus olhos vendo você posar.',
    imageUrl: '/imagens/9.jpg',
    side: 'left' as const,
  },
  {
    title: 'Você Brilha',
    description: 'Você enche de luz qualquer ambiente com seu brilho.',
    imageUrl: '/imagens/10.jpg',
    side: 'right' as const,
    icon: 'flower' as const,
  },
  {
    title: 'Risada Genuína',
    description: 'O som mais bonito que existe no universo.',
    imageUrl: '/imagens/11.jpg',
    side: 'left' as const,
    icon: 'heart' as const,
  },
  {
    title: 'Sonhos Realizados',
    description: 'Cada passo dado rumo ao impossível.',
    imageUrl: '/imagens/12.jpg',
    side: 'right' as const,
    icon: 'star' as const,
  },
  {
    title: 'Compaixão Infinita',
    description: 'O coração que acolhe sem medir esforços.',
    imageUrl: '/imagens/13.jpg',
    side: 'left' as const,
    icon: 'heart' as const,
  },
  {
    title: 'Caminhada ao Pôr do Sol',
    description: 'Beleza compartilhada em silêncio perfeito.',
    imageUrl: '/imagens/14.jpg',
    side: 'right' as const,
  },
  {
    title: 'Sabedoria Natural',
    description: 'A inteligência que vem de dentro, pura e verdadeira.',
    imageUrl: '/imagens/15.jpg',
    side: 'left' as const,
    icon: 'star' as const,
  },
  {
    title: 'Abraço Caloroso',
    description: 'Refúgio seguro em dias difíceis.',
    imageUrl: '/imagens/16.jpg',
    side: 'right' as const,
    icon: 'heart' as const,
  },
  {
    title: 'Luz da Manhã',
    description: 'Recomeço radiante a cada novo dia.',
    imageUrl: '/imagens/17.jpg',
    side: 'left' as const,
  },
  {
    title: 'Dança da Vida',
    description: 'Movimento e graça em harmonia perfeita.',
    imageUrl: '/imagens/18.jpg',
    side: 'right' as const,
    icon: 'flower' as const,
  },
  {
    title: 'Generosidade sem Limites',
    description: 'Dar sem esperar nada em troca.',
    imageUrl: '/imagens/19.jpg',
    side: 'left' as const,
    icon: 'heart' as const,
  },
  {
    title: 'Noite Estrelada',
    description: 'Brilho que ilumina mesmo na escuridão.',
    imageUrl: '/imagens/20.jpg',
    side: 'right' as const,
    icon: 'star' as const,
  },
  {
    title: 'Coragem Silenciosa',
    description: 'Força interior que não precisa gritar para ser notada.',
    imageUrl: '/imagens/21.jpg',
    side: 'left' as const,
  },
  {
    title: 'Enfim 22',
    description: 'A jornada continua, a cada dia que passa mais bela que ontem.',
    imageUrl: '/imagens/22.jpg',
    side: 'right' as const,
    icon: 'flower' as const,
  },
];

export default function Timeline() {
  return (
    <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-24">
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E7B872]/50 via-[#E7B872] to-[#E7B872]/50 transform -translate-x-1/2 hidden md:block timeline-shimmer" />

      <div className="relative">
        {timelineData.map((item, index) => (
          <TimelineCard
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            side={item.side}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
