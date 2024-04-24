import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import ContactUs from "../ContactUs/ContactUs";
import banner1 from "../../images/Rectangle 1220.jpg";
import banner2 from "../../images/landingPage.jpg";
import banner3 from "../../images/unsplash_fZ2hMpHIrbI.jpg";
// import pagination1 from "../../images/unsplash_ute2XAFQU2I.jpg";
// import pagination2 from "../../images/unsplash_cZr2sgaxy3Q.jpg";
import "./BlogSinglePage.css";
// import Button from "../../button/Button";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { KeyboardArrowRight, Redo, Undo } from "@mui/icons-material";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function BlogSinglePage() {
  useEffect(() => {
    AOS.init();
  }, [])
  const { Id } = useParams();
  return (
    <div className="blogsinglepage">
      <div className="blogsinglepage_header" data-aos='fade-up' data-aos-duration='1000'>
        <h5>Blog/{Id}</h5>
      </div>
      <div className="webdevelopment_breadCrums">
        <Link to="/" className="webdevelopment_breadCrums_home">
          Home
        </Link>
        <KeyboardArrowRight />
        <Link to="/blog" className="webdevelopment_breadCrums_home">
       Blog
        </Link>
        <KeyboardArrowRight />
        <Link to="#" className="webdevelopment_breadCrums_webdevelopment">
       SingleBlog
        </Link>
    
      </div>
      <div className="blogsinglepage_banner" data-aos='fade-up' data-aos-duration='500'>
        <img src={banner1} alt="" loading="lazy"/>
      </div>
      <div className="blogsinglepage_banner1" data-aos='fade-up' data-aos-duration='500'>
        <img src={banner2} alt="" loading="lazy"/>
      </div>
      <div className="blogsinglepage_main" data-aos='fade-up' data-aos-duration='500'>
        <div className="blogsinglepage_main_header" data-aos='fade-up' data-aos-duration='500'>
          <h5>what is ui ?</h5>
        </div>
        <div className="blogsinglepage_main_para">
          <p data-aos='fade-up' data-aos-duration='500'>
            Lorem ipsum dolor sit amet consectetur. Ipsum eu ornare bibendum in.
            Volutpat enim fringilla sagittis integer consequat risus nunc in.
            Malesuada non pellentesque in nibh pretium. Neque aliquam ultrices
            amet sed porta cras nec sagittis. Egestas id scelerisque eget eu
            velit egestas. Sagittis sociis proin eu leo nullam a. Amet elementum
            faucibus suspendisse ac consequat massa in eros adipiscing. Ut
            hendrerit non sem fermentum in pulvinar platea lacus nascetur.
          </p>
          <p data-aos='fade-up' data-aos-duration='500'>
            Phasellus adipiscing suspendisse pretium nisi dolor venenatis libero
            natoque. Ullamcorper etiam pulvinar rhoncus nulla tincidunt. Urna in
            ac integer eu duis nulla lorem elit at. Sagittis tempor duis commodo
            egestas sollicitudin. Sem pellentesque a nec egestas accumsan proin
            ac tristique aliquet. Placerat quis libero auctor a. Id massa ipsum
            phasellus ultricies sit donec malesuada eget vel. Orci in morbi
            blandit mattis amet adipiscing. Mi justo mus in fermentum tempus
            tellus est volutpat. Urna quis tincidunt aliquam velit et aliquet
            imperdiet. Vitae pulvinar pulvinar nulla pharetra phasellus.
          </p>
          <p data-aos='fade-up' data-aos-duration='500'>
            Id consequat sagittis ut egestas dictum vitae est. Aliquam dolor
            bibendum pellentesque cras consectetur blandit sit at. Hac ligula
            eget eget sed ac proin id ullamcorper eget. Eget erat facilisi
            scelerisque ac eu eget ullamcorper erat id. Sed erat in at sed eu
            senectus lorem ac. Egestas netus magna maecenas in sit. Urna risus
            eget pretium egestas. Eget bibendum porttitor massa ac eu bibendum.
            Mollis phasellus justo ultricies scelerisque. Tellus dignissim
            dapibus amet a arcu mi. Ultrices bibendum massa lorem sit. Laoreet
            nunc at adipiscing enim iaculis suspendisse ac. Curabitur mattis
            faucibus et enim nunc felis vulputate adipiscing lectus. Proin morbi
            tincidunt volutpat purus facilisis ut amet tellus. Dignissim amet
            pellentesque consequat lectus mus. Morbi pretium pellentesque
            vulputate donec cras sed etiam. Blandit turpis urna sed duis eget
            turpis eleifend. Molestie eu sed interdum elit iaculis vulputate
            justo in morbi. Nullam non a venenatis velit morbi at lorem.
          </p>
          <p data-aos='fade-up' data-aos-duration='500'>
            Massa a malesuada mus sed. Semper ante diam enim praesent. Eget
            senectus diam vel eget eu proin mauris risus commodo. Urna at non
            bibendum pretium quis pellentesque in. Leo nec dignissim blandit
            nibh. Massa mus pretium nulla sit est enim amet sed quis. Imperdiet
            cursus aliquam aenean morbi commodo metus egestas auctor tortor. Eu
            pulvinar aliquam mollis dolor risus condimentum ac quam sed. Eu
            dolor metus facilisi dictum donec laoreet. Potenti sit lorem nibh
            duis eget aliquam habitasse nibh. Faucibus risus laoreet vel
            pretium. Odio vel phasellus orci bibendum lectus. Cursus faucibus ac
            tortor ipsum. Feugiat cras hendrerit felis at odio adipiscing vel.
            Odio semper vulputate quam vitae. Sed velit porta non amet ornare.
            Duis auctor ipsum leo aliquam nulla tempus purus non pellentesque.
            Egestas turpis commodo ultricies eget volutpat cursus arcu. Quisque
            ac eu tempor magna ut mattis egestas elementum. Mi malesuada
            consectetur augue viverra. At elementum faucibus adipiscing nunc.
            Varius vulputate risus leo euismod nibh ante tellus. Nunc maecenas
            gravida montes nunc. Pellentesque fringilla nunc sed cursus ultrices
            habitasse lorem arcu. Ipsum sagittis ac risus eget. Pulvinar urna
            vel aliquam aliquam. Lacus arcu mi tellus ultrices diam ut.
          </p>
          <p data-aos='fade-up' data-aos-duration='500'>
            Scelerisque nec integer fermentum ipsum ut netus massa sed. Odio et
            at varius adipiscing cras netus placerat. Sodales et facilisis
            tincidunt elementum vulputate et consequat sit. Felis non tincidunt
            interdum porttitor velit. Pretium amet varius adipiscing mi. Id urna
            id vel quis odio tincidunt mauris quisque adipiscing. Eget fermentum
            quis id velit amet in lacus. Ultrices tortor elit aliquam et enim
            eget massa. Vel et in tempus vitae adipiscing suscipit diam
            convallis. Neque pulvinar etiam fringilla feugiat ut. Nunc diam non
            dictum sem amet morbi lectus cras tortor. Dictum ornare malesuada
            ultricies vitae massa a morbi quisque suspendisse. Ornare blandit
            pulvinar dictum morbi dui nibh id et. Ullamcorper duis sollicitudin
            pellentesque donec malesuada vestibulum mi. Fusce lectus massa vitae
            elementum neque sit augue. Vel vitae enim ultricies vestibulum
            condimentum mi. Nunc consequat sed justo adipiscing. Arcu iaculis
            elementum convallis elementum magna aliquam dui mollis. Cras nisi id
            et ut. Volutpat posuere dolor eros faucibus in ac malesuada integer.
            Mi felis eget sed libero amet hendrerit interdum.
          </p>
        </div>
        <div className="blogsinglepage_main_para2" data-aos='fade-up' data-aos-duration='500'>
          <div className="blogsinglepage_main_para2_left">
            <img src={banner3} alt="" loading="lazy"/>
          </div>
          <div className="blogsinglepage_main_para2_right">
            <p>
              Lorem ipsum dolor sit amet consectetur. Bibendum arcu ut quis nisl
              nibh egestas imperdiet vulputate rhoncus. Pellentesque tincidunt
              sed dui nunc. Etiam amet vitae donec purus mauris sit. Nam egestas
              sed nunc non. Nunc vestibulum at aliquam nulla at sed. Arcu turpis
              cras nunc tincidunt enim. In lobortis in ultrices facilisis eu
              eget ac. Fermentum convallis id urna sit ullamcorper bibendum
              lorem viverra sit. Fames quisque consectetur condimentum euismod
              velit potenti. Sed ac netus cursus blandit quis nibh purus erat.
              Aliquet velit facilisi feugiat scelerisque donec justo viverra
              sit. Dictum dignissim pulvinar quis ornare cras feugiat cursus.
              Aenean id morbi congue amet morbi accumsan cras. Ultricies at amet
              faucibus morbi dictumst turpis lobortis. Ac risus quis sed tellus
              ultrices integer nibh. Viverra venenatis maecenas porttitor
              facilisi lacinia quis iaculis nunc sagittis. Interdum aliquet
              curabitur ultrices nunc diam lacus. Eget placerat pellentesque
              odio enim lorem augue nibh. Nam sed ac etiam nibh aliquet. Ac
              adipiscing donec egestas dolor fusce malesuada arcu pretium
              pharetra. Faucibus id urna sagittis purus volutpat vel.
            </p>
           
          </div>
        </div>
        <div className="blogsinglepage_main_para3" data-aos='fade-up' data-aos-duration='500'>
          <h5 style={{lineHeight:"40px"}}>what is the use of ui ?</h5>
          <p data-aos='fade-up' data-aos-duration='2000'> 
            what is the use of ui ? Lorem ipsum dolor sit amet consectetur.
            Ipsum eu ornare bibendum in. Volutpat enim fringilla sagittis
            integer consequat risus nunc in. Malesuada non pellentesque in nibh
            pretium. Neque aliquam ultrices amet sed porta cras nec sagittis.
            Egestas id scelerisque eget eu velit egestas. Sagittis sociis proin
            eu leo nullam a. Amet elementum faucibus suspendisse ac consequat
            massa in eros adipiscing. Ut hendrerit non sem fermentum in pulvinar
            platea lacus nascetur. Phasellus adipiscing suspendisse pretium nisi
            dolor venenatis libero natoque. Ullamcorper etiam pulvinar rhoncus
            nulla tincidunt. Urna in ac integer eu duis nulla lorem elit at.
          </p>
          <p data-aos='fade-up' data-aos-duration='500'>
            Sagittis tempor duis commodo egestas sollicitudin. Sem pellentesque
            a nec egestas accumsan proin ac tristique aliquet. Placerat quis
            libero auctor a. Id massa ipsum phasellus ultricies sit donec
            malesuada eget vel. Orci in morbi blandit mattis amet adipiscing. Mi
            justo mus in fermentum tempus tellus est volutpat. Urna quis
            tincidunt aliquam velit et aliquet imperdiet. Vitae pulvinar
            pulvinar nulla pharetra phasellus. Id consequat sagittis ut egestas
            dictum vitae est. Aliquam dolor bibendum pellentesque cras
            consectetur blandit sit at. Hac ligula eget eget sed ac proin id
            ullamcorper eget. Eget erat facilisi scelerisque ac eu eget
            ullamcorper erat id. Sed erat in at sed eu senectus lorem ac.
            Egestas netus magna maecenas in sit. Urna risus eget pretium
            egestas. Eget bibendum porttitor massa ac eu bibendum.
          </p>
          <p data-aos='fade-up' data-aos-duration='500'>
            Mollis phasellus justo ultricies scelerisque. Tellus dignissim
            dapibus amet a arcu mi. Ultrices bibendum massa lorem sit. Laoreet
            nunc at adipiscing enim iaculis suspendisse ac. Curabitur mattis
            faucibus et enim nunc felis vulputate adipiscing lectus. Proin morbi
            tincidunt volutpat purus facilisis ut amet tellus. Dignissim amet
            pellentesque consequat lectus mus. Morbi pretium pellentesque
            vulputate donec cras sed etiam. Blandit turpis urna sed duis eget
            turpis eleifend. Molestie eu sed interdum elit iaculis vulputate
            justo in morbi. Nullam non a venenatis velit morbi at lorem. Massa a
            malesuada mus sed. Semper ante diam enim praesent. Eget senectus
            diam vel eget eu proin mauris risus commodo. Urna at non bibendum
            pretium quis pellentesque in. Leo nec dignissim blandit nibh. Massa
            mus pretium nulla sit est enim amet sed quis. Imperdiet cursus
            aliquam aenean morbi commodo metus egestas auctor tortor.
          </p>
          <p data-aos='fade-up' data-aos-duration='500'>
            Eu pulvinar aliquam mollis dolor risus condimentum ac quam sed. Eu
            dolor metus facilisi dictum donec laoreet. Potenti sit lorem nibh
            duis eget aliquam habitasse nibh. Faucibus risus laoreet vel
            pretium. Odio vel phasellus orci bibendum lectus. Cursus faucibus ac
            tortor ipsum. Feugiat cras hendrerit felis at odio adipiscing vel.
            Odio semper vulputate quam vitae. Sed velit porta non amet ornare.
            Duis auctor ipsum leo aliquam nulla tempus purus non pellentesque.
            Egestas turpis commodo ultricies eget volutpat cursus arcu. Quisque
            ac eu tempor magna ut mattis egestas elementum. Mi malesuada
            consectetur augue viverra. At elementum faucibus adipiscing nunc.
            Varius vulputate risus leo euismod nibh ante tellus. Nunc maecenas
            gravida montes nunc. Pellentesque fringilla nunc sed cursus ultrices
            habitasse lorem arcu. Ipsum sagittis ac risus eget. Pulvinar urna
            vel aliquam aliquam. Lacus arcu mi tellus ultrices diam ut.
            Scelerisque nec integer fermentum ipsum ut netus massa sed. Odio et
            at varius adipiscing cras netus placerat. Sodales et facilisis
            tincidunt elementum vulputate et consequat sit.
          </p>
          <p data-aos='fade-up' data-aos-duration='500'>
            Felis non tincidunt interdum porttitor velit. Pretium amet varius
            adipiscing mi. Id urna id vel quis odio tincidunt mauris quisque
            adipiscing. Eget fermentum quis id velit amet in lacus. Ultrices
            tortor elit aliquam et enim eget massa. Vel et in tempus vitae
            adipiscing suscipit diam convallis. Neque pulvinar etiam fringilla
            feugiat ut. Nunc diam non dictum sem amet morbi lectus cras tortor.
            Dictum ornare malesuada ultricies vitae massa a morbi quisque
            suspendisse. Ornare blandit pulvinar dictum morbi dui nibh id et.
            Ullamcorper duis sollicitudin pellentesque donec malesuada
            vestibulum mi. Fusce lectus massa vitae elementum neque sit augue.
            Vel vitae enim ultricies vestibulum condimentum mi. Nunc consequat
            sed justo adipiscing. Arcu iaculis elementum convallis elementum
            magna aliquam dui mollis. Cras nisi id et ut. Volutpat posuere dolor
            eros faucibus in ac malesuada integer. Mi felis eget sed libero amet
            hendrerit interdum. Lorem ipsum dolor sit amet consectetur. Ipsum eu
            ornare bibendum in. Volutpat enim fringilla sagittis integer
            consequat risus nunc in. Malesuada non pellentesque in nibh pretium.
            Neque aliquam ultrices amet sed porta cras nec sagittis. Egestas id
            scelerisque eget eu velit egestas. Sagittis sociis proin eu leo
            nullam a. Amet elementum faucibus suspendisse ac consequat massa in
            eros adipiscing. Ut hendrerit non sem fermentum in pulvinar platea
            lacus nascetur.
          </p>
          <p data-aos='fade-up' data-aos-duration='500'>
            Phasellus adipiscing suspendisse pretium nisi dolor venenatis libero
            natoque. Ullamcorper etiam pulvinar rhoncus nulla tincidunt. Urna in
            ac integer eu duis nulla lorem elit at. Sagittis tempor duis commodo
            egestas sollicitudin. Sem pellentesque a nec egestas accumsan proin
            ac tristique aliquet. Placerat quis libero auctor a. Id massa ipsum
            phasellus ultricies sit donec malesuada eget vel. Orci in morbi
            blandit mattis amet adipiscing. Mi justo mus in fermentum tempus
            tellus est volutpat. Urna quis tincidunt aliquam velit et aliquet
            imperdiet. Vitae pulvinar pulvinar nulla pharetra phasellus. Id
            consequat sagittis ut egestas dictum vitae est. Aliquam dolor
            bibendum pellentesque cras consectetur blandit sit at. Hac ligula
            eget eget sed ac proin id ullamcorper eget. Eget erat facilisi
            scelerisque ac eu eget ullamcorper erat id. Sed erat in at sed eu
            senectus lorem ac. Egestas netus magna maecenas in sit. Urna risus
            eget pretium egestas. Eget bibendum porttitor massa ac eu bibendum.
            Mollis phasellus justo ultricies scelerisque. Tellus dignissim
            dapibus amet a arcu mi. Ultrices bibendum massa lorem sit. Laoreet
            nunc at adipiscing enim iaculis suspendisse ac. Curabitur mattis
            faucibus et enim nunc felis vulputate adipiscing lectus.
          </p>
          <p data-aos='fade-up' data-aos-duration='500'>
            Proin morbi tincidunt volutpat purus facilisis ut amet tellus.
            Dignissim amet pellentesque consequat lectus mus. Morbi pretium
            pellentesque vulputate donec cras sed etiam. Blandit turpis urna sed
            duis eget turpis eleifend. Molestie eu sed interdum elit iaculis
            vulputate justo in morbi. Nullam non a venenatis velit morbi at
            lorem. Massa a malesuada mus sed. Semper ante diam enim praesent.
            Eget senectus diam vel eget eu proin mauris risus commodo. Urna at
            non bibendum pretium quis pellentesque in. Leo nec dignissim blandit
            nibh. Massa mus pretium nulla sit est enim amet sed quis. Imperdiet
            cursus aliquam aenean morbi commodo metus egestas auctor tortor. Eu
            pulvinar aliquam mollis dolor risus condimentum ac quam sed. Eu
            dolor metus facilisi dictum donec laoreet. Potenti sit lorem nibh
            duis eget aliquam habitasse nibh. Faucibus risus laoreet vel
            pretium. Odio vel phasellus orci bibendum lectus. Cursus faucibus ac
            tortor ipsum. Feugiat cras hendrerit felis at odio adipiscing vel.
            Odio semper vulputate quam vitae.
          </p>
          <p data-aos='fade-up' data-aos-duration='500'>
            Sed velit porta non amet ornare. Duis auctor ipsum leo aliquam nulla
            tempus purus non pellentesque. Egestas turpis commodo ultricies eget
            volutpat cursus arcu. Quisque ac eu tempor magna ut mattis egestas
            elementum. Mi malesuada consectetur augue viverra. At elementum
            faucibus adipiscing nunc. Varius vulputate risus leo euismod nibh
            ante tellus. Nunc maecenas gravida montes nunc. Pellentesque
            fringilla nunc sed cursus ultrices habitasse lorem arcu. Ipsum
            sagittis ac risus eget. Pulvinar urna vel aliquam aliquam. Lacus
            arcu mi tellus ultrices diam ut. Scelerisque nec integer fermentum
            ipsum ut netus massa sed. Odio et at varius adipiscing cras netus
            placerat. Sodales et facilisis tincidunt elementum vulputate et
            consequat sit. Felis non tincidunt interdum porttitor velit. Pretium
            amet varius adipiscing mi. Id urna id vel quis odio tincidunt mauris
            quisque adipiscing. Eget fermentum quis id velit amet in lacus.
            Ultrices tortor elit aliquam et enim eget massa. Vel et in tempus
            vitae adipiscing suscipit diam convallis. Neque pulvinar etiam
            fringilla feugiat ut. Nunc diam non dictum sem amet morbi lectus
            cras tortor. Dictum ornare malesuada ultricies vitae massa a morbi
            quisque suspendisse. Ornare blandit pulvinar dictum morbi dui nibh
            id et. Ullamcorper duis sollicitudin pellentesque donec malesuada
            vestibulum mi. Fusce lectus massa vitae elementum neque sit augue.
            Vel vitae enim ultricies vestibulum condimentum mi. Nunc consequat
            sed justo adipiscing. Arcu iaculis elementum convallis elementum
            magna aliquam dui mollis. Cras nisi id et ut. Volutpat posuere dolor
            eros faucibus in ac malesuada integer. Mi felis eget sed libero amet
            hendrserit interdum.
          </p>
        </div>
      </div>
      <div className="blogpagination">
        <div className="blogpagination_prev">
          <Undo className="blog_arrow"/>
        </div>
        <div className="blogpagination_next">
          <Redo className="blog_arrow"/>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default BlogSinglePage;
