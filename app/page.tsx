import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-rv-ink px-5 py-16 text-white md:justify-center md:px-10 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(52,133,83,0.35),transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(46,167,255,0.28),transparent_45%)]"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
          Grupo Riasis
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-fraunces)] text-4xl leading-tight md:text-6xl">
          Un grupo. Dos oficios.
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/70 md:text-lg">
          Paisajes que se viven y tecnología que se elige con criterio. Elige
          el rubro y entra a su sitio.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Link
            href="/verde"
            className="group rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm transition hover:border-rv-moss/60 hover:bg-white/10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rv-glow">
              Paisaje
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl">
              Riasis Verde
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Landscaping y jardinería en Honduras. Diseño, instalación y
              mantenimiento de exteriores.
            </p>
            <span className="mt-6 inline-block text-sm font-semibold text-rv-glow transition group-hover:translate-x-1">
              Entrar →
            </span>
          </Link>

          <Link
            href="/tecnologia"
            className="group rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm transition hover:border-brand-blue/60 hover:bg-white/10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
              Tecnología
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-space)] text-3xl font-semibold tracking-tight">
              Riasis Tecnología
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Smartphones, tablets y accesorios. Vitrina online y compra por
              WhatsApp e Instagram.
            </p>
            <span className="mt-6 inline-block text-sm font-semibold text-brand-blue transition group-hover:translate-x-1">
              Entrar →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
