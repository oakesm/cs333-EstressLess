# SOU CS 333 Todo Back End

The todo app's back end: Node, Express and MongoDB. The front end is in `cs333-main`.

## Setup

You need Node 22.12 or newer (`node -v`), and MongoDB running on port 27017.

Open a terminal in this folder and run:

```shell
npm install
cp .env.example .env
```

(Windows Command Prompt: `copy .env.example .env`)

`.env` holds the settings for this computer:

```
PORT=3000
NODE_ENV=development
DB_CONNECT=mongodb://localhost:27017/cs333
```

On your server, change `NODE_ENV=development` to `NODE_ENV=production`. `.env` is in `.gitignore`, so it never goes to GitHub. Each computer makes its own from `.env.example`.

The `cs333` database doesn't have to exist first. MongoDB makes it the first time you add a todo.

## Run it

```shell
npm run dev
```

Development mode. It restarts by itself when you save a file (`node --watch`).

```shell
npm start
```

Use this one on your server with pm2: `pm2 start npm --name todo -- start`.

Both of them read `.env` (look at `scripts` in `package.json`) and print:

```
Server running on port 3000 in development environment
MongoDB connected
```

## Routes

| Method | Path   | What it does                                        |
| ------ | ------ | --------------------------------------------------- |
| GET    | `/`    | The `_id` of every todo, newest first               |
| GET    | `/:id` | One todo                                            |
| POST   | `/`    | Make a todo from the JSON body (`{ "title": "..." }`) |
| PUT    | `/:id` | Change a todo (`{ "isCompleted": true }`)           |
| DELETE | `/:id` | Delete a todo                                       |

The front end calls these as `/api/...`. On your laptop Vite's proxy takes the `/api` off, and on your server nginx does.
