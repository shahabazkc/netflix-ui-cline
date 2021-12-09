
import './app.css'
import React from 'react';
import Navbar from './components/Navbar/navbar'
import { orginals, action, trendingMovies, horrorMovies, ComedyMovies, romanceMovies } from './urls'
import Banner from './components/banner/banner';
import Rowpost from './components/rowPost/rowpost';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Firebase } from '../src/firebase/config'
import TvShows from './pages/tv-shows';
function App() {

  return (

    <div className="App">
      <Router>
        <Navbar />
        <Route exact path='/'>
          <Banner />
          <Rowpost url={orginals} title='Netflix Originals' />
          <Rowpost url={action} title='Action' isSmall />
          <Rowpost url={trendingMovies} title='Trending Movies' isSmall />
          <Rowpost url={horrorMovies} title='Horror Movies' isSmall />
          <Rowpost url={ComedyMovies} title='Comedy Movies' isSmall />
          <Rowpost url={romanceMovies} title='Romance Movies' isSmall />
        </Route>
        <Route path='/tv-shows'>
          <TvShows />
        </Route>
        <Route path='/movies'>

        </Route>
      </Router>
      <button onClick={() => {
        let email ='shahabaz3d@gmail.com';
        let password = '123456';
        Firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
          });
      }}>Signup</button>
      <button onClick={()=>{
        let email = 'shahabazkc@gmail.com';
        let password = '123456'
        Firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log("login success");
          // ...
        })
        .catch((error) => {
          console.log("login err");
          var errorCode = error.code;
          var errorMessage = error.message;
        });
      }}>Login</button>
      <button onClick={() => {
        Firebase.firestore().collection('users').get().then(snapshot => {
          snapshot.forEach((obj) => {
            console.log(obj.data());
          })
        })

      }}>Get Users</button>
      <button onClick={() => {
        Firebase.firestore().collection('product').get().then(snapshot => {
          snapshot.forEach((obj) => {
            console.log(obj.data());
          })
        })

      }}>Get Products</button>
      <button onClick={() => {
        Firebase.firestore().collection('product').add({
          name: 'pomergranate',
          price: 120,
          type: 'fruit'
        })
      }}>Add Product to products db</button>
      <button onClick={() => {
        Firebase.firestore().collection('product').doc('0vfJICga6LEVVi4g6tyq').delete().then(() => {
          console.log("deleted");
        })
      }}>Delete</button>
      <button onClick={() => {
        Firebase.firestore().collection('product').doc('y7gotYr7gD7aojEVVmv4').set({
          name: 'onion',
          price: 47
        })
      }}>Update</button>
    </div >

  );
}

export default App;


