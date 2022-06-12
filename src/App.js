import React, {useEffect,useState} from 'react'
import Main from './main'
import './style.css'
import image from './image2.png'
import { headerApi, blogApi, skillsApi, serviceApi, PortfolioApi } from './api'
import { Loader } from './component'
const uniquePortfolio = [... new Set(PortfolioApi.map((curElem) => {
  return curElem.category;
})
)]
const App = () => {
 
  const [loading,setLoading]=useState(false)

  React.useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 40)
    
  }, [])


  const [portfolioData, setportData] = React.useState(PortfolioApi)
  const [portfolioList] = React.useState(uniquePortfolio)
  const [headerData] = React.useState(headerApi)
  const [blogData] = React.useState(blogApi)
  const [serviceData, setserviceData] = React.useState(serviceApi)
  const [skillData] = React.useState(skillsApi)
  const [isActive, setActive] = useState(false)

  const filterPort = (category) => {
 
    const updateport = PortfolioApi.filter((curElem) => {
      
      return curElem.category === category;
    })
    setportData(updateport);
   setActive(!isActive);
    if (category === 'all') {
      setportData(PortfolioApi);
    }
  }


  const myFunction = () => {

    var r = document.querySelector(':root');
    var h = document.querySelector('.img-element');
    // var i = document.getElementById('icon1');
    // console.log(i);

    // var img = "http://localhost:3000/img/image2.png"
    //function to set properties
    function setProperty(el, attrs) {
      for (var key in attrs) {
        el.style.setProperty(key, attrs[key]);
      }
    }

    if (document.getElementById('checkbox').checked) {
      setProperty(r, { "--dark-one": "#fff", "--dark-two": "#fff", "--main-color": "#ff0", '--light-one': '#000', '--light-two': '#222', '--light-three': '#222' });
      h.style.backgroundImage = "url('http://localhost:3000/img/image2.png')";

      let newArr = [...serviceData];
      // newArr[0]["color"] = 'ffff00';
      // newArr[1]["color"] = 'ffff00';
      // newArr[2]["color"] = 'ffff00';
      for (let index = 0; index < 3; index++) {
        newArr[index]["color"] = 'ffff00';

      }

      setserviceData(newArr);

    }



    else if (!document.getElementById('checkbox').checked) {
      setProperty(r, { "--dark-one": "#333", "--dark-two": "#7a7a7a", "--main-color": " #d3491f", '--light-one': '#fff', '--light-two': '#f9fafb', '--light-three': '#f6f7fb' });
      h.style.backgroundImage = "url('http://localhost:3000/img/image.png')";
      let newArr = [...serviceData];
      // newArr[0]["color"] = 'ffff00';
      // newArr[1]["color"] = 'ffff00';
      // newArr[2]["color"] = 'ffff00';
      for (let index = 0; index < 3; index++) {
        newArr[index]["color"] = 'd3491f';

      }

      setserviceData(newArr);

    }
    // --dark-one: #333;
    // --dark-two: #7a7a7a;
    // --main-color: #d3491f;
    // --light-one: #fff;
    // --light-two: #f9fafb;
    // --light-three: #f6f7fb;
    // {(() => {

    //   var variable =document.getElementById('checkbox')

    //   if(document.getElementById('checkbox').checked){alert(variable)}

    //   })()}


  }



  const hamburger = () => {

    const hamburger_menu = document.querySelector(".hamburger-menu");
    const navbar = document.querySelector("header nav");

    function closeMenu() {
      navbar.classList.remove("open");
      document.body.classList.remove("stop-scrolling");
    }

    hamburger_menu.addEventListener("click", () => {
      if (!navbar.classList.contains("open")) {
        navbar.classList.add("open");
        document.body.classList.add("stop-scrolling");
      } else {
        closeMenu();
      }
    });

  }
  return (
    <>
{
    loading ?<Loader /> :
      <Main portfolioData={portfolioData} portfolioList={portfolioList} headerData={headerData} blogData={blogData} serviceData={serviceData} skillData={skillData} filterPort={filterPort} myFunction={myFunction} hamburger={hamburger} isActive={isActive}/>
}
    </>
  )
}

export default App


