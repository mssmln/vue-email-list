// Genera 10 mail tramite api e stampale in una lista.
// Potete utilizzare questa api:
// https://flynn.boolean.careers/exercises/api/random/mail

// // opzione con Vue
// var app = new Vue ({
//   el: '#app',
//   data: {
//     mails: [] // inizializzato vuoto per le mails che verranno generate
//   },
//   mounted(){
//     for (let i = 0; i < 10; i++){
//       axios
//       .get('https://flynn.boolean.careers/exercises/api/random/mail')
//       .then((result) => {
//         console.log(result.data);
//         this.mails.push(result.data.response);
//       });
//
//     }
//   }
// });


// // opzione con jQuery
// $(document).ready(function() {
//   let mails = [];
//   for (let i = 0; i < 10; i++){
//     $.ajax(
//       {
//         url: "https://flynn.boolean.careers/exercises/api/random/mail",
//         method: "get",
//         success: function(result) { // se avessi fatto il for dentro la fun avresti avuto per 10 volte la stessa mail
//           // console.log(result);
//           mails.push(result.response);
//           document.getElementById('generatedMail').innerHTML = mails;
//         },
//       }
//     );
//
//   }
//   console.log(mails);
//
// });
