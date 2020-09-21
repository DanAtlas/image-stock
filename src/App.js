import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.min.css';
import Home from './components/home';
import Navbar from './components/nav';
import Search from './components/search';
import Fav from './components/fav';
import History from './components/history';
import Advice from './components/advice';

function App() {
  // let [value, setValue] = useState('');
  // let [results, setResults] = useState([]);
  // const apiRoot = "https://api.unsplash.com";
  // const accessKey = "KjNzo8Oa3Lz8hlWLOsA6WDAssa0og9IrstoSFnYuBJI";

  // const fetchImages = () => {
  //   fetch(`${apiRoot}/search/photos/?client_id=${accessKey}&query=${value}`)
  //   .then(res=>res.json())
  //   .then(data=> {
  //     console.log(data);
  //     setResults(data.results)
  //   })
  // }

  // const onSubmit = e => {
  //   e.preventDefault();
  //   fetchImages();
  // };
  
  return (
    <Router>
      <div className="App">
        <Navbar/>
        {/* <form onSubmit={onSubmit}>
          <input type="search" value={value}
            onChange={(e)=>setValue(e.target.value)}/>
          <button type="submit">search</button>
        </form> */}
        <Switch>
          <Route exact path="/" render={() => <Home title="Home"/>} />
          <Route path="/search"  render={() => <Search title="Search"/>} />
          <Route path="/history" render={() => <History title="History"/>} />
          <Route path="/fav" render={() => <Fav title="Favorite"/>} />
        </Switch>
        <Advice/>
        {/* <div className="images_grid">
          {
            results.map((item)=>{
              return (
                <div className="image_item" key={item.id}>
                  <img className="picture" src={item.urls.regular} alt=""/>
                  <div className="image_item_info">
                    <div className="user_profile">
                      <a href={item.user.links.html} className="profile_image">
                        <img src={item.user.profile_image.medium} alt=""/>
                      </a>
                      <a className="user_name" href={item.user.links.html}>
                        {item.user.name}
                      </a>
                      <a className="acc_username" href={item.user.links.html}>
                        @{item.user.username}
                      </a>
                    </div>
                    <div className="user_details">
                      <a href="#!">
                        <i className="fas fa-heart"></i>
                      </a>
                      <a href="#!">
                        <i className="fas fa-expand-alt"></i>
                      </a>
                      <a href={item.links.download}>
                        <i className="fas fa-download"></i>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div> */}
      </div>
    </Router>
  );
}


export default App;