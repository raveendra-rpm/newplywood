export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  invert = false
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="section-kicker">{kicker}</p>
      <h2
        className={`mt-4 text-3xl font-bold tracking-tight md:text-5xl ${
          invert ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      <p className={`mt-5 text-base leading-7 md:text-lg ${invert ? "text-slate-300" : "text-slate-600"}`}>
        {description}
      </p>
    </div>
  );
}
