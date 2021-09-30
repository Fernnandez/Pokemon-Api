import { Pokemon } from '../entities/pokemon.entity';
import { IsInt, isInt, isNumber, IsOptional, IsString } from 'class-validator';
import { Prisma } from '@prisma/client';

export class CreatePokemonDto extends Pokemon {
  @IsString()
  name: string;

  @IsInt()
  @IsOptional()
  height?: number | null;

  @IsOptional()
  images?: Prisma.ImagesUncheckedCreateNestedManyWithoutPokemonInput;
}
