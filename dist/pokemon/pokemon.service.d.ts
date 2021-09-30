import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
export declare class PokemonService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreatePokemonDto): import(".prisma/client").Prisma.Prisma__PokemonClient<import(".prisma/client").Pokemon & {
        images: import(".prisma/client").Images[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Pokemon & {
        images: import(".prisma/client").Images[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PokemonClient<import(".prisma/client").Pokemon & {
        images: import(".prisma/client").Images[];
    }>;
    update(id: number, data: UpdatePokemonDto): import(".prisma/client").Prisma.Prisma__PokemonClient<import(".prisma/client").Pokemon>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PokemonClient<import(".prisma/client").Pokemon>;
}
