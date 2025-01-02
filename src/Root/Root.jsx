import { Outlet } from "react-router-dom";
import Header from "../page/Home/Header/Header";
import Footer from "../page/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;