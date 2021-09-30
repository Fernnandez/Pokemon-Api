import { Pokemon } from '../entities/pokemon.entity';
export declare class CreatePokemonDto extends Pokemon {
    name: string;
    height?: number | null;
}
