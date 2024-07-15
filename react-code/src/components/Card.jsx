import "./Card.css";

import mainImage from "../assets/images/illustration-article.svg";
import avatarImage from "../assets/images/image-avatar.webp";

export default function Card() {
  return (
    <div className="article-card">
      <img
        src={mainImage}
        alt="article illustration"
        className="article-image"
      />
      <div className="content">
        <div className="informations">
          <span className="tag">Learning</span>
          <p className="date">Published 21 Dec 2023</p>
        </div>
        <div className="main-informations">
          <h1 className="title">HTML & CSS foundations</h1>
          <p className="description">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
      </div>
      <div className="footer">
        <img
          src={avatarImage}
          alt="Image of the author"
          className="author-image"
        />
        <span className="author">Greg Hooper</span>
      </div>
    </div>
  );
}
