import React from "react";
import "./HomePage.css";
import profile_img from "./assets/profile__img.png";
import Button from "./Component/Button";
import AvatarShareButton from "./assets/AvatarShareButton.svg";
import ThreeDots from "./assets/three-dots.svg";
import Footer from "./Component/Footer";

export default function HomePage() {
  return (
    <div className="App">
      <div className="profileSection">
        <div>
          <img
            src={profile_img}
            alt=" ProfilePicture"
            className="profilePicture"
            id="profile__img"
          />
          <img
            src={AvatarShareButton}
            alt=" ShareButton"
            className="ShareButton"
          />
          <img src={ThreeDots} alt="Three Dots" className="threeDots" />
        </div>
        <h4>Okoro Gift</h4>
      </div>
      <div className="link-section">
        <Button
          as={"a"}
          target="_blank"
          href="https://twitter.com/Adaokoro10"
          id="twitter"
        >
          <p>Twitter Link</p>
        </Button>

        {/* <Button id="slack">
          <p>Okoro Gift</p>
        </Button> */}

        <Button
          as={"a"}
          target="_blank"
          href="https://training.zuri.team/"
          id="btn__zuri"
        >
          <p> Zuri Teams</p>
        </Button>
        <Button
          as={"a"}
          target="_blank"
          href="http://books.zuri.team"
          id="books"
        >
          <p>Zuri Books</p>
        </Button>
        <Button
          as={"a"}
          target="_blank"
          href="https://books.zuri.team/python-for-beginners?ref_id=Okoro Gift"
          id="book__python"
        >
          <p>Python Books</p>
        </Button>
        <Button
          as={"a"}
          target="_blank"
          href="https://background.zuri.team"
          id="pitch"
        >
          <p>Background Check for Codes</p>
        </Button>
        <Button
          as={"a"}
          target="_blank"
          href="https://books.zuri.team/design-rules"
          id="book__design"
        >
          <p> Design Books</p>
        </Button>
        <Button as={"a"} target="_blank" href="/contact" id="contact">
          <p>Contact Me</p>
        </Button>
        <Footer />
      </div>
    </div>
  );
}
