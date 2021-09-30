import { Pokemon } from '../entities/pokemon.entity';
import { IsInt, isInt, isNumber, IsOptional, IsString } from 'class-validator';

export class CreatePokemonDto extends Pokemon {
  @IsString()
  name: string;

  @IsInt()
  @IsOptional()
  height?: number | null;
}
