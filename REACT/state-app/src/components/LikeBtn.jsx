import { useState } from "react";
export default function LikeBtn(){
    const[count,setCount] = useState(0);
    const[isLiked,setIsLiked] = useState(false);

     function toggleLike() {
    if (!isLiked) {
      setCount(prev => prev + 1);
    } else {
      setCount(prev => Math.max(0, prev - 1));
    }

    setIsLiked(prev => !prev);
  }
    return(
        <div>
            <button onClick={toggleLike}>{isLiked ? "Unlike":"Like"}</button>
            <p>Total Likes: {count}</p>
        </div>
    )
}