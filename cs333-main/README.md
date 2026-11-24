# SOU CS 333 Todo Front End

The todo app's front end: React and Vite. The back end is in `cs333-api-main`.

## Setup

You need Node 22.12 or newer (`node -v`). Open a terminal in this folder and run:

```shell
npm install
```

## Run it on your laptop

Start the back end first (in `cs333-api-main`, `npm run dev`), then in this folder:

```shell
npm run dev
```

Open http://localhost:5173.

## How the front end finds the back end

The front end never uses a full address like `http://localhost:3000`. It fetches from `/api/`:

```js
fetch('/api/')          // all the todo ids
fetch(`/api/${id}`)     // one todo
```

Something in the middle sends `/api/...` to the back end and takes the `/api` off:

- On your laptop, Vite's `proxy` in `vite.config.js` does it.
- On your server, nginx's `location /api/` block does it.

So the same code works in both places.

## Build it for your server

```shell
npm run build                     # site at http://your-server-address/
npm run build -- --base=/todo/    # site at http://your-server-address/todo/
```

Then copy what's inside `dist` (not the `dist` folder itself) into `/var/www/html` or `/var/www/html/todo` on your server.

## Where things are

| File | What it is |
| --- | --- |
| `src/App.jsx` | The page: the title and the list |
| `src/components/Todos/Todos.jsx` | Loads the list of todos, adds new ones |
| `src/components/Todos/CreateTodo.jsx` | The "Enter a new todo" box |
| `src/components/Todo/Todo.jsx` | One todo: check it off, edit it, delete it |
| `src/index.css` | All the styling. Keep the class names (the comments say `className important`) |
