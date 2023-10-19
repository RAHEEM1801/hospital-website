import axios from 'axios';
import React, { useState } from 'react'


function Postpage() {

    var[posting,setPosting]=useState({patiant:"",age:"",gender:"",number:""});
    var[bloposting,setBlopost]=useState({patientname:"",bloodgroup:"",gender:"",date:"",physician:"",lab:""})
    var[operationdata,setOperationdata]=useState({patientname:"",age:"",gender:"",blood:"",bp:"",weight:"",height:"",sugerlevel:"",surgerytype:"",gardian:"",number:""})
   
    // OP DATA
    var inpfun=(e)=>{
setPosting((data)=>({...data,[e.target.name]:e.target.value}));
    }

    var postdatafun=(e)=>{
        e.preventDefault()
        axios.post("http://127.0.0.1:3080/postdata",posting)
        .then((res)=>{
            console.log("op data posted");
            
        })
        .catch((err)=>{
            console.log("op posting fail");
        })
        console.log(posting);
    }


// BLOOD TEST DATA
    
var inpblood=(e)=>{
setBlopost((data)=>({...data,[e.target.name]:e.target.value}));
}

var subblood=(e)=>{
e.preventDefault()

axios.post("http://127.0.0.1:3080/postblooddetails",bloposting)
.then((res)=>{
    console.log("posting success");
})
.catch((err)=>{
    console.log("posting fail");
})
console.log(bloposting);
}

// operation functions

var inpoperation=(e)=>{
  setOperationdata((abdul)=>({...abdul,[e.target.name]:e.target.value}));
}

var suboperation=(e)=>{
 e.preventDefault()
 axios.post("http://127.0.0.1:3080/postoperation",operationdata)
 .then((res)=>{
  console.log("operation data posting");
 })
 .catch((err)=>{
  console.log("operation data posting fail");
 })
 console.log(operationdata);
}

  return (
    <div>
      <div className='butgrid'>
  <button id='bop' class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">BOOK-OP</button>

<button id='blt' class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">BLOOD-TEST</button>

<button id='oof' class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#exampleModal2">OPERATION-FORM</button></div>
<div>


{/* OP-DETAILS */}
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">OP-DETAILS</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div>
        
        <div>
<form onSubmit={postdatafun}>
    <input type='text' name='patiant' onChange={inpfun} placeholder='patient-name' value={posting.patiant}></input><br></br><br></br>
    <input type='number' name='age' onChange={inpfun} placeholder='age' value={posting.age}></input><br></br><br></br>
    <input type='text' name='gender' onChange={inpfun} placeholder='gender' value={posting.gender}></input><br></br><br></br>
    <input type='number' name='number' onChange={inpfun} placeholder='number' value={posting.number}></input><br></br><br></br>
    <button type='submit'>BOOK</button>
</form>
</div>
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>

{/* BLOOD TEST DETAILS */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">OP-DETAILS</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div>
        
        <div>

<form onSubmit={subblood}>
    <input type='text' name='patientname' onChange={inpblood} placeholder='patient-name' value={bloposting.patientname}></input><br></br><br></br>
    <input type='text' name='bloodgroup' onChange={inpblood} placeholder='bloodgroup' value={bloposting.bloodgroup}></input><br></br><br></br>
    <input type='text' name='gender' onChange={inpblood} placeholder='gender' value={bloposting.gender}></input><br></br><br></br>
    <input type='number' name='date' onChange={inpblood} placeholder='date' value={bloposting.date}></input><br></br><br></br>
    <input type='text' name='physician' onChange={inpblood} placeholder='physician' value={bloposting.physician}></input><br></br><br></br>
    <input type='text' name='lab' onChange={inpblood} placeholder='lab' value={bloposting.lab}></input><br></br><br></br>
    <button type='submit'>BOOK-TEST</button>
</form>
</div>
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


{/* operation details */}

<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">OP-DETAILS</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div>
        
        <div>

<form onSubmit={suboperation}>
    <input type='text' name='patientname' onChange={inpoperation} placeholder='patientname' value={operationdata.patientname}></input><br></br><br></br>
    <input type='number' name='age' onChange={inpoperation} placeholder='age' value={operationdata.age}></input><br></br><br></br>
    <input type='text' name='gender' onChange={inpoperation} placeholder='gender' value={operationdata.gender}></input><br></br><br></br>
    <input type='text' name='blood' onChange={inpoperation} placeholder='blood' value={operationdata.blood}></input><br></br><br></br>
    <input type='number' name='bp' onChange={inpoperation} placeholder='bp' value={operationdata.bp}></input><br></br><br></br>
    <input type='number' name='weight' onChange={inpoperation} placeholder='weight' value={operationdata.weight}></input><br></br><br></br>
    <input type='number' name='height' onChange={inpoperation} placeholder='height' value={operationdata.height}></input><br></br><br></br>
    <input type='text' name='sugerlevel' onChange={inpoperation} placeholder='sugerlevel' value={operationdata.sugerlevel}></input><br></br><br></br>
    <input type='text' name='surgerytype' onChange={inpoperation} placeholder='surgerytype' value={operationdata.surgerytype}></input><br></br><br></br>
    <input type='text' name='gardian' onChange={inpoperation} placeholder='gardian' value={operationdata.gardian}></input><br></br><br></br>
    <input type='number' name='number' onChange={inpoperation} placeholder='number' value={operationdata.number}></input><br></br><br></br>
    <button type='submit'>OPERATION -DETAILS</button>
</form>
</div>
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

</div>


    
  )
}

export default Postpage;

// var[doposting,setDoposting]=useState({hospital:"",doctor:"",specialist:"",number:""})

// var inpdoc=(e)=>{
//     setDoposting((data)=>({...data,[e.target.name]:e.target.value}));
//         }
    
//         var postdocfun=(e)=>{
//             e.preventDefault()
//             axios.post("http://127.0.0.1:3080/postdoct",doposting)
//             .then((res)=>{
//                 console.log("blood test data posted ");
                
//             })
//             .catch((err)=>{
//                 console.log(" blood test posting  doctors fail");
//             })
//             console.log(doposting);
//         }



// <div>
{/* <form onSubmit={postdocfun}>
    <input type='text' name='hospital' onChange={inpdoc} placeholder='hospital-name' value={doposting.hospital}></input><br></br><br></br>
    <input type='text' name='doctor' onChange={inpdoc} placeholder='doctor' value={doposting.doctor}></input><br></br><br></br>
    <input type='text' name='specialist' onChange={inpdoc} placeholder='specialist' value={doposting.specialist}></input><br></br><br></br>
    <input type='number' name='number' onChange={inpdoc} placeholder='number' value={doposting.number}></input><br></br><br></br>
    <button type='submit'>postdoctors</button>
</form>
</div> */}
