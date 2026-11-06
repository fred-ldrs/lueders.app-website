# lueders.app

Apps & Interactive Projects by Frederik Lüders

## Übersicht

Diese Website präsentiert meine Web-Applikationen und interaktiven Projekte:

- **Bitcoin Trivia** - Interaktive Quiz-App zum Testen von Bitcoin-Wissen
- **to be continued...** - Weitere spannende Apps in Entwicklung

## Struktur

```
lueders.app/
├── index.html          # Hauptseite mit App-Übersicht
├── links/
│   └── index.html      # Partnerlinks und Empfehlungen
├── firebase.json       # Hosting und zentrale /go/<partner>/-Weiterleitungen
├── .firebaserc         # Firebase-Projekt luedersapp
├── impressum.html      # Impressum & Datenschutz
├── css/
│   └── style.css      # Styling
└── assets/
    └── images/        # Bilder und Icons
```

Partnerlinks werden auf `/links/` gesammelt. Externe Ziele liegen zentral in `firebase.json`: `/go/shop4tesla/` und `/go/t-lectric/` leiten per HTTP 302 zum Partner weiter (auch ohne abschließenden Slash). Bei einem Zielwechsel beide Regeln für den jeweiligen Partner anpassen. `/go/` führt zur Sammlung. 302 statt 301 erlaubt spätere Zielwechsel ohne dauerhaft gecachte Weiterleitung.

## Firebase Hosting

Die Linksammlung nutzt dieselben DE/EN/FR-Übersetzungen, Sprachschalter und Produktwelt-Kacheln wie die Hauptseite. `/links/#de`, `/links/#en` und `/links/#fr` wählen die Sprache direkt; ohne Sprach-Hash gilt die gespeicherte Sprache bzw. Englisch. Andere Anker (z. B. `#projects`) behalten ihre Navigationsfunktion.

- Projekt: `luedersapp`
- Hosting-Adresse: https://luedersapp.web.app/
- Veröffentlichung: `firebase deploy --only hosting --project luedersapp`
- Die Website bleibt statisch; Backend, Datenbank und Firebase-Web-SDK sind nicht nötig.
- Veröffentlicht wird das Repository-Verzeichnis ohne Git-Dateien, Firebase-Konfiguration, README, CNAME und Debug-Logs.

Für den Domainwechsel in der [Firebase-Konsole](https://console.firebase.google.com/project/luedersapp/hosting) `lueders.app` als benutzerdefinierte Domain hinzufügen und die dort angezeigten DNS-Einträge beim Domainanbieter setzen. Erst nach erfolgreicher Domainprüfung und SSL-Bereitstellung GitHub Pages abschalten. Die `/go/`-Weiterleitungen funktionieren auf der eigenen Domain erst, wenn diese von Firebase Hosting bedient wird.

## Design

Die Seite basiert auf dem Design von lueders.solutions mit:
- Dark Theme (optimiert für moderne Browser)
- Responsive Grid-Layout
- Spezielle Hervorhebung für App-Tiles
- Font Awesome Icons

## Lizenz & Markenrecht (Icons)

### Font Awesome
- Icons: [SIL OFL 1.1](https://scripts.sil.org/OFL)
- Code: [MIT License](https://opensource.org/licenses/MIT)
- Dokumentation: [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- Quelle: https://fontawesome.com/license

### Android-Logo (`fab fa-android`)
- **Android-Roboter** (das grüne Männchen): von Google unter **CC BY 3.0** lizenziert, frei verwendbar mit Attributionshinweis.
- **"Android"-Wortmarke**: darf laut Google nur auf Hardware, Verpackung oder Marketingmaterialien für Android-kompatible Geräte verwendet werden — **nicht** für Websites wie diese.
- Das FontAwesome-Icon `fab fa-android` zeigt den Roboter, nicht die Wortmarke → grundsätzlich verwendbar, aber Vorsicht bei der Kombination mit dem Text "Android".
- Quelle: https://developer.android.com/distribute/marketing-tools/brand-guidelines

### GitHub-Logo (`fab fa-github`)
- Verwendung erlaubt, wenn auf das eigene GitHub-Profil oder Repository verlinkt wird.
- Quelle: https://github.com/logos

### Google Play Store Badge
- Das Play Store Badge/Logo unterliegt den strikten Google Brand Guidelines und darf **nicht** frei verwendet werden.
- Empfehlung: Neutrales Icon (`fas fa-code`) oder Android-Logo statt Play Store Badge verwenden.
- Quelle: https://about.google/brand-resource-center/

## Apps

### Bitcoin Trivia
Status: In Entwicklung  
Eine interaktive Quiz-Applikation zum Testen und Erweitern von Bitcoin-Wissen.

### to be continued...
Weitere Apps sind in Planung und werden hier verfügbar gemacht.

---

© 2025 Frederik Lüders