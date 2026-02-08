import { SlideData, SlideType } from './types';

export const SLIDES: SlideData[] = [
  {
    id: 1,
    type: SlideType.COVER,
    title: "IA & La Révolution Verte",
    subtitle: "Comment l'intelligence artificielle redéfinit notre avenir énergétique.",
    content: "Une exploration narrative de la synergie entre technologie de pointe et préservation planétaire.",
  },
  {
    id: 2,
    type: SlideType.TEXT_IMAGE_SPLIT,
    title: "L'Ogresse Énergétique",
    subtitle: "Le Problème",
    content: "L'Intelligence Artificielle a un appétit féroce. Entraîner un seul grand modèle de langage (comme GPT-3) a consommé autant d'énergie que 120 voitures américaines pendant un an.<br/><br/> <b>La Peur :</b> Avec la multiplication des usages, nous craignons une explosion de la demande électrique mondiale qui annulerait tous nos efforts de sobriété.<br/><br/>Comment sauver le climat si nos machines dévorent toute notre électricité ?",
    source: "Université du Massachusetts, Amherst (2019)",
    sourceUrl: "https://arxiv.org/abs/1906.02243",
    // Chemin explicite vers le dossier public à la racine
    imageUrl: "./cars2.jpg"
  },
  {
    id: 3,
    type: SlideType.TEXT_GRAPH_SPLIT,
    title: "Le Découplage Invisible",
    subtitle: "La Réalité",
    content: "Nous confondons l'usage et la consommation. Grâce à l'amélioration constante du matériel (Loi de Koomey), nous faisons \"plus avec moins\".<br/><br/><strong>La Preuve :</strong> Entre 2010 et 2020, le trafic Internet mondial a été multiplié par 15 (1500%). Le nombre d'utilisateurs a doublé.<br/>Pourtant, la consommation électrique des Data Centers est restée quasi-plate (+10 %).<br/><br/>L'IA paie sa propre dette énergétique par l'efficacité.",
    source: "Agence Internationale de l'Énergie (IEA), 2020",
    sourceUrl: "https://www.iea.org/energy-system/buildings/data-centres-and-data-transmission-networks",
    graphType: 'area',
    graphData: [
      { name: '2010', traffic: 100, energy: 100 },
      { name: '2012', traffic: 300, energy: 102 },
      { name: '2014', traffic: 600, energy: 104 },
      { name: '2016', traffic: 950, energy: 106 },
      { name: '2018', traffic: 1300, energy: 108 },
      { name: '2020', traffic: 1500, energy: 110 },
    ],
    graphKeys: [
        { key: 'traffic', color: '#3b82f6', label: 'Trafic Internet (x15)' },
        { key: 'energy', color: '#10b981', label: 'Conso. Énergie (+10%)' }
    ]
  },
  {
    id: 4,
    type: SlideType.TEXT_GRAPH_SPLIT,
    title: "Modélisation Climatique",
    subtitle: "L'Application",
    content: "Grâce à la puissance de calcul massive, nous pouvons désormais simuler des scénarios climatiques complexes avec une précision inégalée.<br/><br/>L'IA identifie des modèles invisibles à l'œil humain, permettant aux chercheurs d'accélérer la découverte de nouveaux matériaux pour la capture du carbone et le stockage de l'énergie.",
    graphType: 'area',
    graphData: [
      { name: '2020', efficiency: 65, prediction: 68 },
      { name: '2021', efficiency: 68, prediction: 72 },
      { name: '2022', efficiency: 75, prediction: 76 },
      { name: '2023', efficiency: 79, prediction: 82 },
      { name: '2024', efficiency: 85, prediction: 88 },
      { name: '2025', efficiency: 92, prediction: 95 },
    ],
    graphKeys: [
        { key: 'prediction', color: '#8b5cf6', label: 'Modèle IA' },
        { key: 'efficiency', color: '#10b981', label: 'Efficacité Réelle' }
    ]
  }
];