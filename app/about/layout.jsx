export default function AboutLayout({ children }) {
  return (
    <section>
      <h1 className="text-3xl font-bold">
        Hello world! This is about Layout
      </h1>
      {children}
    </section>
  );
}