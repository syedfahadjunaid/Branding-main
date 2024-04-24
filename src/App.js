import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import BlogSinglePage from "./Components/BlogSinglePage/BlogSinglePage";
import CaseStudyPage from "./Components/Case Study Page/CaseStudyPage";
import CaseStudySinglePage from "./Components/CaseStudySinglePage/CaseStudySinglePage";
import ContentMarketing from "./Components/ContentMarketing/ContentMarketing";
import DigitalMarketing from "./Components/DigitalMarketing/DigitalMarketing";
// import EmailMarketing from "./Components/Email Marketing/EmailMarketing";
import GraphicDesginer from "./Components/GraphicDesginer/GraphicDesginer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/NavBar/Navbar";
import PayPerClick from "./Components/PayPerClick/PayPerClick";
// import Reputation from "./Components/Reputation Managment/Reputation";
// import Seo from "./Components/SEO/Seo";
// import SocialMediaOpti from "./Components/Social Media Optimaization/SocialMediaOpti";
import WebDevelopment from "./Components/Web Development/WebDevelopment";
import WebDesign from "./Components/Web Design/WebDesign";
// import PopUpContact from "./Components/PopUpContactUs/PopUpContact";
import { Button, CircularProgress, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ContactUsPage from "./Components/ContactUsSinglePage/ContactUsPage";
import { ContactMail } from "@mui/icons-material";
// import ProgressBar from "react-scroll-progress-bar";
import OurWork from "./Components/Our Work/OurWork";
// import Services from "./Components/Services/Services";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import GoToTop from "./GoToTop";
import GraphicDesignSinglePage from "./Components/Graphic Design SinglePage/GraphicDesignSinglePage";
import ScrollBar from "./ScrollBar/ScrollBar";

function App() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    outline: 0,
    // bgcolor: "background.paper",
    border: "2px solid transparent",
    // boxShadow: 24,
    p: 4,
  };
  const style1 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 400,
    outline: 0,
    // bgcolor: "background.paper",
    border: "2px solid transparent",
    // boxShadow: 24,
    p: 4,
  };
  const [value, setValue] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [errorUpdate, setErrorUpdate] = useState("1");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  const initalValue = {
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  };
  const [formValue, setFormValue] = useState(initalValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);
  const [theme, setTheme] = useState("light_mode");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(valiDate(formValue));
    setIsSubmited(true);
    // console.log(Object.keys(formErrors).length, "erroes");
    // console.log(e.target)
    if (isSubmited && errorUpdate === "0") {
      handleClose();
      handleOpen1();
      setFormValue(initalValue);
      // console.log(formValue);
      setErrorUpdate("1");
    }
  };
  useEffect(() => {
    // console.log(Object.keys(formErrors).length, "erroes");
    setErrorUpdate(Object.keys(formErrors).length);
  }, [formErrors]);
  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmited) {
      // console.log(formErrors);
    }
  });

  const valiDate = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!values.name) {
      errors.name = "Name is Requird";
    }
    // if (!values.phone) {
    //   errors.phone = "phone is Requird";
    // } else if (values.phone.length < 10) {
    //   errors.phone = "Required atlest 10 Number";
    // } else if (values.phone.length > 10) {
    //   errors.phone = "Enter a Valid Number";
    // }
    if (!values.email) {
      errors.email = "Email is Requird";
    } else if (!regex.test(values.email)) {
      errors.email = "This Email is Not Valid";
    }

    if (!values.company) {
      errors.company = "Company Name is Requird";
    }
    if (!values.message) {
      errors.message = "message is Requird";
    }
    return errors;
  };
  const timeNow = new Date();
  console.log(timeNow.getHours());
  const darkModeFun = () => {
    if (timeNow.getHours() > 18 || timeNow.getHours() < 7) {
      // console.log("dark mode");
      document.body.classList = "dark_theme";
    } else {
      // console.log("normal mode");
      document.body.classList = "light_theme";
    }
  };
  useEffect(() => {
    darkModeFun();
  }, [timeNow]);
  useEffect(() => {
    setTimeout(() => {
      handleOpen();
    }, 10000);
  }, []);
  if (isLoading) {
    return (
      <Box style={style1}>
        <CircularProgress thickness={5} className="startLoader" />
      </Box>
    );
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <ScrollBar />
        {/* <ProgressBar className='app_progress_bar' bgcolor="#61b946" style={{top:'76px'}}/> */}

        <div className="popupform">
          <Button className="popupform_button" onClick={handleOpen}>
            <ContactMail />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="popupbox" sx={style}>
              <h6 style={{ marginBottom: "5px" }}>Get in touch with us!</h6>
              <p style={{ marginBottom: "5px" }}>
                you can reach us anytime via{" "}
              </p>
              <p style={{ marginBottom: "5px", color: "#61B946" }}>
                admin@branding360.in
              </p>
              <form
                action=""
                className="popupbox_form"
                id="myForm"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  onChange={handleChange}
                  name="name"
                  placeholder="Name"
                  value={formValue.name}
                />
                <p className="error_para">{formErrors.name}</p>
                <input
                  type="text"
                  onChange={handleChange}
                  name="email"
                  placeholder="Email"
                  value={formValue.email}
                />
                <p className="error_para">{formErrors.email}</p>
                {/* <input
                  type="number"
                  onChange={handleChange}
                  name="phone"
                  placeholder="Phone Number"
                  value={formValue.phone}
                /> */}
                <PhoneInput
                  placeholder="Enter phone number"
                  defaultCountry="IN"
                  value={value}
                  onChange={setValue}
                  countrySelectProps={{ unicodeFlags: true }}
                  className="popup_phone_input"
                />
                {/* <p className="error_para">{formErrors.phone}</p> */}
                <input
                  type="text"
                  onChange={handleChange}
                  name="company"
                  placeholder="Company Name"
                  value={formValue.company}
                />

                <p className="error_para">{formErrors.company}</p>
                <textarea
                  onChange={handleChange}
                  style={{ resize: "none" }}
                  name="message"
                  placeholder="Message"
                  value={formValue.message}
                  id=""
                  cols="30"
                  rows="4"
                  className="popup_textarea"
                ></textarea>
                <p className="error_para">{formErrors.message}</p>
                <Button
                  type="submit"
                  variant="contained"
                  className="popupbox_form_button"
                >
                  Send Message{" "}
                </Button>
              </form>
            </Box>
          </Modal>
          <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="popupbox" sx={style}>
              <h6>Get in touch with us!</h6>
              <p>you can reach us anytime via hi360@gmail.com</p>
            </Box>
          </Modal>
        </div>
        <GoToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/casestudy" element={<CaseStudyPage />} />
          <Route path="/casestudy/:Id" element={<CaseStudySinglePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:Id" element={<BlogSinglePage />} />
          <Route path="/payperclick" element={<PayPerClick />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route path="/webdesign" element={<WebDesign />} />
          <Route path="/grapgicdesign" element={<GraphicDesginer />} />
          <Route path="/digitalmarketing" element={<DigitalMarketing />} />
          <Route path="/contentmarketing" element={<ContentMarketing />} />
          {/* <Route path="/smo" element={<SocialMediaOpti />} /> */}
          {/* <Route path="/seo" element={<Seo />} /> */}
          {/* <Route path="/reputation" element={<Reputation />} /> */}
          {/* <Route path="/emailmarketing" element={<EmailMarketing />} /> */}
          <Route path="/ourwork" element={<OurWork />} />
          <Route path="/graphicDesign" element={<GraphicDesignSinglePage />} />
          {/* <Route path="/services" element={<Services />} /> */}
        </Routes>
        {/* <ProgressBar height="16px" bgcolor="#000" duration="0.2" /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
