import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col gap-4">
        <ul className="">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
