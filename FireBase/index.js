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
    const ref = firebase.storage().ref();
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