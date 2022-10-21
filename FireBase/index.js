const firebaseConfig = {
  apiKey: "AIzaSyDD7t2Y2WEH8oBSgFsS8BGxeObfQJoyk7s",
  authDomain: "project-agricultural.firebaseapp.com",
  projectId: "project-agricultural",
  storageBucket: "project-agricultural.appspot.com",
  messagingSenderId: "307891484564",
  appId: "1:307891484564:web:c52b5987fae5200d2bc181",
  measurementId: "G-M1QTVFFR1K"
};

firebase.initializeApp(firebaseConfig);

function uploadImage() {
    
    const ref = firebase.storage().ref("Files/" + "Hungphi/");
    // Lấy phẩn tử đầu tiên
    const file = document.querySelector('#photo').files[0]
    const metadata = {
        contentType : file.type
    }
    const name = file.name;
    const uploadIMG = ref.child(name).put(file, metadata);
    uploadIMG
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
        console.log(url);
    }).catch(console.error)
}
let a = [];
const getRandomImages = () => {

    const storageRef = firebase.storage().ref("Files/" + "Hungphi");

    storageRef.listAll().then((result) => {
      result.items.forEach((imageRef) => {
        imageRef.getDownloadURL().then((url) => {
          console.log(url);
          a.push(url)
          console.log(a);
        })
       
      }) 
      
    })       
  }


//Google singin provider
var ggProvider = new firebase.auth.GoogleAuthProvider();
//Facebook singin provider
var fbProvider = new firebase.auth.FacebookAuthProvider();
//Login in variables
const btnGoogle = document.getElementById('btnGoogle');
const btnFaceBook = document.getElementById('btnFacebook');

    //Sing in with Google
    btnGoogle.addEventListener('click', e => {
        firebase.auth().signInWithPopup(ggProvider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            console.log('User>>Goole>>>>', user);
            userId = user.uid;

        }).catch(function(error) {
            console.error('Error: hande error here>>>', error.code)
        })
    }, false)

    //Sing in with Facebook
    btnFaceBook.addEventListener('click', e => {
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log('User>>Facebook>', user);
            // ...
            userId = user.uid;
        
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.error('Error: hande error here>Facebook>>', error.code)
        });
    }, false)
    //jquery 