import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
export declare class PokemonService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreatePokemonDto): import(".prisma/client").Prisma.Prisma__PokemonClient<import(".prisma/client").Pokemon>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Pokemon[]>;
    findOne(id: number): string;
    update(id: number, updatePokemonDto: UpdatePokemonDto): string;
    remove(id: number): string;
}
