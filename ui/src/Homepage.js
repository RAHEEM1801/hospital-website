import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import "./Project.css"
import Getpaje from './Getpaje'
import Postpage from "./Postpage"
import Displaypage from './Displaypage'

import Aboutpage from './Aboutpage'
import Officepaje from './Officepaje'
function Homepage() {
  return (
    <div>   
<Tabs>

    <div className='tablist'>
        
    <TabList>
       {/* <Tab className={"list"}><img src='/images/ho2.png' id='hologo' width={"60px"} height={"60px"}></img> </Tab> */}
      <Tab className={"list"}> <div class="dropdown"> <button  class="btn btn-primary dropdown-toggle" type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
    specialists
  </button>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a class="dropdown-item" href="#">Advanced healthcare</a></li>
    <li><a class="dropdown-item" href="#">Anaesthesia</a></li>
    <li><a class="dropdown-item" href="#">Audiology & speech  therapy</a></li>
    <li><a class="dropdown-item" href="#">Cardiology</a></li>
    <li><a class="dropdown-item" href="#">Critical care</a></li>
    <li><a class="dropdown-item" href="#">Dentist</a></li>
    <li><a class="dropdown-item" href="#">ENT</a></li>
    <li><a class="dropdown-item" href="#">Gastrology</a></li>
    <li><a class="dropdown-item" href="#">Nephrologists</a></li>
    <li><a class="dropdown-item" href="#">Oncology</a></li>
    <li><a class="dropdown-item" href="#">Pediatric</a></li>
    <li><a class="dropdown-item" href="#">Panthology</a></li>
    <li><a class="dropdown-item" href="#">Radiology</a></li>
    <li><a class="dropdown-item" href="#">Urology</a></li>
    <li><a class="dropdown-item" href="#">Brain</a></li>
    <li><a class="dropdown-item" href="#">Bones</a></li>

  </ul>
  </div> </Tab>
        <Tab className={"list"}><b><img src='images/op3.png' id='op' width={"30px"} height={"30px"}></img>  OP-FORMS</b></Tab>
        <Tab className={"list"}><b><img src='images/re7.jpg'id='re' width={"30px"} height={"30px"}></img>  REPORTS</b></Tab>
        <Tab className={"list"}><b><img src='images/info2.png' id='in'width={"30px"} height={"30px"}></img>  ABOUT-US</b></Tab>
        <Tab className={"list"}><b><img src='images/of4.jpg' id='of'width={"30px"} height={"30px"}></img>  OFFICE-USE</b></Tab>
        
        {/* <Tab className={"list"}><img src='/images/logo1.png' width={"100px"} ></img> </Tab> */}
    </TabList>
    </div>
<TabPanel>
<Displaypage/>
</TabPanel>



<TabPanel>
<Postpage/>
</TabPanel>

    <TabPanel>
    <Getpaje/>
    </TabPanel>

    <TabPanel>
      <Aboutpage/>
    </TabPanel>
<TabPanel>
  <Officepaje/>
</TabPanel>
   
</Tabs>


         </div>
  )
}

export default Homepage