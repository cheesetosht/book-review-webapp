# GushBooks

## Features

- fetch & search books `/`
- view book details `/books/:book_id`
- review books `/books/:book_id`

## Tech Stack

- Next.js
- DrizzleORM
- PostgreSQL (Supabase)

## Possible improvements

- Random images used for book thumbnails as setting up a bucket and image upload infra could have taken sometime
- Used typescript any at some places (need to dive deeper into drizzle interfacing)
- Book review drawer doesn't auto-close after submission
  _I considered the above issues as out-of-scope for the given assignment due to ensure faster deliver_

## Running instructions

```
> npm i
> npm run dev
```
