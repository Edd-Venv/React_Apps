import React, { Component } from "react";

class ImageSlider extends Component {
  state = {
    images: [
      "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjz072dt4njAhXjxaYKHTHUAmUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.codementor.io%2Fandrewwong%2Fimprove-your-ux-by-dynamically-rendering-images-via-react-js-68mx3e1dg&psig=AOvVaw2VLlyKGTwnbWSWDWHU2CRx&ust=1561716973299745"
    ]
  };
  render() {
    return (
      <div>
        <img src={this.state.images[0]} />
      </div>
    );
  }
}

export default ImageSlider;
