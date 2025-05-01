import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom"; // Add this import
import Menu from "../components/Menu";
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg"
          alt="content"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg"
            alt="user"
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt=""></img>
            </Link>
            <img src={Delete} alt="c"></img>
          </div>
        </div>
        <div>
          <h1>allala dahdoahfafa fjlfjqfq fafaklf</h1>
        </div>
        <p>
          <p>
            The sun set behind the mountains, casting a warm glow across the
            valley as a soft breeze rustled through the trees. The children
            played in the park, their laughter filling the air, while people
            hurried down the bustling street, immersed in their own worlds. She
            paused to admire the vibrant sunset, feeling a sense of peace as the
            scent of flowers drifted through the open window. The aroma of fresh
            coffee filled the kitchen, and the sound of waves crashing against
            the shore echoed in the distance. He sat by the window, watching the
            rain pour down, lost in thought, while the cat curled up on the
            couch, purring softly. It was a simple evening, yet everything felt
            perfect—the rhythm of life unfolding in small, beautiful moments.
            fak
            <br></br>
            <br></br>
            The sun set behind the mountains, casting a warm glow across the
            valley as a soft breeze rustled through the trees. The children
            played in the park, their laughter filling the air, while people
            hurried down the bustling street, immersed in their own worlds. She
            paused to admire the vibrant sunset, feeling a sense of peace as the
            scent of flowers drifted through the open window. The aroma of fresh
            coffee filled the kitchen, and the sound of waves crashing against
            the shore echoed in the distance. He sat by the window, watching the
            rain pour down, lost in thought, while the cat curled up on the
            couch, purring softly. It was a simple evening, yet everything felt
            perfect—the rhythm of life unfolding in small, beautiful moments.
            fak
            <br></br>
            <br></br>
            The sun set behind the mountains, casting a warm glow
            across the valley as a soft breeze rustled through the trees. The
            children played in the park, their laughter filling the air, while
            people hurried down the bustling street, immersed in their own
            worlds. She paused to admire the vibrant sunset, feeling a sense of
            peace as the scent of flowers drifted through the open window. The
            aroma of fresh coffee filled the kitchen, and the sound of waves
            crashing against the shore echoed in the distance. He sat by the
            window, watching the rain pour down, lost in thought, while the cat
            curled up on the couch, purring softly. It was a simple evening, yet
            everything felt perfect—the rhythm of life unfolding in small,
            beautiful moments. fak
            fhakfhafafjakfhaffaefklafjalkjfadkkkkkfafkafafkaakfakfkafafakfakfafafaf
          </p>
        </p>
      </div>
    <Menu/> 
    </div>
  );
};

export default Single;
