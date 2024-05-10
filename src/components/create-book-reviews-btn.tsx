"use client";
import { createBookReview } from "@/app/actions";
import { Button } from "./ui/button";

// Just for seeding the data
const bookReviewsArr = [
  // The Vanishing Half
  {
    bookId: 1,
    rating: 4,
    comments:
      "Couldn't put it down! Explores complex themes of identity and family.",
  },
  {
    bookId: 1,
    rating: 5,
    comments: "Heartbreaking and powerful. A story that will stay with me.",
  },
  {
    bookId: 1,
    rating: 3,
    comments: "Interesting premise, but the ending felt a bit rushed.",
  },

  // Normal People
  {
    bookId: 2,
    rating: 4,
    comments:
      "Emotionally raw and insightful. Loved the complex relationship between the characters.",
  },
  {
    bookId: 2,
    rating: 3,
    comments: "Interesting but I didn't fully connect with the writing style.",
  },

  // The Great Gatsby
  {
    bookId: 3,
    rating: 5,
    comments:
      "A timeless classic that perfectly captures a moment in American history.",
  },
  {
    bookId: 3,
    rating: 3,
    comments: "Beautiful prose, but the characters were hard to relate to.",
  },
  {
    bookId: 3,
    rating: 4,
    comments:
      "The ending is haunting - leaves you thinking long after you finish.",
  },

  // Little Fires Everywhere
  {
    bookId: 4,
    rating: 4,
    comments: "The tension builds so well, I had to read it in one sitting!",
  },
  {
    bookId: 4,
    rating: 3,
    comments: "Some of the plot twists felt a little forced.",
  },

  // The Book Thief
  {
    bookId: 5,
    rating: 5,
    comments:
      "Such a unique perspective on WWII. Heartbreaking and hopeful at the same time.",
  },
  {
    bookId: 5,
    rating: 4,
    comments: "Beautifully written, but emotionally heavy at times.",
  },

  // The Secret History
  {
    bookId: 6,
    rating: 4,
    comments:
      "Suspenseful and atmospheric. You won't be able to guess the ending.",
  },
  {
    bookId: 6,
    rating: 3,
    comments: "Intriguing plot, but the characters were quite unlikable.",
  },
  {
    bookId: 6,
    rating: 4,
    comments: "Clever and dark - stayed with me for days.",
  },

  // The Catcher in the Rye
  {
    bookId: 7,
    rating: 5,
    comments: "Perfectly captures teenage angst and disillusionment.",
  },
  {
    bookId: 7,
    rating: 2,
    comments: "Didn't like the main character at all, found him whiny.",
  },
  {
    bookId: 7,
    rating: 3,
    comments: "Some great moments, but felt a bit dated overall.",
  },

  // Where the Crawdads Sing
  {
    bookId: 8,
    rating: 4,
    comments: "Wonderful descriptions of nature and a strong female lead.",
  },
  {
    bookId: 8,
    rating: 3,
    comments: "Engaging mystery, but the romance felt unrealistic.",
  },

  // The Kite Runner
  {
    bookId: 9,
    rating: 5,
    comments:
      "So powerful and heartbreaking. A story of friendship and redemption",
  },
  {
    bookId: 9,
    rating: 4,
    comments:
      "Emotionally intense, some of the violence was difficult to read.",
  },

  // The House on Mango Street
  {
    bookId: 10,
    rating: 4,
    comments: "Poetic and moving. A unique coming-of-age story.",
  },
  {
    bookId: 10,
    rating: 3,
    comments: "Interesting format, but hard to follow at times.",
  },
];

export default function CreateBookReviewsBtn() {
  const handleCreateBookReview = async () => {
    for (const bookReview of bookReviewsArr) {
      await createBookReview({
        ...bookReview,
      });
    }
  };
  return <Button onClick={handleCreateBookReview}>Create book reviews</Button>;
}
