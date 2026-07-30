export interface CourseModule {
  id: string;
  number: string;
  title: string;
  description: string;
  topics: string[];
  duration: string;
}

export interface ProofItem {
  id: number;
  title: string;
  imageUrl: string;
  views: string;
  niche: string;
  description: string;
}

export interface PainPoint {
  id: string;
  iconName: string;
  title: string;
  description: string;
  highlightColor?: string;
}

export interface GeneratedScript {
  niche: string;
  title: string;
  hook: string;
  scriptBody: string;
  visualPrompt: string;
  voiceStyle: string;
  estimatedReach: string;
}

export interface RecentSale {
  id: string;
  name: string;
  city: string;
  timeAgo: string;
  avatarBg: string;
}
