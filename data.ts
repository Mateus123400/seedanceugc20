import { CourseModule, ProofItem, PainPoint, RecentSale } from './types';

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 'mod-1',
    number: '01',
    title: 'Processo validado de ponta a ponta',
    description: 'O fluxo exato que eu executo, na mesma IA que eu uso, sem teoria nem rodeio.',
    topics: [
      'Setup da infraestrutura e ferramentas essenciais',
      'Passo a passo do fluxo de trabalho completo',
      'Execução em tempo real sem enrolação ou teoria',
      'Padrões operacionais para maximizar velocidade'
    ],
    duration: '2h 15min'
  },
  {
    id: 'mod-2',
    number: '02',
    title: 'Vídeo realista de verdade',
    description: 'Direção de cena, movimento, física, câmera e luz para eliminar a estética de IA de uma vez.',
    topics: [
      'Controle de direção de cena e iluminação realista',
      'Simulação de física e movimentos naturais',
      'Enquadramentos de câmera e lentes de cinema',
      'Remoção completa de artefatos e aparência artificial'
    ],
    duration: '1h 45min'
  },
  {
    id: 'mod-3',
    number: '03',
    title: 'Plataformas de espionagem',
    description: 'Como garimpo os criativos que já estão vendendo e os padrões que se repetem nos melhores resultados.',
    topics: [
      'Mapeamento de criativos campeões e virais',
      'Uso de bibliotecas de anúncios e ferramentas de inteligência',
      'Identificação de padrões visuais e narrativos de alta conversão',
      'Filtros de mineração por engajamento e métricas de retenção'
    ],
    duration: '3h 10min'
  },
  {
    id: 'mod-4',
    number: '04',
    title: 'Curadoria e remodelagem',
    description: 'Como escolher o melhor vídeo de referência e reconstruir a copy no seu contexto sem copiar.',
    topics: [
      'Critérios para selecionar a referência ideal',
      'Desmontagem da estrutura de copy do vídeo campeão',
      'Adaptação do ângulo e mensagem para o seu produto/nicho',
      'Engenharia de ganchos inéditos inspirados em dados'
    ],
    duration: '2h 30min'
  },
  {
    id: 'mod-5',
    number: '05',
    title: 'Edição e finalização',
    description: 'Corte, ritmo, legenda, som e formato vertical prontos para publicar ou subir em anúncio.',
    topics: [
      'Cortes dinâmicos e manutenção do ritmo visual',
      'Sincronização de legendas automáticas e efeitos de texto',
      'Trilha sonora imersiva e efeitos sonoros (SFX)',
      'Exportação otimizada em formato vertical 9:16 (4K)'
    ],
    duration: '2h 50min'
  },
  {
    id: 'mod-6',
    number: '06',
    title: 'IA sem pagar caro',
    description: 'Os caminhos de acesso gratuito e as camadas free que uso para reduzir o custo por vídeo aprovado.',
    topics: [
      'Aproveitamento máximo das camadas gratuitas de cada IA',
      'Estratégias para reduzir drasticamente o custo por vídeo',
      'Rotas alternativas de acesso e créditos diários',
      'Aumento da taxa de aprovação sem desperdiçar geração'
    ],
    duration: '2h 00min'
  }
];

export const PAIN_POINTS: PainPoint[] = [
  {
    id: 'pain-1',
    iconName: 'Bot',
    title: 'Cara de IA',
    description: 'Movimentos travados e vozes robóticas que afastam qualquer chance de conversão real.',
    highlightColor: 'text-[#ffb4ab]'
  },
  {
    id: 'pain-2',
    iconName: 'UserX',
    title: 'Inconsistência',
    description: 'O mesmo personagem muda de rosto a cada cena, quebrando a narrativa do seu conteúdo.',
    highlightColor: 'text-[#c6c6cd]'
  },
  {
    id: 'pain-3',
    iconName: 'CodeXml',
    title: 'Prompt Falho',
    description: 'Horas tentando acertar o comando perfeito enquanto a ferramenta gera resultados bizarros.',
    highlightColor: 'text-[#c6c6cd]'
  },
  {
    id: 'pain-4',
    iconName: 'TimerOff',
    title: 'Tempo Perdido',
    description: 'O que deveria automatizar seu trabalho acaba consumindo mais tempo que gravar você mesmo.',
    highlightColor: 'text-[#c6c6cd]'
  }
];

