

import { useState } from "react";
import Button from "../Button/Button";
import './Feedback.css'; 

function Feedback() {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const onDislike = () => setDislikes((prev) => prev + 1);

    return (       
        <div className="feedback">
            <div className="feedback-item">
            <Button name="like" onButtonClick={() => setLikes((prev) => prev + 1)}  />
                <span>{likes}</span>
                </div>
              <div className="feedback-item">
            <Button name="dislike" onButtonClick={onDislike}  />
                <span>{dislikes}</span>
                </div>
        </div>
    );  
}
export default Feedback;
// props = {
//  name:
//  onButtonClick:
// }

