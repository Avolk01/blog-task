import { Injectable } from '@nestjs/common';
import { Tag } from './entities/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagsService {
    constructor(
        @InjectRepository(Tag)
        private readonly tagsRepository: Repository<Tag>,
    ) { }

    public async createTag({ name }: { name: string; }): Promise<Tag> {
        const tag = this.tagsRepository.create({ name });

        return this.tagsRepository.save(tag);
    }

    public async getAllTags(): Promise<Tag[]> {
        return this.tagsRepository.find();
    }

    public async getTagById({ id }: { id: string }): Promise<Tag> {
        return this.tagsRepository.findOne({ where: { id } });
    }

    public async updateTag({ id, name }: { id: string; name: string; }): Promise<Tag> {
        const tag = { id, name };
        return await this.tagsRepository.save(tag);
    }

    public async deleteTag({ id }: { id: string; }): Promise<void> {
        await this.tagsRepository.delete({ id });
    }
}
