import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreatePokemonDto) {
    return this.prisma.pokemon.create({ data, include: { images: true } });
  }

  findAll() {
    return this.prisma.pokemon.findMany({ include: { images: true } });
  }

  findOne(id: number) {
    return this.prisma.pokemon.findUnique({
      where: { id },
      include: { images: true },
    });
  }

  update(id: number, data: UpdatePokemonDto) {
    return this.prisma.pokemon.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.pokemon.delete({ where: { id } });
  }
}
