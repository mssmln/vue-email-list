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


// opzione con jQuery
$(document).ready(function() {
  $.ajax(
    {
      url: "https://flynn.boolean.careers/exercises/api/random/mail",
      method: "GET",
      success: function(data) {
        $("#generatedMail").html(data);
      },
    }
  );
});
