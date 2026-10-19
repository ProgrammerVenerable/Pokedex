// --- Base & Utility Types ---

export type Result = {
  name: string;
  url: string;
};

// --- Abilities ---

export type AbilitySlot = {
  is_hidden: boolean;
  slot: number;
  ability: Result;
};

export type PastAbilitySlot = {
  is_hidden: boolean;
  slot: number;
  ability: null;
};

export type PastAbility = {
  generation: Result;
  abilities: PastAbilitySlot[];
};

// --- Game Indices & Items ---

export type GameIndex = {
  game_index: number;
  version: Result;
};

export type ItemVersionDetail = {
  rarity: number;
  version: Result;
};

export type HeldItem = {
  item: Result;
  version_details: ItemVersionDetail[];
};

// --- Moves ---

export type MoveVersionDetail = {
  level_learned_at: number;
  version_group: Result;
  move_learn_method: Result;
  order: null;
};

export type PokemonMove = {
  move: Result;
  version_group_details: MoveVersionDetail[];
};

// --- Stats & Types ---

export type StatSlot = {
  base_stat: number;
  effort: number;
  stat: Result;
};

export type PastStat = {
  generation: Result;
  stats: StatSlot[];
};

export type TypeSlot = {
  slot: number;
  type: Result;
};

export type PokemonCries = {
  latest: string;
  legacy: string;
};

// --- Sprites ---

export type BaseSpriteSet = {
  back_default?: string | null;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
  front_default?: string | null;
  front_female?: string | null;
  front_shiny?: string | null;
  front_shiny_female?: string | null;
};

export type IconSprite = {
  front_default: string | null;
  front_female?: string | null;
};

export type OtherSprites = {
  home: Required<Pick<BaseSpriteSet, 'front_default' | 'front_female' | 'front_shiny' | 'front_shiny_female'>>;
  showdown: BaseSpriteSet;
  dream_world: {
    front_default: string;
    front_female: null;
  };
  "official-artwork": {
    front_default: string;
    front_shiny: string;
    versions: {
      "generation-i": {
        "red-and-blue": { front_default: string };
        "red-and-green": { front_default: string };
      };
      "generation-ii": {
        "gold-and-silver": { front_default: null };
      };
    };
  };
};

export type Gen1Sprites = {
  yellow: BaseSpriteSet & {
    back_gbc: string;
    back_gray: string;
    front_gbc: string;
    front_gray: string;
    back_transparent: string;
    front_transparent: string;
    back_transparent_gray: string;
    front_transparent_gray: string;
  };
  "red-blue": BaseSpriteSet & {
    back_gray: string;
    front_gray: string;
    back_transparent: string;
    front_transparent: string;
    back_transparent_gray: string;
    front_transparent_gray: string;
  };
  "red-green-japan": BaseSpriteSet & {
    back_gray: string;
    front_gray: string;
  };
};

export type Gen2Sprites = {
  gold: BaseSpriteSet & { back_transparent: string; front_transparent: string; back_shiny_transparent: string; front_shiny_transparent: string };
  silver: BaseSpriteSet & { back_transparent: string; front_transparent: string; back_shiny_transparent: string; front_shiny_transparent: string };
  crystal: BaseSpriteSet & {
    animated: Pick<BaseSpriteSet, 'front_default' | 'front_shiny'>;
    back_transparent: string;
    front_transparent: string;
    back_shiny_transparent: string;
    front_shiny_transparent: string;
  };
};

export type Gen3Sprites = {
  icons: Pick<BaseSpriteSet, 'front_default'>;
  emerald: BaseSpriteSet & { animated: BaseSpriteSet };
  "ruby-sapphire": BaseSpriteSet;
  "firered-leafgreen": BaseSpriteSet;
};

export type Gen4Sprites = {
  icons: Pick<BaseSpriteSet, 'front_default'>;
  platinum: BaseSpriteSet & { animated: BaseSpriteSet };
  "diamond-pearl": BaseSpriteSet & { animated: BaseSpriteSet };
  "heartgold-soulsilver": BaseSpriteSet & { animated: BaseSpriteSet };
};

export type Gen5Sprites = {
  icons: {
    animated: Pick<BaseSpriteSet, 'front_default'>;
    front_default: string;
  };
  "black-white": BaseSpriteSet & { animated: BaseSpriteSet };
};

export type Gen6Sprites = {
  "x-y": BaseSpriteSet;
  icons: IconSprite;
  "omega-ruby-alpha-sapphire": BaseSpriteSet;
};

export type Gen7Sprites = {
  icons: IconSprite;
  "ultra-sun-ultra-moon": BaseSpriteSet;
  "lets-go-pikachu-lets-go-eevee": BaseSpriteSet & { icons: Pick<BaseSpriteSet, 'front_default'> };
};

export type Gen8Sprites = {
  "sword-shield": BaseSpriteSet & { icons: IconSprite };
  "legends-arceus": BaseSpriteSet & { icons: BaseSpriteSet };
  "brilliant-diamond-shining-pearl": BaseSpriteSet & { icons: Pick<BaseSpriteSet, 'front_default'> };
};

export type Gen9Sprites = {
  champions: BaseSpriteSet & { icons: BaseSpriteSet };
  "legends-za": BaseSpriteSet & { icons: BaseSpriteSet };
  "scarlet-violet": BaseSpriteSet & { icons: IconSprite };
};

export type GenerationSprites = {
  "generation-i": Gen1Sprites;
  "generation-ii": Gen2Sprites;
  "generation-iii": Gen3Sprites;
  "generation-iv": Gen4Sprites;
  "generation-v": Gen5Sprites;
  "generation-vi": Gen6Sprites;
  "generation-vii": Gen7Sprites;
  "generation-viii": Gen8Sprites;
  "generation-ix": Gen9Sprites;
};

export type PokemonSprites = BaseSpriteSet & {
  other: OtherSprites;
  versions: GenerationSprites;
};

// --- Main Pokemon Entity ---

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: AbilitySlot[];
  past_abilities: PastAbility[];
  forms: Result[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  species: Result;
  sprites: PokemonSprites;
  cries: PokemonCries;
  stats: StatSlot[];
  past_stats: PastStat[];
  types: TypeSlot[];
  past_types: unknown[];
};