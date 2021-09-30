import { Prisma } from '.prisma/client';
export declare class Image implements Prisma.ImageUncheckedCreateInput {
    id?: number;
    name: string;
    height?: number;
    Images?: Prisma.ImagesUncheckedCreateNestedManyWithoutPokemonInput;
}
