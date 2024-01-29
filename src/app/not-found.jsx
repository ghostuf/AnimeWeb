import Link from "next/link";

export default function Notfound() {
  return (
    <div className=" text-purple-600">
      <h1>Bruh what you lookin at</h1>
      <p>Couldnt find the requested resource!</p>
      <Link href="http://localhost:3000/">
        <p>---Click to Get back---</p>
      </Link>
    </div>
  );
}
