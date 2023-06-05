# MY-T3-APP
This project is about create a full stack web develop, using `create-t3-app` with Prisma, NexAuth and Tailwind.

## Preparation
First need to create a .env file (use example.env) and put the value of the variable.

Remember that need to create an app in [DiscordDeveloper](https://discord.com/developers/applications) for DISCORD_CLIENT_ID and DISCORD_CLIENT_SECRET variable.

Dowload the data (.json) used for this proyect, use this link: [entities.ftm.json](https://data.opensanctions.org/datasets/20230604/peps/entities.ftm.json) or go the [oficialPage](https://www.opensanctions.org/datasets/peps/) and dowload the entities.ftm.json.
This file should be placed in src/data/
## Usage
You have two option to run the proyect <br>
### Create a Docker enviroment <br>
first need to build the container
```bash
docker-compose build
```
Then need to run the container
```bash
docker-compose up
```

### Local
get dependencies
```bash
npm i
```
Create prisma enviroment
```bash
npx prisma generate
npx prisma db push
```

run dev enviroment
```bash
npm run dev
```