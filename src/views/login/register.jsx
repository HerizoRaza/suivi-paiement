import react, {UseEffet, UseState } from "react";
import basestyle from "../Base.module.css";
import registerstyle from "./Register.module.css";

import { useNavigate, NavLink } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
  
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [user, setUserDetails] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: "",
    });
}