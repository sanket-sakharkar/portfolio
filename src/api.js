const headerApi = [
    {
        id:1,
        menu:'home',
    },
    {
        id:2,
        menu:'services',
        
    },
    {
        id:3,
        menu:'about',
    },
    {
        id:4,
        menu:'portfolio',
    },
    {
        id:5,
        menu:'blog',
    },
    {
        id:6,
        menu:'contact',
    },
   

]

const serviceApi = [
    { 
        icon:'/external-web-design-responsive-web-design-justicon-lineal-justicon-1.png',
        title:'Web Design',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est suscipit itaque?',
        color:'d3491f',
       
    },
    { 
     icon:'/external-development-responsive-web-design-justicon-lineal-justicon.png',
     title:'Web Development',
     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est suscipit itaque?',
     color:'d3491f',
 },
 { 
     icon:'/external-app-development-responsive-web-design-justicon-lineal-justicon.png',
     title:'App Development',
     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est suscipit itaque?',
     color:'d3491f',
 },
 
 ]

 
const PortfolioApi = [
    {
        id:1,
        image : 'img/portfolio/webdev.png',
        description : 'Web Design',
        category:'webdev',

    },
    {
        id:2,
        image : 'img/portfolio/UIUX.png',
        description : 'UI / UX Design',
        category:'UI/UX',

    },
    {
        id:3,
        image : 'img/portfolio/logodesign.png',
        description : 'Logo Design',
        category:'logo design',

    },
    {
        id:4,
        image : 'img/portfolio/mobileapp.png',
        description : 'App Development',
        category:'appdev',

    },
]

 const skillsApi = [
    {
        id:'1',
        title:'C/C++',
        progress:100,
    },
    {
        id:'2',
        title:'HTML',
        progress:100,
    },
    {
        id:'3',
        title:'CSS',
        progress:80,
    },
    {
        id:'4',
        title:'REACT JS',
        progress:60,
    },
    {
        id:'5',
        title:'Node Js',
        progress:50,
    },
    {
        id:'6',
        title:'Next Js',
        progress:70,
    },
   
]




 const blogApi = [
    {
        id:1,
        image:'img/blog1.png',
        date:'March, 19 2020' ,
        author:'admin',
        title:'This is a short title',  
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae esse, laboriosam veritatis fugit autem?', 
        

    },
    {
        id:2,
        image:'img/blog2.png',
        date:'March, 19 2020' ,
        author:'admin',
        title:'This is a short title',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae esse, laboriosam veritatis fugit autem?',    

    },
    {
        id:3,
        image:'img/blog3.png',
        date:'March, 19 2020' ,
        author:'admin',
        title:'This is a short title',   
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae esse, laboriosam veritatis fugit autem?', 

    },
]



// const about = [
//     {
//         id:1,
//         category:'Skills',
//     },
//     {
//         id:1,
//         category:'Education',
//     },
//     {
//         id:1,
//         category:'Experience',
//         code:''
//     },
// ]






export {headerApi,skillsApi, blogApi,serviceApi, PortfolioApi}