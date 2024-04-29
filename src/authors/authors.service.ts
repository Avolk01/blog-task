import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
    constructor(
        @InjectRepository(Author)
        private readonly authorsRepository: Repository<Author>,
    ) { }

    public async createAuthor({ firstName, lastName, nickname }: { firstName: string; lastName: string; nickname: string }): Promise<Author> {
        const author = this.authorsRepository.create({ firstName, lastName, nickname });

        return this.authorsRepository.save(author);
    }

    public async getAllAuthors(): Promise<Author[]> {
        return this.authorsRepository.find();
    }

    public async getAuthorById({ id }: { id: string }): Promise<Author> {
        return this.authorsRepository.findOne({ where: { id } });
    }

    public async updateAuthor({ id, firstName, lastName, nickname }: { id: string; firstName?: string; lastName?: string; nickname?: string }): Promise<Author> {
        const data = { id, firstName, lastName, nickname };

        return this.authorsRepository.save(data);
    }

    public async deleteAuthor({ id }: { id: string }): Promise<void> {
        await this.authorsRepository.delete({ id });
    }
}
