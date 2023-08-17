
//🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘ŞƏRTLƏR VƏ QAYDALAR🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘 */
// !HECKES BIRBIRINDEN TASKIN KONKRET HELLINI SORUSHMUR VE KOPYALAMIR
// !ANLAMADIGINIZI BIRBASHA MENDEN SORUSHMURSUZ WHATSAPP QRUPUNDA MUZAKIRE EDIRSIZ TASKLAR BAREDE HECKESIN MESAJINI SHEXSIDE CAVABLAMAYACAM :D
// !BUTUN NETICELER console.log() VASITESIYLE GOSTERILMELIDIR
// !DERSDE KECMEDIYIMIZ MOVZULARA AID KODLARDAN MAXIMUM UZAG DURMAGA CALISHIN
// !BUTUN TASKLARI 1 1 OXUYUN HAMSINA EYNI VAXTDA BAXMAYIN
// !HER BIR TASKIN HELLI TASKIN OZUNUN ALTINDA YAZILMALI NOVBETI TASKA KECENDE BITIRILEN TASK COMMENTE ALINMALIDIR.
// !DEADLINE 1 HEFTEDIR
// !MUREKKEB OLDUGUNU DUSHUNDUYUNUZ TASKLAR AYRI FAYLDA YAZILMALIDIR. (FAYL ADI TASKA UYGUN QOYULMALIDIR)
// !SONDA BUTUN KODLAR GITHUBA YUKLENILMELIDIR




// SWITCH CASE ///////////////// SWITCH CASE ///////////////// SWITCH CASE ///////////////// SWITCH CASE ///////////////
// BU BASHLIQ ALTINDAKI HELLER YALNIZ SWITCH CASE ILE QEBUL EDILECEKDIR. 


// 1)  SWITCH CASE ILE ASHAGIDAKI TELEBLERI ODEYEN FUNCTION YAZIN 

// let SET = 'SET_DATA';
// let GET = 'GET_DATA'
// let DELETE = 'DELETE_DATA'


// 1.1 Yuxarida gosterilmish type lara uygun case ler yazin 
//     ve yazdgniz functionda parametr olaraq type gonderin ve birinci merhelede sadece 'case' in adini consola verin


// let data = "SET";

// switch (data) {
//   case "SET":
//     console.log(data);
//     break;
//   case "GET":
//     console.log(data);
//     break;
//   case "DELETE":
//     console.log(data);
//     break;
//   default:
//     console.log("Bele type movcud deyil");
// }

// 1.2  2ci merhelede functiondan kenarda array yaradin ve 
//         Case 'SET' oldugu halda arraya 1-10 arasi bir reqem elave edin


// let data = "SET";
// let array = [];

// switch (data) {
//   case "SET":
//     for (let i = 1; i <= 10; i++) {
//       array.push(i);
//     }
//     console.log(array);
//     break;
//   case "GET":
//     console.log(data);
//     break;
//   case "DELETE":
//     console.log(data);
//     break;
//   default:
//     console.log("Bele type movcud deyil");
// }


// 1.3 Case -  'DELETE'  olarsa arraydan 1 item silin 
//     ARRAY BOW OLDUGU HALDA ERROR CIXMALIDIR - 'SILINECEK DATA TAPILMADI'
//     ve sonda arrayi consola cixardin.


// let data = "SET";
// let array = [];

// switch (data) {
//   case "SET":
//     for (let i = 1; i <= 10; i++) {
//       array.push(i);
//     }
//     console.log(array);
//     break;
//   case "GET":
//     console.log(data);
//     break;
//   case "DELETE":
//     if (array.length > 0) {
//       array.pop();
//       console.log("arraydan 1 item silindi");
//     } else {
//       console.log("SILINECEK DATA TAPILMADI");
//     }
//     console.log(array);
//     break;
//   default:
//     console.log("Bele type movcud deyil");
// }


// 1.4 let data = "SET";

// let data = "SET";
// let array = [];

