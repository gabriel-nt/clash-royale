export interface Card {
  name: string;
  id: number;
  maxLevel: number;
  maxEvolutionLevel: number;
  elixirCost: number;
  rarity: string;
  iconUrls: {
    medium: string;
    evolutionMedium: string;
  };
}
