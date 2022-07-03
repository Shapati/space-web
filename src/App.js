
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom';
import './App.css';


import Crew from './Components/crew/Crew';
import Person1 from './Components/crew/people/Person1';
import Person2 from './Components/crew/people/Person2';
import Person3 from './Components/crew/people/Person3';
import Person4 from './Components/crew/people/Person4';
import Destination from './Components/destination/Destination';
import Europa from './Components/destination/planets/Europa';
import Mars from './Components/destination/planets/Mars';
import Moon from './Components/destination/planets/Moon';
import Titan from './Components/destination/planets/Titan';
import Home from './Components/home/Home'
import Navbar from './Components/navbar/Navbar'
import Technology from './Components/technology/Technology';
import Tech1 from './Components/technology/techstuffs/Tech1';
import Tech2 from './Components/technology/techstuffs/Tech2';
import Tech3 from './Components/technology/techstuffs/Tech3';


function App() {

  
  
  

  return (
    <div className="App"  >
      
      {/* <BrowserRouter>
           <Navbar NavLink = {NavLink}  />
          <Crew />
          

        <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/destination'>
              <Destination />
              <Route exact path= '/destination/moon'>
              <Moon  />
            </Route>
            <Route exact path= '/destination/mars' >
              <Mars />
            </Route>
            <Route exact path= '/destination/titan'>
              <Titan  />
            </Route>
            <Route exact path= '/destination/europa'>
              <Europa   />
            </Route>
            </Route>
            <Route exact path='/crew'>
              <Crew />
            </Route>
            <Route exact path='/technology'>
              <Technology />
            </Route>

           
        </Switch>
      </BrowserRouter> */}
 
      
      <BrowserRouter>
        <Navbar NavLink = {NavLink}  />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='destination' element={<Destination/>}  >
              <Route index element={<Moon />} />
              <Route path='moon' element={<Moon />}/>
              <Route path='mars' element={<Mars />}/>
              <Route path='titan' element={<Titan />}/>
              <Route path='europa' element={<Europa />}/>
            </Route>
            <Route path='crew' element={<Crew/>} >
            <Route index element={<Person1 />} />
              <Route path='douglas' element={<Person1 />} />
              <Route path='mark' element={<Person2 />} />
              <Route path='victor' element={<Person3 />} />
              <Route path='ansari' element={<Person4 />} />

            </Route>
            <Route path='technology' element={<Technology/>}>
            <Route index element={<Tech1 />} />
              <Route path='launch' element={<Tech1 />} />
              <Route path='spaceport' element={<Tech2 />} />
              <Route path='spacecapsule' element={<Tech3 />} />
            </Route>
          </Routes>
      </BrowserRouter>


    
      
      
    </div>
  );
}

export default App;
