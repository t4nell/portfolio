export type Lang = 'en' | 'de';

export interface Translations {
  header: {
    homeAria: string;
    langAria: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    frontend: string;
    developer: string;
    scrollDown: string;
    scrollDownSub: string;
  };
  about: {
    title: string;
    text: string;
    basedIn: string;
    openToWork: string;
    letsTalk: string;
  };
  skills: {
    title: string;
    contactBefore: string;
    contactLink: string;
    contactAfter: string;
  };
  portfolio: {
    title: string;
    description: string;
    openAria: string;
    previewAlt: string;
    github: string;
  };
  references: {
    title: string;
    description: string;
  };
  sayHi: {
    title: string;
    question: string;
    message: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderMessage: string;
    privacyBefore: string;
    privacyLink: string;
    privacyAfter: string;
    sendDesktop: string;
    sendMobile: string;
  };
  menu: {
    about: string;
    skills: string;
    portfolio: string;
    sayHi: string;
  };
  footer: {
    legal: string;
    backToTop: string;
  };
  legal: {
    title: string;
    backAria: string;
    imprint: string;
    germany: string;
    exploring: string;
    email: string;
    acceptanceTitle: string;
    acceptanceTextBefore: string;
    acceptanceTextAfter: string;
    scopeTitle: string;
    scopeP1Before: string;
    scopeP1Mid: string;
    scopeP1After: string;
    scopeP2Before: string;
    scopeP2After: string;
    proprietaryTitle: string;
    proprietaryBefore: string;
    proprietaryMid: string;
    proprietaryAfter: string;
    useTitle: string;
    useBefore: string;
    useAfter: string;
    disclaimerTitle: string;
    disclaimerBefore: string;
    disclaimerMid: string;
    disclaimerAfter: string;
    indemnifyTitle: string;
    indemnifyBefore: string;
    indemnifyMid: string;
    indemnifyAfter: string;
    contact: string;
    date: string;
  };
  privacy: {
    title: string;
    backAria: string;
    controllerTitle: string;
    controllerIntro: string;
    germany: string;
    emailLabel: string;
    hostingTitle: string;
    hostingP1Before: string;
    hostingP1After: string;
    hostingP2: string;
    contactTitle: string;
    contactP1: string;
    contactP2Before: string;
    contactP2After: string;
    contactP3: string;
    contactP4: string;
    cookiesTitle: string;
    cookiesText: string;
    sslTitle: string;
    sslText: string;
    rightsTitle: string;
    rightsIntro: string;
    rights: string[];
    rightsContactBefore: string;
    changesTitle: string;
    changesText: string;
    date: string;
  };
}

