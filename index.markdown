---
layout: home
header:
  title: Corona Info App
  text: >
    Informiert Ihre Mitarbeiter über Corona
  action: # action button is optional
    label: Mehr erfahren
    url: '#about'


sections:
  - type: call-to-action.html
    section_id: about
    background_style: bg-primary
    title: Informieren Sie Ihre Mitarbeiter über Corona mit ihrer eigenen App
    text: Täglich ändern sich die Corona Inzidenz Zahlen und damit auch das notwendige Verhalten, um die Pandemie zu stoppen. Ein schneller und aktueller Zugriff auf die Verhaltensreglen hilft Ihren Mitarbeitern dabei, sich zu schützen und sich im Betrieb sowie in der Freizeit richtig zu verhalten.
    actions:
      - title: Starten Sie JETZT!
        url: '#services'
        class: btn-light

  - type: services.html
    section_id: services
    #background_style: bg-info
    title: Die App liefert Antworten zum Thema Corona
    services:
      - title: 🦠 Inzidenzen
        text: Wie sind die aktuellen Fallzahlen?
        icon: fas fa-chart-line 
      - title: Zuhause
        text: Wie muss ich mich im Alltag verhalten?
        icon: far fa-home 
      - title: Im Betreib
        text: Welche Regeln muss ich im Betrieb beachten?
        icon: far fa-building 
      - title: Deutschlandweit
        text: Welche Regeln gelten in der Öffentlichkeit?
        icon: fas fa-globe-europe


  - type: app.html
    section_id: app
    #background_style: bg-info
    title: iOS App
    screen:
      - title: Corona Info Widget
        image: iPhoneCoronaInfo_widget.png
      - title: Infektionen am Standort
        image: screenshots/de-DE/iPhone%20X-Screenshot1_framed.png 
      - title: Infektionen am Standort
        image: screenshots/de-DE/iPhone%20X-Screenshot2_framed.png 
      # - title: Infektionen am Standort
      #   image: iPhoneCoronaInfo_verhalten.png
      - title: Hilfe vom Betreib
        image: screenshots/de-DE/iPhone%20X-Screenshot3_framed.png 
    
   

  - type: price.html
    section_id: preise
    background_style: bg-light
    #background_style: bg-primary
    title: Preise
    text: Bitte beachten Sie, dass die monatlichen Betriebskosten von der Anzahl an Mitarbeitenden abhängt. Eine genaue Berechnung der Kosten für Ihr Unternehmen lassen wir Ihnen gerne kostenlos und unverbindlich zukommen.
    tarif:
      - title: S Paket
        text: < 2.000 Mitarbeiter
        text-class: price-box-title
        p1: Set-up Fee 
        p1-price: 10.000 €
        p2: Monatliche Betriebskosten abhängig von Mitarbeiteranzahl
        class: price-box
      - title: M Paket
        text: 2.000 - 10.000 Mitarbeiter
        text-class: price-box-title 
        p1: Set-up Fee 
        p1-price: 15.000 €
        p2: Monatliche Betriebskosten abhängig von Mitarbeiteranzahl
        class: price-box
      - title: L Paket
        text: 10.001 - 25.000 Mitarbeiter
        text-class: price-box-title-fav 
        p1: Set-up Fee  
        p1-price: 17.500 €
        p2: Monatliche Betriebskosten abhängig von Mitarbeiteranzahl
        class: price-box price-box-fav
      - title: XL Paket
        text: > 
              > 25.000 Mitarbeiter
        p1: Initiale Set-up Fee
        p1-price:  20.000 €
        text-class: price-box-title  
        p2: Monatliche Betriebskosten abhängig von Mitarbeiteranzahl
        class: price-box

 

  - type: contact.html
    section_id: contact
    background_style: bg-contact
    #background_style: bg-primary
    title: Kontakt
 


---