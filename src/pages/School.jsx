
import Header from "../components/Header";
import Footer from "../components/Footer";
import SchoolData from "../components/SchoolData";

const School = ({school}) => {

    return ( 
        <>
        <Header />
            <div className="entete">
            <h2>{school}</h2>
            </div>
            <div className="container">
                <div className="wrapper">
                   <SchoolData />
                </div>
            </div>
            <div className="piedpage">

            </div>
            <Footer />
        </>
     );
}
 
export default School;