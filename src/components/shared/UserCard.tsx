import { Models } from "appwrite";
import { Link } from "react-router-dom";

// import { Button } from "../ui/button";

type UserCardProps = {
  user: Models.Document;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Link to={user.bio} className="user-card" target="_blank" rel="noopener noreferrer">
      <img
        src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
        alt="creator"
        className="rounded-full w-14 h-14"
      />

      <div className="flex-center flex-col gap-1">
        <p className="base-medium text-light-1 text-center line-clamp-1">
          {user.name}
        </p>
        <p className="small-regular text-light-3 text-center line-clamp-1">
          @{user.username}
        </p>
        {/* <a href={user.bio} target="_blank" rel="noopener noreferrer">  */}
              <p className="small-medium md:base-medium text-center xl:text-left mt-7 max-w-screen-sm ">
                
                <i className="fas fa-coins ml-1 text-purple-500"></i> {user.bio} 
             </p> 
          {/* </a>  */}
      </div>

      
    </Link>
  );
};

export default UserCard;
