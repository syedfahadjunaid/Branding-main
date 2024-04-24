import {
  Email,
  Facebook,
  Instagram,
  NearMe,
  Phone,
  WhatsApp,
} from "@mui/icons-material";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import map1 from "../../images/Google-Maps-Logo-2015.png";
import "./ContactUsPage.css";
import { Box, Modal, Typography } from "@mui/material";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
function ContactUsPage() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: 8,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [phone, setPhone] = useState("");
  // const onSubmit = (data) => {
  //   // setUserInfo(data);
  //   console.log(data);
  //   console.log("hello");

  // };
  const [userInfo, setUserInfo] = useState();

  const form = useRef();

  const sendEmail = () => {
    // event.preventDefault();

    emailjs
      .sendForm(
        "service_i0n2fad",
        "template_4sr2b0b",
        form.current,
        "fZvwk_Eixzu1rLh1l"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onSubmit = (data) => {
    setUserInfo(data);
    handleOpen();
    console.log(data);
    console.log("form submitted");
    reset({ name: "", phone: "", company: "", message: "", email: "" });
    sendEmail();
  };
  return (
    <div className="contactUsPage">
      <div className="contactUsPage_left">
        <h6>Get in touch!</h6>
        <p>
          we’ love to hear from you. our friendly tam is always here to chat.
        </p>
        <span className="contactUsPage_left_span">
          <Email />
          <span>
            <p>Chat with us</p>
            <p>Our friendly team is here to help.</p>
            <p>admin@branding360.in</p>
          </span>
        </span>
        <span className="contactUsPage_left_span">
          <NearMe />
          <span>
            <p>Chat with us</p>
            <p>Our friendly team is here to help.</p>
            <p>admin@branding360.in</p>
          </span>
        </span>
        <span className="contactUsPage_left_span">
          <Phone />
          <span>
            <p>Chat with us</p>
            <p>Our friendly team is here to help.</p>
            <p>9022256222</p>
          </span>
        </span>
        <span className="contactUsPage_left_span_icon">
          <div className="contactUsPage_left_span_icon_div">
            <Link to='https://wa.me/9022256222' target="_blank">
              <WhatsApp className="contactUsPage_left_span_icon_icon" />
            </Link>
          </div>
          <Link to='https://www.instagram.com/' target="_blank">
     
            <Instagram className="contactUsPage_left_span_icon_icon" />
          </Link>
          <Link to='https://www.facebook.com/branding360.in/' target="_blank">
            <Facebook className="contactUsPage_left_span_icon_icon" />
          </Link>
        </span>
      </div>
      <div className="contactUsPage_right contactUsPage_right_singl">
        <h6>Get in Touch With Us!</h6>
        <p>You Can Reach Us anytime via hi360@gmail.com</p>
        <div>
        <div className=" contactUsPage_right_form">
          <form
            className="contactUsPage_right_form_form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="contactUsPage_right_form_form_div ">
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                {...register("name", { required: "Name is Required" })}
              />
              { (
                <p className="error_para">{errors?.name?.message}</p>
              )}
            </div>
            <div className="contactUsPage_right_form_form_div">
              <label>Phone</label>
              <input
                type="number"
                placeholder="Phone"
                name="phone"
                {...register("phone", {
                  required: "Phone is Required",
                  minLength: {
                    value: 10,
                    message: "Please Input Atlest 10 Numbers",
                  },
                  maxLength: {
                    value: 13,
                    message: "Please Enter Less Than 13 number",
                  },
                })}
              />
              { (
                <p className="error_para">{errors?.phone?.message}</p>
              )}
            </div>
            <div className="contactUsPage_right_form_form_div">
              <label>Company Name</label>
              <input
                type="text"
                placeholder="Company Name"
                name="company"
                {...register("company", {
                  required: "Company Name is Required",
                })}
              />
              { (
                <p className="error_para">{errors?.company?.message}</p>
              )}
            </div>
            <div className="contactUsPage_right_form_form_div">
              <label>Email</label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Email is Not Valid",
                  },
                })}
              />
              {(
                <p className="error_para">{errors?.email?.message}</p>
              )}
            </div>
            <div className="contactUsPage_right_form_form_div contactUsPage_right_form_form_div_mobile">
              <label>Message</label>
              <textarea
                type="text"
                placeholder="Message"
                name="message"
                {...register("message", { required: "Message is Required" })}
              />
              { (
                <p className="error_para">{errors?.message?.message}</p>
              )}
               <button className="contact_single_page_button">Submit</button>
            </div>

           
          </form>
        </div>

        <div className="contactUs_location" id="map">
          <img src={map1} alt="banner"/>
          <iframe
            className="contactUs_location_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.607068248314!2d80.95042261499663!3d26.852447283153655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0f3ce3d681%3A0xdaa4ff47702466eb!2sBranding%20360%20-%20SEO%20Company%20in%20Lucknow%20%7C%20Social%20Media%20Marketing%20Agency%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1679316237306!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <img src={map}/> */}
        </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Our Team Will Reach You Soon!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ContactUsPage;