// switch (data) {
//   case "SET":
//     for (let i = 1; i <= 10; i++) {
//       array.push(i);
//     }
//     console.log(array);
//     break;
//   case "GET":
//     console.log(array);
//     break;
//   case "DELETE":
//     if (array.length > 0) {
//       array.pop();
//       console.log("arraydan 1 item silindi");
//     } else {
//       console.log("SILINECEK DATA TAPILMADI");
//     }
//     console.log(array);
//     break;
//   default:
//     console.log("Bele type movcud deyil");
// }


///////////////////////////////////////////////////////////////////////////////////////////

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// 2) AY-lar dan ibaret arrayi loopa salin ve her ayda nece gun oldugunu switch case ile Ayin adi + gun sayi  ni consola verin  
// Example  'December - 31 days'
// QEYD - FEVRAL OLANDA 28-29 gorunmelidir. mL arrayindan istifade edilmelidir.


//HELL YOLU:

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// for (let i = 0; i < mL.length; i++) {
//   let month = mL[i];
//   let days;

//   switch (month) {
//     case 'January':
//     case 'March':
//     case 'May':
//     case 'July':
//     case 'August':
//     case 'October':
//     case 'December':
//       days = 31;
//       break;
//     case 'April':
//     case 'June':
//     case 'September':
//     case 'November':
//       days = 30;
//       break;
//     case 'February':
//       days = 28;
//       break;
//     default:
//       days = -1; // Geçersiz ay adı
//   }

//   if (days !== -1) {
//     console.log(`${month} ayi ${days} gunden ibaretdir.`);
//   } else {
//     console.log(`error: ${month}`);
//   }
// }



// 3) Task 2 - deki mentiqi Date() objecti uzerinde ishledin. Hazirda oldugumuz ayi tapin ve gunlerinin sayini gosterin

//HELL YOLU:
// let currentDate = new Date();
// let currentMonth = currentDate.getMonth();
// let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let daysInMonth;

// switch (currentMonth) {
//   case 0: // yanvar
//   case 2: // Mart
//   case 4: // May
//   case 6: // iyul
//   case 7: // Avqust
//   case 9: // oktyabr
//   case 11: // dekabr
//     daysInMonth = 31;
//     break;
//   case 3: // aprel
//   case 5: // iyul
//   case 8: // sentyabr
//   case 10: // oktyabr
//     daysInMonth = 30;
//     break;
//   case 1: // fevral
//     if (currentDate.getFullYear() % 4 === 0 && (currentDate.getFullYear() % 100 !== 0 || currentDate.getFullYear() % 400 === 0)) {
//       daysInMonth = 29; // Artık yıl
//     } else {
//       daysInMonth = 28; // Normal yıl
//     }
//     break;
//   default:
//     daysInMonth = -1;
// }

// if (daysInMonth !== -1) {
//   console.log(`hazirki ay: ${months[currentMonth]}`);
//   console.log(`ve onun gun sayi: ${daysInMonth}`);
// } else {
//   console.log('girdiyiniz melumat sehvdir');
// }


// 4) Codu-yazdiginiz tarixi date ile tapin ve hazirki ayin ilin 1 ci yarisina yoxsa 2 ci yarisina aid olub olmamasini switch case ile tapin
// QEYD case - ayin ozu olmalidir.


// let currentDate = new Date();
// let currentMonth = currentDate.getMonth();
// let currentYear = currentDate.getFullYear();

// if (currentMonth >= 0 && currentMonth <= 5) {
//   console.log(`${currentYear}. ilin birinci yarisidir (Qış).`);
// } else if (currentMonth >= 6 && currentMonth <= 11) {
//   console.log(`${currentYear}. ilin ikinci yarisidir (Yay).`);
// } else {
//   console.log('melumat sehvdir.');
// }


// 5) 4 cu taski heftenin gunleri ile yoxlayin

// 6) hazirki tarixi taparaq ayin necenci heftesinde ola bileceymizi tapin
// QEYD cixan netice realliga uygun olmaya biler bu problem deyil
// her 7 gunu 1 hefte kimi goturun ve ayin 1 nin heftenin 1 ci gununden oldugunu dushunun


