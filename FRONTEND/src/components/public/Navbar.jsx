import {Link} from  "react-router-dom";
import Button from "../ui/Button";

const Navbar = () => {
  return (
     <nav className="w-full bg-[#100F57] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* logo */}
                <div className="text-xl font-bold">
                    Scholify
                </div>

                {/* links */}
                <ul className="hidden md:flex gap-8 text-sm  font-medium">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Features</a></li>
                </ul>

                {/* login button */}
                <Link to={"/login"}>
                <Button size="sm"> Login</Button></Link>
        </div>
     </nav> 
  )
}

export default Navbar