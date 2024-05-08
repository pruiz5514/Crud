// Import our custom CSS
import './../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import {coders} from "../../public/data/database.js"
import { withForEach } from './operations.js'

const tbody = document.querySelector("tbody")

withForEach(coders,tbody)



