import React from "react";
import "./HomePage.css";
import profile_img from "./assets/profile__img.png";
import Button from "./Component/Button";
import Zuri from "./assets/Zuri.Internship_Logo.svg";
import { ReactComponent as Zuri2 } from "./assets/Vector2.svg";
import Footertext from "./assets/Footer text.svg";
import { ReactComponent as FooterText2 } from "./assets/Footer2.svg";
import I4G from "./assets/I4G.svg";
import { ReactComponent as I4G2 } from "./assets/I4G2.svg";
import slack from "./assets/slack.svg";
import Icon from "./assets/Icon.svg";
import AvatarShareButton from "./assets/AvatarShareButton.svg";
import ThreeDots from "./assets/three-dots.svg";

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
        <div className="footer-logo">
          <img src={slack} alt=" slackLogo" id="slack" className="footer-img" />
          <img src={Icon} alt=" GithubIcon" className="footer-img" />
        </div>
        <div className="innerFooter">
          <div className="line"></div>
          <div className="innerFooter-icons">
            <img src={Zuri} alt="text" />
            <img src={Footertext} alt="text" />
            <img src={I4G} alt="I4GLogo" />
          </div>
        </div>
        <div className="mobileInnerFooter">
          <Zuri2 />
          <FooterText2 />
          <I4G2 />
        </div>
      </div>
    </div>
  );
}
