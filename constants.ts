import { SlideData, SlideType } from './types';

export const SLIDES: SlideData[] = [
  {
    id: 1,
    type: SlideType.COVER,
    title: "IA & La Révolution Verte",
    subtitle: "Comment l'intelligence artificielle redéfinit notre avenir énergétique.",
    content: "Une exploration narrative de la synergie entre technologie de pointe et préservation planétaire par Henrique Vieira (2026).",
  },
  {
    id: 2,
    type: SlideType.QUOTE,
    title: "Changer de Regard",
    subtitle: "Avant-propos",
    content: "Les chiffres sont des miroirs : ils reflètent souvent ce que nous cherchons à y voir – nos peurs ou nos espoirs. La vraie question n'est pas seulement \"que disent les données ?\", mais \"que décidons-nous d'en faire ?\".<br/><br/>Face aux mêmes graphiques, le cynique voit une fin inéluctable, là où l'ingénieur voit un problème à résoudre et ce qui pourrait l'aider à le faire."
  },
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
    // Utilisation du lien GitHub Raw fourni par l'utilisateur
    imageUrl: "https://raw.githubusercontent.com/VieiraHenrique/public_images/refs/heads/main/cars3.jpg"
  },
  {
    id: 5,
    type: SlideType.TEXT_GRAPH_SPLIT,
    title: "Le Découplage Invisible",
    subtitle: "La Réalité",
    content: "Cependant, nous confondons usage et consommation.<br/><br/> Grâce à l'amélioration constante du matériel (Loi de Koomey), nous faisons \"plus avec moins\" (efficience) de manière consistante au long des années.<br/><br/><strong>La Preuve :</strong> Entre 2010 et 2020, le trafic Internet mondial a été multiplié par 15 (1500%). Le nombre d'utilisateurs a doublé.<br/><br/>Pourtant, la consommation électrique des Data Centers est restée quasi-plate (+10 %).<br/><br/>L'IA paie sa propre dette énergétique par l'efficacité.",
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
    id: 6,
    type: SlideType.QUOTE,
    title: "L'Aveuglement Cognitif",
    subtitle: "Perspective",
    content: "L'être humain a tendance à juger une innovation uniquement sur son coût d'investissement, en ignorant son retour sur investissement.<br/><br/>Nous voyons l'énergie que l'IA consomme (le Data Center), mais nous sommes aveugles à l'énergie que l'IA économise et peut économiser davantage (l'optimisation du système).<br/><br/>Juger l'IA sur sa consommation brute, c'est comme reprocher à une isolation thermique de coûter cher à l'installation, en oubliant qu'elle va diviser la facture de chauffage par deux au long de 30 ans.",
  },
  {
    id: 7,
    type: SlideType.TEXT_GRAPH_SPLIT,
    title: "La Grande Échelle de l'Électricité",
    subtitle: "Perspective Globale",
    content: `
        <div class="space-y-6">
            <div>
                <strong class="text-blue-400 block mb-2 text-xl">1. L'Autoroute de l'Information (~800 TWh)</strong>
                <p class="text-lg text-slate-300 leading-relaxed">
                    Si l'on combine tous les Data Centers (Netflix, Cloud...) et les réseaux (4G, Fibre), Internet consomme 30 à 40 fois plus que l'IA spécifique.<br/>
                    <br/>L'IA n'est qu'une toute petite "application" qui tourne sur cette immense infrastructure existante.
                </p>
            </div>
            <div>
                <strong class="text-rose-400 block mb-2 text-xl">2. Le Gaspillage (Appareils en Veille ~400 TWh)</strong>
                <p class="text-lg text-slate-300 leading-relaxed">
                    La simple "veille" de nos appareils (TV, Box, Chargeurs) consomme 15 à 20 fois plus que l'IA mondiale. C'est une énergie brûlée pour rien.
                </p>
            </div>
            <div>
                <strong class="text-yellow-400 block mb-2 text-xl">3. Le Confort (Sèche-linges USA ~60 TWh)</strong>
                <p class="text-lg text-slate-300 leading-relaxed">
                    Les sèche-linges d'un seul pays (USA) consomment 2 fois plus que toute l'IA mondiale.
                </p>
            </div>
        </div>
    `,
    sources: [
        { text: "IEA (Internet)", url: "https://www.iea.org/energy-system/buildings/data-centres-and-data-transmission-networks" },
        { text: "BCE (IA)", url: "https://www.ecb.europa.eu/press/economic-bulletin/focus/2025/html/ecb.ebbox202502_03~8eba688e29.en.html" },
        { text: "EIA (Sèche-linges)", url: "https://www.eia.gov/consumption/residential/" }
    ],
    graphType: 'bar',
    graphTitle: "Consommation Électrique Annuelle (TWh)",
    graphData: [
      { name: 'Internet (Monde)', value: 800, color: '#3b82f6', label: 'Internet (800 TWh)' },
      { name: 'Appareils en Veille (Monde)', value: 400, color: '#f43f5e', label: 'Veille (400 TWh)' },
      { name: 'Sèche-linges (USA)', value: 60, color: '#f97316', label: 'Sèche-linges (60 TWh)' },
      { name: 'IA (Monde)', value: 25, color: '#10b981', label: 'IA (25 TWh)' },
    ]
  },
  {
    id: 8,
    type: SlideType.QUOTE,
    title: "L'Analogie du Pompier",
    subtitle: "Investissement vs Dépense",
    content: `« Personne ne reproche au camion de pompier de consommer du diesel. Pourquoi ? Parce qu'il éteint l'incendie.<br/><br/><strong class="text-rose-400">Le Gaspillage (Veille/Confort) :</strong> C'est du carburant brûlé pour rouler en rond. Ça ne résout aucun problème structurel.<br/><br/><strong class="text-emerald-400">L'Investissement (IA) :</strong> C'est le carburant du camion de pompier. C'est le coût nécessaire pour déployer la solution.<br/><br/><strong>Réalité :</strong> L'IA est l'outil qui permet de découvrir les matériaux de demain et d'optimiser les énergies d'aujourd'hui. Ce n'est pas un problème de consommation, c'est une solution de transition. »`
  },
  {
    id: 9,
    type: SlideType.SECTION,
    title: "Carbone",
    subtitle: "Chapitre 2",
    content: "",
    icon: "cloud"
  },
  {
    id: 10,
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
    id: 11,
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
];