export const translations: Record<Lang, Translations> = {
  en: {
    header: {
      homeAria: 'Go to homepage',
      langAria: 'Select language',
      menuOpen: 'Open menu',
      menuClose: 'Close menu'
    },
    hero: {
      frontend: 'Frontend',
      developer: 'Developer',
      scrollDown: 'Scroll',
      scrollDownSub: 'Down'
    },
    about: {
      title: 'About me',
      text: 'Career change, self-taught energy, and a lot of late nights at the Developer Akademie. That\'s how I got here. Frontend felt like the right first step: I could see what I was building, and I could improve it right away. I learn fast, and my next step is a junior frontend role, with fullstack as the longer goal. If you need someone curious, reliable, and easy to work with, that\'s me.',
      basedIn: 'Based in Bad Reichenhall',
      openToWork: 'Open to work Remote',
      letsTalk: 'Let\'s talk'
    },
    skills: {
      title: 'My skills',
      contactBefore: 'Don\'t see the skill you need? ',
      contactLink: 'Contact me',
      contactAfter: ' I\'m always ready to learn!'
    },
    portfolio: {
      title: 'Portfolio',
      description: 'Explore a selection of my work here - interact with projects to see my skills in action.',
      openAria: 'Open',
      previewAlt: 'Preview of',
      github: 'Github'
    },
    references: {
      title: 'References',
      description: 'I thrive both independently and as part of a team. Here\'s what my colleagues have to say about working with me.'
    },
    sayHi: {
      title: 'Say Hi!',
      question: 'Want to discuss a new project?',
      message: 'Say hello! let\'s discuss your ideas and make it happen',
      placeholderName: 'Your name',
      placeholderEmail: 'Your email',
      placeholderMessage: 'Your message',
      privacyBefore: 'I\'ve read the ',
      privacyLink: 'privacy policy',
      privacyAfter: ' and agree to the processing of my data as outlined.',
      sendDesktop: 'Send message',
      sendMobile: 'Say Hello ;)'
    },
    menu: {
      about: 'About me',
      skills: 'My skills',
      portfolio: 'Portfolio',
      sayHi: 'Say Hi!'
    },
    footer: {
      legal: 'Legal notice',
      backToTop: 'Back to top'
    },
    legal: {
      title: 'Legal Notice',
      backAria: 'Back to homepage',
      imprint: 'Imprint',
      germany: 'Germany',
      exploring: 'Exploring the Board',
      email: 'Email: michelkorfmacher@yahoo.de',
      acceptanceTitle: 'Acceptance of terms',
      acceptanceTextBefore: 'By accessing and using ',
      acceptanceTextAfter:
        ', you acknowledge and agree to comply with these Terms of Use. If you do not agree with any part of these terms, you may not use this product.',
      scopeTitle: 'Scope and ownership of the product',
      scopeP1Before: ' ',
      scopeP1Mid: ' has been developed as part of a student group project in a web development bootcamp at the ',
      scopeP1After:
        '. It has an educational purpose and is not intended for extensive personal & business usage.',
      scopeP2Before: 'We are the sole owners of this product. ',
      scopeP2After:
        ' remains the sole owner of any design template, design pattern and code used for educational purposes.',
      proprietaryTitle: 'Proprietary rights',
      proprietaryBefore: 'Aside from the underlying design patterns and code from ',
      proprietaryMid: ', any proprietary product, design, branding and other intellectual property related to ',
      proprietaryAfter: ' remain the property of their respective student owners.',
      useTitle: 'Use of the product',
      useBefore: ' ',
      useAfter:
        ' is intended to be used for lawful purposes only. You agree not to use it in any way that violates applicable laws or regulations.',
      disclaimerTitle: 'Disclaimer of warranties and limitation of liability',
      disclaimerBefore: ' ',
      disclaimerMid: ' is provided "as is", without warranties of any kind. In no event shall the authors, the students or ',
      disclaimerAfter: ' be liable for any claim, damages or other liability arising from the use of this product.',
      indemnifyTitle: 'Indemnify',
      indemnifyBefore: 'You agree to indemnify and hold the students and ',
      indemnifyMid: ' harmless from any claim or demand arising out of your use of ',
      indemnifyAfter: ' or your violation of these Terms of Use.',
      contact: 'For any questions or notices, please contact us at michelkorfmacher@yahoo.de',
      date: 'Date: October 26, 2026'
    },
    privacy: {
      title: 'Privacy Policy',
      backAria: 'Back to homepage',
      controllerTitle: '1. Controller',
      controllerIntro: 'The controller responsible for data processing on this website is:',
      germany: 'Germany',
      emailLabel: 'Email:',
      hostingTitle: '2. Hosting',
      hostingP1Before: 'This website is hosted by ',
      hostingP1After:
        ' – Neue Medien Münnich, Hauptstraße 68, 02742 Friedersdorf, Germany (all-inkl.com).',
      hostingP2:
        'The hosting provider processes server log data (for example IP address, date and time of access, browser type and operating system) on my behalf to ensure the secure and stable operation of the website. The legal basis is Art. 6 (1) lit. f GDPR (legitimate interest in a reliable online presence).',
      contactTitle: '3. Contact form',
      contactP1:
        'If you use the contact form on this website, the data you enter (name, email address and message) will be transmitted to me and processed so that I can respond to your inquiry.',
      contactP2Before: 'Messages are sent to my email address at ',
      contactP2After:
        ' (michelkorfmacher@yahoo.de). Yahoo Mail is provided by Yahoo (Oath Holdings Inc. / Yahoo EMEA). Please note that email traffic may be processed on servers outside the EU.',
      contactP3:
        'The legal basis for processing is Art. 6 (1) lit. a GDPR (consent via the privacy checkbox) and, where applicable, Art. 6 (1) lit. b GDPR (steps prior to entering into a contract).',
      contactP4:
        'The data will only be used to handle your request and will be deleted once it is no longer needed for that purpose, unless statutory retention periods apply.',
      cookiesTitle: '4. Cookies and tracking',
      cookiesText:
        'This website does not use tracking cookies, analytics tools or advertising cookies. Only technically necessary functions of the website itself are used.',
      sslTitle: '5. SSL / TLS encryption',
      sslText:
        'For security reasons and to protect the transmission of confidential content, this website uses SSL/TLS encryption where available. You can recognize an encrypted connection by “https://” in the address bar of your browser.',
      rightsTitle: '6. Your rights',
      rightsIntro: 'Under the GDPR you have the right to:',
      rights: [
        'access your personal data (Art. 15 GDPR)',
        'rectification (Art. 16 GDPR)',
        'erasure (Art. 17 GDPR)',
        'restriction of processing (Art. 18 GDPR)',
        'data portability (Art. 20 GDPR)',
        'object to processing (Art. 21 GDPR)',
        'withdraw consent at any time with effect for the future',
        'lodge a complaint with a supervisory authority (in Germany: your state data protection authority)'
      ],
      rightsContactBefore: 'To exercise these rights, please contact me at ',
      changesTitle: '7. Changes to this privacy policy',
      changesText:
        'I may update this privacy policy when the website, hosting setup or legal requirements change. The current version is always available on this page.',
      date: 'Date: October 27, 2026'
    }
  },
  de: {
    header: {
      homeAria: 'Zur Startseite',
      langAria: 'Sprache auswählen',
      menuOpen: 'Menü öffnen',
      menuClose: 'Menü schließen'
    },
    hero: {
      frontend: 'Frontend',
      developer: 'Developer',
      scrollDown: 'Nach',
      scrollDownSub: 'unten'
    },
    about: {
      title: 'Über mich',
      text: 'Berufswechsel, Selbstlerner-Energie und viele späte Nächte an der Developer Akademie. So bin ich hier gelandet. Frontend war der richtige erste Schritt: Ich konnte sehen, was ich baue, und es sofort verbessern. Ich lerne schnell, und mein nächster Schritt ist eine Junior-Frontend-Stelle – Fullstack ist das langfristige Ziel. Wenn du jemanden brauchst, der neugierig, zuverlässig und angenehm in der Zusammenarbeit ist: Das bin ich.',
      basedIn: 'Wohnhaft in Bad Reichenhall',
      openToWork: 'Offen für Remote-Arbeit',
      letsTalk: 'Lass uns reden'
    },
    skills: {
      title: 'Meine Skills',
      contactBefore: 'Fehlt der Skill, den du brauchst? ',
      contactLink: 'Schreib mir',
      contactAfter: ' Ich bin immer bereit zu lernen!'
    },
    portfolio: {
      title: 'Portfolio',
      description:
        'Entdecke hier eine Auswahl meiner Arbeiten – interagiere mit den Projekten und sieh meine Skills in Aktion.',
      openAria: 'Öffnen',
      previewAlt: 'Vorschau von',
      github: 'Github'
    },
    references: {
      title: 'Referenzen',
      description:
        'Ich arbeite gerne allein und im Team. Das sagen meine Kolleginnen und Kollegen über die Zusammenarbeit mit mir.'
    },
    sayHi: {
      title: 'Sag Hallo!',
      question: 'Willst du ein neues Projekt besprechen?',
      message: 'Schreib mir! Lass uns deine Ideen besprechen und umsetzen',
      placeholderName: 'Dein Name',
      placeholderEmail: 'Deine E-Mail',
      placeholderMessage: 'Deine Nachricht',
      privacyBefore: 'Ich habe die ',
      privacyLink: 'Datenschutzerklärung',
      privacyAfter: ' gelesen und stimme der beschriebenen Datenverarbeitung zu.',
      sendDesktop: 'Nachricht senden',
      sendMobile: 'Sag Hallo ;)'
    },
    menu: {
      about: 'Über mich',
      skills: 'Meine Skills',
      portfolio: 'Portfolio',
      sayHi: 'Sag Hallo!'
    },
    footer: {
      legal: 'Impressum',
      backToTop: 'Zum Anfang der Seite'
    },
    legal: {
      title: 'Impressum',
      backAria: 'Zurück zur Startseite',
      imprint: 'Impressum',
      germany: 'Deutschland',
      exploring: 'Kontakt',
      email: 'E-Mail: michelkorfmacher@yahoo.de',
      acceptanceTitle: 'Annahme der Bedingungen',
      acceptanceTextBefore: 'Durch den Zugriff auf und die Nutzung von ',
      acceptanceTextAfter:
        ' erkennst du diese Nutzungsbedingungen an und stimmst ihnen zu. Wenn du mit einem Teil dieser Bedingungen nicht einverstanden bist, darfst du dieses Produkt nicht nutzen.',
      scopeTitle: 'Umfang und Eigentum am Produkt',
      scopeP1Before: ' ',
      scopeP1Mid:
        ' wurde im Rahmen eines Studierenden-Gruppenprojekts in einem Webentwicklungs-Bootcamp der ',
      scopeP1After:
        ' entwickelt. Es dient Bildungszwecken und ist nicht für umfangreiche private oder geschäftliche Nutzung bestimmt.',
      scopeP2Before: 'Wir sind die alleinigen Eigentümer dieses Produkts. ',
      scopeP2After:
        ' bleibt alleinige Eigentümerin aller Designvorlagen, Designmuster und des Codes, die zu Bildungszwecken verwendet werden.',
      proprietaryTitle: 'Schutzrechte',
      proprietaryBefore: 'Abgesehen von den zugrunde liegenden Designmustern und dem Code der ',
      proprietaryMid:
        ' bleiben alle proprietären Produkte, Designs, Marken und sonstigen geistigen Eigentumsrechte im Zusammenhang mit ',
      proprietaryAfter: ' Eigentum der jeweiligen Studierenden.',
      useTitle: 'Nutzung des Produkts',
      useBefore: ' ',
      useAfter:
        ' darf nur für rechtmäßige Zwecke genutzt werden. Du verpflichtest dich, es nicht in einer Weise zu verwenden, die geltende Gesetze oder Vorschriften verletzt.',
      disclaimerTitle: 'Haftungsausschluss und Haftungsbeschränkung',
      disclaimerBefore: ' ',
      disclaimerMid:
        ' wird „wie besehen“ ohne jegliche Gewährleistung bereitgestellt. In keinem Fall haften die Autoren, die Studierenden oder die ',
      disclaimerAfter:
        ' für Ansprüche, Schäden oder sonstige Haftung aus der Nutzung dieses Produkts.',
      indemnifyTitle: 'Freistellung',
      indemnifyBefore: 'Du erklärst dich bereit, die Studierenden und die ',
      indemnifyMid:
        ' von allen Ansprüchen oder Forderungen freizustellen, die aus deiner Nutzung von ',
      indemnifyAfter: ' oder aus einem Verstoß gegen diese Nutzungsbedingungen entstehen.',
      contact:
        'Bei Fragen oder Mitteilungen kontaktiere uns bitte unter michelkorfmacher@yahoo.de',
      date: 'Stand: 26. Oktober 2026'
    },
    privacy: {
      title: 'Datenschutzerklärung',
      backAria: 'Zurück zur Startseite',
      controllerTitle: '1. Verantwortlicher',
      controllerIntro: 'Verantwortlich für die Datenverarbeitung auf dieser Website ist:',
      germany: 'Deutschland',
      emailLabel: 'E-Mail:',
      hostingTitle: '2. Hosting',
      hostingP1Before: 'Diese Website wird gehostet von ',
      hostingP1After:
        ' – Neue Medien Münnich, Hauptstraße 68, 02742 Friedersdorf, Deutschland (all-inkl.com).',
      hostingP2:
        'Der Hostinganbieter verarbeitet in meinem Auftrag Server-Logdaten (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp und Betriebssystem), um den sicheren und stabilen Betrieb der Website zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem zuverlässigen Online-Auftritt).',
      contactTitle: '3. Kontaktformular',
      contactP1:
        'Wenn du das Kontaktformular auf dieser Website nutzt, werden die von dir eingegebenen Daten (Name, E-Mail-Adresse und Nachricht) an mich übermittelt und verarbeitet, damit ich deine Anfrage beantworten kann.',
      contactP2Before: 'Nachrichten werden an meine E-Mail-Adresse bei ',
      contactP2After:
        ' (michelkorfmacher@yahoo.de) gesendet. Yahoo Mail wird von Yahoo (Oath Holdings Inc. / Yahoo EMEA) bereitgestellt. Bitte beachte, dass E-Mail-Verkehr auf Servern außerhalb der EU verarbeitet werden kann.',
      contactP3:
        'Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über die Datenschutz-Checkbox) und gegebenenfalls Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).',
      contactP4:
        'Die Daten werden nur zur Bearbeitung deiner Anfrage verwendet und gelöscht, sobald sie dafür nicht mehr benötigt werden, sofern keine gesetzlichen Aufbewahrungsfristen entgegenstehen.',
      cookiesTitle: '4. Cookies und Tracking',
      cookiesText:
        'Diese Website verwendet keine Tracking-Cookies, Analysetools oder Werbe-Cookies. Es werden nur technisch notwendige Funktionen der Website selbst genutzt.',
      sslTitle: '5. SSL-/TLS-Verschlüsselung',
      sslText:
        'Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte nutzt diese Website SSL-/TLS-Verschlüsselung, soweit verfügbar. Eine verschlüsselte Verbindung erkennst du am „https://“ in der Adresszeile deines Browsers.',
      rightsTitle: '6. Deine Rechte',
      rightsIntro: 'Nach der DSGVO hast du das Recht auf:',
      rights: [
        'Auskunft über deine personenbezogenen Daten (Art. 15 DSGVO)',
        'Berichtigung (Art. 16 DSGVO)',
        'Löschung (Art. 17 DSGVO)',
        'Einschränkung der Verarbeitung (Art. 18 DSGVO)',
        'Datenübertragbarkeit (Art. 20 DSGVO)',
        'Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)',
        'Widerruf einer Einwilligung jederzeit mit Wirkung für die Zukunft',
        'Beschwerde bei einer Aufsichtsbehörde (in Deutschland: die Datenschutzbehörde deines Bundeslandes)'
      ],
      rightsContactBefore: 'Zur Ausübung dieser Rechte kontaktiere mich bitte unter ',
      changesTitle: '7. Änderungen dieser Datenschutzerklärung',
      changesText:
        'Ich kann diese Datenschutzerklärung aktualisieren, wenn sich Website, Hosting oder rechtliche Anforderungen ändern. Die aktuelle Fassung ist stets auf dieser Seite verfügbar.',
      date: 'Stand: 27. Oktober 2026'
    }
  }
};
