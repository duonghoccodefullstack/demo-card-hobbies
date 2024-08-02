// import { Input } from "@/components/ui/input";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button";
// import LikeNow from "../LikeNow";
import LikeNow from "../LikeNow";
import Filter from "../Filter";
import Card from "../Card/index"
import 'boxicons';

const Home = () => {
    return (
        <div className="font-be py-[67px] px-[130px] h-[100vh]" >
              <LikeNow></LikeNow> 
            <Filter></Filter>
            <Card></Card>
            
        </div>


    );
}

export default Home;