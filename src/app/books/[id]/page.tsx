import { getBookDetails } from "@/app/actions";
import SubmitReviewSheet from "@/components/submit-review-sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const runtime = "edge";

export default async function BookDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const bookDetails: any = await getBookDetails({ id: Number(id) });

  return (
    <>
      <main className="container">
        <Link href={"/"}>
          <Button size="icon" variant="ghost" className="mt-2">
            ←
          </Button>
        </Link>
        <div className="flex gap-6 w-full py-4">
          <img
            className="rounded-md mb-1 max-w-64 object-cover w-full"
            src="https://source.unsplash.com/random/200x200"
            alt=""
          />
          <div className="space-y-3">
            <h1 className="font-semibold text-2xl">{bookDetails.title}</h1>
            <p>{bookDetails.description}</p>
            <SubmitReviewSheet bookId={Number(id)} />
            <div>⭐️ {bookDetails.avg_rating}</div>
            <div>📌 {bookDetails.review_count}</div>
          </div>
        </div>

        <h3 className="font-semibold text-xl mb-4">Reviews</h3>
        {bookDetails?.reviews.map((review: any, i: number) => (
          <div key={i} className="mb-2">
            <p className="font-semibold">⭐️ {review.rating}</p>
            <p>{review.comments}</p>
          </div>
        ))}
      </main>
    </>
  );
}
