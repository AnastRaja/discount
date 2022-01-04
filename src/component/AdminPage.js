import React from 'react'
import Sideber from './Sidebar'
import Header from './Header'
import Twitter from '../image/twitter.svg'
import Plane from '../image/plane.svg'
import News from '../image/new_ww.svg'
import NFT from '../image/nft_new.svg'
import games from '../image/games.svg'
import defi from '../image/defi.svg'





import inter from '../image/internet.svg'

import Token1 from '../image/toker1.png'
import { Button ,Link } from '@material-ui/core'

function Home() {
    return (
        <div>
        <div  id="wrapper" className='d-flex'>
        <div className='border-end bg-white' id="sidebar-wrapper">
         <Sideber />
        </div>
        <div id="page-content-wrapper">
           <Header />

           <div>
               <div>
                   <div className='container'>
                       <div className='home_header'>
                           <h1>Admin</h1>
                        </div> 
                        <div className='admin_tabs'>
                        <ul class="nav nav-tabs">
                        <li class="active"><a data-toggle="tab" href="#home" className='active'>Master Docs</a></li>
                        <li><a data-toggle="tab" href="#menu1">Categories</a></li>
                        <li><a data-toggle="tab" href="#menu2">Chains</a></li>
                        <li><a data-toggle="tab" href="#menu3">Status</a></li>

                        </ul>

                        <div class="tab-content">
                        <div id="home" class="tab-pane fade in active show">
                          
                        </div>
                        <div id="menu1" class="tab-pane fade">
                            <div className='foerm_s for_new_po'>
                            <div className='row'>
                            <div className='col-lg-6'>
                            <div className='form-group mb-4'>
                                    <label>Category Name:</label>
                                        <div className=' input_flex_clas'>
                                        <input placeholder='Enter category name here...' /> 
                                   
                                        </div>
                                        </div>

                              <div className='option_bottom'>

                                  <a href='' className='green_text'><i class="fas fa-plus"></i> Add category</a>
                                  <a href='' className='red_text'><i class="far fa-trash-alt"></i> Remove category</a>
                                  <a href='' className='text_blue'><i class="fas fa-eye"></i>View categories</a>


                                </div>          
                            </div>
                            </div>
                            </div>
                        </div>
                        <div id="menu2" class="tab-pane fade">
                            <h3>Menu 2</h3>
                            <p>Some content in menu 2.</p>
                        </div>
                        <div id="menu3" class="tab-pane fade">
                            <h3>Menu 2</h3>
                            <p>Some content in menu 3.</p>
                        </div>
                        </div>
                        </div>
                   </div>
               </div>
           </div>
        </div>
        </div>
        </div>
    )
}

export default Home
