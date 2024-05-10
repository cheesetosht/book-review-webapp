"use server";

import { db } from "@/db";
import { Book, BookReview, book_reviews, books } from "@/db/schema";
import { eq, ilike, or, sql } from "drizzle-orm";

export async function getBookDetails({ id }: { id: number }) {
  const bookData = (await db
    .select({
      avg_rating: sql<number>`coalesce(avg(${book_reviews.rating}), 0)`.mapWith(
        Number,
      ),
      review_count: sql<number>`count(${book_reviews.id})`.mapWith(Number),
      reviews: sql<number>`array_agg(jsonb_build_object('rating',${book_reviews.rating},'comments',${book_reviews.comments}))`,
      ...books,
    } as any)
    .from(books)
    .leftJoin(book_reviews, eq(book_reviews.bookId, books.id))
    .where(eq(books.id, id))
    .groupBy(books.id)
    .limit(1)) as unknown as Book & { reviews: BookReview[] }[];

  return bookData?.[0];
}

export async function getBooks({
  search,
  page = 1,
}: {
  search: string;
  page?: number;
}) {
  const LIMIT = 8;
  const bookData = (await db
    .select({
      avg_rating: sql<number>`coalesce(avg(${book_reviews.rating}), 0)`.mapWith(
        Number,
      ),
      review_count: sql<number>`count(${book_reviews.id})`.mapWith(Number),
      ...books,
    } as any)
    .from(books)
    .leftJoin(book_reviews, eq(book_reviews.bookId, books.id))
    .where(
      !!search
        ? or(
            ilike(books.title, `%${search.toLowerCase()}%`),
            ilike(books.author, `%${search.toLowerCase()}%`),
            ilike(books.description, `%${search.toLowerCase()}%`),
          )
        : or(),
    )
    .groupBy(books.id)
    .limit(10)
    .offset(LIMIT * (page - 1))) as unknown as Book[];
  // execute(
  //   sql`select * from ${books}
  //     	where
  //      		${books.title} ilike %${search}%
  //         or ${books.author} ilike %${search}%
  //         or ${books.description} ilike %${search}%
  //         limit 6 offset ${page * 6}`,
  // );
  return bookData;
}

export async function createBook({
  title,
  description,
  author,
  hidden,
}: {
  title: string;
  description: string;
  author: string;
  hidden?: boolean;
}) {
  const bookData = await db
    .insert(books)
    .values({ title, description, author, hidden: hidden ?? false });
  return bookData;
}

export async function createBookReview(review: {
  bookId: number;
  rating: number;
  comments: string;
}) {
  const bookData = await db.insert(book_reviews).values({ ...review });
  return bookData;
}
