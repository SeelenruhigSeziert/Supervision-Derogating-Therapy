import { createFileRoute } from "@tanstack/react-router";
import coverTopAsset from "../assets/cover-top.png.asset.json";
import coverBottomAsset from "../assets/cover-bottom.png.asset.json";

const coverTop = coverTopAsset.url;
const coverBottom = coverBottomAsset.url;

const TITLE = "Der blinde Fleck – Eine Satire über Supervision, Therapeuten­bewertung und Machtgefälle";
const DESCRIPTION =
  "Eine satirische Novelle über Supervision, Therapeuten­bewertung, den blinden Fleck im Behandlungszimmer, Machtgefälle und unseriöse Therapie – inklusive Beschwerde bei der Psychotherapie­kammer.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Supervision, Therapeuten Bewertung, blinder Fleck, Machtgefälle, Psychotherapie Kammer Beschwerde, Satire, Kritik, unseriöse Therapie",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: coverTop },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: coverTop },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          description: DESCRIPTION,
          image: coverTop,
          inLanguage: "de",
          keywords:
            "Supervision, Therapeuten Bewertung, blinder Fleck, Machtgefälle, Psychotherapie Kammer Beschwerde, Satire, Kritik, unseriöse Therapie",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-[#1a1512] text-[#e8ddd1]">
      <article className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <figure className="mx-auto mb-14 w-full max-w-2xl">
          <img
            src={coverTop}
            alt="Therapiesitzung am Fenster – Sinnbild für Supervision, Machtgefälle und den blinden Fleck in der Psychotherapie"
            width={1369}
            height={731}
            className="h-auto w-full rounded-sm shadow-2xl shadow-black/60"
          />
        </figure>

        <header className="mb-10 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#a08a72]">
            Eine Novelle · Satire
          </p>
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
            Der blinde Fleck
          </h1>
          <p className="mt-4 font-serif text-lg italic text-[#b8a896]">
            Über Supervision, Therapeuten­bewertung und das stille Machtgefälle
            im Behandlungszimmer
          </p>
        </header>

        <div className="space-y-6 font-serif text-lg leading-relaxed text-[#d8ccbd]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In einer
            Stadt, in der jede zweite Hinterhofpraxis ein Schild mit goldenen
            Buchstaben trug, begann die Geschichte von Doktor M., einem Mann,
            der von sich selbst behauptete, keinen blinden Fleck zu haben –
            was, wie wir noch sehen werden, der erste und größte blinde Fleck
            seiner Karriere war.
          </p>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae. Die Supervision, so erklärte er gerne seinen
            Kandidaten, sei eine reine Formsache – ein Ritual für die Schwachen,
            ein Feigenblatt für die Unsicheren. Er selbst, sagte er, habe sie
            längst hinter sich gelassen. Genau in jenem Augenblick begann der
            Boden seiner Praxis, ganz leise, zu knirschen.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Auf den Therapeuten­bewertungsportalen, jenen digitalen
            Beichtstühlen, sammelten sich derweil die Sterne wie Motten um eine
            Lampe. Fünf Sterne von Frau K., fünf Sterne von Herrn L., fünf
            Sterne von einem Account, der verdächtig nach Doktor M. selbst klang.
            Niemand, so schien es, hatte je etwas zu beanstanden.
          </p>
          <p>
            Nullam quis risus eget urna mollis ornare vel eu leo. Doch zwischen
            den Zeilen, in den Pausen, in den kleinen Schiefheiten eines
            zugeworfenen Blicks, lag das Machtgefälle wie ein zu schwerer
            Teppich im Raum. Wer auf der Couch lag, sah die Decke. Wer im
            Sessel saß, sah die Rechnung. Und beide nannten es Beziehung.
          </p>
          <p>
            Donec id elit non mi porta gravida at eget metus. Es war Frau S.,
            eine Patientin mit ungelenker Höflichkeit und einem Notizbuch in
            Pflaumenrot, die als erste das Wort aussprach, das in dieser Praxis
            seit Jahren unter dem Sofa lag: unseriöse Therapie. Sie sprach es
            leise, fast entschuldigend, und doch fiel es wie ein Glas auf
            Parkett.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Die Beschwerde
            bei der Psychotherapie­kammer wurde an einem Dienstag verfasst, mit
            jener bürokratischen Inbrunst, die nur aus echter Verletzung
            erwächst. Drei Seiten, einzeilig, mit Anlagen. Die Kammer
            antwortete in dem ihr eigenen Ton: höflich, vorsichtig, in der
            Schwebe zwischen Ernstnehmen und Wegmoderieren.
          </p>
          <p>
            Maecenas faucibus mollis interdum. Was dann folgte, war keine
            Tragödie und keine Pointe, sondern jenes seltsame Dazwischen, in
            dem sich Satire am wohlsten fühlt: Sitzungen wurden fortgesetzt,
            Rechnungen gestellt, Worte gewogen. Doktor M. begann, in seinen
            Stunden häufiger das Wort „Reflexion" zu benutzen, als wäre es ein
            Pflaster.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Die Kritik, soviel
            war gewiss, würde nichts einreißen. Aber sie zog, fein wie ein
            Haarriss, durch das Glas der Praxistür. Und manchmal, wenn das
            Licht im richtigen Winkel fiel, konnte man ihn sehen: den blinden
            Fleck, der nun einen Namen hatte.
          </p>
          <p>
            Etiam porta sem malesuada magna mollis euismod. Hier endet das
            erste Kapitel – nicht mit einem Knall, sondern mit dem Geräusch
            einer Tür, die ins Schloss fällt, und einer Supervisionsstunde, die
            zum ersten Mal seit langer Zeit wieder im Kalender steht.
          </p>
        </div>

        <figure className="mt-20">
          <img
            src={coverBottom}
            alt="Blick aus dem Fenster auf einen regennassen Parkplatz – Schlussbild der Novelle"
            width={1792}
            height={1024}
            loading="lazy"
            className="h-auto w-full rounded-sm shadow-2xl shadow-black/60"
          />
          <figcaption className="mt-3 text-center text-xs uppercase tracking-[0.25em] text-[#8a7560]">
            Ende des ersten Kapitels
          </figcaption>
        </figure>
      </article>
    </main>
  );
}
