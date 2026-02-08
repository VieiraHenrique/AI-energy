export enum SlideType {
  COVER = 'COVER',
  TEXT_IMAGE_SPLIT = 'TEXT_IMAGE_SPLIT',
  TEXT_GRAPH_SPLIT = 'TEXT_GRAPH_SPLIT',
}

export interface GraphKey {
  key: string;
  color: string;
  label: string;
}

export interface SlideData {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  content: string;
  source?: string; // Citation source text
  sourceUrl?: string; // Clickable URL
  imageUrl?: string;
  graphData?: any[]; 
  graphKeys?: GraphKey[]; // Configuration for the graph lines
  graphType?: 'area' | 'bar'; // Type of graph to render
  graphTitle?: string; // Optional custom title for the graph
}