// **Funkcija za validaciju forme

    var ime = document.forms['form']['ime'];
    var prezime = document.forms['form']['prezime'];
    var datum = document.forms['form']['datum'];
    var spol = document.forms['form']['spol'];
    var jmbg = document.forms['form']['jmbg'];
    
    var imeGreska = document.getElementById('imeGreska');
    var prezimeGreska = document.getElementById('prezimeGreska');
    var datumGreska = document.getElementById('datumGreska');
    var spolGreska = document.getElementById('spolGreska');
    var jmbgGreska = document.getElementById('jmbgGreska');

    ime.addEventListener('textInput', imePotvrdi);
    prezime.addEventListener('textInput', prezimePotvrdi);
    datum.addEventListener('textInput', datumPotvrdi);
    spol.addEventListener('textInput', spolPotvrdi);
    jmbg.addEventListener('numberInput', jmbgPotvrdi);
    
    function potvrdi(){
        if (ime.value.length < 3) {
            ime.style.border = "1px solid red";
            imeGreska.style.display = "block";
            return false;
        }
        if (prezime.value.length < 4) {
            prezime.style.border = "1px solid red";
            prezimeGreska.style.display = "block";
            return false;
        }
        if (datum.value.length > 8) {
            datum.style.border = "1px solid red";
            datumGreska.style.display = "block";
            return false;
        }
        if (spol.value.length > 1) {
            spol.style.border = "1px solid red";
            spolGreska.style.display = "block";
            return false;
        }
        if (jmbg.value.length <= 11) {
            jmbg.style.border = "1px solid red";
            jmbgGreska.style.display = "block";
            return false;
        }
    }

    function myFunction() {
        document.getElementById("myForm").reset();
      }
      
    function imePotvrdi(){
        if (ime.value.length >= 3) {
            ime.style.border = "1px solid silver";
            imeGreska.style.display = "none";
            return true;

        }
    }
    function prezimePotvrdi(){
        if (prezime.value.length >= 4) {
            prezime.style.border = "1px solid silver";
            prezimeGreska.style.display = "none";
            return true;
        }
        
    }
    function datumPotvrdi(){
        if (datum.value.length === 7) {
            datum.style.border = "1px solid silver";
            datumGreska.style.display = "none";
            return true;
        }
    }
    function spolPotvrdi(){
        if (spol.value.length === 0) {
            spol.style.border = "1px solid silver";
            spolGreska.style.display = "none";
            return true;
        }
    }
    function jmbgPotvrdi(){
        if (jmbg.value.length === 12) {
            jmbg.style.border = "1px solid silver";
            jmbgGreska.style.display = "none";
            return true;
        } 
    };
    

// **Funkcija za dodavanje reda u tabelu**

// Funkciju dodajRed() sam dodao u dugme "dodaj" putem event-handlera Onclick tako da kada se 
//dugme pritisne funkcija dodajRed() se pozove a unutar nje se jedan put pozove insertRow() metoda  
// i pet puta insertCell metoda.

function dodajRed(){
    let cellIme = [];      //Prazni nizovi kojima ce se dodjeliti vrijednosti HTML elemenata 
    let cellPrezime = [];      // vrijednosti koje ce kasnije proslijediti varijablama cel.
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


