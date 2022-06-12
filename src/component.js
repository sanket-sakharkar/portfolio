import React from 'react'
//loader
const Loader = () => {
  return (
    <>
      <div className="loader">
        <div class="dots"><span class="dot f"></span><span class="dot s"></span><span class="dot l"></span></div>
      </div>
    </>
  )
}



// portfolio
const Portfolio = ({ portfolioData }) => {
  return (
    <>
      {
        portfolioData.map((curElem) => {
          return (
            <>
              <div class="grid-item">
                <div class="gallery-image">
                  <img src={curElem.image} alt="" />
                  <div class="img-overlay">
                    <div class="plus"></div>
                    <div class="img-description">
                      <h3>{curElem.description}</h3>
                      <h5>View Demo</h5>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })
      }
    </>
  )
}
// header
const Header = ({ headerData }) => {
  return (
    <>
      {
        headerData.map((curMenu) => {
          return (
            <>
              <li>
                <a href={'#' + curMenu.menu}>{curMenu.menu}</a>
              </li>
            </>
          )
        })
      }
    </>
  )
}

// services
const Services = ({ serviceData }) => {

  // var de=document.getElementById('checkbox');
  // console.log("sanket"+de)
  // console.log(myFunction());
  return (
    <>
      {
        serviceData.map((curService) => {

          return (
            <>
              <div class="card-wrap">

                {/*<button onClick={()=>myInput()}>click here</button> */}
                <div class="card" data-card={curService.title}>
                  <div class="card-content z-index">

                    {/* {(()=>{
  myInput();
  // var cd= document.getElementById('checkbox')
  // if(0){
  //   alert('hello');
  // }
  // else{
  //   alert('hell');
  // }

})()

} */}

                    <img src={'https://img.icons8.com/external-justicon-lineal-justicon/6004/' + curService.color + curService.icon} className="icon" alt="" />
                    <h3 class="title-sm">{curService.title}</h3>
                    <p class="text">
                      {curService.description}
                    </p>
                    <a href="#" class="btn small">Read more</a>
                  </div>
                </div>
              </div>

            </>
          )
        })
      }

    </>
  )
}

const PortfolioNav = ({ portfolioList }) => {
  return (
    <>
      {
        portfolioList.map((curElem) => {
          return (
            <>
              <li>
                <a href='#'>{curElem}</a>
              </li>
            </>
          )
        })
      }

    </>
  )
}

const Blog = ({ blogData }) => {
  return (
    <>
      {
        blogData.map((curBlog) => {
          return (
            <>
              <div class="blog-wrap">
                <div class="blog-card">
                  <div class="blog-image">
                    <img src={curBlog.image} alt="" />
                  </div>

                  <div class="blog-content">
                    <div class="blog-info">
                      <h5 class="blog-date">{curBlog.date}</h5>
                      <h5 class="blog-user"><i class="fas fa-user"></i>{curBlog.author}</h5>
                    </div>
                    <h3 class="title-sm">{curBlog.title}</h3>
                    <p class="blog-text">
                      {curBlog.description}
                    </p>
                    <a href="#" class="btn small">Read more</a>
                  </div>
                </div>
              </div>
            </>
          )
        })
      }
    </>
  )
}


const Skills = ({ skillData }) => {
  return (
    <>
      {
        skillData.map((curSkill) => {
          const { title, progress } = curSkill
          return (
            <>

              <div class="skill html">

                <div class="skillbox">
                  <p>{title}</p>
                  <p>{`${progress}%`}</p>
                  <div class="skills_outer">
                    <div class="skill_level" style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
              </div>

            </>
          )
        })
      }
    </>
  )
}



const Experience = () => {
  return (
    <>
      This is Experience
    </>
  )
}




export { Portfolio, Header, Services, PortfolioNav, Blog, Skills, Experience, Loader }
