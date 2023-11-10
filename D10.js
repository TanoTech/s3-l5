/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/



// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20
console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = []
const numeriCasuali = Math.floor(Math.random() * 21)
random.push(numeriCasuali)
console.log(random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = { nome: 'Gaetano', cognome: 'Napoli', età: 30 }
console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.età
console.log(me)


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

const skills = ['html', 'css', 'javascripts così così']
me.skills = skills
console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('lightroom')
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

 me.skills.pop() 
console.log(me) 

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = function () {
  const random = Math.ceil(Math.random() * 6)
  return random
}
const numeriDado = [dice()]
console.log(numeriDado)


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = function (a, b) {
  if (a > b) {
    return a
  } else if (a === b) {
    return 'assente, i numeri sono uguali'
  } else {
    return b
  }
}
const a = parseInt(prompt('inserisci numero'))
const b = parseInt(prompt('inserisci numero'))
const numeroMaggiore = whoIsBigger(a, b)
console.log('il numero maggiore è', numeroMaggiore)

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = function () {
  const stringa = 'Ciao mi chiamo Gaetano e mi piacerebbe programmare'
  return stringa.split(" ")
}
console.log(splitMe())


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = function (stringa, veroFalso){
  if(veroFalso){
    return stringa.slice(1)
  } else {
    return stringa.slice(0, -1)
  }
}

const risposta1 = deleteOne("ciao", true)
const risposta2 = deleteOne("ciao", false)
console.log(risposta1,risposta2)

 
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = function () {
  const stringa = "Ho 30 anni e 3 gatti, sono nato a Erice il 1993"
  const rimuoviNumeri = stringa.split(" ").filter(elemento => isNaN(parseInt(elemento))).join(" ")
  return rimuoviNumeri
}
console.log(onlyLetters())

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = function (email) {
  const chiocciola = ['@']
  const dominio = ['hotmail', 'gmail', 'pec', 'outlook', 'libero', 'virgilio']
  const suffisso = ['.it', '.com', '.org']
  const contieneChiocciola = chiocciola.some(c => email.includes(c))
  const contieneDominio = dominio.some(d => email.includes(d))
  const contieneSuffisso = suffisso.some(s => email.includes(s))
  return contieneChiocciola && contieneDominio && contieneSuffisso
}
const emailSbagliata = isThisAnEmail("gaetano.napolihotmail.com")
const emailSbagliata2 = isThisAnEmail("gaetano.napoli@hotmailcom")
const emailSbagliata3 = isThisAnEmail("gaetano.napoli@hotmai.org")
const emailCorretta = isThisAnEmail("gaetano.napoli@hotmail.com")
const emailCorretta2 = isThisAnEmail("gaetano.napoli@libero.it")
const emailCorretta3 = isThisAnEmail("gaetano.napoli@pec.com")

console.log(emailSbagliata, emailSbagliata2, emailSbagliata3, emailCorretta, emailCorretta2, emailCorretta3)


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = function (){
  const dataOdierna = new Date()
  const nomiGiorni = ['domenica', 'lunedi', 'martedi', 'mercoled', 'giovedi', 'venerdi', 'sabato']
  const nomeGiorno = nomiGiorni[dataOdierna.getDay()]

  console.log(nomeGiorno)

  const numeroGiorno = dataOdierna.getDate()

  return `oggi è ${nomeGiorno} ${numeroGiorno} `
}

const giornoSettimanaCorrente = whatDayIsIt()
console.log(giornoSettimanaCorrente)

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = function(){
}

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = function (dataInput) {
  const dataDaInserire = new Date(dataInput)
  const oggi = new Date()
  const differenza = oggi - dataDaInserire
  const conversioneDifferenza = Math.floor(differenza / (1000 * 60 * 60 * 24))
  return conversioneDifferenza
}
const dataInput = "2023-05-20"
const giorniTrascorsi = howManyDays(dataInput)
console.log(giorniTrascorsi)

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = function (mioCompleanno) {
  const dataOggi = new Date()
  const compleanno = new Date(mioCompleanno)
  return (
    compleanno.getDate() === dataOggi.getDate() && compleanno.getMonth() === dataOggi.getMonth()
  )
}
const mioCompleanno = "1993-05-20"
const oggiCompleanno = isTodayMyBirthday(mioCompleanno)
console.log(oggiCompleanno)


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* Questo array viene usato per gli esercizi. Non modificarlo. */ 

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]    //HO SOLO COPIATO E INCOLLATTO L'ARRAY FILM QUI PER LAVORARE MEGLIO IN SEQUENZA NON HO MODIFICATO NULLA//
  