// let targetDate = new Date(2023, 7, 15); 
// let dayOfWeek = targetDate.getDay(); 
// let dayOfMonth = targetDate.getDate();
// let daysPassed = dayOfMonth + (7 - dayOfWeek);
// let weekNumber = Math.ceil(daysPassed / 7);

// console.log(`${weekNumber} hefte`);



///////////////////////////////////////////////////////////////////////////////////////////



// LOOPS //////  LOOPS ////// LOOPS /////////// LOOPS ////////// LOOPS //////////////////////////////////////////////////////////
// Bu hisseye aid olan tapshiriqlar while for for In for Of istifade edilmekle hell edilmelidir.


// 1 Looplar-dan istifade ederek 'Verilen array' - dan 'Almali oldugunuz' arrayi alin 
// Aid olan tasklar 1.1, 1.2, 1.3, 1.4, 1.5


// 1.1 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


//HELLI

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let aylar = [];

// for (let i = 0; i < mL.length; i++) {
//     aylar.push([mL[i]]);
// }

// console.log(aylar);

//HELLI



//  Almali oldugunuz
// let mL = [
//     ['January'], 
//     ['February'],
//     ['March'],
//     ['April'],
//     ['May'],
//     ['June'],
//     ['July'], 
//     ['August'], 
//     ['September'],
//     ['October'],
//     ['November'], 
//     ['December']
// ];

///////////////////////////////////////////////////////////////////////////////////////////


// 1.2 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


//HELLI

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let aylar = [];
// let arrIcindekiSayi = 4;

// for (let i = 0; i < mL.length; i += arrIcindekiSayi) {
//     aylar.push(mL.slice(i, i + arrIcindekiSayi));
// }

// console.log(aylar);

//HELLI

//  Almali oldugunuz
// let mL = [
//     ['January','February','March','April'], 
//     ['May','June','July','August'], 
//     ['September' , 'October', 'November', 'December']
// ];




///////////////////////////////////////////////////////////////////////////////////////////


// 1.3 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//HELLI

//  let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  function recurAylar(arr) {
//   if (arr.length <= 2) {
//     return arr;
//   }
  
//   const sutunArr = arr.splice(2, arr.length - 2);
//   return [arr[0], arr[1], recurAylar(sutunArr)];
// }

// let result = recurAylar([...mL]);

// console.log(result);

//HELLI

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']], 
//     ['May','June',['July','August']], 
//     ['September' , ['October', 'November', 'December']]
// ];


///////////////////////////////////////////////////////////////////////////////////////////

// 1.4 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
//  let newArr = []; 
//  let currentIdx = 0; 
  
//  for (let i = 0; i < 3; i++) { 
//    let innerArr = [mL[currentIdx], mL[currentIdx + 1]]; 
  
//    if (i === 0) { 
//      innerArr.push([mL[currentIdx + 2], [mL[currentIdx + 3]]]); 
//    } else if (i === 1) { 
//      innerArr.push([mL[currentIdx + 2], [mL[currentIdx + 3]]]); 
//    } else if (i === 2) { 
//      innerArr.pop() 
//      innerArr.push([mL[currentIdx + 1], mL[currentIdx + 2] ,[mL[currentIdx + 3]]]); 
//    } 
  
//    newArr.push(innerArr); 
//    currentIdx += 4; 
//  } 
  
//  console.log(newArr);

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March',['April']]], 
//     ['May','June',['July',['August']]], 
//     ['September' , ['October', 'November', ['December']]]
// ];


///////////////////////////////////////////////////////////////////////////////////////////


// 1.5 // Verilen array

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// let newArr = []; 
//  let currentIdx = 0; 
  
//  for (let i = 0; i < 3; i++) { 
//    let innerArr = [mL[currentIdx], mL[currentIdx + 1]]; 
  
//    if (i === 0) { 
//      innerArr.push([mL[currentIdx + 2], mL[currentIdx + 3]]); 
//    } else if (i === 1) { 
//      innerArr.pop() 
//      innerArr.push([mL[currentIdx + 1], mL[currentIdx + 2], mL[currentIdx + 3]]); 
//    } else if (i === 2) { 
//      innerArr.push([mL[currentIdx + 2] ,mL[currentIdx + 3]]); 
//    } 
  
