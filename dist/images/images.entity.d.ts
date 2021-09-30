import { Prisma } from '.prisma/client';
export declare class Images implements Prisma.ImagesUncheckedCreateInput {
    id?: number;
    pokemonId: number;
    url: string;
}
