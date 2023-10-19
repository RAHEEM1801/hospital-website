import React from 'react'

function Appoinment() {
  return (
    <div>
   
      <div className='onse'> 
      <h4>What Would You Like To Do Today ?</h4>
  <div className='popup'   data-bs-toggle="modal" data-bs-target="#exampleModal"><img className='poimg'  src='/images/bookapo.png' width={"100px"} height={"100px"} ></img><br></br>BOOK APPOINTMENT</div>
  <div className='popup' data-bs-toggle="modal" data-bs-target="#exampleModal" ><img className='poimg' src='/images/cononline3.png'  width={"100px"} height={"100px"} ></img><br></br>CONSULT<br></br> ONLINE</div>
  <div className='popup' data-bs-toggle="modal" data-bs-target="#exampleModal"><img className='poimg' src='/images/medic4.jpg'  width={"100px"} height={"100px"} ></img><br></br>BUY <br></br>MEDICINE</div>
  <div className='popup' data-bs-toggle="modal" data-bs-target="#exampleModal"><img className='poimg' src='/images/healthc5.png'  width={"100px"} height={"100px"} ></img><br></br>HEALTH <br></br>CHEKUP</div>
  </div>
        {/* <!-- Button trigger modal --> */}
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">aunch demo modal
</button> */}

{/* <!-- book-appointment --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">BOOK-APPOINTMENT</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">SUBMIT</button>
      </div>
    </div>
  </div>
</div>
      
{/* <!-- CONSULT ONLINE --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">CONSULT ONLINE</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">SUBMIT</button>
      </div>
    </div>
  </div>
</div>

{/* buy medicine */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">SUBMIT</button>
      </div>
    </div>
  </div>
</div>

{/* book consult */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">BOOK-CONSULT</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">SUBMIT</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Appoinment;