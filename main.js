
// **Funkcija za dodavanje reda u tabelu**

// Funkciju dodajRed() sam dodao u dugme "dodaj" putem event-handlera Onclick tako da kada se 
//dugme pritisne funkcija dodajRed() se pozove a unutar nje se jedan put pozove insertRow() metoda  
// i pet puta insertCell metoda.

function dodajRed(){
    let cellIme = [];      //Prazni nizovi kojima ce se dodjeliti vrijednosti HTML elemenata 
    let cellPrezime = [];      // vrijednosti koje ce kasnije varijablama cel.
    let cellDatum = [];
    let cellSpol = [];
    let cellJmbg = [];

    let n = -1;                                       // varijabla koja je proslijedjena metodi za dodavanje novog reda. Postavljena na -1 kako bi se nakon svakog pritiska na dugme  red dodao na dno tabele.  
    let i = 0;                                        // varijabla element niza 
    let redDodaj = document.getElementById('dodaj');  //pristupanje HTML elementu  putem ID-a odnosno pristupanje  tabeli na koju ce se dodavati novi red te dodjeljivanje njenih svojstava varijabli redDodaj.
    let noviRed = redDodaj.insertRow(n);             // varijabli noviRed se  proslijede svojstva varijable redDodaj kojoj je dodana metoda kreiranja novog reda.
    
    
    cellIme[i] = document.getElementById("ime").value;
    cellPrezime[i] = document.getElementById("prezime").value;
    cellDatum[i] = document.getElementById("datum").value;  //pristupanje HTML elementima putem ID-a te prosljedjivanje 
    cellSpol[i] = document.getElementById("spol").value;   //njihovih svojstava ( texta i brojeva koji se upišu u zadata polja) 
    cellJmbg[i] = document.getElementById("jmbg").value;   //varijablama cellIme,prezime... odnosno nizovima.

    let cel1= noviRed.insertCell(0);
    let cel2= noviRed.insertCell(1);
    let cel3= noviRed.insertCell(2); // varijablama cel se dodaje svojstvo varijable novi.Red kojoj 
    let cel4= noviRed.insertCell(3); // se dodjeljuje metoda za kreiranje jedne celije odnosno kreiranja polja u tabeli.
    let cel5= noviRed.insertCell(4); // pozvace se za svako polje posebno tj. pet puta.

    cel1.innerHTML = cellIme[i];
    cel2.innerHTML = cellPrezime[i];
    cel3.innerHTML = cellDatum[i];   // vrijednosti varijabli cellIme, prezime... (text i brojevi koji se unesu u poljima) se 
    cel4.innerHTML = cellSpol[i];   // proslijede varijablama cel te se kao takve ispišu u HTML elementu odnosno tabeli.  
    cel5.innerHTML = cellJmbg[i];
};

// **Funkcija za validaciju forme