//    newArr.push(innerArr); 
//    currentIdx += 4; 
//  } 
  
//  console.log(newArr);


//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']], 
//     ['September' , ['October', 'November', 'December']]
//     ['May','June',['July','August']], 
// ];

///////////////////////////////////////////////////////////////////////////////////////////



// 2) ad ve soyadinizi yazin ve onlari ashagidaki struktura getirin
// let fullName = 'Murad Nerimanli'

// let fullName = 'LALA IBRAHIMZADE';
// let firstName = fullName.split(' ')[0].toUpperCase();
// let lastName = fullName.split(' ')[1].toUpperCase();

// let maxLength = Math.max(firstName.length, lastName.length);
// firstName = firstName.padEnd(maxLength, 'X');
// lastName = lastName.padEnd(maxLength, 'X');

// let result = firstName.split('').map((a, index) => [a, lastName[index]]);

// console.log(result);


// let result = [
//     ['M' , 'N']
//     ['U' , 'E']
//     ['R' , 'R']
//     ['A' , 'I']
//     ['D' , 'M']
//     ['X' , 'A']
//     ['X' , 'N']
//     ['X' , 'L']
//     ['X' , 'I']
// ]



// Gorunduyu kimi ad ve soyadinizin eyni indexli herflerini bir arraya yigib (Meselen 0ci index-de M ve N var) 
// sonra onlari umumi arraya elave etmelisiz


///////////////////////////////////////////////////////////////////////////////////////////



// 3) 'Ey babeK kebaB ye!' cumlesini loop istifade ederek nida boyuk ve kicik herfler de daxil olmaqla tersine cevirin
// gozlenilen netice  '!ey Babek Kebab yE' - olmalidir

//HELLI

// let text = "Ey babeK kebaB ye!"
// text = text.split('').reverse().join('')
// console.log(text)


//HELLI


// let arr = [3,2,21,12,4,12,4,23,3,23,5,34,35,3,4,234,2,105,24,2,342,34,140,34,23,175,342312,1,2,1,70,21,24,23,24,23,24,2,24,34]

// 4) Looplardan istifade ederek yuxaridaki arrayda hem 5-e hem 7-e eyni zamanda bolunen reqemlerin cemini tapin

//HELLI
// let arr = [3,2,21,12,4,12,4,23,3,23,5,34,35,3,4,234,2,105,24,2,342,34,140,34,23,175,342312,1,2,1,70,21,24,23,24,23,24,2,24,34];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 5 === 0 && arr[i] % 7 === 0) {
//     sum += arr[i];
//   }
// }

// console.log("Toplam:", sum);

//HELLI

// 5) Looplardan istifade ederek yuxaridaki arrayda en boyuk 3 reqemli cut ededi tapin (biraz cetindir tapmasaniz biryerde baxarg)

//HELLI

// let arr = [3,2,21,12,4,12,4,23,3,23,5,34,35,3,4,234,2,105,24,2,342,34,140,34,23,175,342312,1,2,1,70,21,24,23,24,23,24,2,24,34];

// let maxEven = -1;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0 && arr[i] >= 100 && arr[i] < 1000 && arr[i] > maxEven) {
//     maxEven = arr[i];
//   }
// }

// if (maxEven !== -1) {
//   console.log("en boyuk 3 reqemli cut:", maxEven);
// } else {
//   console.log("eded yoxdur");
// }


//HELLI

// 6) Looplardan istifade ederek yuxaridaki arrayda ozunden bashqa (3 ozu olmasin yenii) 3 e bolune bilen en kicik reqemi tapin

//HELLLI

// let arr = [3,2,21,12,4,12,4,23,3,23,5,34,35,3,4,234,2,105,24,2,342,34,140,34,23,175,342312,1,2,1,70,21,24,23,24,23,24,2,24,34];

// let enKicik3Bolunen = -1;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 3 === 0 && arr[i] !== 3 && (enKicik3Bolunen === -1 || arr[i] < enKicik3Bolunen)) {
//     enKicik3Bolunen = arr[i];
//   }
// }

