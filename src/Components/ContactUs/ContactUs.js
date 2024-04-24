import { Facebook, Instagram, Phone, WhatsApp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Contactus.css";
import client1 from "../../images/./client logo/1.jpg";
import client2 from "../../images/./client logo/2.jpg";
import client3 from "../../images/./client logo/3.jpg";
import client4 from "../../images/./client logo/4.jpg";
import client5 from "../../images/./client logo/5.jpg";
import client6 from "../../images/./client logo/6.jpg";
import client7 from "../../images/./client logo/7.jpg";
import client8 from "../../images/./client logo/8.jpg";
import client9 from "../../images/./client logo/9.jpg";
import client10 from "../../images/./client logo/10.jpg";
import client11 from "../../images/./client logo/11.jpg";
import client12 from "../../images/./client logo/12.jpg";
import client13 from "../../images/./client logo/13.jpg";
import client14 from "../../images/./client logo/14.jpg";
import client15 from "../../images/./client logo/15.jpg";
import client16 from "../../images/./client logo/16.jpg";
import client17 from "../../images/./client logo/17.jpg";
import client18 from "../../images/./client logo/18.jpg";
import client19 from "../../images/./client logo/19.jpg";
import client20 from "../../images/./client logo/20.jpg";
import client21 from "../../images/./client logo/21.jpg";
import client22 from "../../images/./client logo/22.jpg";
import client23 from "../../images/./client logo/23.jpg";
import client24 from "../../images/./client logo/24.jpg";
import client25 from "../../images/./client logo/25.jpg";
import client26 from "../../images/./client logo/26.jpg";
import client27 from "../../images/./client logo/27.jpg";
import client28 from "../../images/./client logo/28.jpg";
import client29 from "../../images/./client logo/29.jpg";
import client30 from "../../images/./client logo/30.jpg";
import client31 from "../../images/./client logo/31.jpg";
import client32 from "../../images/./client logo/32.jpg";
import client33 from "../../images/./client logo/33.jpg";
import client34 from "../../images/./client logo/34.jpg";
import client35 from "../../images/./client logo/35.jpg";
import client36 from "../../images/./client logo/36.jpg";
import client37 from "../../images/./client logo/37.jpg";
import client38 from "../../images/./client logo/38.jpg";
import client39 from "../../images/./client logo/39.jpg";
import client40 from "../../images/./client logo/40.jpg";
import client41 from "../../images/./client logo/41.jpg";
import client42 from "../../images/./client logo/42.jpg";
import client43 from "../../images/./client logo/43.jpg";
import client44 from "../../images/./client logo/44.jpg";
import client45 from "../../images/./client logo/45.jpg";
import client46 from "../../images/./client logo/46.jpg";
import client47 from "../../images/./client logo/47.jpg";
import client48 from "../../images/./client logo/48.jpg";
import client49 from "../../images/./client logo/49.jpg";
import client50 from "../../images/./client logo/50.jpg";
import client51 from "../../images/./client logo/51.jpg";
import client52 from "../../images/./client logo/52.jpg";
import client53 from "../../images/./client logo/53.jpg";
import client54 from "../../images/./client logo/54.jpg";
import client55 from "../../images/./client logo/55.jpg";
import client56 from "../../images/./client logo/56.jpg";
import client57 from "../../images/./client logo/57.jpg";
import client58 from "../../images/./client logo/58.jpg";
import client59 from "../../images/./client logo/59.jpg";
import client60 from "../../images/./client logo/60.jpg";
// import client61 from "../../images/./client logo/61.png";
// import client62 from "../../images/./client logo/62.png";
// import client63 from "../../images/./client logo/63.png";
import img10 from "../../images/Gmail_Logo_512px.png";

import Marquee from "react-fast-marquee";
import { useForm } from "react-hook-form";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/bootstrap.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
import { Box, Modal, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
function ContactUs() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: 8,
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [phone, setPhone] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });
  const [userInfo, setUserInfo] = useState();

  const onSubmit = (data) => {
    setUserInfo(data);
    handleOpen();
    console.log(data, phone);
    console.log("form submitted");
    reset({ name: "", email: "", phone: "", company: "", message: "" });
  };
  useEffect(() => {
    console.log(phone);
  }, [phone]);
  console.log(errors);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="contactUs" >
      <div className="contactUs_left">
        <div className="contactUs_left_first">
          <Marquee direction="left" gradient="false" gradientWidth={0}>
            <div className="contactUs_marquee1">
              <img className="contactUs_marquee1_img" src={client1} alt="banner"  />
              <img className="contactUs_marquee1_img" src={client2} alt="banner" />
              <img className="contactUs_marquee1_img" src={client3} alt="banner"  />
              <img className="contactUs_marquee1_img" src={client4} alt="banner"  />
              <img className="contactUs_marquee1_img" src={client5}   alt="banner" />
              <img className="contactUs_marquee1_img" src={client6} alt="banner"  />
              <img className="contactUs_marquee1_img" src={client7} alt="banner"  />
              <img className="contactUs_marquee1_img" src={client8} alt="banner"  />
              <img className="contactUs_marquee1_img" src={client9} alt="banner"  />
              <img className="contactUs_marquee1_img" src={client10} alt="banner" />
              <img className="contactUs_marquee1_img" src={client41} alt="banner" />
              <img className="contactUs_marquee1_img" src={client42} alt="banner" />
              <img className="contactUs_marquee1_img" src={client43} alt="banner" />
              <img className="contactUs_marquee1_img" src={client44} alt="banner"  />
              <img className="contactUs_marquee1_img" src={client45} alt="banner" />
              <img className="contactUs_marquee1_img" src={client46} alt="banner"  />
            </div>
          </Marquee>
          <Marquee direction="right" gradient="false" gradientWidth={0}>
            <div className="contactUs_marquee1">
              <img
                className="contactUs_marquee1_img"
                src={client11}
                alt="banner"
               
              />
              <img
                className="contactUs_marquee1_img"
                src={client12}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client13}
                alt="banner"
               
              />
              <img
                className="contactUs_marquee1_img"
                src={client14}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client15}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client16}
                alt="banner"
               
              />
              <img
                className="contactUs_marquee1_img"
                src={client17}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client18}
                alt="banner"
                
              /> 
              <img
                className="contactUs_marquee1_img"
                src={client19}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client20}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client47}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client48}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client49}
                alt="banner"
               
              />
              <img
                className="contactUs_marquee1_img"
                src={client50}
                alt="banner"
               
              />
              <img
                className="contactUs_marquee1_img"
                src={client51}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client52}
                alt="banner"
                
              />
            </div>
          </Marquee>

          <Marquee direction="left" gradient="false" gradientWidth={0}>
            <div className="contactUs_marquee1">
              <img
                className="contactUs_marquee1_img"
                src={client21}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client22}
                alt="banner"
               
              />
              <img
                className="contactUs_marquee1_img"
                src={client23}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client24}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client25}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client26}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client27}
                alt="banner"
               
              />
              <img
                className="contactUs_marquee1_img"
                src={client28}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client29}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client30}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client53}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client54}
                alt="banner"
               
              />
              <img
                className="contactUs_marquee1_img"
                src={client55}
                alt="banner"
               
              />
              <img
                className="contactUs_marquee1_img"
                src={client56}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client57}
                alt="banner"
               
              />
              <img
                className="contactUs_marquee1_img"
                src={client58}
                alt="banner"
                
              />
            </div>
          </Marquee>
          <Marquee direction="right" gradient="false" gradientWidth={0}>
            <div className="contactUs_marquee1">
              <img
                className="contactUs_marquee1_img"
                src={client31}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client32}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client33}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client34}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client35}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client36}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client37}
                alt="banner"
                
              />
             
              <img
                className="contactUs_marquee1_img"
                src={client38}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client39}
                alt="banner"
               
              />
              <img
                className="contactUs_marquee1_img"
                src={client40}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client59}
                alt="banner"
                
              />
              <img
                className="contactUs_marquee1_img"
                src={client60}
                alt="banner"
               
              />
            </div>
          </Marquee>
        </div>
      </div>
      <div className="contactUs_right">
        <h6 style={{lineHeight:'40px'}}>Get In Touch With Us!</h6>
       
        <div className="contactUs_right_form">
          <form
            className="contactUs_right_form_form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="contactUs_right_form_form_first">
              <span>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: "Name is Required" })}
                />
                {<p className="error_para">{errors?.name?.message}</p>}
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is Required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Email is Not Valid",
                    },
                  })}
                />
                {<p className="error_para">{errors?.email?.message}</p>}
              </span>
            </div>

            <div className="contactUs_right_form_form_second">
              {/* <input type='phone' placeholder="Phone No"/> */}
              <span>
                {/* <Controller
          name="phone-input"
          control={control}
          rules={{
            validate: (value) => isValidPhoneNumber(value)
          }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
            placeholder="Enter phone number"

            value={phone}
            onChange={setPhone}
             
              id="phone-input"
              defaultCountry="IN"
              className="contactUs_right_form_form_second_phone"
            />
          )}
        /> */}
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={setPhone}
                  defaultCountry="IN"
                  className="contactUs_right_form_form_second_phone"
                  {...register("phone", {
                    required: "Phone is Required",
                    minLength: {
                      value: 10,
                      message: "Please Input Atlest 10 Numbers",
                    },
                    maxLength: {
                      value: 15,
                      message: "Please Enter Less Than 13 number",
                    },
                  })}
                />
                {<p className="error_para">{errors?.phone?.message}</p>}
              </span>
              <span className="conatactUs_span_margin">
                <input
                  type="text"
                  placeholder="Company Name"
                  {...register("company", {
                    required: "Company Name is Required",
                  })}
                />
                {<p className="error_para">{errors?.company?.message}</p>}
              </span>
            </div>
            <div className="contactUs_right_form_form_third">
              <textarea
                type="text"
                className="popup_textarea"
                placeholder="Message"
                {...register("message", { required: "Message is Required" })}
              />
              {<p className="error_para">{errors?.message?.message}</p>}
            </div>

            <button
              type="submit"
              variant="contained"
              className="popupbox_form_button contact_form_button home_page_sumbit_page"
            >
              Send Message
            </button>
          </form>

          {/* <div className="contactUs_right_form_first">
            <input type="text" name="name" id=""  placeholder='Your Name'/>
            <input type="email" name="email" id=""  placeholder='Your Email'/>
        </div>
        <div className="contactUs_right_form_second">
            <input type="number" name='number' placeholder='Your Number'/>
            <input type="text" name='company' placeholder='Company Name' />
        </div>
        <div className="contactUs_right_form_third">
            <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Send Message</button>
        </div> */}
        </div>
        <div className="contactUs_right_form_icons">
          <Link to="https://wa.me/+919919444434" target="_blank">
            <WhatsApp className="contactUs_right_form_icons_icon whatsapp" />
          </Link>
          <Link to="https://www.instagram.com/" target="_blank">
            <Instagram className="contactUs_right_form_icons_icon instagram instagram1" />
          </Link>
          <Link to="https://www.facebook.com/branding360.in/" target="_blank">
            <Facebook className="contactUs_right_form_icons_icon facebook facebook1" />
          </Link>
        </div>
        <div className="contactUs_right_form_icons_link">
          <span>
            <Link to="mailto:admin@branding360.in" target="_blank">
              <img src={img10} alt="banner"/>
              <p>admin@branding360.in</p>
            </Link>
          </span>
          <span>
            <Link to="https://wa.me/+919919444434" target="_blank">
              <Phone className="phone" />
              <p>+91 9919444434</p>
            </Link>
          </span>
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
            Thanks For Submitting The Form Our Team Will Reach You Soon!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ContactUs;