/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/



/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/


const newestMovie = function (){
  let ultimaUscita = movies [0]
  for (let a = 0; a < movies.length; a++){
   const annoUscita = parseInt(movies[a].Year)
   if (annoUscita > parseInt(ultimaUscita.Year)){
    ultimaUscita = movies [a]
   }
  }
  return ultimaUscita
}  

const ultimoFilm = newestMovie()
console.log(ultimoFilm) 


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = function(){
  const lunghezzaArray = movies.length
  return lunghezzaArray
}
const quantiFilm = countMovies()
console.log(`i film nell'array sono ${quantiFilm}`);



/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = function(){
  const soloAnni = []
  for(let y=0; y < movies.length; y++){
  const anniDeiFilm = parseInt(movies[y].Year)
  soloAnni.push(anniDeiFilm)
  }
  return soloAnni
}
const arrayAnni = onlyTheYears()
console.log(arrayAnni)


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/


 const onlyInLastMillennium = function (){
  const soloMillennioPassato = []
  for (let a = 0; a < movies.length; a++){
    const soloAnni = parseInt(movies[a].Year)
    if (soloAnni < 2000){
      soloMillennioPassato.push(soloAnni, movies[a])
    }
  } 
  return soloMillennioPassato
}
const filmVecchi = onlyInLastMillennium()
console.log(filmVecchi); 

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = function(arrayAnni){
  let somma = 0
  for (i = 0; i < arrayAnni.length; i++){
    somma +=arrayAnni[i]
  }
  return somma
}
const sommaAnni = sumAllTheYears(arrayAnni)
console.log(`la somma di tutti gli anni è ${sommaAnni}`)

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = function (titolo) {
  const risultatoRicerca = movies.filter(film => film.Title.toLowerCase().includes(titolo.toLowerCase()))

  return risultatoRicerca.length > 0 ? risultatoRicerca : ['Film non trovati']
}

const risultatoRicerca = searchByTitle('Lord')
const risultatoRicerca2 = searchByTitle('Lird')
const risultatoRicerca3 = searchByTitle('avengers')
console.log(risultatoRicerca, risultatoRicerca2, risultatoRicerca3)

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = function (titolo){
  const match = searchByTitle(titolo)
  const unmatch = movies.filter(film => !film.Title.toLowerCase().includes(titolo.toLowerCase()))
  return {match, unmatch}
}

const divisione = searchAndDivide('avengers')
console.log(divisione)


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const Contenitore = function () {
  const contenitore = document.getElementById('container')
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const prendiTuttiTd = function () {
  const selezionaTD = document.getElementsByTagName('td')
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const stampaTestoTd = function () {
  const selezioneTd = prendiTuttiTd()
  for (let i = 0; i < selezioneTd.length; i++) {
    console.log(selezioneTd[i].innerText)
  }
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const sfondoLinkRosso = function () {
  const prendiLink = document.getElementsByTagName('a')
  for (let i = 0; i < prendiLink.length; i++) {
    prendiLink[i].style.backgroundColor = 'red'
  }
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const aggiungiLi = function () {
  const creaLi = document.createElement('li')
  const selezionaUl = document.getElementById('myList')
  selezionaUl.appendChild(creaLi)
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const svuotaLista = function () {
  const prendiLista = document.getElementById("myList")

  prendiLista[i].innerHTML = " "
}


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const aggiungiClasse = function () {
  const prendiTr = document.getElementsByTagName('tr')
  for (let i = 0; i < prendiTr.length; i++) {
    prendiTr[i].classList.add('test')
  }
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***


  
*/


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/



/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/






