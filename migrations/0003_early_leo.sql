ALTER TABLE "book_reviews" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "books" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "book_reviews" ADD COLUMN "fk_book_id" integer NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "book_reviews" ADD CONSTRAINT "book_reviews_fk_book_id_books_id_fk" FOREIGN KEY ("fk_book_id") REFERENCES "public"."books"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
