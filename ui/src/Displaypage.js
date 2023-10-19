import React, { useState } from 'react'
import Appoinment from './Appoinment'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

function Displaypage() {
var[nohosp,setNohosp]=useState(0)
var[nolabs,setNolabs]=useState(0)
var[notest,setNotest]=useState(0)
var[norepots,setNorepots]=useState(0)
var[nomedicine,setNomedicine]=useState(0)

setTimeout(()=>{
  setNohosp(nohosp+1)
  if(nohosp==50){
    setNohosp(50)
    setNolabs(nolabs+1)
  }

if(nolabs==60){
  setNolabs(60)
  setNorepots(norepots+1)
}
if(norepots==70){
  setNorepots(70)
  setNotest(notest+1)
}

if(notest==80){
  setNotest(80)
  setNomedicine(nomedicine+1)
}
if(nomedicine==90){
  setNomedicine(90)
}

},100)
  return (
    <div>

<div className='courosel1'>
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="images/scba4.jpg" width={"600px"} height={"300px"} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/piha5.jpg" width={"600px"} height={"300px"} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/scba5.jpg" width={"600px"} height={"300px"} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

  
<div className='docgrid'>
  <div className='docgap'>
<p id='welcome'><h1>WELCOME!</h1>
 We are Always <strong>CARE</strong> about your <strong>HEALTH</strong>,we are here to help you</p>
 <p>“Faith is being sure of what we hope for, and certain of what we do not see.” <br></br>“The hard days are what make you stronger.” “Hardships often prepare ordinary people for an extraordinary destiny.”
 <br></br> “Keep your face always toward the sunshine – and shadows will fall behind you.”
 <br></br>“The greatest wealth is health.” <br></br>
“Take care of your body, it's the only place you have to live” <br></br>
“Health is a state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity.”</p>
 </div>

 <div className='docgap'>
 <div className='autocount'><h3>OUR-NETWORK</h3>
 <img className='cimgc'  src='/images/chlo2.jpg' width={"100px"} height={"100px"}></img><strong>HOSPITALS : {nohosp}+</strong>
   <img className='cimgc' src='/images/cllo2.jpg' width={"100px"} height={"100px"}></img><strong>LABS : {nolabs}+</strong>
<img className='cimgc' src='/images/cdslo.png' width={"100px"} height={"100px"}></img><strong>SURGERIES : {notest}+</strong>
   <img className='cimgc' src='/images/cdlo2.png' width={"100px"} height={"100px"}></img><strong>TESTS : {norepots}+</strong>

   <img className='cimgc' src='/images/cplo5.jpg' width={"100px"} height={"100px"}></img><strong>MEDICINE : {nomedicine}+</strong>
   </div>
   </div>
    {/* <img  src='/images/doctors3.png' width={"600px"} height={"400px"} ></img> */}
   



   
    </div><br></br>



{/* <div className='onse'>
<div  className='ondi'><img src='/images/bookapo.png' width={"100px"} height={"100px"}></img><h4>BOOK APPOINTMENT</h4></div>
  <div className='ondi'><img src='/images/cononline3.png'  width={"100px"} height={"100px"}></img><h4>CONSULT ONLINE</h4></div>
  <div className='ondi'><img src='/images/medic4.jpg'  width={"100px"} height={"100px"}></img><h4>BUY <br></br>MEDICINE</h4></div>
 <div className='ondi'><img src='/images/healthc5.png'  width={"100px"} height={"100px"}></img><h4>BOOK HEALTH CHEKUP</h4></div>
  
</div> */}
{/* courosel */}
{/* <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/sc4.png" class="d-block w-100" height={"300px"}  alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/sc2.png" class="d-block w-100" height={"300px"} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/sc3.png" class="d-block w-100" height={"300px"} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/sc1.png" class="d-block w-100" height={"300px"} alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}

<Tabs>
  <TabPanel>
    <Appoinment/>
  </TabPanel>
</Tabs>

{/* <h5 className='ser'>Services for you....</h5>
<div className='gride1'> 

  <img className='gride' src='/images/ask3.png' width={"100px"} height={"130px"}></img>
  <div className='gride'><h5 >Feeling Unwell?</h5>
<p>Take an accessment in less than 5min and </p><p>get suggetions on what to do next</p> </div>
<h6 className='gride'>Enter symptoms<img  src='/images/sym1.png' width={"100px"} height={"130px"}></img></h6>
<h6 className='gride'>Case study<img  src='/images/case.png'  width={"100px"} height={"130px"}></img></h6>
<h6 className='gride'>Book consult<img  src='/images/bookapo2.jpg'  width={"100px"} height={"130px"}></img></h6>
<h5 className='gride'>Get started </h5></div> */}
{/* <Tabs>  <TabList>
    <Tab>Get started</Tab>
  </TabList>
  <TabPanel>
    <Appoinment></Appoinment>
  </TabPanel>
  </Tabs> */}



{/* <h4>CENTER OF EXELLENCE </h4> */}

{/* <div className='newser'>
  
<p className="div1"><img className='newser' src='/images/nhlo3.png' width={"100px"} height={"100px"} alt="..."></img>cardiology</p>
<p className="div1"><img className='newser' src='/images/nlelo.png' width={"100px"} height={"100px"} alt="..."></img>bones</p>
<p className="div1"><img className='newser' src='/images/nbrlo.png' width={"100px"} height={"100px"} alt="..."></img>brain</p>
<p className="div1"> <img className='newser' src='/images/nklo3.jpg' width={"100px"} height={"100px"} alt="..."></img>kidney</p>
<p className="div1"> <img className='newser' src='/images/nstlo1.png' width={"100px"} height={"100px"}  alt="..."></img>stomach</p>
<p className="div1"> <img className='newser' src="/images/nlilo.png" width={"100px"} height={"100px"} alt="..."></img>liver</p>
<p className="div1"> <img className='newser' src='/images/nblo.png' width={"100px"} height={"100px"} alt="..."></img>baby</p>
<p className="div1"> <img className='newser' src='/images/ntelo.png' width={"100px"} height={"100px"} alt="..."></img>teeth</p>
<p className="div1"> <img className='newser' src='/images/nurlo2.png' width={"100px"} height={"100px"} alt="..."></img>urology</p>
<p className="div1"><img className='newser' src='/images/nrolo.png' width={"100px"} height={"100px"} alt="..."></img>robotic</p>


</div> */}

<div className='disc'>
 <div><h4>AR-HOSPITALS</h4>
 <p>A-R hospital was started in the year 1980 at Karur with less than 25 in-patient beds. In the earlier days, 
  we were concentrating only on medical and pediatric branches. Later on, other branches like surgery,
   trauma care and other branches were added. 
  Now this hospital is functioning with 75 beds capacity as multi specialty hospital.</p> </div>
  <div>
    <h4>INTENSIVE CARE UNIT</h4>
    <p>Dr.SK.ABDUL RAHEEM M.D., Chief Medical Officer and the most senior physician in General medicine.
       SRI. DR. NARENDRA NAYAK MBBS.SEX SPECIALIST He has more than 40 years of experience in managing all kinds of emergencies</p>
  </div>

<div>
  <h4>GENERAL SURGERIES</h4>
  <p>
    we do best surgeries in India,with latest technologies and equipments
  </p>
</div>

<div>
  <h4>QUALIFIED DOCTORS</h4>
  <p>
  In our  Hospital all doctors are skilled & well experienced Doctors.
  having greatest knowledge in medicine 
  </p>
</div>

<div>
  <h4>EMERGENCY SERVICES</h4>
  <p>Ambulance - 24 HRS Free Ambulance Service in ACCIDENT AND EMERGENCY CARE </p>
</div>
</div>


<div className='count'>
<h4 className='ctext'>Why you chose our health care</h4>
<p className='ctext'>Established by Dr Prathap C Reddy in 1983, Apollo Healthcare has a robust presence across the healthcare ecosystem.</p>
  <p className='ctext'> From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services,</p>
   <p className='ctext'>Apollo Hospitals has touched more than 200 million lives from over 120 countries.</p><br></br>
   <img className='cimag' src='/images/doctors4.jpg'></img>
   
   <div>
   <div className='newser'>

<p className="div1"><img className='new' src='/images/nhlo3.png' width={"130px"} height={"130px"} alt="..."></img><br></br>cardiology</p>
<p className="div1"><img className='new' src='/images/nlelo.png' width={"130px"} height={"130px"} alt="..."></img><br></br>bones</p>
<p className="div1"><img className='new' src='/images/nbrlo.png' width={"130px"} height={"130px"} alt="..."></img><br></br>brain</p>
<p className="div1"> <img className='new' src='/images/nklo3.jpg' width={"130px"} height={"130px"} alt="..."></img><br></br>kidney</p>
<p className="div1"> <img className='new' src='/images/nstlo1.png' width={"130px"} height={"130px"}  alt="..."></img><br></br>stomach</p>
<p className="div1"> <img className='new' src="/images/nlilo.png" width={"130px"} height={"130px"} alt="..."></img><br></br>liver</p>
<p className="div1"> <img className='new' src='/images/nblo.png' width={"130px"} height={"130px"} alt="..."></img><br></br>baby</p>
<p className="div1"> <img className='new' src='/images/ntelo.png' width={"130px"} height={"130px"} alt="..."></img><br></br>teeth</p>
<p className="div1"> <img className='new' src='/images/nurlo2.png' width={"130px"} height={"130px"} alt="..."></img><br></br>urology</p>
{/* <p className="div1"><img className='new' src='/images/nrolo.png' width={"130px"} height={"130px"} alt="..."></img><br></br>robotic</p> */}


</div>
   </div>
   </div>

      


{/* <div className='grid1'>
  <div className='se'>
<p><img src='/images/nhlo1.png'  alt="..."></img>
<h5>HEART TRANSPLANT</h5>
The best team of Heart Specialists 
and Surgeons available 24X7</p>
</div>

<div className='se'>
<p><img src='/images/orpa1.png' alt="..."></img>
        <h5 >OTHER & CHILD</h5>
        The most comprehensive center for maternity and pediatric care.</p>
      </div>

      <div className='se'>
      <p><img src='/images/nklo1.png' alt="..."></img>
        <h5 >NEPHROLOGY</h5>
Offers advanced expertise of the best Nephrologists and Surgeons.</p>
      </div>

      <div className='se'>
      <p><img src='/images/nstlo.png'  alt="..."></img>
        <h5 >GASTROENTEROLOGY</h5>
A team of world-renowned Gastro specialists and embryologists.</p>
      </div>
      </div> */}
{/* images para */}






      {/* <div >
      <p ><img src="/images/nlilo.png" alt="..."></img>
              <h5 >LIVER TRANSPLANT</h5>
A dedicated team with experience of over 2700 Liver Transplants..</p>
      </div>

      <div >
      <p>
        <h5 >NEUROSCIENCE</h5>
The Neuro Institute is a regional leader in treating neurological disorders.<img src="/images/orba.png"   alt="..."></img></p>
      </div>

      <div >
      <p><img src="/images/orca.jpg"  alt="..."></img>
        <h5 >CANCER</h5>
World Leaders in Oncology Care.</p>
      </div>

      <div >
      <p><h5>ROBOTIC</h5>
          Pioneering team of robotic surgeries.<img src="/images/orro.png"   alt="..."></img></p>
      </div>
      */}


      




{/* <div className='grid1' class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src='/images/heart1.png' class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">HEART TRANSPLANT</h5>
        <p class="card-text">
The best team of Heart Specialists and Surgeons available 24X7
.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src='/images/orpa1.png' class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src='/images/kidney1.png' class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">NEPHROLOGY</h5>
        <p class="card-text">
Offers advanced  expertise of the best Nephrologists and Surgeons.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src='/images/gas1.png'  class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">GASTROENTEROLOGY</h5>
        <p class="card-text">
A team of world-renowned Gastro specialists and embryologists.</p>
      </div>
    </div>
  </div>

  <div>
<div class="col">
    <div class="card h-100">
      <img src="/images/orli.png"  class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">LIVER TRANSPLANT</h5>
        <p class="card-text">

A dedicated team with experience of over 2700 Liver Transplants..</p>
      </div>
    </div>
  </div>
</div>


<div>
<div class="col">
    <div class="card h-100">
      <img src="/images/orba.png"  class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">NEUROSCIENCE</h5>
        <p class="card-text">
The Neuro Institute is a regional leader in treating neurological disorders.</p>
      </div>
    </div>
  </div>
</div>


<div>
<div class="col">
    <div class="card h-100">
      <img src="/images/orca.jpg"  class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">CANCER</h5>
        <p class="card-text">
World Leaders in Oncology Care.</p>
      </div>
    </div>
  </div>
</div>




<div>
<div class="col">
    <div class="card h-100">
      <img src="/images/obbn1.png"  class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">BONES & JOINTS</h5>
        <p class="card-text">
World renowned Ortho Specialists performing the latest procedures
the best Nephrologists and Urologists.</p>
      </div>
    </div>
  </div>
</div>

<div>
<div class="col">
    <div class="card h-100">
      <img src="/images/orma2.png"  class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">MOTHER & CHILD</h5>
        <p class="card-text">
The most comprehensive center for maternity and pediatric care.</p>
      </div>
    </div>
  </div>
</div>

<div>
<div class="col">
    <div class="card h-100">
      <img src="/images/orro.png"  class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">ROBOTIC</h5>
        <p class="card-text">Pioneering team of robotic surgeries.</p>
      </div>
    </div>
  </div>
</div>


</div> */}



{/* <div className='grid1'>

  <img className='grid1' src='/images/heart1.png'></img>
  <img className='grid1' src='/images/brain1.png'></img>
  <img className='grid1' src='/images/kidney1.png'></img>
  <img className='grid1' src='/images/gas1.png'></img>

</div> */}

{/* <h3>HEALTHY TIPS TO FOLLOW</h3>

<div>
<video width="320" height="240" controls="on">
  <source src="/images/video.mp4" type="video/mp4"></source>
</video>
</div>



<div className='grid'>
  <img className='grid' src='/images/tips.png' width={"300px"} height={"250px"}></img>
  <img className='grid' src='/images/tipsb.png' width={"300px"} height={"250px"}></img>
  <img className='grid' src='/images/tips1.jpg' width={"300px"} height={"250px"}></img>
  <img className='grid' src='/images/tipsh.png' width={"300px"} height={"250px"}></img>
  <img className='grid' src='/images/tipsk.jpg' width={"300px"} height={"250px"}></img>
  <img className='grid' src='/images/tipsw.jpg' width={"300px"} height={"250px"}></img>

</div> */}
{/* <div class="footer">
  <div class="card-header">
  CONTACT-US
  </div>
  <div class="card-body">
    <h5 class="card-title">AR-HOSPITAL`S.....</h5>
    <p class="card-text">CELL.7793919393</p>
    <p class="card-text">LAND-LINE.8008-2425</p>
    <p class="card-text">MAIL@skabdulraheem24@gmail.com</p>
   
    <a href="#" class="btn btn-primary">Go-to-top</a>
  </div>
</div> */}
<div className='footer'>
  <div className='footerin'>
   <img className='cimgc' src='/images/footer.png' width={"150px"} height={"150px"}></img><br></br>
   <p>Get a Lot of Information about Us</p>
   <p>Subscribe For Our Newsleter</p>
   <input type='text'placeholder='enter-Email'></input><br></br><br></br>
    <button>submit</button><br></br><br></br>
    <p>Emergency : 108</p><br></br>
    <p>A-R-Help-Line : 9573039917</p>
  </div>

  <div  className='footerin'>
    <h6>PATIENT-CARE</h6>
    <p>Find a Doctor</p>
    <p>Medical Services</p>
    <p>Patient Testimonial</p>
    <p>Pay Online</p>
  </div>
  <div  className='footerin'>
    <h6>News & Media</h6>
    <p>News</p>
    <p>Events</p>
    <p>Media</p>
    <p>Intervies</p>
    <p>Watch our Videos Online</p>
  </div>
  <div className='footerin'>
    <h6>Center Of Exelence</h6>
    <p>cardiology</p>
    <p>brain</p>
    <p>bones</p>
    <p>robotic</p>
    <p>neurological</p>
    <p>spain surgeries</p>
    <p>Gastrology</p>
    <p>organ Transplants</p>
  </div>
  <div className='footerin'>
    <h6>Blogs</h6>
    <p>Health Library</p>
    <p>covid-FACQ</p>
    <p>Covid Updates</p>
    <p>Healthcare</p>
    <p>Daits</p>

  </div>

  <div className='footerin'>
    <h6>Acadamics & Research</h6>
    <p>Courses</p>
    <p>Acadamics</p>
    <p>Clinical Research</p>
    <p>Network</p>
    <p>Web brodcast</p>
    <p>Colabration Forms</p>


  </div>

</div>






    </div>
  )
}

export default Displaypage