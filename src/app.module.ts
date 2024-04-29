import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsModule } from './tags/tags.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthorsModule } from './authors/authors.module';
import { PostsService } from './posts/posts.service';
import { PostsModule } from './posts/posts.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env.development',
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DB_HOST'),
                port: +configService.get('DB_PORT'),
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_NAME'),
                entities: [`dist/**/*.entity{.ts,.js}`],
                migrations: ['dist/**/migrations/*{.ts,.js}'],
                seeds: ['dist/**/seeds/*{.ts,.js}'],
            }),
            inject: [ConfigService],
        }),
        CategoriesModule,
        TagsModule,
        AuthorsModule,
        PostsModule,
    ],
    controllers: [AppController],
    providers: [AppService, PostsService],
})
export class AppModule { }
