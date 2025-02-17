export default function BlogLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr_300px] gap-6 p-4">
      <aside className="bg-gray-200 p-4">Sidebar</aside>

      <main className="bg-white p-4">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p>Blog posts go here...</p>
      </main>

      <section className="bg-gray-100 p-4 hidden md:block">
        Extra Content
      </section>
    </div>
  );
}
