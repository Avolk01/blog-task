# develoment branch

1. Move to directory:
   cd ./blog-task

2. Install dependencies:
   npm ci

3. Copy .env file:
   cp .env.example .env.development

4. Start docker container:
   docker compose up -d

5. Run migrations:
   npm run migration:run

6. Start server:
   npm run start:dev
