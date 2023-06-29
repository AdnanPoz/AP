// **Funkcija za validaciju forme

    let ime = document.forms['form']['ime'];
    let prezime = document.forms['form']['prezime'];
    let datum = document.forms['form']['datum'];       //proslijeđivanje svojstva forme i inputa u formi u varijable
    let spol = document.forms['form']['spol'];
    let jmbg = document.forms['form']['jmbg'];
    
    let imeGreska = document.getElementById('imeGreska');
    let prezimeGreska = document.getElementById('prezimeGreska');
    let datumGreska = document.getElementById('datumGreska');       // smještanje   div elemenata iz HTML-a u varijable putem ID-a-   
    let spolGreska = document.getElementById('spolGreska');
    let jmbgGreska = document.getElementById('jmbgGreska');

    ime.addEventListener('textInput', imePotvrdi);                 // dodavanje event listener-a sa dva argumenta na već definisane varijable koje su u stvari inputi u formi 
    prezime.addEventListener('textInput', prezimePotvrdi);         // prvi argument je da se "slusa" tekst koji se unese a drugi su funkcije koje se izvršavaju onda kada se 
    datum.addEventListener('textInput', datumPotvrdi);             // utvrdi da je unos koji je unesen istinit odnosno da su uslovi iz funkcije ispunjeni
    spol.addEventListener('textInput', spolPotvrdi); 
    jmbg.addEventListener('textInput', jmbgPotvrdi);                
    
    function greska(){
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
            datum.style.border = "1px solid red";                     //Funkcija koja se izvršava onda kada je unos "laz" odnosno oboji onaj blok inputa u kojem
            datumGreska.style.display = "block";                      // unesena vrijednost ne odgovara uslovima iz funkcija "true"  
            return false;
        }
        if (spol.value.length > 1) {
            spol.style.border = "1px solid red";
            spolGreska.style.display = "block";
            return false;
        }
        if (jmbg.value.length <= 12 || jmbg.value.length > 13) {
            jmbg.style.border = "1px solid red";
            jmbgGreska.style.display = "block";
            return false;
        }
    };

   
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
    }                                                           // funkcije koje kada potvrde da je uslov ispunjen odnosno kada se unese ispravna vrijednost
    function spolPotvrdi(){                                     // oboje blokove inputa u sivu boju.
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

    // **Funkcija koja poziva sve ostale funkcije**
    function final(){
        if(greska() === false){
        alert('Upisite potrebne podatke!')                      //funkcija koju sam smjestio u  event-handlera Onclick  
        } else{                                                 //tako da kada se dugme "Dodaj" pritisne funkcija se pozove a unutar nje se pozove funkcija
         dodajRed()                                             //dodajRed() ako su uslovi ispunjeni. Ako uslovi nisu ispunjeni "iskociti" ce
         resetModal()                                           // pop up prozor sa upozorenjem. tu je i linija koja isključuje dugme nakon 
        }                                                       //uspjesnog dodavanja.
    };                                                           
    
    // **Funkcija za resetovanje modala**
    
    function resetModal() {
        var element = document.getElementById("myForm");
        element.reset()
    };
    
// **Funkcija za dodavanje reda i celija u tabelu skupa sa sadrzajem koji  je u njih upisan**

// Funkciju dodajRed() sam dodao u funkciju final() tako da ako su uslovi iz pomenute funkcije ispunjeni,
// funkcija dodajRed() se pozove a unutar nje se jedan put pozove insertRow() metoda  i pet puta insertCell metoda.

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
    let cel3= noviRed.insertCell(2); // varijablama cel se dodaje svojstvo varijable noviRed kojoj 
    let cel4= noviRed.insertCell(3); // se dodjeljuje metoda za kreiranje jedne celije odnosno kreiranja polja u tabeli.
    let cel5= noviRed.insertCell(4); // pozvace se za svako polje posebno tj. pet puta.

    cel1.innerHTML = cellIme[i];
    cel2.innerHTML = cellPrezime[i];
    cel3.innerHTML = cellDatum[i];   // vrijednosti varijabli cellIme, prezime... (text i brojevi koji se unesu u poljima) se 
    cel4.innerHTML = cellSpol[i];   // proslijede varijablama cel te se kao takve ispišu u HTML elementu odnosno tabeli.  
    cel5.innerHTML = cellJmbg[i];
};    


