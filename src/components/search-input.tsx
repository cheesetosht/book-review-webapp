"use client";

import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";
import { Button } from "./ui/button";

export default function SearchInput() {
  const router = useRouter();
  const [searchStr, setSearchStr] = useState("");
  const params: any = useSearchParams();
  const [text] = useDebounce(searchStr, 400);
  const page =
    typeof params.get("page") == "string" ? Number(params.get("page")) : 1;

  const handlePageChange = (prev: boolean) =>
    router.replace(`/?page=${prev ? page - 1 : page + 1}`);

  const handleSearch = (text: string) => {
    if (!text) router.replace("/");
    else router.replace(`/?search=${text}`);
  };

  useEffect(() => {
    handleSearch(text);
  }, [text]);
  return (
    <div className="container flex justify-between items-center py-5">
      <Button
        size="icon"
        variant="secondary"
        disabled={page == 1}
        onClick={() => handlePageChange(true)}
      >
        ◀
      </Button>
      <Input
        placeholder="🔍 Search books or authors..."
        className="w-64"
        value={searchStr}
        onChange={(e) => setSearchStr(e.target.value)}
      />
      <Button
        size="icon"
        variant="secondary"
        onClick={() => handlePageChange(false)}
      >
        ▶
      </Button>
    </div>
  );
}
