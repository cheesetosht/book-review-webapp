CREATE TABLE IF NOT EXISTS "book" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"description" text NOT NULL,
	"hidden" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "book_review" (
	"id" integer PRIMARY KEY NOT NULL,
	"rating" integer NOT NULL,
	"comments" text
);