// console.log("3 e bolune bilen en kicik reqemi :", enKicik3Bolunen);

//HELLI

// 7 verilmish obyektde keylerin son reqemi ile value-leri eyni olan valueleri tapin


//HELLI

// let obj = {
//     key1: 0,
//     key2: 3,
//     key3:2,
//     key4:4,
//     key5:53,
//     key7:7,
//     key8:8,
//     key9:91,
// }

// for (let key in obj) {
//     let keyReq = parseInt(key.charAt(key.length - 1));
//     let valueReq = obj[key] % 10;
    
//     if (keyReq === valueReq) {
//         console.log(`${key} ve ${obj[key]}: Son reqemleri eyni`);
//     }
// }


//HELLI


////////////////////////////////////////////////////////////////////////////////////////////////



// WINDOW & DOCUMENT//////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////

// BURADA SIZDEN YARATMAGINIZ ISTENILEN DIV-LER HER BIRI AYRI OLUB TASK HELL EDILDIKDEN SONRA KOMMENTE ATILMALI
// VE HANSI DIVIN HANSI TAKSA AID OLDUGU KOMMENT SHEKLINDE QEYD EDILMELIDIR!
// VE YA HER BIRINI AYRI FAYLLARDA EDE BILERSINIZ.


// 1) Bir div yaradin pencerenin solunda normal yerinde dayansin. 2 saniyeden bir 20px sola hereket etsin ve 20 saniyeden sonra dayansin.

// const pencere = document.createElement("div");
// pencere.style.width = "100px";
// pencere.style.height = "100px";
// pencere.style.position = "absolute";
// pencere.style.left = "0";
// pencere.style.top = "50%";
// pencere.style.backgroundColor = "pink";
// pencere.style.transform = "translateY(-50%)";

// document.body.appendChild(pencere);

// let baslangic = 0;
// let totalTime = 0;
// const interval = 2000;

// const herekeetPen = () => {
//     if (totalTime < 20000) {
//         if (baslangic <= window.innerWidth - 100) {
//             baslangic += 20;
//             pencere.style.left = baslangic + "px";
//         }
//         totalTime += interval;
//         setTimeout(herekeetPen, interval);
//     }
// };

// setTimeout(herekeetPen, interval);




// 2) Bir div yaradin olcusu 100-100px kvadrat olsun 1 saniyeden bir 10px ashagi 10px saga transitionla hereket etsin.


// const pencere = document.createElement('div');
// pencere.style.width = '100px';
// pencere.style.height = '100px';
// pencere.style.backgroundColor = 'purple';
// pencere.style.position = 'absolute';
// document.body.appendChild(pencere);

// let yuxari = 0;
// let sol = 0;

// function hereketPen() {
//   if (yuxari < window.innerHeight - 100) {
//     yuxari += 10;
//   }
//   if (sol < window.innerWidth - 100) {
//     sol += 10;
//   }
//   pencere.style.top = yuxari + 'px';
//   pencere.style.left = sol + 'px';
// }

// setInterval(hereketPen, 1000);



// 3) Bir div yaradin onu sehifede centerleyin. Olculeri 200-200px
//  kvadrat olsun 1 saniyeden bir boyuyerek 400px-400px sonra yeniden oz olculerine qayitsin
// Transitonla etmeyiniz gozlenilendir.


// const merkez = document.createElement('div');
// merkez.style.width = '200px';
// merkez.style.height = '200px';
// merkez.style.position = 'absolute';
// merkez.style.left = '50%';
// merkez.style.top = '50%';
// merkez.style.backgroundColor = 'red';
// merkez.style.transform = 'translate(-50%, -50%)';
// document.body.appendChild(merkez);

// let size = 200;

// function merkezHer() {
//     if (size === 200) {
//         size = 400;
//       } else {
//         size = 200;
//       }
//   merkez.style.width = size + 'px';
//   merkez.style.height = size + 'px';
// }

// setInterval(merkezHer, 1000);




