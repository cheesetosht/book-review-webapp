"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { createBookReview } from "@/app/actions";
import { useRouter } from "next/navigation";

export default function SubmitReviewSheet({ bookId }: { bookId: number }) {
  const { refresh } = useRouter();
  const handlePostReview = async (elements: any) => {
    if (!elements.rating.value) setError("Please provide a rating");

    await createBookReview({
      bookId,
      rating: elements.rating.value,
      comments: elements.comments.value,
    });
  };
  const [error, setError] = useState("");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">✍🏻 Post review</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-4">
          <SheetTitle>Post a review</SheetTitle>
        </SheetHeader>
        <form
          className="space-y-3"
          onSubmit={(e: any) => {
            e.preventDefault();
            handlePostReview(e.target.elements);
            e.target.reset();
            refresh();
          }}
        >
          <div className="flex gap-2">
            {["1", "2", "3", "4", "5"].map((r, i) => (
              <div key={i} className="flex gap-0.5 select-none">
                <input type="radio" id={r} name="rating" value={r} />
                <label htmlFor={r}>{r}</label>
              </div>
            ))}
          </div>
          <Textarea name="comments" placeholder="Write your views here" />
          {error && <p className="text-sm text-red-400">{error}</p>}
          <SheetClose asChild>
            <Button variant="secondary">Done</Button>
          </SheetClose>
          &nbsp;
          <Button type="submit">Post</Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
