# Spotify-Klon mit der Deezer API

Willkommen beim Spotify-Klon-Projekt unter Verwendung der Deezer API(oder Rapid API)! Dieses Projekt zielt darauf ab, einige Funktionen von Spotify mithilfe der Deezer API nachzubilden. Unten findest du die Schritte und Anweisungen zur Nachstellung dieses Projekts als Anfänger:

## Projektübersicht

Dieses Projekt umfasst die Erstellung einer Webanwendung mit folgenden Funktionen:

1. Login- und Registrierungsseite:
    * Benutzer können sich anmelden oder in die Anwendung einloggen. Benutzerinformationen werden im JSON-Format gespeichert.

1. Hauptseite mit Genre-Sektionen:
    * Die Hauptseite zeigt vier Abschnitte mit verschiedenen Musikgenres an. Benutzer können Musik erkunden, indem sie auf diese Genres klicken.

1. Suchseite:
    * Eine Suchseite ermöglicht es Benutzern, Künstler oder Lieder mithilfe der Deezer API zu suchen. Die Anwendung sollte Suchergebnisse abrufen und anzeigen.

1. Bibliothek für favorisierte Lieder:
    * Benutzer können Lieder als Favoriten markieren, und diese Favoriten werden im lokalen Speicher gespeichert. Es gibt eine dedizierte Bibliotheksseite, die die favorisierten Lieder anzeigt.

1. Musikleiste für Vorschau:
    * Eine Musikleiste unten in der Anwendung ermöglicht es Benutzern, auf ein Lied zu klicken und eine Vorschau davon abzuspielen.


## Einrichtungsanweisungen

1. Enviroment Setup
    * Feel Free to use npm packages
    * Use a single git repo for your team

2. Integration der Deezer API
    * Melde dich für die Deezer API an und erhälts du deine API-Schlüssel(oder Rapid API).
    * Erkunde die Deezer API-Dokumentation, um zu verstehen, wie Musikdaten abgerufen werden können.
    * Implementiere die erforderlichen API-Aufrufe in deine Anwendung, um Lieder, Künstler und Genres abzurufen.

3. Benutzerauthentifizierung (Login/Register)
    * Erstelle HTML-Formulare für die Benutzeranmeldung und Registrierung.
    * Verwende JavaScript, um Formularübermittlungen zu behandeln und die Benutzerauthentifizierung zu verwalten.
    * Speicher Benutzerinformationen in einer JSON-Datei.

4. Hauptseite und Genre-Sektionen
    * Gestalte das Layout der Hauptseite mit Abschnitten für verschiedene Musikgenres.
    * Rufe genre-spezifische Daten mithilfe der Deezer API ab und zeige sie entsprechend an.
    * Implementiere die Funktionalität, um zu einer detaillierten Ansicht zu gelangen, wenn auf ein Genre geklickt wird.

5. Suchseite
    * Entwerfe eine Suchseite mit Eingabefeldern für die Suche nach Künstlern oder Liedern.
    * Verwende Deezer(Rapid) API-Endpunkte, um Suchergebnisse basierend auf Benutzerabfragen abzurufen.
    * Zeige Suchergebnisse benutzerfreundlich an.

6. Bibliothek für favorisierte Lieder
    * Implementiere die Funktionalität, um Lieder zur Favoritenliste eines Benutzers hinzuzufügen.
    * Speicher diese Favoriten im lokalen Speicher und erstelle eine separate Bibliotheksseite, um sie anzuzeigen.

7. Musikleiste für Liedvorschauen
    * Erstelle eine Musikplayer-Komponente unten in der Anwendung.
    * Ermögliche es Benutzern, auf ein Lied aus jeder Sektion (Genres, Suchergebnisse, Favoriten) zu klicken, um eine Vorschau in der Musikleiste abzuspielen.


## Zusätzliche Hinweise

* Dieses Projekt ist ein Ausgangspunkt, um Spotify-ähnliche Funktionalitäten mithilfe der Deezer API nachzubilden. Sie können es gerne erweitern, indem Sie weitere Funktionen hinzufügen oder die Benutzeroberfläche verbessern, aber bitte behalte dabei das Originale Erscheinungsbild so weit wie möglich bei.

GL HF.