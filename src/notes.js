//router for every app we create
//so we can have multiple pages
//start with installing yarn add react-router-dom@6
// go on reactrouter.com saved as a pin to change things on index.js and app.js
//follow steps
//create a home.js and about.js and paste from website
// in home and about erase k in link and connect it
//in app.js import import Home from './Home';
// and import About from './About';
//create a product.js folder and fill in
//in app.js add <Route path ="product/:id" element= {<Product />} />
//add in app.js  <Link to = "product/1">Product 1</Link>
//to products.js add import {useParams} from "react-router-dom";
//to products.js const params = useParams()
//to product.js add return  <h1>Product: {params.id}</h1>
//in app.js import product from './product';
//in app.js we called id so in products we returned id
//inspect in localhost f12 and see problem
//add link 2,3 in app.js to create diff pages
//download ESLint
//add a catch all route in app.js <Route path = "*" element={<CatchAll/>}/>
//make sure it imports on top lines of app.js
//create a CatchAll.js file and fill in
// the catch all lets users get an error msg when they on wrong path
        
//if it starts w the word use its a hook. "use params is a hook"

//yarn start to see router