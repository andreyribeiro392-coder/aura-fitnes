// Constantes globais da aplicação
export const APP_NAME = 'AuraFit Premium';
export const APP_VERSION = '2.0.0';

// URLs e configurações
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';
export const IMAGES_URL = process.env.REACT_APP_IMAGES_URL || '/images';

// Planos
export const PLANS = {
  FREE: 'free',
  PRO: 'pro',
  ELITE: 'elite'
};

// Níveis de dificuldade
export const DIFFICULTY_LEVELS = {
  BEGINNER: 'iniciante',
  INTERMEDIATE: 'intermediário',
  ADVANCED: 'avançado'
};

// Grupos musculares
export const MUSCLE_GROUPS = {
  CHEST: 'peito',
  BACK: 'costas',
  SHOULDERS: 'ombros',
  BICEPS: 'bíceps',
  TRICEPS: 'tríceps',
  LEGS: 'pernas',
  ABS: 'abdômen',
  CARDIO: 'cardio'
};

// Tipos de refeição
export const MEAL_TYPES = {
  BREAKFAST: 'café_da_manhã',
  MORNING_SNACK: 'lanche_da_manhã',
  LUNCH: 'almoço',
  AFTERNOON_SNACK: 'lanche_da_tarde',
  DINNER: 'jantar',
  SUPPER: 'ceia'
};

// Metas
export const GOALS = {
  MUSCLE_GAIN: 'ganho_muscular',
  WEIGHT_LOSS: 'emagrecimento',
  DEFINITION: 'definição',
  PERFORMANCE: 'performance',
  HEALTH: 'saúde'
};

// Categorias da loja
export const SHOP_CATEGORIES = {
  SUPPLEMENTS: 'suplementos',
  CLOTHES: 'roupas',
  ACCESSORIES: 'acessórios',
  EQUIPMENT: 'equipamentos'
};

// Redes sociais
export const SOCIAL_MEDIA = {
  TELEGRAM: 'https://t.me/aurfit',
  TIKTOK: 'https://tiktok.com/@aurfit',
  INSTAGRAM: 'https://instagram.com/aurfit'
};

// Paginação
export const ITEMS_PER_PAGE = 12;

// Cache duração (em minutos)
export const CACHE_DURATION = {
  SHORT: 5,
  MEDIUM: 30,
  LONG: 60
};
