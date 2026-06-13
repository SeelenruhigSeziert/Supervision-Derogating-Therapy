import { createFileRoute } from "@tanstack/react-router";
import coverTopAsset from "../assets/cover-top.png.asset.json";
import coverBottomAsset from "../assets/cover-bottom.png.asset.json";

const coverTop = coverTopAsset.url;
const coverBottom = coverBottomAsset.url;

const TITLE = "Die Supervision – Eine Satire über Therapeutenbewertung, Machtgefälle und den blinden Fleck";
const DESCRIPTION =
  "Eine satirische Novelle über Supervision, Therapeutenbewertung, den blinden Fleck im Behandlungszimmer, Machtgefälle und unseriöse Therapie – inklusive Beschwerde bei der Psychotherapiekammer.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Supervision, Therapeuten Bewertung, blinder Fleck, Machtgefälle, Psychotherapie Kammer Beschwerde, Satire, Kritik, unseriöse Therapie, Orwitz, Raub-Auer",
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
    <main className="min-h-screen bg-[#1a1512] text-[#d4c8b8]">
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
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
            Die Supervision
          </h1>
        </header>

        <div className="space-y-6 font-serif text-lg leading-relaxed text-[#c4b8a8]">
          <p>
            Ein Montag im Herbst. Es regnet, es ist grau, schwüle 19 Grad die sich anfühlen wie 23.
          </p>
          <p>
            Raub-Auer: „Guten Tag, Frau Kollegin. Nun, ich weiß nicht, warum ich hierher zur Supervision soll. Dieser Patient war wirklich schwierig. NEUNMAL kam er wieder! Für wen hält er sich. Ich bin lebensfähig! Fähiger als mein Mann. Also frage ich Sie: Warum das hier alles und warum erst jetzt?“ Fr. Orwitz wischt angewidert etwas Hundekot von ihrem Schuh und legt das beschmierte Taschentuch auf den Unterteller ihrer Teetasse. Dann blickt sie Frau Raub-Auer knittrig an, legt eine Hand auf die Bibel neben ihr und spricht:
          </p>
          <p>
            „Sprüche 26,12: Siehst du einen, der sich selbst weise dünkt? Für einen Toren gibt es mehr Hoffnung als für ihn... Lukas 14,11: Wer sich selbst erhöht, wird erniedrigt werden; und wer sich selbst erniedrigt, wird erhöht werden!“
          </p>
          <p>
            „Galater 6,7“, fährt sie fort, während sie einen Schluck vom Tee nimmt. „Was der Mensch sät, das wird er ernten. Lukas 17,17: ‚Wo sind die neun?‘ – Der Satz ist kurz, fast schon lakonisch, und wird oft als Kommentar zu Undankbarkeit, fehlender Selbstreflexion oder menschlicher Gleichgültigkeit verstanden.“ Orwitz starrt Raub-Auer auf die Füße.
          </p>
          <p>
            Raub-Auer nickt mechanisch-einstudiert, wie sie es seit eh und je verinnerlicht hat: „Wenn Bibelverse alles sind, was Sie haben, ist das hier vergebene Liebesmüh! Wo sind die 9? Ja, wo sind sie denn?“, gackert sie verächtlich, die Augen genervt rollend.
          </p>
          <p>
            Frau Orwitz steht auf und entkleidet sich bis auf die Unterhose, um dann auf und ab zu laufen...: „Wissen Sie, Frau Raubbauer... Ich mache das hier nur, weil ich das Geld brauche. Ich wünschte, die Umstände hätten es nicht zugelassen, dass ich heute die 3km hierher überwinden kann, aber hier bin ich. Und Sie? Sie haben nur Kritik, das ist mir zu anstrengend“, entgegnet sie resolut.
          </p>
          <p>
            Raub-Auer verzieht den Mundwinkel einseitig zu einem abfällig-kühlen Lächeln: „Was soll mich das jetzt lehren?“
          </p>
          <p>
            „Sie sind eine DRRROOOGENDEALERIN!“, schreit Orwitz ihre Kollegin unerwartet an.
          </p>
          <p>
            Raub-Auer zuckt keinen Millimeter, fixiert die halbnackte Orwitz mit der Eiseskälte einer sibirischen Winterlandschaft: „Nun... Drogen-Dealer-in... Ein interessanter, wenn auch primitiver Versuch der Externalisierung, Frau Kollegin.“ Sie spiegelt mechanisch Orwitz’ forsche Körperhaltung, während sie leicht nach vorne kippt. „Sie versuchen, mich in die Rolle der Giftmischerin zu drängen, um von Ihrer eigenen... sagen wir... textuellen Armut abzulenken. Aber lassen Sie uns doch beim Kern bleiben. Lukas 17,17? Undankbarkeit?“ Sie gackert wieder, diesmal eine Oktave höher, während ein Auge tränt. „Ich habe diesen Patienten neunmal ertragen! Ich habe ihn gespiegelt! Ich habe geatmet! Ich habe ihm nackte Tatsachen geschenkt! Wer ist hier die Dealerin? Ich deale mit der Wahrheit! Was dealen Sie? Mit... Exkrementen auf Porzellan?“
          </p>
          <p>
            Dipl.-Psychologin Orwitz bleibt abrupt in Unterhose stehen, die Hände in die Hüften gestemmt, die Haut knittrig vor Wut. Sie schaut an Raub-Auer vorbei, direkt in die imaginäre Sonne: „Die Wahrheit?! Sie wissen doch gar nicht, was Wahrheit ist! Wahrheit ist, dass Ihr Mann Sie nicht mal mehr ansieht, weil Ihre Aura komplett von der 5G-Antenne verstrahlt ist!“ Sie haut mit der flachen Hand so fest auf die Bibel, dass der Hundekot-Teeteller vibriert. „Sie dealen mit psychologischem Gift! Sie lullen die Menschen ein, bis sie wehrlos sind, und dann entziehen Sie ihnen den emotionalen Sauerstoff! Das ist seelisches Crack, Frau Raubbauer! Ich hingegen...“, sie zieht theatralisch den Bauch ein, „...ich bin nackt vor dem Herrn! Ich bin ehrlich! Ich sage: Ich brauche das Geld! SIE tun so, als wären Sie die unfehlbare Kammer-Heilige, aber in Ihrem Gesicht sprießen bereits die Pusteln Ihrer eigenen moralischen Verderbtheit!“
          </p>
          <p>
            Raub-Auer japscht hörbar nach Luft, als wäre eine allergische Reaktion im Anflug. Ihre Stimme wird ein heiseres Krächzen: „Das... das ist eine unverschämte... Hatschi!... eine haltlose Unterstellung! Mein Mann... mein Mann schätzt meine Lebensfähigkeit! Ich bin diejenige, die hier die Praxis-Miete sichert! Und was Ihren Vorwurf der Verstrahlung angeht: Das ist eine klassische... Hatschi!... psychotische Projektion! Was sind Sie? Heilpraktikerin?“
          </p>
          <p>
            Frau Orwitz tritt drohend einen Schritt näher, hebt den Zeigefinger wie ein alttestamentarischer Prophet und brüllt ihr direkt ins Gesicht: „Apostelgeschichte 13,10! ‚O du Kind des Teufels, voll aller List und aller Bosheit, du Feind aller Gerechtigkeit, hörst du nicht auf, zu verdrehen die geraden Wege des Herrn?‘ Nehmen Sie sofort Ihre Brille ab, Raubbauer! Die Gläser bündeln die toxische Energie Ihrer missgünstigen Gedanken und werfen sie auf meine Praxiswände zurück! Ihre Brille macht Sie wahrnehmungsgestört! Kein Wunder, dass die Patienten alle weglaufen! Dieser Freder hatte vollkommen recht. Sie sehen vielleicht jung aus, aber Ihre Seele ist so alt und vertrocknet wie eine unbezahlte Krankenkassen-Abrechnung von 1994!“
          </p>
          <p>
            Raub-Auer, völlig demoralisiert: „Ich... ich werde Sie der Kammer melden. Diese Farce wird Konsequenzen haben... Wenn ich mir Ihre Bewertungen auf YouMedi anschaue, sind SIE es, die das letzte Update vor vielen Jahrzehnten hatte! Sie sind ja wirklich völlig desorientiert.“
          </p>
          <p>
            Orwitz lacht schallend, schnappt sich ihre Teetasse, ignoriert das Taschentuch und nimmt einen tiefen Schluck: „Mundet der Blick in den Spiegel nicht? Bitter wie abgestandener Tee, nicht wahr? Die Kammer...“, murmelt sie, „die Kammer schützt mich schon seit dreißig Jahren vor Leuten wie Ihnen! Und jetzt raus aus meiner Komfortzone, die Strahlung wird mir zu anstrengend! Ich muss jetzt etwas spazieren gehen.“
          </p>
          <p>
            Ein Montag im Herbst 2026. Es regnet, es ist grau, schwüle 19 Grad, die sich anfühlen wie 23.
          </p>
          <p>
            „Supervision“ steht in Ina Raub-Auers Terminkalender. Sie klingelt mit genervter Miene an der Praxistür von Frau Dipl. Psychologin Orwitz. Diese kommt plötzlich von hinten angelaufen. „Wir hatten heute einen Termin!“, sagt Ina Raub-Auer latent entrüstet. „Das müssen wir aber noch üben“, denkt sie sich innerlich kopfschüttelnd bezüglich des unpünktlichen Erscheinens; ein kühles, falsches Lächeln huscht über ihr Gesicht.
          </p>
          <p>
            „Ja, das mag sein“, entgegnet Frau Orwitz forsch, als sie die Tür aufschließt. „Ich musste noch ins Fitnessstudio.“ Im Therapieraum angekommen, legt sie die Bibel neben ihren Sessel und lässt sich nieder. „Sie tragen ja noch immer diese Brille. Diese Wahrnehmungsstörung kommt daher, Frau Raubbauer! Das größte Gefängnis des Narziss war nicht sein Spiegel, sondern sein Blick.“ „Raub-Auer!“, berichtigt Ina die etwas desorientiert wirkende Kollegin Orwitz und fährt fort: „... das ist doch vergebene Liebesmüh. Für Sie habe ich heute 3 Patienten abgesagt.“
          </p>
          <p>
            „‚Du sollst ein Böcklein nicht in der Milch seiner Mutter kochen.‘ 2. Mose 23,19“, entgegnet Frau Orwitz in furchteinflößender, ruhiger Stimme und starrt Frau Raub-Auer an. Zwei weitere stille Minuten Staring-Contest ohne Worte folgen. „Nun, ich kann ja angeblich keine Kritik vertragen. Ich würde sagen, ich habe Ihnen eben das Gegenteil bewiesen. Sind wir jetzt fertig?“ setzt Ina Raub-Auer demonstrativ ungerührt dagegen.
          </p>
          <p>
            „Alles hat seine Zeit“, entgegnet Frau Orwitz und porkelt ein bisschen Hundekot unter der Sohle ihres linken Schuhs mit dem Kugelschreiber hervor. „Ihre ‚Allergie‘ – die liegt vielleicht an der schlechten Luft und den Strahlen. Hören Sie auf, Ihre Patienten zu veräppeln! SIE BELÜGEN SICH SELBST!“, wirft die Schuhsohlen säubernde Diplompsychologin brüsk in den Raum.
          </p>
          <p>
            Der Regen fällt träge gegen die Scheibe, während sich die schwüle Luft im Therapieraum sammelt wie in einer schlecht gelüfteten Waschküche. Ina Raub-Auer fixiert die Bewegung des Kugelschreibers, der jetzt ein besonders hartnäckiges Stück getrockneten Kot aus dem Profil der Schuhsohle hebelt. Ein winziges Krümelchen landet auf dem Parkett. Raub-Auers linkes Augenlid zuckt minimal.
          </p>
          <p>
            „Ich belüge mich selbst?“, wiederholt Ina mit einer Stimme, die so scharf geschliffen ist, dass sie Glas schneiden könnte. Sie rückt ihre Brille mit dem Zeigefinger millimetergenau zurecht. „Frau Orwitz, das ist projektive Identifikation par excellence. Ein klassischer Abwehrmechanismus, um von der eigenen strukturellen Überforderung abzulenken. Sie kommen zu spät, weil Ihr Terminkonstrukt kollabiert, und flüchten sich in Küchen-Esoterik über Luftqualität und Strahlung. Was kommt als Nächstes? Eine Fehldiagnose anhand von Wasseradern?“
          </p>
          <p>
            Frau Orwitz hält mitten in der Bewegung inne. Der Kugelschreiber verharrt an der Sohle. Sie hebt langsam den Kopf, die Augen unheimlich starr. „Die Wahrheit“, sagt Frau Orwitz mit einer Sanftheit, die bedrohlicher wirkt als jeder Schrei, „ist kein Diagnosehandbuch, Frau Raubbauer. Sie verstecken Ihr verarmtes Ich hinter Schema-F-Plattitüden, Selbstaufwertung durch Psychopathologisierung, Abrechnungsziffern und dieser... dieser visuellen Barrikade in Ihrem Gesicht. Die Strahlen korrumpieren Ihren Geist. Sie spüren es nur nicht mehr, weil Sie taub geworden sind. TOT.“ Sie legt den Kugelschreiber mit einem dumpfen Klack direkt auf die ledergebundene Bibel.
          </p>
          <p>
            Ina stößt ein kurzes, affektiertes Lachen aus. „Raub-Auer! Es ist wirklich faszinierend, wie konsequent Sie die Grenzen des Respekts missachten. Ein eklatanter Mangel an professioneller Abgrenzung. Und diese biblischen Analogien... Ein Böcklein in der Milch seiner Mutter? Wollen wir jetzt ernsthaft eine Bibelstunde aus dieser lästigen Pflichtveranstaltung machen, oder ist das Ihre subtile Art zu sagen, dass Sie fachlich am Ende Ihres Lateins sind?“
          </p>
          <p>
            „Es steht alles geschrieben“, entgegnet Frau Orwitz ungerührt. Sie lehnt sich in ihrem Sessel zurück, verschränkt die Arme und fixiert die Kollegin Raub-Auer mit einem Blick, der keine Regung zeigt. „‚Wer die Ohren verschließt vor dem Schreien des Armen, der wird auch rufen und nicht gehört werden.‘ Sprüche 21,13. Ihre Patienten schreien, Frau Raubbauer. Aber Sie hören nur das Rascheln Ihrer Honorarnoten und den klangvollen Glanz Ihres Spiegelbildes. Wer nur einen Hammer hat, für den sieht jedes Problem wie ein Nagel aus.“
          </p>
          <p>
            Ein schweres, bleiernes Schweigen legt sich über den Raum. Die schwüle Hitze drückt. Ina spürt, wie ihr die Haare im Nacken kleben, doch sie weigert sich, sich auch nur einen Zentimeter zu bewegen. Sie hält dem starren Blick von Frau Orwitz stand. Eine Minute vergeht. Das Ticken einer Wanduhr, die irgendwo im Flur schlägt, ist das einzige Geräusch. Zwei Minuten. Keines der beiden Gesichter rührt sich. Es ist ein eisiger, stummer Krieg im stickigen Raum. Schließlich bricht Ina die Stille. Sie blickt demonstrativ auf ihre altmodische Armbanduhr, zieht einen Mundwinkel kühl nach oben und erhebt sich mit kontrollierter Eleganz.
          </p>
          <p>
            „Nun, ich kann ja angeblich keine Kritik vertragen“, sagt sie mit schneidender Gelassenheit, während sie ihre Regenjacke glattstreicht. „Ich würde sagen, ich habe Ihnen heute das Gegenteil bewiesen. Ich habe mir Ihre... unkonventionellen Projektionen volle zwei Minuten lang schweigend angehört. Sind wir jetzt fertig?“ Frau Orwitz bewegt keinen Muskel. Ihr Blick bleibt auf den leeren Stuhl gerichtet, auf dem Ina gerade noch saß.
          </p>
          <p>
            „Alles hat seine Zeit“, entgegnet Frau Orwitz leise und greift wieder nach dem Kugelschreiber, um die restlichen Hinterlassenschaften von ihrer Sohle zu kratzen. „Auch die Einsicht. Gehen Sie nur, Frau Raubbauer. Sie können sich weder von sich selbst entfernen noch sich selbst erreichen.“
          </p>
          <p>
            „RAUB-AUER! Das ist ja gestört... WAS wollen Sie hören? Worüber wir hier sprechen, entscheiden Sie, Frau Orwitz!“, lamentiert sie und wirft dabei theatralisch die Arme in die Luft. „Sie manipulieren mich nicht, Frau Kollegin. Geben Sie mir die Packung Taschentücher da drüben“, entgegnet Orwitz und streckt eine offene Hand wartend Richtung Raub-Auer.
          </p>
          <p>
            „Warum haben Sie eigentlich Hundekot unterm Schuh, Frau Oh-pütz?“
          </p>
          <p>
            „Orwitz. Ich heiße Orwitz. ‚Was geschehen ist, wird wieder sein, und was getan worden ist, wird wieder getan werden; es gibt nichts Neues unter der Sonne.‘ Prediger 1,9“, zitiert sie achselzuckend mit müdem Blick auf ihre Schuhsohle.
          </p>
          <p>
            Raub-Auer fixiert sie, die Augenlider leicht verengt. „Was soll man daraus denn lernen?“, ein gelangweilt-spöttischer Unterton schwingt in dieser Frage mit. „Fällt Ihnen eigentlich NICHTS auf, wenn Sie aus dem Fenster schauen?“, fragt Frau Orwitz, während sie beiden eine Tasse Tee eingießt.
          </p>
          <p>
            Frau Raub-Auer niest.
          </p>
          <p>
            „Sie bekommen bei mir Tee und können meine Toilette benutzen, aber Fremdregulationsverhalten finden Sie bei mir nicht, Kindchen. Lassen Sie diese albernen Spielchen. Wir wissen BEIDE, warum wir hier sind.“
          </p>
          <p>
            „Jaaa, die Kammerbeschwerde wegen dieser verweichlichten Patienten." stöhnt Ina Raub-Auer „Warum praktizieren SIE eigentlich noch bei so vielen absurden 1-Sterne-Bewertungen, Frau Orwitz? Und dieser Mann in Unterhose-“
          </p>
          <p>
            Frau Orwitz unterbricht sie: „Da war kein Mann in Unterhose, Raubbauerin!“, unterbricht Frau Orwitz sie mit einer fast schon unheimlichen Sanftheit. Sie stellt die Teetasse so präzise auf dem Unterteller ab, dass kein einziges Geräusch entsteht. „Das ist das erste Glied der Kette, die Sie sich im Leben geschmiedet haben. Glied um Glied, Zentimeter um Zentimeter. Sie haben sie aus freiem Willen angelegt.“
          </p>
          <p>
            Therapeutin Raub-Auer rollt so heftig mit den Augen, dass es fast wehtut. „Hören Sie mir bloß auf mit Dickens. Als Nächstes erzählen Sie mir wahrscheinlich, dass gleich der Geist der vergangenen Supervisionen durch die Tür schwebt. Wir sind hier nicht in einer Weihnachtsgeschichte, Frau Orwitz, sondern in einer völlig verfahrenen, kollegialen Pflichtveranstaltung. Und die Kammer wird sich brennend für Ihre... messianischen Allüren interessieren.“
          </p>
          <p>
            Frau Orwitz reagiert gar nicht auf die Drohung. Sie schaut nicht mal zu Ina. Ihr Blick wandert stattdessen langsam zum Fenster, an dem der Regen unaufhörlich herabrinnt. Die Tropfen wirken merkwürdig zäh, fast wie Sirup.
          </p>
          <p>
            „Schauen Sie doch mal hin“, sagt Frau Orwitz leise, fast beschwörend, und deutet mit dem schmutzigen Kugelschreiber vage nach draußen. „Sehen Sie den Mann auf der anderen Straßenseite? Der mit dem nassen, grauen Mantel, der seit zwei Stunden versucht, sein Auto aufzuschließen?“
          </p>
          <p>
            Ina wirft einen genervten Blick durch die beschlagenen Scheiben. Tatsächlich: Ein Mann im Regen, die Kapuze tief ins Gesicht gezogen, der verzweifelt den Schlüssel im Schloss dreht.
          </p>
          <p>
            „Ein unfähiger Autofahrer. Und? Was hat das mit uns zu tun?“, fragt Ina schroff.
          </p>
          <p>
            „Er hieß Herr Freder“, flüstert Frau Orwitz, und zum ersten Mal liegt in ihrer Stimme kein Zorn, sondern eine tiefe, bleierne Müdigkeit. „Er war letzten Montag schon da. Er war vorletzten Montag da. Er wird auch nächsten Montag dort stehen und versuchen, dieses Schloss zu öffnen. Er kommt nicht weg, Frau Raubbauer. Weil Sie ihn nicht weggelassen haben. Er hat Ihnen eine Bewertung geschrieben, wissen Sie das noch? Eine einzige Zeile. Sie haben ihn vernichtet.“
          </p>
          <p>
            Ina spürt plötzlich ein ganz unangenehmes, kaltes Ziehen in der Magengegend. Das schwüle Zimmer fühlt sich mit einem Mal seltsam luftleer an. Sie räuspert sich, um die plötzliche Heiserkeit zu vertreiben: „Das... das ist absurd. Ich kenne keinen Freder. Meine Patienten sind anonymisiert. Und hören Sie auf, meinen Namen permanent falsch auszusprechen, das ist eine unverschämte Machtdemonstration!“
          </p>
          <p>
            Frau Orwitz dreht den Kopf. Ihre Augen wirken im fahlen Licht des Raumes riesig, fast transparent. Sie schaut Ina Raub-Auer direkt in die Seele.
          </p>
          <p>
            „Warum sollte ich das tun?“ ihre kalkuliert arglose Stimme spiegelte diese einstudierte, mütterliche Sanftheit wider - eine weiche Maske, durch deren Risse der nackte Spott schimmerte. „Ich demonstriere gar nichts, Kindchen. Ich bin ein leeres Blatt Papier“, sagt sie, und ein bitteres, wissendes Lächeln umspielt ihre Lippen. Ein stechender Schmerz schoss Ina in die Schläfe. Habe ich das nicht gesagt? Die Worte brannten wie Asche auf ihrer Zunge. Es war ihr eigener Satz. Dieselbe herablassende, süßliche Infantilisierung, mit der sie selbst... Nein. Sie schüttelt den Gedanken ab. „Ich versuche nur, Ihnen beim Zählen zu helfen. Wie viele Sitzungen hatten Sie mit ihm? Neun? Und was haben Sie gelernt? Nichts. Deshalb sind wir hier. Wieder. Und wieder. Bis-...“ sie hält inne, als ein lauter, dumpfer Schlag durch die Stille schallt und eine Amsel die gegen die Fensterscheibe knallt, tot zu Boden fällt. Regentropfen perlen vom leblosen Gefieder. Zwei Augenpaare fixieren den kleinen, dunklen Fleck im Gras. Niemand sagt ein Wort.
          </p>
          <p>
            Orwitz schiebt Kollegin Ina eine Teetasse hinüber. Der Tee dampft nicht einmal, obwohl er gerade eingegossen wurde. Er ist vollkommen kalt.
          </p>
          <p>
            „Was wollen Sie mir andichten? Dass meine Allergie nicht echt ist? Dass ich meine Patienten  narzisstisch missbrauche? Was ist denn mit IHNEN? Warum erscheinen Sie nie zu verabredeten Terminen? WARUM klammern Sie sich an Bibelzitate, Frau Orwitz, und springen zielsicher in jeden Hundehaufen dieser Stadt?! Warum können Sie diese lächerliche, kurze Fußstrecke von Ihrer Wohnung zur Praxis nicht überwinden?“
          </p>
          <p>
            Frau Orwitz lässt den Kugelschreiber sinken. Das feine Kratzen an ihrer Schuhsohle verstummt. Sie blickt nicht auf, sondern starrt auf das schwarze Leder der Bibel, als könnte sie den Text durch den Einband hindurchlesen. Ein langes, quälendes Schweigen füllt den Raum, untermalt nur vom monotonen, zähen Klatschen des Regens gegen das Fenster.
          </p>
          <p>
            „Weil es keine Fußstrecke gibt, gnädige Frau Raubbauer“, sagt Frau Orwitz schließlich. Ihre Stimme ist so leise, dass Ina sich unwillkürlich vorbeugen muss, um sie zu verstehen. „Es gibt keine Wohnung. Und es gibt da draußen keine Straße mehr.“
          </p>
          <p>
            Ina stößt ein schnaubendes, fast hysterisches Lachen aus, doch es klingt seltsam flach in der stickigen Luft. „Ach, jetzt werden wir also komplett paranoid? Ich bin vor genau zehn Minuten durch diese Tür gegangen! Ich habe im Auto gesessen, ich habe geparkt, ich bin durch den verdammten Regen gelaufen!“
          </p>
          <p>
            „Sind Sie das?“, bohrt die eigensinnige Psychologin Orwitz und hebt langsam den Blick. Ihre Augen fixieren Ina mit einer bodenlosen, mitleidigen Schwere. „Wann sind Sie denn losgefahren, Kindchen? Welches Jahr haben wir? Welcher Monat ist draußen?“
          </p>
          <p>
            „Es ist Montag!“, schießt Ina zurück, während sich ihre Hand instinktiv um den Henkel der eiskalten Teetasse klammert. „Ein Montag im Herbst! Es ist...“ Sie stockt. Das Wort bleibt ihr im Hals stecken. Sie will das Datum aussprechen, die genaue Jahreszahl, doch in ihrem Kopf ist plötzlich nur noch... grauer Nebel. Wie eine gelöschte Datei. Ihr Herz tut einen heftigen, stolpernden Schlag. „Das ist billige Suggestion. Sie manipulieren mich. Sie wollen mich psychisch destabilisieren, um von Ihrer eigenen Inkompetenz abzulenken! Es geht Ihnen nur um Macht!“
          </p>
          <p>
            „Ich klammere mich nicht an die Bibel, weil ich gläubig bin“, fährt Frau Orwitz ungerührt fort, als hätte Ina gar nichts gesagt. Sie streicht mit einem blassen Finger über das Buch. „Ich zitiere sie, weil es das Einzige ist, was in diesem Raum echt ist. Der Text bleibt gleich. Alles andere... schauen Sie sich doch um. Jedes Mal, wenn wir von vorne beginnen, ist der Fleck unterm Schuh ein bisschen größer. Jedes Mal sitzen wir hier, und Sie zählen mir Ihre drei abgesagten Patienten auf. Immer dieselben drei. Seit wie vielen Ewigkeiten wohl?“
          </p>
          <p>
            Ina spürt, wie ihr der Schweiß kalt den Rücken hinabläuft. Die schwüle Luft im Raum fühlt sich plötzlich an wie Blei. Sie will aufstehen, will zum Fenster gehen, um diesem Wahnsinn zu entkommen, aber ihre Beine fühlen sich an, als wären sie mit dem Sessel verwachsen.
          </p>
          <p>
            „Das ist ein Albtraum“, flüstert Ina, und ihre sonst so perfekte, aalglatte Fassade bekommt einen tiefen Riss. „Ich bin einfach nur überarbeitet. Die Kammerbeschwerde, der Stress mit diesen unverschämten Internet-Bewertungen... Ich halluziniere.“
          </p>
          <p>
            „Es ist kein Traum, Kollegin Raubbauer. Es ist das Wartezimmer“, entgegnet Frau Orwitz mit einer Sanftheit, die Ina Raub-Auer fast körperlich wehtut. „Wir gehen die Liste durch. Einen nach dem anderen. Bis wir verstehen, was wir ihnen zugemutet haben. Glauben Sie mir, ich habe auch versucht, wegzulaufen. Ich habe versucht, in der Wohnung zu bleiben. Aber man wacht immer wieder hier auf. Im nassen Gras. Pünktlich zur Supervision.“
          </p>
          <p>
            Sie deutet mit einer langsamen Kopfbewegung zum Fenster.
          </p>
          <p>
            „Der Mann da draußen... Herr Freder. Er wartet nicht auf sein Auto. Er wartet auf ein Wort von Ihnen. Auf ein einziges ehrliches Wort. Einsicht. Selbstreflexion, Frau Raubbauer. Erst dann hört der Regen auf. Für uns beide.“
          </p>
          <p>
            Frau Orwitz lehnt sich mit selbstzufrieden traktierendem Blick zurück. Der Kugelschreiber ruht auf der Bibel. Sie nimmt einen Schluck vom Tee und stellt die Tasse voller als sie zuvor noch war, zurück. „Erst dann“, flüstert sie. Das Handy von Frau Raub-Auer lässt einen Kurznachrichten-Ton durchs Zimmer scheppern. Die Frauen starren sich wortlos an, gleichermaßen um die Kontrolle ihrer Mimik bemüht.
          </p>
          <p>
            „Na, machen Sie schon, schauen Sie, was es ist!“, raunt Therapeutin Orwitz unwirsch und blickt wieder zu dem dunklen Fleck auf der Wiese vor dem Fenster. Raub-Auer blickt auf das Display ihres Handys. „Eine 1-Sterne-Bewertung. Aber ich kann sie nicht öffnen.“ Sie legt das Handy mit genervter Mimik beiseite und schnauft. „Es geht mir nicht um MACHT, Frau Orwitz!“
          </p>
          <p>
            Draußen donnert und blitzt es in diesem Moment wie das Räuspern einer höheren Macht. Frau Orwitz lässt den Kopf sinken. „Aber natürlich, Kindchen.“ Wieder blitzt es draußen. Raub-Auer glaubt einen Moment, den Verstand zu verlieren, als sie meint, ihren Tee plötzlich dampfen zu sehen.
          </p>
          <p>
            „Das sind IHRE Bewertungen, Frau Orwitz! Warum machen Sie überhaupt noch weiter? Es geht Ihnen um Aufmerksamkeit, richtig?“, sie spielt nervös mit einem Haargummi welches sie, Kollegin Orwitz musternd, aus ihrer Hosentasche hervorkramt. „Wissen Sie, eine echte Therapeutin zu sein, ist wirklich mit viel Leid verbunden. Ich kann das aushalten!“ merkt sie nonchalant an „Aber Sie... Sie attestieren Menschen eine Wahrnehmungsstörung, da sie eine Brille haben, und –“
          </p>
          <p>
            „DROGENDEALERIN!“, fährt Orwitz ihr schroff dazwischen. „Alles ist eitel und ein Haschen nach Wind“, setzt sie mit einer abwehrenden Kopfbewegung fort.
          </p>
          <p>
            Das Wort hängt wie giftiges Gas in der schwülen, schweren Luft des Raumes. Drogendealerin. Ina Raub-Auer erstarrt. Ihre Finger, die eben noch nervös mit dem Haargummi gespielt haben, verkrampfen sich. Das dumpfe Grollen des Donners draußen scheint direkt durch die Wände zu vibrieren. Sie spürt, wie die Kälte aus der Teetasse weicht. Der dünne, graue Schleier, der jetzt von der Oberfläche aufsteigt, ist kein normaler Wasserdampf – er riecht nach kaltem Rauch und feuchter Erde.
          </p>
          <p>
            „Drogendealerin?“, wiederholt Ina, und ihre Stimme überschlägt sich fast vor kontrollierter Fassungslosigkeit. „Sind Sie jetzt völlig herzkrank im Kopf, Frau Orwitz?! Was erlauben Sie sich eigentlich? Ich therapiere absolut kaputte Menschen! Ich gebe ihnen Struktur, Werkzeuge, Heilung! Ich sage ihnen, es ist okay, ganz unten zu sein. Mit ihrer Vita kann es gar nicht anders sein! Aus ihnen hätte auch krimineller Schmutz werden können, aber das ist es nicht. Irgendwo da draußen ist jemand, dem sie von Nutzen sein werden, der sich größer fühlen kann ganz ohne Mühe, weil SIE so klein sind. Sie brauchen keinen mentalen Notausgang nachts um zwei, keine Lügen der Selbstregulation, keine bunten Pillen, keine Resilienz, sie brauchen MICH, Frau Orwitz, mich!“
          </p>
          <p>
            „Heilung?“, Frau Orwitz stößt ein trockenes, freudloses Lachen aus und nimmt wieder den Kugelschreiber zur Hand, um das nächste unsichtbare Staubkorn auf der Bibel zu fixieren. „Sie dealen mit Abhängigkeiten. Sie verkaufen diesen armen Seelen die Illusion von Anerkennung, nur um sie danach umso tiefer in die Entwertung zu stürzen. Ein genialer Kreislauf, nicht wahr? Erst macht man sie klein, redet ihnen ein, sie seien ohne Ihre hochbezahlte Struktur gar nichts – und wenn sie dann brav aus Ihrer Hand fressen, loben Sie sie für ihre ‚großartigen Fortschritte‘. Ein schönes, perfides Spiel. Ein wahres Krankheitsgewinn-Stellvertreter-Syndrom.“
          </p>
          <p>
            „Das ist eine absolute Unverschämtheit!“, schießt Ina herauf. Sie will aufspringen, doch das Leder ihres Sessels scheint sie regelrecht festzusaugen. „Ich halte meine Patienten nicht klein! Ich fordere sie. Wer mit meiner direkten, professionellen Art nicht umgehen kann, ist schlichtweg noch nicht bereit für echte Transformation. Herr Freder zum Beispiel...“
          </p>
          <p>
            „...war ein starker Mann“, unterbricht Frau Orwitz sie, und ihr Blick wird plötzlich messerscharf. „Ein analytischer Geist. Skeptisch, wachsam. Selbst als er ganz unten war und taub vor Pein und Trauer noch. Er hat Ihr Konstrukt durchschaut, Frau Raubbauer. Er hat gemerkt, dass hinter Ihrer glänzenden Fassade und den hübschen Accessoires nur die pure Angst vor der eigenen Bedeutungslosigkeit sitzt. Und genau deshalb mussten Sie ihn brechen, nicht wahr? Weil seine Stärke Ihre Schwäche entlarvt hat. Und ich dachte, Sie kennen keinen Freder. Wissen Sie, der Unterschied zwischen uns beiden ist –“
          </p>
          <p>
            Wieder zuckt ein Blitz am Himmel auf. Für den Bruchteil einer Sekunde wirft das grelle Licht den Schatten von Frau Orwitz an die Wand – und der Schatten bewegt sich nicht synchron mit ihr, sondern bleibt aufrecht und bedrohlich stehen.
          </p>
          <p>
            Raub-Auer starrt auf ihr Display, das im Rhythmus des Donners immer wieder lautlos aufleuchtet. Die 1-Sterne-Bewertung blockiert den gesamten Bildschirm. Der Text ist unleserlich, verzerrt zu einer Fratze aus digitalen Zeichen.
          </p>
          <p>
            „Der Unterschied ist? Es geht hier nicht um uns“, presst Ina angefasst hervor, während sie verzweifelt versucht, die Kontrolle über ihre Mimik zurückzugewinnen. „Es geht um IHRE Verantwortung! Sie sitzen hier mit Dreck unter den Schuhen, zitieren den Prediger und tun so, als stünden Sie über den Dingen. Aber Sie sind genauso gefangen in diesem Raum wie...“ Sie bricht ab. Das Wort „gefangen“ schmeckt plötzlich viel zu real auf ihrer Zunge.
          </p>
          <p>
            Frau Orwitz neigt den Kopf leicht zur Seite. Ihr Blick hat jetzt etwas unerträglich Traktierendes, fast Mitleidiges.
          </p>
          <p>
            „Sehen Sie?“, flüstert sie, und ihre Stimme klingt, als käme sie aus weiter Ferne, obwohl sie direkt gegenübersitzt. „Ein winziger Moment der Klarheit. Sie spüren die Kette, die Sie sich geschmiedet haben. Sie haben die Verantwortung gegenüber den Menschen, die Ihnen ihr Innerstes anvertraut haben, gegen Ihr eigenes Ego eingetauscht. Sie wollten angebetet werden. Aber hier drin... hier drin gibt es keine Tribüne mehr, Frau Raubbauer. Nur noch den Spiegel.“
          </p>
          <p>
            Sie schiebt die Teetasse noch ein Stück näher an Ina heran. Der Dampf schlägt nun kleine, zähe Blasen.
          </p>
          <p>
            „Trinken Sie ruhig“, sagt Frau Orwitz leise. „Wir haben noch sehr viele Sitzungen vor uns. Und Herr Freder wird draußen im Regen nicht müde.“
          </p>
          <p>
            Ina starrt auf das bitter duftende Gemisch in ihrer Tasse. Der Dampf schlägt ihr entgegen, schwer und erstickend. „Ihr Klient...“, setzt Frau Orwitz mit dieser unerträglichen, ruhigen Stimme an.
          </p>
          <p>
            „Patient!“, bricht es reflexartig aus Raub-Auer heraus. Ihre Stimme klingt scharf, ein vertrauter, mühsam aufrechterhaltener Schutzwall. „Es sind Patienten, Frau Orwitz. Ein klinisches Setting erfordert klare, asymmetrische Strukturen. Diese begriffliche Verwässerung gefährdet die therapeutische Abgrenzung. ICH bin gesund. Normal. Lebensfähig. Ich habe Deutungshoheit.“
          </p>
          <p>
            Frau Orwitz zuckt nicht einmal. Ein mattes, befremdliches Lächeln liegt auf ihren Lippen, als sie langsam den Kopf schüttelt. „Nennen Sie es, wie es Ihr Ego braucht, Kindchen. Aber Ihr Klient hatte etwas, das Ihnen völlig abgeht: Er stand mit beiden Beinen im echten Leben, analytisch, wehrhaft. Er brauchte keine Krücken. Sie wollten ihm einreden, er bräuchte sie, um sich selbst als die große Retterin zu inszenieren. Aber er war lebensfähig. Sie sind es nicht. Sie überleben nur in diesem künstlichen Vakuum aus Macht, Krankheit und Abwertung.“
          </p>
          <p>
            „Ich verbiete mir diese küchenpsychologischen Unterstellungen!“, zischt Ina, während draußen der nächste Blitz die nassen Fensterscheiben in ein unheimliches, gleißendes Licht taucht. „Glauben Sie im Ernst, ich würde hier sitzen, wenn meine Methoden so destruktiv wären, wie Sie sie sich zurechtphantasieren? Ich bin approbiert, ich bin staatlich legitimiert!Schauen Sie sich doch Ihre eigenen Bewertungen an! Das Netz ist voll von Berichten über Ihre Grenzüberschreitungen, Ihre wirren Bibelzitate, Ihre absolute professionelle Verwahrlosung! 1 Stern, Google, YouMedi, überall! Sie gehen ja nicht einmal dagegen vor! Sie sind untragbar!“
          </p>
          <p>
            Frau Orwitz nimmt einen langsamen Schluck von ihrem Tee. Sie blickt ruhig auf die Tasse, dann wieder zu Ina Raub-Auer. Ihre Akzeptanz für die eigene Demontage hat etwas zutiefst Unheimliches, fast Erhabenes.
          </p>
          <p>
            „Ja“, sagt Frau Orwitz leise, und ihre Augen glänzen matt im fahlen Licht. „Die Menschen schreiben schreckliche Dinge. Sie schimpfen, sie klagen an, sie geben mir einen einzigen Stern. Und wissen Sie was? Sie haben recht. Ich nehme das an. Ich trage diese Schande, weil ich weiß, wer ich bin. Und ja, ich brauche das Geld. Aber diese Supervision hier...“, sie klopft mit dem schmutzigen Kugelschreiber zweimal sachte auf das Leder der Bibel, „...die findet ihretwegen statt, Frau Raubbauer. Nicht wegen meiner Fehler. Ich bin nur die Kulisse. Der Spiegel, den man Ihnen hinstellt.“
          </p>
          <p>
            „Raub-Auer! ZWEI Worte! Sie betreiben hier Raubbau an meiner Geduld!“, korrigiert Ina fast hysterisch. Das Haargummi in ihrer Hand reißt mit einem leisen Pling, fliegt gegen die Fensterscheibe und fällt hinab, auf die Fensterbank, wie der tote Vogel. Anflugtrauma. „Sind Sie jetzt völlig am Anschlag?! Sie wollen mir Verantwortung beibringen? Durch diesen... diesen albernen Psychoterror? Wenn das hier eine pädagogische Maßnahme der Kammer sein soll, meinetwegen – aber doch nicht SO!“
          </p>
          <p>
            „Wie denn sonst?“, flüstert Frau Orwitz, und ihr Schatten an der Wand scheint sich quälend langsam nach vorne zu neigen, obwohl sie selbst völlig unbeweglich im Sessel sitzt. „Sie geben hier den Rahmen vor. Dieses SO, das sind Sie! Sanfte Worte haben sie doch nie gehört. Jedes Lob aus Ihrem Mund war nur ein Werkzeug, um die Menschen danach umso tiefer in die Abhängigkeit zu treiben, während sie ihre Aufmerksamkeit auf eine andere lenken. Ihre Geschenke sind vergiftet. Ihr Verständnis sind Beleidigungen, mit Glanzbildern tapeziert. Sie machen gemeinsame Sache mit denen, die diese Menschen in Ihre Arme trieben. Und gerieren sich dann als Retterin. Sie haben die Verantwortung für die Seelen Ihrer Patienten wie eine billige Ware behandelt.“
          </p>
          <p>
            Wieder scheppert der Kurznachrichten-Ton aus Inas Handtasche. Das Display leuchtet auf. Die nächste 1-Sterne-Bewertung blockiert den Bildschirm, unleserlich, aber die Fratze des roten Sterns brennt sich fast in Inas Netzhaut. „Trinken Sie Ihren Tee, Patientin Raubbauer“, sagt Frau Orwitz mit einer unendlichen, dunklen Geduld. „Wir haben alle Zeit der Welt. Und dieser Klient wartet draußen im Regen, bis Sie endlich aufhören, sich selbst zu belügen.“
          </p>
          <p>
            Inas Augenlider bleiben angespannt zusammengekniffen. Das Schweigen im Raum war mittlerweile so dicht, dass man das Gefühl hatte, man müsste die Luft mit einem Spachtel teilen. Ina Raub-Auer starrte auf ihr Telefon. Das Display glühte in einem ungesunden, pulsierenden Rot. Die anonymen Ein-Sterne-Bewertungen flossen jetzt in einer endlosen Kaskade über den Bildschirm wie der digitale Code in einer billigen Dystopie.
          </p>
          <p>
            „Das ist ein Systemfehler“, flüsterte Raub-Auer, ihre Jahrzehnte lang geschonten Fingernägel bohrten sich in das Plastikgehäuse. „Ich habe diesen Menschen geholfen. Ich habe ihnen Struktur gegeben. Sie waren labil, ich war die Konstante“, betet sie mit vor Wut zitternden Händen. „Sie waren der Hammer, Frau Raubbauer“, sagte Frau Orwitz. Sie hatte endlich wieder aufgehört, an ihrer Sohle zu kratzen. Der Kugelschreiber lag nun quer auf der Bibel, exakt wie eine Schranke. „Und Ihre Patienten waren die Nägel. Sie haben sie tiefer in den Boden gerammt, damit sie sich nicht mehr bewegen. Und dann haben Sie sich dafür bewundern lassen, dass sie so schön stillhalten.“
          </p>
          <p>
            „Raub-Auer! Es heißt Raub-Auer! Warum tun Sie das? Warum verweigern Sie mir meinen Namen?“
          </p>
          <p>
            „Weil Sie keinen mehr haben“, erwiderte Orwitz mit einer Sachlichkeit, die das Blut ihrer Kollegin gefrieren ließ. „Hier drin gibt es keine Praxisschilder. Wir sind die Summe dessen, was wir den Leuten hinterlassen haben. Ich sitze hier mit dem Dreck meiner Ignoranz unter den Schuhen. Und Sie... Sie ertrinken in Ihrer eigenen Wichtigkeit und Ignoranz.“ Sie rührt in ihrer Teetasse. „All Ihre Lebensfähigkeit. Wo ist sie hin?“
          </p>
          <p>
            „WO ist Ihr Gott, Frau Orwitz?“, entgegnet sie trotzig, die Arme und Hände von den Armlehnen gehoben.
          </p>
          <p>
            Draußen gab es einen ohrenbetäubenden Schlag. Kein Donner. Es klang, als würde ein riesiger, unsichtbarer Vorhang zugezogen. Der Regen peitschte nicht mehr gegen die Scheibe - er stand still. Millionen von Tropfen hingen mitten in der Luft, wie eingefroren. Und drüben auf der Straße stand der Mann. Ihr Klient. Er hatte den Schlüsselbund fallen gelassen. Er versuchte nicht mehr, das Auto zu öffnen. Er starrte jetzt hoch zum Fenster. Direkt in Inas Augen.
          </p>
          <p>
            „Er sieht mich“, hauchte Raub-Auer. „Er... er will sich beschweren. Er will das Urteil.“
          </p>
          <p>
            „Er will gar nichts mehr“, sagte Orwitz und goss sich seelenruhig den Rest des kalten, dampfenden Tees ein. „Er ist längst weg. Das da draußen ist nur noch die Erinnerung. Die Schleife läuft nicht für ihn, Frau Raubbauer. Die läuft für uns. Bis wir die Verantwortung nicht mehr als Fassade begreifen, sondern als Last, die wir real tragen müssen.“
          </p>
          <p>
            Ina spürte, wie der Boden unter ihren Füßen weich wurde. Der Sessel schien sie aufzusaugen, sie tiefer in den Stoff zu ziehen. „Das ist nicht fair... Ich habe studiert... ich habe Prüfungen abgelegt... das kann nicht das Ende sein!“
          </p>
          <p>
            „Es ist nicht das Ende“, lächelte Orwitz, und dieses Lächeln war von einer tiefen, traurigen Wärme durchzogen. „Es ist erst die neunte Sitzung.“
          </p>
          <p>
            Ein Montag im Herbst. Es regnete, es war grau, schwüle 19 Grad, die sich anfühlten wie 23.
          </p>
          <p>
            Ina Raub-Auer klingelte mit genervter Miene an der Praxistür von Diplom Psychologin Orwitz. Diese kommt plötzlich von hinten angelaufen. „Wir hatten heute einen Termin!“, sagt Raub-Auer latent entrüstet. „Das musst du aber noch üben“, denkt sie sich abfällig bezüglich des unpünktlichen Erscheinens. Sie grinst abschätzig einseitig.
          </p>
          <p>
            „Ja, das mag sein“, entgegnet Frau Orwitz forsch, als sie die Tür aufschließt. „Ich musste noch ins Fitnessstudio.“
          </p>
          <p>
            Im Therapieraum angekommen, legte Orwitz die Bibel neben ihren Sessel und ließ sich nieder. Das Zimmer roch intensiv nach feuchter Erde, bitterem Tee und nassem Hundefell, doch Ina bemerkte es kaum. Sie spürte nur diese seltsame, chronische Müdigkeit in ihren Knochen, als hätte sie eine Ewigkeit nicht geschlafen.
          </p>
          <p>
            „Sie tragen ja noch immer diese Brille. Sie sind deshalb wahrnehmungsgestört, Frau Raubbauer“, sagte Orwitz, während sie sich setzte.
          </p>
          <p>
            Ina atmete scharf ein. Ihr linkes Augenlid zuckt minimal. Ein seltsames Déjà-vu schoss ihr durch den Kopf, flüchtig wie ein Traum, den man beim Erwachen vergisst. Sie spürte den Drang, etwas zu korrigieren. Irgendeinen Fehler im System auszubügeln. Aber die Struktur war wichtiger. Das Machtgefälle musste stehen.
          </p>
          <p>
            „RAUB-AUER!“, berichtigt sie Frau Orwitz und fuhr mit vertrauter, eisiger Gelassenheit fort: „... das ist doch vergebene Liebesmüh. Für Sie habe ich heute drei Patienten abgesagt.“
          </p>
          <p>
            Frau Orwitz sah sie an. In ihren Augen lag kein Triumph, nur die unendliche, gelangweilte Geduld einer Gefängniswärterin, die weiß, dass die Insassin den Ausgang vor lauter Stolz niemals finden wird. Sie griff nach ihrem Kugelschreiber und begann, ein frisches, feuchtes Stück Dreck unter ihrer linken Sohle hervorzuprokeln.
          </p>
          <p>
            „Alles hat seine Zeit“, erwiderte Orwitz leise.
          </p>
          <p>
            Draußen im Regen, auf der anderen Straßenseite, steckte ein Mann im grauen Mantel den Schlüssel ins Autoschloss. Er würde ihn herumdrehen.
          </p>
          <p>
            Wieder und wieder.
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
          <figcaption className="mt-8 text-center text-xs normal-case tracking-[0.25em] text-[#7a6550]">
            Satire. Alle Figuren und Handlungen sind frei erfunden. Etwaige Ähnlichkeiten mit lebenden Personen oder realen Ereignissen sind rein zufällig.
          </figcaption>
        </figure>
      </article>
    </main>
  );
}
