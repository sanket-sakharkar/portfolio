import React,{useRef,useState} from 'react'
import { Portfolio, Header, Services, Blog, PortfolioNav, Skills, Experience} from './component'
import emailjs from '@emailjs/browser';

// const checkbox = document.getElementById('checkbox');

// checkbox.addEventListener('change', ()=>{
//   document.body.classList.toggle('dark');
// })

const Main = ({ portfolioData, portfolioList, headerData, blogData, serviceData, skillData, filterPort, myFunction, hamburger,isActive }) => {
  // const myInput= () =>{
  //   //  var ab =document.getElementById('checkbox');
  //   // //  console.log('this is it' + ab)
  //   // //  return ab;
  //   // if(ab.checked){
  //   //   return 1;
  //   // }
  //   // else {
  //   //   return 0;
  //   // }
  //  }
  // const hbClicked = ()=>{
  //   const hamburger_menu = document.querySelector(".hamburger-menu");
  //   const navbar = document.querySelector("header nav");
  //   function closeMenu() {
  //     navbar.classList.remove("open");
  //     document.body.classList.remove("stop-scrolling");
  //   }


  //     if (!navbar.classList.contains("open")) {
  //       navbar.classList.add("open");
  //       document.body.classList.add("stop-scrolling");
  //     } else {
  //       closeMenu();
  //     }


  // }
  const [mailResult,showMailResult] =useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nk48bcm', 'template_7wpzfzr', form.current, 'SFnFO63v9gnq4c09A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
      showMailResult(true)
    }

  return (
    <>
      <div className="body">
        <main>


          <header id="header">
            <nav>
              <div className="container">
                <div className="logo">
                  <img src="./img/logo.png" alt="" />
                  
                </div>

                <div className="links">
                  <ul>
                    {/* header component */}
                    <Header headerData={headerData} />
                    <li>
                      <a href="#hireme" className="active">Hire me</a>
                    </li>
                  </ul>
                </div>

                <div className="hamburger-menu" onClick={() => hamburger()}>
                  <div className="bar"></div>
                </div>
              </div>
            </nav>
{/* theme switcher */}

            <div class="theme-switch" onClick={() => myFunction()}>
              <input type="checkbox" class="checkbox" id="checkbox" />
              <label for="checkbox" class="label">
                <i class="fas fa-moon"></i>
                <i class='fas fa-sun'></i>
                <div class='ball' ></div>
              </label>

            </div>


            <div className="header-content">
              <div className="container grid-2">
                <div className="column-1">
                  <h1 className="header-title">Sanket Sakharkar</h1>
                  <p className="text">
                    Hello, I'm Sanket Sakharkar, web design and developer. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Totam magni sit
                    hic!
                  </p>
                  <a href="#" className="btn">Contact Me  <i class="uil uil-navigator"></i> </a>

                </div>

                <div className="column-2 image">
                  <img src="./img/person.png" className="img-element z-index " alt="" />
                </div>
              </div>
            </div>
          </header>

          <section className="services section" id="services">
            <div className="container">
              <div className="section-header">
                <h3 className="title" data-title="What I Do">Services</h3>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
                  vero?
                </p>
              </div>

              <div className="cards">

                <Services serviceData={serviceData} />
              </div>
            </div>
          </section>

          <section className="portfolio section" id="portfolio">
            <div className="background-bg">
            </div>

            <div className="container">
              <div className="section-header">
                <h3 className="title" data-title="My works">Portfolio</h3>
              </div>
             
              <div className="section-body">
                <div id="filter">
                  <button className="filter-btn active" data-filter="*" onClick={() => filterPort("all")}>All</button>
                  <button className="filter-btn"  onClick={() => filterPort("UI/UX")}>UI/UX</button>
                  <button className="filter-btn"  onClick={() => filterPort("webdev")}>Web Dev</button>
                  <button className="filter-btn"  onClick={() => filterPort("appdev")}>
                    Mobile App
                  </button>
                  <button className="filter-btn" onClick={() => filterPort("logo design")}>
                    Logo Design
                  </button>
                </div>
               
                {/* Portfolio Gallery Start */}
                <Portfolio portfolioData={portfolioData} />
                {/* Portfolio Gallery End */}

                <div className="more-folio">
                  <a href="#" className="btn">More Folio</a>
                </div>
              </div>
            </div>
          </section>

          <section className="about section" id="about">
            <div className="container">
              <div className="section-header">
                <h3 className="title" data-title="Who Am I">About me</h3>
              </div>
              {/* start */}
              <div className="filter">

                <button className="filter-btn active">Skills</button>
                <button className="filter-btn active">Experience</button>
                <button className="filter-btn active">Education</button>
              </div>
              {/* end 
            <div className="section-body grid-2">
              Experience.map((curSection))
              </div>
              <div className="section-body grid-2">
              Education
              </div> */}

              <div className="section-body grid-2">
                <div className="column-1">
                  <h3 className="title-sm">Hello, I'm</h3>
                  <p className="text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Praesentium distinctio doloribus quam? Ut, laudantium a dolore,
                    minima repudiandae iure iste molestiae exercitationem earum
                    neque tempora?
                  </p> {/*{
                    aboutData.map((curAbout)=>{
                       const {category}=curAbout
                        return(
                            <>
                         <div className="skills">
                  <Skills skillData={skillData} />
                 if(category==='Experience'){
                      <Experience />
                  }


                

                </div>
                            </>
                        )
                    })
                
            } */}
                  <div className="skills">
                    <Skills skillData={skillData} />
                  </div>


                  {/* <div className="Education">
                  <Skills skillData={skillData} />
                </div>
                <div className="Experience">
                  <Skills skillData={skillData} />
                </div> */}
                  <a href="#" className="btn">Read more</a>
                </div>

                <div className="column-2 image">
                  <img src="./img/shapes/points4.png" className="points" alt="" />
                  <img src="./img/person.png" className="z-index" alt="" style={{ borderRadius: "200px" }} />
                </div>
              </div>
            </div>
          </section>


          <section className="contact" id="contact">
            <div className="container">
              <div className="contact-box">
                <div className="contact-info">
                  <h3 className="title">Get in touch</h3>
                  <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                    rerum odio incidunt doslorum officia dolorem eaque aprim?
                  </p>
                  <div className="information-wrap">
                    <div className="information">
                      <div className="contact-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <p className="info-text">Lorem ipsum dolor sit amet</p>
                    </div>

                    <div className="information">
                      <div className="contact-icon">
                        <i className="fas fa-paper-plane"></i>
                      </div>
                      <p className="info-text">lorem@ipsum.com</p>
                    </div>

                    <div className="information">
                      <div className="contact-icon">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <p className="info-text">123-456-789</p>
                    </div>
                  </div>
                </div>
                
             
                
                <form ref={form} onSubmit={sendEmail}>
                <div className="contact-form">
                  <h3 className="title">Contact me</h3>
                  <div className="row">
                    <input
                      type="text"
                      className="contact-input"
                      placeholder="First Name"
                      name="fname"
                    />
                    <input
                      type="text"
                      className="contact-input"
                      placeholder="Last Name"
                      name="lname"
                    />
                  </div>

                  <div className="row">
                    <input type="text" className="contact-input" placeholder="Phone"  name="mob"/>
                    <input type="email" className="contact-input" placeholder="Email"  name="email" />
                  </div>

                  <div className="row">
                    <textarea
                      name="message"
                      className="contact-input textarea"
                      placeholder="Message"
                      
                    ></textarea>
                  </div>
                  <button type="submit" className="btn">Send</button>
                </div>
           </form>
           {mailResult ? alert('message sent sucessfully') : null}   </div>
              
            </div>
          </section>

          <section className="hireme" id="hireme">
            <div className="container">
              <h3 className="title">Let's talk about a project</h3>
              <p className="text">
                Hey!
              </p>
              <a href="#" className="btn">Hire me</a>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container">
            <div className="grid-4">
              <div className="grid-4-col footer-about">
                <h3 className="title-sm">About</h3>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                  officiis quo officia quia?
                </p>
              </div>

              <div className="grid-4-col footer-links">
                <h3 className="title-sm">Links</h3>
                <ul>
                  {
                    headerData.map((curMenu) => {

                      if (curMenu.menu === 'home') {
                        return ''
                      }

                      return (
                        <>
                          <li>
                            <a href={'#' + curMenu.menu}>{curMenu.menu}</a>
                          </li>
                        </>
                      )
                    })
                  }
                </ul>
              </div>

              <div className="grid-4-col footer-links">
                <h3 className="title-sm">Services</h3>
                <ul>
                  <PortfolioNav portfolioList={portfolioList} />
                </ul>
              </div>

              <div className="grid-4-col footer-newstletter">
                <h3 className="title-sm">Subscribe</h3>
                <p className="text">
                  Lorem ipsum dolor, sit amet ipsum dolor sit amet.
                </p>
                <div className="footer-input-wrap">
                  <input type="email" className="footer-input" placeholder="Email" />
                  <a href="#" className="input-arrow">
                    <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="bottom-footer">
              <div className="copyright">
                <p className="text">
                  Copyright&copy;2022 All rights reserved | Made by
                  <span> Sanket Sakharkar</span>           
                </p>
              </div>

              <div className="followme-wrap">
                <div className="followme">
                  <h3>Follow me</h3>
                  <span className="footer-line"></span>
                  <div className="social-media">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instgram.com/sanket_sakharkar">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>

                <div className="back-btn-wrap">
                  <a href="#" className="back-btn">
                    <i className="fas fa-chevron-up"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>

  )
}
export default Main
