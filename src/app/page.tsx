import { getBooks } from "./actions";
import SearchInput from "@/components/search-input";
import Link from "next/link";

export default async function Home({
  searchParams: { search, page },
}: {
  searchParams: { search: string; page: string };
}) {
  const books = await getBooks({ search, page: Number(page) });
  return (
    <>
      {/* <CreateBookBtn /> */}
      {/* <CreateBookReviewsBtn /> */}
      <SearchInput />
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 container py-4">
        {books.map((book, i) => (
          <Link key={i} href={`/books/${book.id}`}>
            <div className="rounded-lg border border-gray-200 p-2">
              <img
                className="rounded-md mb-1 w-full"
                src="https://source.unsplash.com/random/200x200"
                alt=""
              />
              <h5 className="font-semibold">{book.title}</h5>
              <p className="italic">{book.author}</p>
              <div className="flex justify-between items-center">
                <div>⭐️ {book.avg_rating}</div>
                <div>📌 {book.review_count}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
