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
    type: SlideType.SECTION,
    title: "Énergie",
    subtitle: "Chapitre 1",
    content: "",
  },
  {
    id: 3,
    type: SlideType.TEXT_IMAGE_SPLIT,
    title: "L'Ogresse Énergétique",
    subtitle: "Le Problème",
    content: "L'Intelligence Artificielle a un appétit féroce.<br/><br/>Entraîner un seul grand modèle de langage (comme GPT-3) a consommé autant d'énergie que 120 voitures américaines pendant un an.<br/><br/> <b>La Peur :</b> Avec la multiplication des usages, nous craignons une explosion de la demande électrique mondiale qui annulerait tous nos efforts de sobriété.<br/><br/>Comment sauver le climat si nos machines dévorent toute notre électricité ?",
    source: "Université du Massachusetts, Amherst (2019)",
    sourceUrl: "https://arxiv.org/abs/1906.02243",
    // Utilisation du lien GitHub Raw fourni par l'utilisateur
    imageUrl: "https://raw.githubusercontent.com/VieiraHenrique/public_images/refs/heads/main/cars2.jpg"
  },
  {
    id: 4,
    type: SlideType.TEXT_GRAPH_SPLIT,
    title: "Le Découplage Invisible",
    subtitle: "La Réalité",
    content: "Cependant, nous confondons usage et consommation.<br/><br/> Grâce à l'amélioration constante du matériel (Loi de Koomey), nous faisons \"plus avec moins\". (efficience)<br/><br/><strong>La Preuve :</strong> Entre 2010 et 2020, le trafic Internet mondial a été multiplié par 15 (1500%). Le nombre d'utilisateurs a doublé.<br/><br/>Pourtant, la consommation électrique des Data Centers est restée quasi-plate (+10 %).<br/><br/>L'IA paie sa propre dette énergétique par l'efficacité.",
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
    id: 5,
    type: SlideType.QUOTE,
    title: "L'Aveuglement Cognitif",
    subtitle: "Perspective",
    content: "L'être humain a tendance à juger une innovation uniquement sur son coût d'investissement, en ignorant son retour sur investissement.<br/><br/>Nous voyons l'énergie que l'IA consomme (le Data Center), mais nous sommes aveugles à l'énergie que l'IA économise et peut économiser davantage (l'optimisation du système).<br/><br/>Juger l'IA sur sa consommation brute, c'est comme reprocher à une isolation thermique de coûter cher à l'installation, en oubliant qu'elle va diviser la facture de chauffage par deux au long de 30 ans.",
  },
  {
    id: 6,
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
    id: 7,
    type: SlideType.QUOTE,
    title: "L'Analogie du Pompier",
    subtitle: "Investissement vs Dépense",
    content: `« Personne ne reproche au camion de pompier de consommer du diesel. Pourquoi ? Parce qu'il éteint l'incendie.<br/><br/><strong class="text-rose-400">Le Gaspillage (Veille/Confort) :</strong> C'est du carburant brûlé pour rouler en rond. Ça ne résout aucun problème structurel.<br/><br/><strong class="text-emerald-400">L'Investissement (IA) :</strong> C'est le carburant du camion de pompier. C'est le coût nécessaire pour déployer la solution.<br/><br/><strong>Réalité :</strong> L'IA est l'outil qui permet de découvrir les matériaux de demain et d'optimiser les énergies d'aujourd'hui. Ce n'est pas un problème de consommation, c'est une solution de transition. »`
  }
];