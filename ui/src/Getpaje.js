import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Getpaje() {
  
    var[geting,setGeting]=useState([]);
    var[patintshow,setPatientshow]=useState(false)

    var[getbloodtest,setGetbloodtest]=useState([]);
    var[bloodshow,setBloodshow]=useState(false)

    var[operationshow,setOperationshow]=useState(false)
    var[getoperationdetails,setGetoperationdetails]=useState([]);

    useEffect(()=>{
     
    },[])
// patient details
var getpatient=()=>{
  axios.get("http://127.0.01:3080/gettingdata")
  .then((res)=>{
      console.log("geting success");
      setGeting(res.data)
  })
  .catch(()=>{
      console.log("geting fail");
  })
  setPatientshow(true)
  setBloodshow(false);
  setOperationshow(false);
}

// blood test details
    var getblo=()=>{
      axios.get("http://127.0.0.1:3080/getblooddetails")
      .then((res)=>{
        setGetbloodtest(res.data)
      })
      .catch(()=>{
        console.log("get blood fail");
      })
      setBloodshow(true);
      setPatientshow(false)
      setOperationshow(false)
    }
// operation details

var operation=()=>{
  axios.get("http://127.0.0.1:3080/getoperation")
  .then((res)=>{
    console.log("operation details getting");
    setGetoperationdetails(res.data)
  })

  .catch(()=>{
    console.log("operation details getting fail");
  })
  setOperationshow(true);
  setBloodshow(false);
  setPatientshow(false)
}


  return (
    <div>

      <div className='butgridg'>
<button id='bit' class="btn btn-outline-info"  onClick={getblo}>BLOOD-REPORT</button>

<button id='oof' class="btn btn-outline-success"  onClick={operation}>OPERATION-DETAILS</button>

<button id='bop' class="btn btn-outline-warning" onClick={getpatient}>PATIENT-DETAILS</button>

</div>

{/* patient details */}
 {patintshow?   
 <div>
 {geting.map((ele)=>{
            return(<div className='cardsyle'>
<div class="card mb-3" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="/images/patient.png" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">OP-DETAILS</h5>
                <p class="card-text">PATIENT:{ele.patiant}</p>
                <p class="card-text">AGE:{ele.age}</p>
                <p class="card-text">GENDER:{ele.gender}</p>
                <p class="card-text">NUMBER:{ele.number}</p>
      </div>
    </div>
  </div>
</div>
    </div>)
        })}
 </div> :""}
     {/* blood test report */}

{bloodshow?
     <div>  
     {getbloodtest.map((ele)=>{
            return(<div className='cardsyle'>


<div class="card mb-3" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="/images/bloodtest.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body1">
        <h5 class="card-title1">blood-test</h5>
<p class="card-text">{ele.patientname}</p>
<p class="card-text">{ele.bloodgroup}</p>
<p class="card-text">{ele.gender}</p>
<p class="card-text">{ele.lab}</p>
<p class="card-text">{ele.gender}</p>

      </div>
      
    </div>
  </div>
</div>
    </div>)
        })}     
</div>:""}

{/* operation details */}

{operationshow? <div>     
  
     {getoperationdetails.map((ele)=>{
            return(<div className='cardsyle'>


<div class="card mb-3" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="/images/operation.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body1">
        <h5 class="card-title2">operation-details</h5>
<tr><th>name</th> <td class="card-text">{ele.patientname}</td></tr>
<tr><th>age</th> <td class="card-text">{ele.age}</td></tr>
<tr><th>gender</th> <td class="card-text">{ele.gender}</td></tr>
<tr><th>blood</th> <td class="card-text">{ele.blood}</td></tr>
<tr><th>weight</th> <td class="card-text">{ele.weight}</td></tr>
<tr><th>height</th> <td class="card-text">{ele.height}</td></tr>
<tr><th>sugerlevel</th> <td class="card-text">{ele.sugerlevel}</td></tr>
<tr><th>surgerytype</th> <td class="card-text">{ele.surgerytype}</td></tr>
<tr><th>gardian</th> <td class="card-text">{ele.gardian}</td></tr>
<tr><th>number</th> <td class="card-text">{ele.number}</td></tr>

      </div>
      
    </div>
  </div>
</div>
    </div>)
        })}     
</div>
:""}

    </div>
  )
}

export default Getpaje;


{/* <div>
{getbloodtest.map((ele)=>{
  return(<div className='cardsyle'>
<p>{ele.patientname}</p>
<p>{ele.bloodgroup}</p>
<p>{ele.gender}</p>
<p>{ele.lab}</p>
<p>{ele.gender}</p>

  </div>)
})}
     </div>            */}