"use client";
import { createBook } from "@/app/actions";
import { Button } from "./ui/button";

// Just for seeding the data
export default function CreateBookBtn() {
  const booksArr = [
    {
      title: "The Vanishing Half",
      description:
        "Twin sisters separated by race and societal expectations, their lives intertwine in unexpected ways.",
      author: "Brit Bennett",
    },
    {
      title: "Normal People",
      description:
        "Complex love story between two Irish teens navigating social anxieties and class differences.",
      author: "Sally Rooney",
    },
    {
      title: "The Great Gatsby",
      description:
        "A critique of the American Dream's emptiness, set in the decadent era of the Roaring Twenties.",
      author: "F. Scott Fitzgerald",
    },
    {
      title: "Little Fires Everywhere",
      description:
        "Exploration of motherhood, identity, and the secrets that upend a carefully planned community.",
      author: "Celeste Ng",
    },
    {
      title: "The Book Thief",
      description:
        "A young girl in Nazi Germany finds solace in stealing books and sharing them with others.",
      author: "Markus Zusak",
    },
    {
      title: "The Secret History",
      description:
        "A group of elite college students become entangled in a web of obsession, deceit, and murder.",
      author: "Donna Tartt",
    },
    {
      title: "The Catcher in the Rye",
      description:
        "Teenage angst and disillusionment with a cynical and hypocritical world, told by an unreliable narrator.",
      author: "J.D. Salinger",
    },
    {
      title: "Where the Crawdads Sing",
      description:
        "Coming-of-age mystery of an abandoned girl raised in the marshes, accused of murder.",
      author: "Delia Owens",
    },
    {
      title: "The Kite Runner",
      description:
        "Powerful story of friendship and betrayal set against the backdrop of a collapsing Afghanistan.",
      author: "Khaled Hosseini",
    },
    {
      title: "The House on Mango Street",
      description:
        "A young Latina girl's vignettes of growing up and finding her voice in a Chicago neighborhood.",
      author: "Sandra Cisneros",
    },

    {
      title: "The Remains of the Day",
      description:
        "An English butler reflects on missed opportunities and a life dedicated to unquestioned service.",
      author: "Kazuo Ishiguro",
    },
    {
      title: "The Handmaid's Tale",
      description:
        "A dystopian society where fertile women are enslaved for reproductive purposes.",
      author: "Margaret Atwood",
    },
    {
      title: "All the Light We Cannot See",
      description:
        "The intersecting paths of a blind French girl and a German boy during World War II.",
      author: "Anthony Doerr",
    },
    {
      title: "Pachinko",
      description:
        "A sweeping saga of a Korean family's life in Japan, enduring hardship and discrimination across generations.",
      author: "Min Jin Lee",
    },
    {
      title: "Eleanor Oliphant is Completely Fine",
      description:
        "A quirky, socially isolated woman discovers friendship and unexpected connections.",
      author: "Gail Honeyman",
    },
    {
      title: "The Color Purple",
      description:
        "A Black woman in the American South endures abuse and hardship, forging strength and resilience.",
      author: "Alice Walker",
    },
    {
      title: "A Tree Grows in Brooklyn",
      description:
        "Coming-of-age in impoverished early 20th century Brooklyn, a girl dreams beyond her circumstances.",
      author: "Betty Smith",
    },
    {
      title: "The Glass Castle",
      description:
        "A memoir of a dysfunctional childhood marked by poverty, neglect, yet fueled by unconventional dreams.",
      author: "Jeannette Walls",
    },
    {
      title: "To Kill a Mockingbird",
      description:
        "Childhood innocence confronted with racial injustice in the American South, told through a young girl's eyes.",
      author: "Harper Lee",
    },
    {
      title: "Educated",
      description:
        "A woman raised in an isolationist survivalist family breaks free by pursuing higher education.",
      author: "Tara Westover",
    },
  ];
  const handleCreateBook = async () => {
    for (const book of booksArr) {
      await createBook({
        ...book,
      });
    }
  };
  return <Button onClick={handleCreateBook}>Create</Button>;
}
