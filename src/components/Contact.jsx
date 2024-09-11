import { useContext } from "react";
import { Context } from "../context/Context";


const Contact = () => {

    const {businessInfo} = useContext(Context)
    console.log(businessInfo)
    return ( 
        <div>

        </div>
     );
}
 
export default Contact;