# MY-T3-APP
This project is about create a full stack web develop, using `create-t3-app` with Prisma, NexAuth and Tailwind.

## Usage
1. First need to create a .env file (use example.env) and put the value of the variable.
<br>
Remember that need to create an app in [DiscordDeveloper](https://discord.com/developers/applications) for DISCORD_CLIENT_ID and DISCORD_CLIENT_SECRET variable.
2. Dowload the data (.json) used for this proyect, use this link: [entities.ftm.json](https://data.opensanctions.org/datasets/20230604/peps/entities.ftm.json) or go the [oficialPage](https://www.opensanctions.org/datasets/peps/) and dowload the entities.ftm.json.
This file should be placed in src/data/
3. Create a Docker enviroment: <br>
first need to build the container
```bash
docker-compose build
```
Then need to run the container
```bash
docker-compose up
```