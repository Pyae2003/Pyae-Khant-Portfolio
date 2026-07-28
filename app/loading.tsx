export default function Loading() {
  return (
    <main className="container min-h-screen py-24" aria-busy="true" aria-label="Loading portfolio">
      <div className="animate-pulse">
        <div className="h-7 w-56 rounded-full bg-secondary" />
        <div className="mt-7 h-16 max-w-3xl rounded-2xl bg-secondary" />
        <div className="mt-4 h-7 max-w-xl rounded-xl bg-secondary" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-52 rounded-[1.75rem] border border-border bg-card" />
          ))}
        </div>
      </div>
    </main>
  );
}
