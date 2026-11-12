import Link from "next/link";

export default function NoEncontrado() {
  return (
    <section className="hero">
      <h1>Página no encontrada</h1>
      <p className="lead">Esta página no existe.</p>
      <Link className="btn" href="/">Volver al inicio</Link>
    </section>
  );
}
