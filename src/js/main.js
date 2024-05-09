// Import our custom CSS
import './../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import {coders} from "../../public/data/database.js"
import { create, withForEach } from './operations.js'

const tbody = document.querySelector("tbody")

withForEach(coders,tbody)


const name = document.getElementById("name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const form = document.querySelector("form")

form.addEventListener("submit", (event)=>{

    
    create(name, lastName, email, coders);

    form.reset()

    event.preventDefault()

    withForEach(coders,tbody)

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Coder saved",
        showConfirmButton: false,
        timer: 1500
      });

      console.log(coders);
    
})