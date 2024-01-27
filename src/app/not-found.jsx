import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="flex items-center h-screen p-16">
        <div className="container flex flex-col items-center">
          <div className="flex flex-col gap-6 max-w-md text-center">
            <h2 className="font-extrabold text-9xl text-Blue">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-xl text-Grey">
              Sorry, we couldnt find this page.
            </p>
            <Link
              href="/"
              className="btn mt-5 bg-Blue text-White border-2 rounded-full border-LightBlue mb-10 hover:bg-Bluesea"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
