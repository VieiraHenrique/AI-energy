export enum SlideType {
  COVER = 'COVER',
  SECTION = 'SECTION',
  TEXT_IMAGE_SPLIT = 'TEXT_IMAGE_SPLIT',
  TEXT_GRAPH_SPLIT = 'TEXT_GRAPH_SPLIT',
  QUOTE = 'QUOTE',
}

export interface GraphKey {
  key: string;
  color: string;
  label: string;
}

export interface SlideSource {
  text: string;
  url: string;
}

export interface SlideData {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  content: string;
  source?: string; // Citation source text (single)
  sourceUrl?: string; // Clickable URL (single)
  sources?: SlideSource[]; // Multiple sources
  imageUrl?: string;
  graphData?: any[]; 
  graphKeys?: GraphKey[]; // Configuration for the graph lines
  graphType?: 'area' | 'bar' | 'pie' | 'bubble'; // Type of graph to render
  graphTitle?: string; // Optional custom title for the graph
  icon?: string; // Optional icon name for SECTION slides (e.g., 'zap', 'cloud')
}