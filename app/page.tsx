import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>getting started (this will be the landing page)</h1>
      <p>a few things first</p>
      <ul>
        <li>
          get the db setup (using neon postgres, drizzle, and a testing db)
        </li>
        <li>
          integrate file storage (cloudflare r2)
        </li>
        <li>
          make the admin page
        </li>
        <li>
          design site around db
        </li>
      </ul>
    </>
  );
}
