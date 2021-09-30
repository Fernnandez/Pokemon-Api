import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
export declare class PokemonController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    create(createPokemonDto: CreatePokemonDto): import(".prisma/client").Prisma.Prisma__PokemonClient<import(".prisma/client").Pokemon>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Pokemon[]>;
    findOne(id: string): string;
    update(id: string, updatePokemonDto: UpdatePokemonDto): string;
    remove(id: string): string;
}
