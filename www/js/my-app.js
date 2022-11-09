// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [

    { path: '/registro/', url: 'registro.html', },
    { path: '/inicio/', url: 'inicio.html', },

  ]
  // ... other parameters
});

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
  console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
  // Do something here when page loaded and initialized

})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="index"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  //console.log(e);
  // alert('Hello');
  //LOGIN//

  // cada un@ pone su magia para recuperar el mail y la clave de un form...
  var MAIL = document.getElementById("#rMail");
  var CONTRA = document.getElementById("#rContra");

  /* firebase.auth().signInWithEmailAndPassword(MAIL, CONTRA)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;

      console.log("Bienvenid@!!! " + MAIL);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.error(errorCode);
      console.error(errorMessage);
    }); */

})














//BASE DE DATOS
var MAIL = "";

var db = firebase.firestore();
var colUsuario = db.collection("Usuarios");


$$("#iNICIO").on("click", fnLogin);

function fnLogin() {

  MAIL = $$('#lEmail').val();
  CONTRA = $$('#lPass').val();

  firebase.auth().signInWithEmailAndPassword(MAIL, CONTRA)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;

      console.log("Bienvenid@!!! " + MAIL);

      claveDeColeccion = MAIL;

      var docRef = colUsuario.doc(claveDeColeccion);

      docRef.get().then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());

          console.log(doc.id);
          console.log(doc.data().nombre);
          console.log(doc.data().rol);

          if (doc.data().rol == "admin") {
            mainView.router.navigate('/panelAdmin/');
          } else {
            mainView.router.navigate('/panelUsuario/');
          }


        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });


      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.error(errorCode);
      console.error(errorMessage);
    });




}



$$(document).on('page:init', '.page[data-name="registro"]', function (e) {

  $$("#boton").on("click", (e) => fnRegistro(e));
  //REGISTER//
  // cada un@ pone su magia para recuperar el mail y la clave de un form...
  /* var MAIL = document.getElementById("#rMail");
  var CONTRA = document.getElementById("#rContra");

  firebase.auth().createUserWithEmailAndPassword(MAIL.value, CONTRA.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("Bienvenid@!!! " + MAIL);
      // ...
      mainView.router.navigate('/siguientePantallaDeUsuarioOK/');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.error(errorCode);
      console.error(errorMessage);

      if (errorCode == "auth/email-already-in-use") {
        console.error("el mail ya esta usado");
      }

      // ..
    }); */


  function fnRegistro(e) {
    console.log(e);
    const RMAIL = $$('#rMail').val();
    const RCONTRA = $$('#rContra').val();
    RNOMBRE = $$('#rNombre').val();
    RAPELLIDO = $$('#rApellido').val();
    console.log(RMAIL + 'mail')
    console.log(RCONTRA)
    firebase.auth().createUserWithEmailAndPassword(RMAIL, RCONTRA)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        //console.log("Bienvenid@!!! " + MAIL); 
        // ...
        //mainView.router.navigate('/siguientePantallaDeUsuarioOK/');


        claveDeColeccion = RMAIL;


        datos = {
          nombre: NOMBRE,
          apellido: APELLIDO,
          rol: "usuario"
        }

        colUsuario.doc(claveDeColeccion).set(datos)
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });


      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.error(errorCode);
        console.error(errorMessage);

        if (errorCode == "auth/email-already-in-use") {
          console.error("el mail ya esta usado");
        }

        // ..
      });



  }




})

