import { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ key, course, likedCourses, setLikedCourses}) {

  const [like, setLike] = useState(false);

  function clickHandler(){
    if(likedCourses.includes(course.id)){
      setLikedCourses((prev) => prev.filter(cid => cid !== course.id));
      toast.warning("Disliked");
      setLike(false);
    }else{
      if(likedCourses.length === 0){
        setLikedCourses([course.id]);        
      }else{
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked");
      setLike(true);
    }
  }

  return (
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80">
      <div className="relative">
        <img src={course.image.url} alt={course.image.alt}></img>
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
        grid place-items-center">
          <button onClick={clickHandler}>
            {like ? <FcLike fontSize="1.75rem"/> : <FcLikePlaceholder fontSize="1.75rem"/>}            
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg loading-6">{course.title}</p>
        <p className="mt-2 text-white">{course.description.length > 100 ? course.description.substring(0,100).concat("...") : course.description}</p>
      </div>

    </div>
  );
}

export default Card;