// 4) Bir div (200px x 200px olcude kvadrat)  ve iki button (Start ve stop) yaradin onlari alt alta centerleyin
// Start buttona basandan 1 saniye sonra ve her 2 saniyeden bir div 90 derece firlansin
// Stop buttona basanda 'Stop' sozunun yaninda 3 2 1 saysin ve firlanma dayansin.


// 5) Bir div yaradin pencerenin sol yuxari kuncunde dayansin. Ustune clickledikde Ilk olaraq en sag kunce  
// 2ci defe clickledikde ashagi kunce 3 cu de  sol ashagi kunce ve sonda ilk bashldigi yere qayitsin


// const div = document.createElement('div');
// div.style.cssText = 'width: 100px; height: 100px; background-color: blue; position: absolute; top: 0; left: 0;';
// document.body.appendChild(div);

// const pencereVez = [
//   { top: '0', left: '0' },
//   { top: '0', left: 'calc(100% - 100px)' },
//   { top: 'calc(100% - 100px)', left: 'calc(100% - 100px)' },
//   { top: 'calc(100% - 100px)', left: '0' }
// ];

// let position = 0;

// div.addEventListener('click', () => {
//     position++;
//     if (position === pencereVez.length) {
//       position = 0;
//     }
    
//   pencereYeniVez();
// });

// function pencereYeniVez() {
//   div.style.top = pencereVez[position].top;
//   div.style.left = pencereVez[position].left;
// }


// 6) 5 ci task hell edildiyi teqdirde eyni fayllar uzerinden davam edin ve klaviaturada kursor ashagi yuxari sag sol duymelerine basdiqda div-i hereket etdirmeye calishin. 
// Hem 5 ci tapshiriqdaki hem de bu tapshiriq ishlek veziyyetde olmalidir.


// const div = document.createElement('div');
// div.style.cssText = 'width: 100px; height: 100px; background-color: blue; position: absolute; top: 0; left: 0;';
// document.body.appendChild(div);

// const pencereVez = [
//   { top: '0', left: '0' },
//   { top: '0', left: 'calc(100% - 100px)' },
//   { top: 'calc(100% - 100px)', left: 'calc(100% - 100px)' },
//   { top: 'calc(100% - 100px)', left: '0' }
// ];

// let position = 0;

// div.addEventListener('click', () => {
//     position++;
//     if (position === pencereVez.length) {
//       position = 0;
//     }
    
//   pencereYeniVez();
// });

// document.addEventListener('keydown', (event) => {
//   switch (event.keyCode) {
//     case 37: 
//       position--;
//       break;
//     case 38:
//       position = (position + 2) >= pencereVez.length ? position - 2 : position + 2;
//       break;
//     case 39:
//       position++;
//       break;
//     case 40:
//       position = (position + 2) >= pencereVez.length ? position - 2 : position + 2;
//       position++;
//       break;
//   }
  
//   if (position < 0) {
//     position = pencereVez.length - 1;
//   } else if (position === pencereVez.length) {
//     position = 0;
//   }
  
//   pencereYeniVez();
// });

// function pencereYeniVez() {
//   div.style.top = pencereVez[position].top;
//   div.style.left = pencereVez[position].left;
// }



// 7) 5 ve 6 ci tasklar ugurla hell edilerse budefe hemin box-un yerini yadda saxlayin. 
// Sehifeni yenilesem bele axirinci hansi veziyyetde qalmishdisa o veziyyetde gorunsun
// Ipucu localstorage ve ya session storage istifade edin. 


// const div = document.createElement('div');
// div.style.cssText = 'width: 100px; height: 100px; background-color: blue; position: absolute; top: 0; left: 0;';
// document.body.appendChild(div);

// const pencereVez = [
//   { top: '0', left: '0' },
//   { top: '0', left: 'calc(100% - 100px)' },
//   { top: 'calc(100% - 100px)', left: 'calc(100% - 100px)' },
//   { top: 'calc(100% - 100px)', left: '0' }
// ];

// let position = 0;

// const storedPosition = localStorage.getItem('divPosition');
// if (storedPosition !== null) {
//   position = parseInt(storedPosition, 10);
//   pencereYeniVez();
// }

