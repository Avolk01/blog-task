import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) { }

    public async createCategory({ name }: { name: string; }): Promise<Category> {
        const category = this.categoryRepository.create({ name });

        return this.categoryRepository.save(category);
    }

    public async getAllCategories(): Promise<Category[]> {
        return this.categoryRepository.find();
    }

    public async getCategoryById({ id }: { id: string }): Promise<Category> {
        return this.categoryRepository.findOne({ where: { id } });
    }

    public async updateCategory({ id, name }: { id: string; name: string; }): Promise<Category> {
        const data = { id, name };

        return this.categoryRepository.save(data);
    }

    public async deleteCategory({ id }: { id: string }): Promise<void> {
        await this.categoryRepository.delete({ id });
    }
}
