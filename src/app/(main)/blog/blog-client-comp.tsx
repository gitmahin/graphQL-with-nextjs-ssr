"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function BlogClientComponent({ data }: { data: PostType[] }) {
  return (
    <div className="w-full flex justify-center items-center ">
      <div className="max-w-[1000px] w-full mt-16 mb-24">
        <h1 className="text-[30px] font-semibold border-b pb-5">
          SSR With GraphQl
        </h1>
        <div className="flex justify-start items-start w-full pt-5 flex-wrap gap-3 ">
          {data.map((item: PostType, i: number) => {
            return (
              <div
                className="border rounded-[10px] p-5 max-w-[300px] w-full overflow-hidden "
                key={i}
              >
                <Badge variant="secondary">Post no. {i + 1}</Badge>
                <h2 className="font-semibold text-[25px]">{item.title}</h2>
                <div className="flex justify-start items-center gap-2 mt-5">
                  <p className="font-semibold text-green-600">Published by</p>
                  <Badge>User: {item.userId}</Badge>
                </div>
                <Link href={`/blog/${item.id}`}>
                  <Button className="w-full mt-2">Button</Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