// div.addEventListener('click', () => {
//   position++;
//   if (position === pencereVez.length) {
//     position = 0;
//   }

//   pencereYeniVez();
//   localStorage.setItem('divPosition', position.toString()); 
// });

// document.addEventListener('keydown', (event) => {
//   switch (event.keyCode) {
//     case 37: 
//       position--;
//       break;
//     case 38: 
//     position = (position + 2) >= pencereVez.length ? position - 2 : position + 2;
//       break;
//     case 39: 
//       position++;
//       break;
//     case 40: 
//     position = (position + 2) >= pencereVez.length ? position - 2 : position + 2;
//       position++;
//       break;
//   }

//   if (position < 0) {
//     position = pencereVez.length - 1;
//   } else if (position === pencereVez.length) {
//     position = 0;
//   }

//   pencereYeniVez();
//   localStorage.setItem('divPosition', position.toString()); 
// });

// function pencereYeniVez() {
//   div.style.top = pencereVez[position].top;
//   div.style.left = pencereVez[position].left;
// }



// 8) Chrome dinozavr oyununu gormush olarsiz Space basdiqca Dinozavr tullanib dushur. 
// oradaki kimi oyun yazmaginizi yox sadece istediyiniz bir heyvanin png sheklini ekranda cixarib 'Space' duymesini basdiqda 200px tullanib sora yerine qayitmagini yazin. :D Maragli olacaq

// document.body.style.margin = "0";
// document.body.style.overflow = "hidden";
// document.body.style.backgroundImage = "url('pxfuel.jpg')"; 
// const img = document.createElement('img');
// img.src = 'pngwing.com.png'; 
// img.style.width = '250px';
// img.style.height = '250px';
// img.style.position = 'absolute';
// img.style.left = '50%';
// img.style.top = '50%';
// img.style.transform = 'translate(-50%, -50%)';
// document.body.appendChild(img);

// let isMoving = false;

// document.addEventListener('keydown', (event) => {
//   if (event.code === 'Space' && !isMoving) { 
//     isMoving = true;
    
//     img.style.transition = 'top 1s'; 
//     img.style.top = 'calc(50% - 200px)';
    
//     setTimeout(() => {
//       img.style.transition = 'top 1s'; 
//       img.style.top = '50%';
      
//       setTimeout(() => {
//         isMoving = false; 
//         img.style.transition = ''; 
//       }, 1000); 
//     }, 1000); 
//   }
// });



// 9) Random reng generate eden functionu internetden tapib ekrana her clickde body-e yeni generate edilmish ve yeni reng-le renglenmish 100px - kvadrat box elave edin. 

// const div = document.createElement('div');
// div.style.width = '100px';
// div.style.height = '100px';
// div.style.position = 'absolute'
// div.style.top = '50%'
// div.style.left = '50%'
// div.style.backgroundColor = 'blue';
// div.style.transition = 'background-color 0.5s';
// document.body.appendChild(div);

// div.addEventListener('click', () => {
//   const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//   div.style.backgroundColor = randomColor;
// });


// 10) Input (Type number) ve box (div 10px kvadrat) elave edin. Inputun icerisine reqem yazdiginiz qeder olculer boyusun ve ya kicilsin.
// Meselen 10px dir inputa 100yazdim olcusu 110px kvadrat olsun 


// const container = document.createElement('div');
// container.style.width = '100vw';
// container.style.height = '100vh';
// container.style.display = 'flex';
// container.style.justifyContent = 'center';
// container.style.alignItems = 'center';
// document.body.appendChild(container);

// const input = document.createElement('input');
// input.type = 'number';
// input.placeholder = 'reqem yazin...';
// input.id = 'sizeInput';
// input.style.width = '100px';
// container.appendChild(input);

// const box = document.createElement('div');
// box.style.width = '10px';
// box.style.height = '10px';
// box.style.backgroundColor = 'purple';
// box.style.marginTop = '10px';
// container.appendChild(box);

// input.addEventListener('input', () => {
//   const size = input.value;
//   box.style.width = `${size}px`;
//   box.style.height = `${size}px`;
// });




