import RightNav from "../atom/RightNav";
import LeftNav from "../atom/LeftNav";
import CenterNav from "../atom/CenterNav";

const Navbar = () => {
    return (
        <div className="flex h-24 bg-black text-white items-center ">
            <div className="flex justify-between w-full px-24">
                <LeftNav />
                <CenterNav />
                <RightNav />
            </div>
        </div>
    );
};

export default Navbar;
