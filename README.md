## Random Quote Generator

Ovaj projekat implementira generator nasumičnih citata, koji prikazuje citate iz niza na stranici. Kada korisnik klikne na dugme, jedan citat se nasumično odabere i prikaže u paragrafu na ekranu.

### Kako funkcioniše:

1. **HTML Struktura:**
    - U HTML-u se nalazi dugme (`<button>`) sa ID-em `Button` koje korisnik klikne da bi generisao novi citat.
    - Tu je i paragraf (`<p>`) sa ID-em `paragraf`, u kojem se prikazuje nasumični citat.

2. **JavaScript:**
    - U JavaScript fajlu (`script.js`), niz `quotes` sadrži deset citata koje možemo nasumično odabrati.
    - Kada korisnik klikne dugme, kod koristi `Math.random()` da generiše nasumični broj između 0 i dužine niza citata (`quotes.length`).
    - Broj se zaokružuje prema dole pomoću `Math.floor()`, tako da se dobija celobrojni indeks.

3. **Kako se sprečava ponavljanje citata:**
    - Da bi se osiguralo da citati ne budu prikazani više puta dok svi ne budu prošli, koristi se `Set` objekat `koriscenIndex`.
    - Ovaj set prati indekse citata koji su već bili prikazani. Svaki put kad se izabere citat, njegov indeks se dodaje u `koriscenIndex`.
    - Ako je broj citata koji su već prikazani jednak ukupnom broju citata u nizu, `Set` se briše (koristeći `clear()`), čime se omogućava da se citati ponovo pojavljuju.
    - Ako je odabrani indeks već u `koriscenIndex`, petlja se ponovo izvršava dok ne bude odabran citat koji još nije prikazan. Ovo garantuje da se citat ne ponovi odmah nakon što je već bio prikazan.

### Zanimljivost:

- **Bez ponavljanja citata:** Korišćenjem `Set` objekta, koji automatski sprečava dupliranje, garantujemo da nijedan citat neće biti prikazan više puta dok svi citati ne budu prošli. Ovaj proces čini generator interaktivnijim i interesantnijim jer korisnici neće videti iste citate odmah jedan za drugim. Kada se svi citati prikažu, proces počinje iznova.
