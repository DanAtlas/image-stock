import React, { Component } from 'react';
import axios from 'axios';

const apiRoot = "https://api.unsplash.com";
const accessKey = "KjNzo8Oa3Lz8hlWLOsA6WDAssa0og9IrstoSFnYuBJI";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      setValue: '',
      images: [],
      randomPhoto: {},
      randomUser: {},
      dimensions: {}
    }
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.onImgLoad = this.onImgLoad.bind(this);
  }
  
  componentDidMount() {
    axios
      .get(`${apiRoot}/photos/?per_page=15&client_id=${accessKey}`)
      .then(res => {
        // console.log(res.data);
        this.setState({
          images: res.data
        })
      });

    axios
      .get(`${apiRoot}/photos/random/?&client_id=${accessKey}`)
      .then(random => {
        // console.log(random.data);
        this.setState({
          randomPhoto: random.data.urls,
          randomUser: random.data.user,
          randomPhotoId: random.data.id
        })
      });
  }
  
  fetchImages = (term) => {
    fetch(`${apiRoot}/search/photos/?client_id=${accessKey}&query=${term}`)
    .then(res=>res.json())
    .then(data=> {
      // console.log(data.results);
      this.setState({
        images: data.results
      })
    })
  }

  onChange(e) {
    this.setState({
      setValue: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    this.fetchImages(this.state.setValue);
  }

  // onImgLoad = ({target:item}) => {
  //   this.setState({
  //     dimensions:{
  //       height:item.offsetHeight / 16, 
  //       width:item.offsetWidth
  //     }
  //   });
  //   const {width, height} = this.state.dimensions;
  //   const heightRound = Math.ceil(height);
  //   item.parentElement.parentElement.parentElement.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
  //   item.parentElement.parentElement.style.gridRowEnd = "span " + heightRound;
  //   console.log({width}, {heightRound});
  // }
  
  render() {
    // const rm = this.state.randomData;
    const randomBg = this.state.randomPhoto.regular;
    const randomBgId = 'https://unsplash.com/photos/' + this.state.randomPhotoId;
    const randomInfo = this.state.randomUser.name;
    const randomProfile = 'https://unsplash.com/@' + this.state.randomUser.username;
    // console.log(randomProfile);
    return(
      <div>
        <div className="main"
          style={{ backgroundImage: `url(${randomBg})` }}>
          <div className="container">
            <form onSubmit={this.onSubmit}>
              <div className="content_title">
                <h2>ImageStock</h2>
                <p>
                  Created using
                  <a 
                    href="https://unsplash.com/developers"
                    target="_blank"
                    rel="noopener noreferrer">
                      Unsplash API
                  </a>
                </p>
              </div>
              <input type="search"
                ref={input => this.search = input}
                onChange={this.onChange}
                />
              {/* <button type="submit">search</button> */}
            </form>
          </div>
          <p className="random_photo">
            <a 
              href={randomBgId}
              target="_blank"
              rel="noopener noreferrer">
                Random photo
            </a>
            &nbsp;by&nbsp;
            <a 
              href={randomProfile}
              target="_blank"
              rel="noopener noreferrer">
                {randomInfo}
            </a>
          </p>
        </div>
        <div className="container">
          <div className="images_grid">
            {
              this.state.images.map((image) => (
                <div className="image_item with_shadow_2" key={image.id} style={{ display: "" }}>
                  <img id={image.id} 
                    // onLoad={this.onImgLoad} 
                    className="picture" 
                    src={image.urls.regular} 
                    alt={image.user.username}
                  />
                  <div className="image_item_info">
                    <div className="user_profile">
                      <div>
                        <a 
                          className="user_profile_image" 
                          href={image.user.links.html}
                          target="_blank"
                          rel="noopener noreferrer">
                          <img src={image.user.profile_image.medium} alt=""/>
                        </a>
                      </div>
                      <div>
                        <a 
                          className="user_profile_name" 
                          href={image.user.links.html}
                          target="_blank"
                          rel="noopener noreferrer">
                          {image.user.name}
                        </a>
                      </div>
                      <div>
                        <a 
                          className="user_profile_username" 
                          href={image.user.links.html}
                          target="_blank"
                          rel="noopener noreferrer">
                          @{image.user.username}
                        </a>
                      </div>
                    </div>
                    <div className="user_details">
                      <a href="#!">
                        <svg version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-hidden="false"><path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path></svg>
                      </a>
                      <a href="#!">
                        <svg width="32" height="32" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M21.5833 4.5C21.5833 3.67157 22.2736 3 23.125 3H32.375C33.2264 3 33.9167 3.67157 33.9167 4.5V13.5C33.9167 14.3284 33.2264 15 32.375 15C31.5236 15 30.8333 14.3284 30.8333 13.5V6H23.125C22.2736 6 21.5833 5.32843 21.5833 4.5Z" fill="white"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M4.62499 21C5.47643 21 6.16666 21.6716 6.16666 22.5V30H13.875C14.7264 30 15.4167 30.6716 15.4167 31.5C15.4167 32.3284 14.7264 33 13.875 33H4.62499C3.77356 33 3.08333 32.3284 3.08333 31.5V22.5C3.08333 21.6716 3.77356 21 4.62499 21Z" fill="white"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M33.4651 3.43934C34.0672 4.02513 34.0672 4.97487 33.4651 5.56066L22.6735 16.0607C22.0714 16.6464 21.0953 16.6464 20.4932 16.0607C19.8912 15.4749 19.8912 14.5251 20.4932 13.9393L31.2849 3.43934C31.8869 2.85355 32.8631 2.85355 33.4651 3.43934Z" fill="white"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.5068 19.9393C17.1088 20.5251 17.1088 21.4749 16.5068 22.0607L5.71512 32.5607C5.11306 33.1464 4.13693 33.1464 3.53487 32.5607C2.93281 31.9749 2.93281 31.0251 3.53487 30.4393L14.3265 19.9393C14.9286 19.3536 15.9047 19.3536 16.5068 19.9393Z" fill="white"/>
                        </svg>
                      </a>
                      <a href={`${image.links.download}?force=true`}>
                        <svg version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-hidden="false"><path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    );
  } 
}

export default Home;