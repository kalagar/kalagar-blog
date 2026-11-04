---
title: "Reicht Programmieren im KI-Zeitalter? Die wichtigsten Fähigkeiten für Software Engineers"
description: "KI schreibt Code. Doch Softwareentwicklung braucht auch Urteilsvermögen, Verantwortung und Prüfung. Fünf Fähigkeiten für das KI-Zeitalter."
date: 2026-11-04
youtubeId: U1UngPhqdrk
---

KI kann in wenigen Minuten eine Funktion erzeugen, die auf den ersten Blick funktioniert. Damit stellt sich für Entwicklerinnen und Entwickler eine Frage: Wo entsteht der Wert ihrer Arbeit, wenn Code leichter zu produzieren ist? Programmieren bleibt wichtig. Nützliche und zuverlässige Software verlangt aber auch, Probleme zu verstehen, Entscheidungen abzuwägen und Verantwortung für Ergebnisse zu übernehmen.

Dieser Artikel vertieft die Fragen aus meinem Video über Softwareentwicklung im KI-Zeitalter. Ein Ausgangspunkt ist das [Interview von Beyond Coding mit Sajal Rustagi, Staff Engineer bei Meta](https://www.youtube.com/watch?v=brNpAU5JmUY). Sein Gespräch über Verantwortung, Wirkung über Teamgrenzen hinweg und die Arbeit mit Agenten hilft, das Thema einzuordnen. Die folgende Zusammenfassung der Forschung und die praktischen Empfehlungen sind meine eigene Einordnung und keine ihm zugeschriebenen Aussagen.

## Vom Code zur Verantwortung für Ergebnisse

Stellen wir uns vor, ein Alarm weckt das Team nachts. Eine enge Reaktion behebt den akuten Fehler und schließt das Ticket. Verantwortung bedeutet auch zu fragen, warum der Fehler auftrat, ob Nutzende noch betroffen sind und wie Monitoring oder Design eine Wiederholung verhindern können. Der passende Umfang hängt von der Lage ab: Bei einem dringenden Vorfall kann eine schnelle Eindämmung vor der tieferen Untersuchung nötig sein.

Ein Senior Engineer treibt häufig komplexe Arbeit innerhalb eines Teams voran; ein Staff Engineer beeinflusst möglicherweise Entscheidungen über mehrere Teams hinweg und arbeitet mit größerer Unsicherheit. Titel und Erwartungen unterscheiden sich je nach Unternehmen. Keine der Rollen wird allein durch die Zahl geschriebener Codezeilen definiert. Auf jeder Erfahrungsstufe hilft es, technische Entscheidungen mit ihren Auswirkungen auf Menschen und Systeme zu verbinden.

## Macht KI Entwickler wirklich produktiver?

Die Antwort hängt von der Aufgabe und der Messmethode ab. In [drei Feldexperimenten mit insgesamt 4.867 Entwickelnden](https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/) ergab die gemeinsame Auswertung 26,08 Prozent mehr abgeschlossene Aufgaben. Weniger erfahrene Teilnehmende erzielten größere Zuwächse. Abgeschlossene Aufgaben sind allerdings nur ein Maß und erfassen nicht den gesamten Wert von Software.

Dagegen benötigten in [METRs randomisierter Studie von Anfang 2025](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) 16 erfahrene Open-Source-Entwickler bei Aufgaben in ihren eigenen, ausgereiften Projekten mit Zugang zu den untersuchten KI-Werkzeugen 19 Prozent mehr Zeit. Dieses kleine, spezifische Experiment belegt nicht, dass KI alle Entwickler ausbremst. In einem [Update vom Februar 2026](https://metr.org/blog/2026-02-24-uplift-update/) erklärte METR, dass Selektionseffekte die neueren Daten als Schätzung der aktuellen Produktivitätswirkung unzuverlässig machen. Die Forschenden hielten eine höhere Geschwindigkeit mit neueren Werkzeugen für wahrscheinlich, deren Ausmaß aber für ungewiss.

Die Ergebnisse können nebeneinander bestehen: Aufgaben, Erfahrung, Werkzeuge und Messgrößen unterscheiden sich. Vergleicht im eigenen Team ähnliche Arbeiten über einen längeren Zeitraum und berücksichtigt neben Geschwindigkeit auch Prüfaufwand, Fehler und Ergebnisse für Nutzende. Der [DORA-Bericht 2025](https://dora.dev/research/2025/dora-report/) beschreibt KI als Verstärker bestehender Stärken und Schwächen einer Organisation. Deshalb zählt auch der Arbeitsprozess um das Werkzeug herum.

## Wenn KI sowohl Code als auch Tests schreibt

Ein bestandener generierter Test ist ein Hinweis, kein Beweis. Code und Tests, die auf demselben Missverständnis beruhen, können übereinstimmen und trotzdem falsch sein. Formuliert das erwartete Verhalten zuerst unabhängig: Was soll für wen und unter welchen Einschränkungen geschehen? Prüft anschließend Grenzfälle, Fehlerpfade, Sicherheit und das Verhalten des Gesamtsystems. Prüft generierte Änderungen wie die einer Kollegin oder eines Kollegen und passt die Prüftiefe dem Risiko an.

Bei einer Funktion zum erneuten Versuch einer Zahlung sollte etwa feststehen, dass eine wiederholte Anfrage Kundinnen und Kunden nicht doppelt belasten darf. Testet doppelte Anfragen und Fehler anhand dieser Anforderung; eine grüne Testsuite allein reicht nicht. Schützt sensible Informationen, wenn ihr externen Werkzeugen Kontext gebt, und beachtet dabei die Regeln eurer Organisation.

## Fünf Fähigkeiten für die Praxis

1. **Probleme formulieren:** Nutzerbedarf, Einschränkungen und Erfolgskriterien klären, bevor eine Lösung gewählt wird.
2. **In Systemen denken:** Abhängigkeiten, mögliche Fehler und Betriebsfolgen über die geänderte Datei hinaus betrachten.
3. **Technisch urteilen:** Optionen hinsichtlich Komplexität, Kosten, Sicherheit und Wartbarkeit abwägen.
4. **Verantwortung übernehmen und kommunizieren:** Ein Problem bis zum Ergebnis verfolgen, Entscheidungen erklären und Betroffene einbeziehen.
5. **Mit KI zusammenarbeiten und Ergebnisse prüfen:** Agenten passenden Kontext und begrenzte Aufgaben geben, ihre Arbeit prüfen und Ergebnisse anhand unabhängiger Anforderungen validieren.

Für diese Übungen braucht niemand einen Staff-Titel. Schreibt bei der nächsten Aufgabe das gewünschte Ergebnis und einen plausiblen Fehlerfall auf und erklärt eure Abwägung im Pull Request. Fragt einen KI-Assistenten nach Alternativen und prüft seine Vorschläge anschließend am tatsächlichen System.

## Weiter programmieren und lernen

Grundlagen bleiben wichtig: Sie helfen, eine plausibel klingende falsche Antwort zu erkennen, unbekanntes Verhalten zu untersuchen und ein mentales Modell des Systems aufzubauen. Gerade am Anfang kann es helfen, sich eine Lösung von KI erklären zu lassen; ebenso, einen kleinen Teil selbst umzusetzen und die Ansätze zu vergleichen. Weder vollständig ohne Hilfe zu programmieren noch alles zu delegieren ist eine allgemeingültige Regel.

Entscheidend ist, technisches Können mit Urteilsvermögen und Verantwortung zu verbinden, während sich die Werkzeuge verändern. Wenn ein KI-Assistent morgen die Implementierung übernehmen könnte: Welches Problem würdet ihr lösen, und woran würdet ihr erkennen, dass das Ergebnis geholfen hat?
