import { SlideData, SlideType, Topic } from './types';

export const LANDING_TOPICS: Topic[] = [
  {
    title: "Environnement et Énergie",
    questions: [
      { 
        id: 'energy', 
        label: "Consommation énergétique massive", 
        iconName: 'zap'
      },
      { 
        id: 'carbon', 
        label: "Empreinte carbone", 
        iconName: 'cloud'
      },
      { 
        id: 'water', 
        label: "Consommation d'eau", 
        iconName: 'droplets'
      },
      { 
        id: 'waste', 
        label: "Déchets électroniques", 
        iconName: 'trash'
      }
    ]
  }
];

export const SLIDE_SETS: Record<string, SlideData[]> = {
  energy: [
    {
        id: 3,
        type: SlideType.SECTION,
        title: "Énergie",
        subtitle: "Chapitre 1",
        content: "",
        icon: "zap"
    },
    {
        id: 4,
        type: SlideType.TEXT_IMAGE_SPLIT,
        title: "L'Ogresse Énergétique",
        subtitle: "Le Problème",
        content: "L'Intelligence Artificielle a un appétit féroce.<br/><br/>Entraîner un seul grand modèle de langage (comme GPT-3) a consommé autant d'énergie que 120 voitures américaines pendant un an.<br/><br/> <b>La Peur :</b> Avec la multiplication des usages, nous craignons une explosion de la demande électrique mondiale qui annulerait tous nos efforts de sobriété.<br/><br/>Comment sauver le climat si nos machines dévorent toute notre électricité ?",
        source: "Université du Massachusetts, Amherst (2019)",
        sourceUrl: "https://arxiv.org/abs/1906.02243",
        imageUrl: "https://raw.githubusercontent.com/VieiraHenrique/public_images/refs/heads/main/cars3.jpg"
    },
    {
        id: 7,
        type: SlideType.TEXT_GRAPH_SPLIT,
        title: "L'Échelle de l'Électricité",
        subtitle: "La Nuance",
        content: "Avant de céder à la panique, il est nécessaire de mettre en perspective la réelle consommation de l'IA en ce moment dans le monde.<br/><br/>En réalité, l'entraînement et l'usage des modèles ne représentent qu'une goutte d'eau (0,05 %) dans l'océan électrique. Avec 25 TWh annuels, l'IA reste bien inférieure à des usages domestiques triviaux.<br/><br/><b>Ce n'est en aucun cas nier le problème, qui est bien réel</b>. Mais la nuance est essentielle.",
        sources: [
            { text: "IAI (Aluminium)", url: "https://international-aluminium.org/statistics/primary-aluminium-smelting-energy-intensity/" },
            { text: "IEA (Internet)", url: "https://www.iea.org/energy-system/buildings/data-centres-and-data-transmission-networks" },
            { text: "EIA (Clim/Sèche-linges)", url: "https://www.eia.gov/consumption/residential/" },
            { text: "CBECI (Bitcoin)", url: "https://ccaf.io/cbnsi/cbeci" },
            { text: "BCE (IA)", url: "https://www.ecb.europa.eu/press/economic-bulletin/focus/2025/html/ecb.ebbox202502_03~8eba688e29.en.html" }
        ],
        graphType: 'bar',
        graphTitle: "Consommation Électrique Annuelle (TWh)",
        graphData: [
        { name: 'Aluminium (Monde)', value: 1000, color: '#94a3b8' },
        { name: 'Internet (Monde)', value: 800, color: '#3b82f6' },
        { name: 'Appareils électroniques en veille (Monde)', value: 400, color: '#f43f5e' },
        { name: 'Climatisation (USA)', value: 260, color: '#f59e0b' },
        { name: 'Bitcoin (Monde)', value: 150, color: '#8b5cf6' },
        { name: 'Sèche-linges (USA)', value: 60, color: '#f97316' },
        { name: 'IA (Monde)', value: 25, color: '#10b981' },
        ]
    },
    {
        id: 5,
        type: SlideType.TEXT_GRAPH_SPLIT,
        title: "Le Découplage Invisible",
        subtitle: "La Réalité",
        content: "Mais avec le hype, la consommation ne fait qu'augmenter !<br/><br/> Cependant, grâce à l'amélioration constante du matériel (Loi de Koomey), nous faisons \"plus avec moins\" (efficience) et ce de manière consistante au long des années.<br/><br/><strong>La Preuve :</strong> Entre 2010 et 2020, le trafic Internet mondial a été multiplié par 15 (1500%). Le nombre d'utilisateurs a doublé.<br/><br/>Pourtant, la consommation électrique des Data Centers est restée quasi-plate (+10 %).<br/><br/>L'IA paie sa propre dette énergétique par l'efficacité.",
        source: "Agence Internationale de l'Énergie (IEA), 2020",
        sourceUrl: "https://www.iea.org/energy-system/buildings/data-centres-and-data-transmission-networks",
        graphType: 'area',
        graphTitle: "Augmentation en pourcentage du trafic internet et de la consommation d'énergie",
        graphData: [
        { name: '2010', traffic: 100, energy: 100 },
        { name: '2012', traffic: 300, energy: 102 },
        { name: '2014', traffic: 600, energy: 104 },
        { name: '2016', traffic: 950, energy: 106 },
        { name: '2018', traffic: 1300, energy: 108 },
        { name: '2020', traffic: 1500, energy: 110 },
        ],
        graphKeys: [
            { key: 'traffic', color: '#3b82f6', label: 'Trafic Internet (x15 - 1500%) ' },
            { key: 'energy', color: '#10b981', label: 'Conso. Énergie (+10%)' }
        ]
    },
    {
        id: 11,
        type: SlideType.TEXT_GRAPH_SPLIT,
        title: "Le Retour sur Investissement",
        subtitle: "Carbon Handprint",
        content: "De plus, l'IA n'est pas une \"dépense\" d'énergie (comme un sèche-linge), c'est un \"investissement\".<br/><br/> L'énergie qu'elle consomme peut servir à réduire drastiquement le gaspillage dans les secteurs les plus polluants (transport, agriculture, industrie).<br/><br/><strong>La Preuve Chiffrée :</strong> Selon le Boston Consulting Group (BCG), l'IA a le potentiel de réduire les émissions mondiales de gaz à effet de serre de 5 à 10 % d'ici 2030, alors qu'elle ne représente qu'une fraction de pourcent des émissions.<br/><br/><em>Exemple concret :</em> Google utilise l'IA pour optimiser le refroidissement de ses propres serveurs, réduisant la facture énergétique de 40 %. Imaginez cela dans le cadre de villes entières, pays, continents...",
        sources: [
            { text: "BCG (Climate Change)", url: "https://web-assets.bcg.com/ff/d7/90b70d9f405fa2b67c8498ed39f3/ai-for-the-planet-bcg-report-july-2022.pdf" },
            { text: "Google DeepMind (Cooling)", url: "https://deepmind.google/discover/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-by-40/" }
        ],
        graphType: 'bar',
        graphTitle: "Impact IA sur les Émissions Mondiales (2030)",
        graphData: [
            { name: 'Empreinte Carbone IA (Coût ~0.5%)', value: 0.5, color: '#f43f5e' },
            { name: 'Réduction possible (Gain 5-10%)', value: 10, color: '#10b981' }
        ]
    },
    {
        id: 12,
        type: SlideType.TEXT_GRAPH_SPLIT,
        title: "L'Architecte de la Transition",
        subtitle: "Le Smart Grid",
        content: "Au-delà de l'efficacité, l'IA rend la transition verte possible.<br/><br/>Gérer l'instabilité du solaire et de l'éolien dépasse les capacités humaines. L'IA est le seul <b>chef d'orchestre</b> capable d'équilibrer le réseau (Smart Grid) en temps réel.<br/><br/>Selon le Forum Économique Mondial (2024), elle est le catalyseur indispensable pour intégrer les renouvelables.<br/><br/>Nous consommons un peu d'énergie de calcul pour pouvoir enfin cesser de brûler massivement du carbone.",
        source: "World Economic Forum (2024)",
        sourceUrl: "https://www.weforum.org/agenda/2024/02/ai-energy-transition-efficiency/",
        graphType: 'bar',
        graphTitle: "Capacité d'intégration des Renouvelables au Réseau",
        graphData: [
            { name: 'Réseau Classique (Instable)', value: 35, color: '#64748b' },
            { name: 'Smart Grid + IA (Optimisé)', value: 90, color: '#10b981' }
        ]
    }
  ],
  carbon: [
    {
        id: 8,
        type: SlideType.SECTION,
        title: "Carbone",
        subtitle: "Chapitre 2",
        content: "",
        icon: "cloud"
    },
    {
        id: 9,
        type: SlideType.TEXT_GRAPH_SPLIT,
        title: "Les Vrais Coupables",
        subtitle: "Le Camembert Mondial",
        content: `
            <strong class="text-rose-400 block mb-2 text-xl">Le Constat</strong>
            <p class="mb-6 text-slate-300 text-lg">
                Pour sauver le climat, il faut s'attaquer aux "Gros Poissons". Près de trois quarts du problème viennent de la manière dont nous produisons et consommons l'énergie (pour chauffer, rouler, construire).
            </p>
            <strong class="text-blue-400 block mb-2 text-xl">L'Angle Mort</strong>
            <p class="text-slate-300 text-lg">
                Nous focalisons notre culpabilité sur le numérique. Mais l'ensemble du secteur (téléphones, réseaux, data centers) ne pèse qu'environ 3 à 4 % des émissions mondiales.
                <br/><br/>
                <span class="text-white font-bold">L'IA est invisible :</span> Regardez la fine ligne blanche dans la part bleue. Elle représente l'impact réel de l'IA aujourd'hui (<0.1%).
            </p>
        `,
        source: "Our World in Data (Climate Watch)",
        sourceUrl: "https://ourworldindata.org/emissions-by-sector",
        graphType: 'pie',
        graphTitle: "Émissions Mondiales de GES par Secteur",
        graphData: [
        { name: 'Énergie (Autres)', value: 69.7, color: '#f43f5e' },
        { name: 'Numérique', value: 3.3, color: '#3b82f6' },
        { name: 'IA (<0.1%)', value: 0.2, color: '#ffffff' },
        { name: 'Agri & Forêts', value: 18.4, color: '#10b981' },
        { name: 'Indus. & Ciment', value: 5.2, color: '#f59e0b' },
        { name: 'Déchets', value: 3.2, color: '#64748b' },
        ]
    },
    {
        id: 10,
        type: SlideType.TEXT_GRAPH_SPLIT,
        title: "La Poutre dans l'Oeil",
        subtitle: "L'Échelle des Priorités",
        content: `
            <div class="space-y-6">
                <div>
                    <strong class="text-slate-200 block text-xl mb-2">1. Le Ciment (8 %)</strong>
                    <p class="text-slate-300 leading-relaxed text-lg">
                        Produire du ciment pour construire nos villes émet <strong class="text-white">400 fois plus</strong> de CO2 que l'IA. Nous l'acceptons car c'est "nécessaire".
                    </p>
                </div>
                <div>
                    <strong class="text-slate-200 block text-xl mb-2">2. Le Gaspillage Alimentaire (6 %)</strong>
                    <p class="text-slate-300 leading-relaxed text-lg">
                        La nourriture que nous jetons à la poubelle émet <strong class="text-white">300 fois plus</strong> de gaz à effet de serre que tous les modèles d'IA réunis. C'est une pollution sans aucun bénéfice, purement destructrice.
                    </p>
                </div>
                <div>
                    <strong class="text-emerald-400 block text-xl mb-2">Le Paradoxe</strong>
                    <p class="text-slate-300 leading-relaxed text-lg">
                        Nous concentrons notre indignation sur une technologie naissante et prometteuse (l'IA, < 0.1%) alors que nous tolérons des industries massives qui détruisent le climat. L'IA n'est pas l'ennemie ; c'est l'outil qui va nous aider à optimiser le ciment (nouveaux matériaux) et réduire le gaspillage (logistique).
                    </p>
                </div>
            </div>
        `,
        sources: [
            { text: "Ciment (Chatham/BBC)", url: "https://www.bbc.com/news/science-environment-46455844" },
            { text: "Gaspillage (OWID)", url: "https://ourworldindata.org/food-waste-emissions" },
            { text: "Mode (WB/UN)", url: "https://www.worldbank.org/en/news/feature/2019/09/23/costo-moda-medio-ambiente" },
            { text: "IA (Patterson/Google)", url: "https://arxiv.org/abs/2104.10350" }
        ],
        graphType: 'bubble',
        graphTitle: "Part des Émissions Mondiales (%)",
        graphData: [
        { name: 'Mode', value: 10, color: '#ec4899', label: 'Mode (~10%)' },
        { name: 'Ciment', value: 8, color: '#94a3b8', label: 'Ciment (8%)' },
        { name: 'Gaspillage', value: 6, color: '#d97706', label: 'Gaspillage (6%)' },
        { name: 'Aviation', value: 2.5, color: '#3b82f6', label: 'Aviation (2.5%)' },
        { name: 'IA Spécifique', value: 0.05, color: '#10b981', label: 'IA (0.05%)' },
        ]
    }
  ],
  water: [
     {
        id: 101,
        type: SlideType.SECTION,
        title: "Eau",
        subtitle: "Chapitre 3",
        content: "",
        icon: "droplets"
     },
     {
        id: 102,
        type: SlideType.QUOTE,
        title: "En construction",
        subtitle: "Coming Soon",
        content: "Les données sur la consommation d'eau de l'IA (refroidissement des data centers) sont en cours d'analyse pour cette présentation."
     }
  ],
  waste: [
     {
        id: 201,
        type: SlideType.SECTION,
        title: "Déchets",
        subtitle: "Chapitre 4",
        content: "",
        icon: "trash"
     },
     {
        id: 202,
        type: SlideType.QUOTE,
        title: "En construction",
        subtitle: "Coming Soon",
        content: "L'analyse du cycle de vie des équipements électroniques (e-waste) liés à l'IA sera bientôt disponible ici."
     }
  ]
};