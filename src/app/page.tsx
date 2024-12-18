import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex justify-start items-center gap-5">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <span className="text-[40px]">+</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="graphql"
            width={50}
          >
            <path
              fill="#DF34A6"
              d="M4.657 5.218A2.087 2.087 0 0 0 1.779 6a2.167 2.167 0 0 0-.22.566c-.272 1.151.424 2.308 1.554 2.584l-.001 5.699a2.098 2.098 0 0 0-1.026.603 2.167 2.167 0 0 0 .069 3.026 2.08 2.08 0 0 0 2.975-.07l4.853 2.847a2.176 2.176 0 0 0-.087.609c.001 1.181.943 2.137 2.104 2.136.224 0 .445-.037.659-.108 1.104-.371 1.704-1.582 1.338-2.706l4.822-2.832a2.088 2.088 0 0 0 3.395-.353c.103-.181.181-.377.228-.581.269-1.146-.427-2.296-1.553-2.569V9.152a2.07 2.07 0 0 0 .549-.223 2.164 2.164 0 0 0 .782-2.928 2.123 2.123 0 0 0-.371-.477 2.083 2.083 0 0 0-2.981.077l-4.852-2.85c.058-.199.089-.408.088-.617C14.103.954 13.161-.001 12 0c-.203 0-.406.029-.6.088-1.111.335-1.747 1.524-1.417 2.657l-4.855 2.85a2.034 2.034 0 0 0-.471-.377zm8.899 15.203A2.087 2.087 0 0 0 12 19.723c-.596 0-1.133.249-1.514.653L5.63 17.524l.021-.083h12.698c.011.048.023.095.037.142l-4.83 2.838zM13.51 3.628l4.863 2.858-.019.072c-.279 1.146.406 2.305 1.532 2.588v5.707c-.026.007-.055.014-.081.023l-6.352-11.19a.623.623 0 0 0 .057-.058zm-2.095.566c.382.112.788.112 1.172 0L18.94 15.38a2.165 2.165 0 0 0-.593 1.044H5.654a2.176 2.176 0 0 0-.59-1.041l6.351-11.189zM5.624 6.479l4.863-2.852.059.06-6.35 11.189-.083-.023V9.145l.075-.021c1.115-.327 1.758-1.51 1.436-2.645z"
            ></path>
          </svg>
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by going to
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              /blog
            </code>
            .
          </li>
          <li>Learn GraphQl with SSR</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/blog"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Go To Blog
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://programmermahin.com/community/developers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Community
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://programmermahin.com/posts"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Learning Posts
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://programmermahin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to programmermahin.com →
        </a>
      </footer>
    </div>
  );
}
