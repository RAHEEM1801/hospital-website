import React from 'react'
import './Dropcss.css'
function Dropdown() {
  return (
    <div>
        <h3>Dropdown</h3>
        <div class="dropdown">
  <button
    class="btn btn-primary dropdown-toggle"
    type="button"
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
</div>
    </div>
  )
}

export default Dropdown;