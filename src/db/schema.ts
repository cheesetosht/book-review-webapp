import { InferSelectModel } from "drizzle-orm";
import {
  integer,
  varchar,
  text,
  boolean,
  pgTable,
  serial,
} from "drizzle-orm/pg-core";

export const books = pgTable("books", {
  id: serial("id").primaryKey(),
  title: varchar("title").notNull(),
  description: text("description").notNull(),
  author: varchar("author").notNull(),
  hidden: boolean("hidden").notNull().default(false),
});

export const book_reviews = pgTable("book_reviews", {
  id: serial("id").primaryKey(),
  bookId: integer("fk_book_id")
    .notNull()
    .references(() => books.id),
  rating: integer("rating").notNull(),
  comments: text("comments"),
});

export type Book = InferSelectModel<typeof books> & {
  review_count?: number;
  avg_rating?: number;
};

export type BookReview = InferSelectModel<typeof book_reviews>;