export const PROOF_ITEMS: ProofItem[] = [
  {
    id: 1,
    title: 'Relatório Trimestral Q1 - Canal de Curiosidades Dark',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNdaaLFcV1rKPq0_rMgT8ZnjTirVWanPO6wrkQmXoYTFlb8nekASjuuMUnW9Sndo3GdK0TBbbfRzmw7zGJG7syQ6xBaAqSKQCKIPisIXg5t9PO7udiSHxwvf18SpqxFs0voZhSch9JAVHQFS2uF_Unc3qZlErB9bfXjyaxfJg9UEEK0v_6ihHctZcRbFFlTWz6PNbEHDGhnUaGrBYZUUpjY3vHmAoeXv8MKbtOZOEibmZdq3YFJnXN0qwpoPkBMRmuDMVG5ORy7bto',
    views: '18.4M Views',
    niche: 'Mistérios & Ciência',
    description: 'Crescimento de +81% de retenção média após implementação do Módulo de Animação Fluida e Roteiros IA.'
  },
  {
    id: 2,
    title: 'Métricas de Crescimento - Canal de Finanças Faceless',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqfP7tMfymXn0tlbdulvt6JDxdNnXxHIwVB5_P7CtsPqrEpzDPT7gLBf1LMxIq6ddYZh1rEL87pCp-6vv6zoBmNGiyH0kQY_1VBPpX119Uf6HEGHuQKTdA-4x2G3Nb8faunfBGEoDMXcg9MNN1fsB4dzHJWaYtkCWEH7ZskFp7BV9C9qLounX4Sa3QeqmluyhS6TuCB2fXD0ZgE2Ws04UJcVRQwWb1zDS5doyohFZArZ0iFQ2JJv7ZZ9yYWnGvNLvrrVIhIHhCLYyo',
    views: '32.1M Views',
    niche: 'Finanças & Negócios',
    description: 'Aumento na eficiência operacional de +85% com a automação de clonagem de voz e edição dinâmica.'
  },
  {
    id: 3,
    title: 'Dashboard de Monetização & Alcance Orgânico',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN4EkmIVELQrmhzkthyT9FLgxYxO52oFaQj8iya8Ygnv0W0wti7fLrX2fEzLHUncBCiHUu3yjLrO5T4JCeblDOQ_qOiR9L5u-LGDrJFpB5XQABVhOInqxLQLsRa5fF6EoIizf_RVzPcntnBA24Huhz1ZLtSW9rLSr5kxVeahDQKT2cpBmWrmdGGZxuWZ1Ozpo5eH_Y20Cs1VpCJFsK9n-co06CjQ0O66srLT-VxBctEKSg_bfhM4RJqRqln7dWywGL-fBAgaHT2ghK',
    views: '45.8M Views',
    niche: 'Histórias Motivacionais',
    description: 'Escala para 4 canais operados simultaneamente por apenas 1 pessoa usando o método Seedance 2.0.'
  },
  {
    id: 4,
    title: 'Desempenho de Campanha Viral de Retenção Maximizada',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOpVsoRk0lMBKYdGr-4H9j5OKcTS8yB-BL33OwoJacCnP2siS3TPmrwstjg_dIhWkx65490zPs5kf92h_iIhAU-w8CsLY90yKIDjKnoizI8fnsDqwXuieMjRynYv5dx5FzOGDd5oxeWpOU5mXxcfsa5huDcfzuUQttCmlJgWt2s8KV7KlbWlr-ccXeveJYdpGiLU8a8LNIVx1nbIc1cIRkf6k8emSKaVWd1SZIc6tDCSzLTzf2niy89NEe2HzfM5541MX7zzLf4vyk',
    views: '52.0M Views',
    niche: 'Tecnologia & Futurismo',
    description: '+2.000 novos clientes e inscritos adquiridos no primeiro trimestre de aplicação do framework.'
  }
];

export const RECENT_SALES: RecentSale[] = [
  { id: '1', name: 'Lucas M.', city: 'São Paulo - SP', timeAgo: 'há 2 minutos', avatarBg: 'bg-[#00ff88]/20 text-[#00ff88]' },
  { id: '2', name: 'Gabriel R.', city: 'Belo Horizonte - MG', timeAgo: 'há 4 minutos', avatarBg: 'bg-[#44f5bd]/20 text-[#44f5bd]' },
  { id: '3', name: 'Carolina S.', city: 'Curitiba - PR', timeAgo: 'há 7 minutos', avatarBg: 'bg-[#60ff99]/20 text-[#60ff99]' },
  { id: '4', name: 'Matheus F.', city: 'Rio de Janeiro - RJ', timeAgo: 'há 11 minutos', avatarBg: 'bg-[#00e479]/20 text-[#00e479]' },
  { id: '5', name: 'Amanda V.', city: 'Porto Alegre - RS', timeAgo: 'há 15 minutos', avatarBg: 'bg-[#44f5bd]/20 text-[#44f5bd]' }
];

export const FAQ_ITEMS = [
  {
    question: 'Eu preciso aparecer nos vídeos?',
    answer: 'Não! O Seedance 2.0 foi desenvolvido 100% focado no modelo Faceless (sem rosto). Você aprenderá a criar avatares, personagens consistentes e narrações ultra-realistas com inteligência artificial.'
  },
  {
    question: 'Preciso de um computador super potente para editar?',
    answer: 'Não. Todas as ferramentas principais utilizadas no treinamento rodam direto na nuvem pelo navegador ou em aplicativos leves para celular e computador.'
  },
  {
    question: 'Não sei nada de edição nem de inteligência artificial. Funciona para mim?',
    answer: 'Sim, totalmente! O método é passo a passo, do nível zero absoluto até o canal monetizado e automatizado. Você receberá os prompts exatos e os modelos de roteiro prontos.'
  },
  {
    question: 'Por quanto tempo terei acesso ao treinamento?',
    answer: 'Ao adquirir o Seedance 2.0 por R$ 127 hoje, você garante ACESSO VITALÍCIO, incluindo todas as futuras atualizações de ferramentas e módulos da comunidade.'
  },
  {
    question: 'Como funciona a garantia de 7 dias?',
    answer: 'Você pode testar todo o treinamento por 7 dias corridos. Se sentir que o método não é para você, basta nos enviar um único e-mail e devolveremos 100% do seu dinheiro, sem burocracia.'
  }
];
