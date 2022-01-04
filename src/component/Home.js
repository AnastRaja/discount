import React from 'react'
import Sideber from '../component/Sidebar'
import Header from '../component/Header'
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
                           <h1>Welcome to the Decentralized Sale Protocol!</h1>
                           <p>Discount Sales allows you to Mint, Airdrop, Launch and Lock their tokens seamlessly <br /> without any coding required!  </p>
                        </div> 

                        <div className='count_home_section'>
                            <div className='conyt'>
                                <h3>8,996</h3>
                                <p>Projects Launched</p>
                            </div>
                            <div className='conyt'>
                                <h3>$1.44</h3>
                                <p>Sale Price</p>
                            </div>
                            <div className='conyt'>
                                <h3>26,123,435.00</h3>
                                <p>Sale MCAP</p>
                            </div>
                            <div className='conyt'>
                                <h3>100%</h3>
                                <p>Sale Burned</p>
                            </div>
                        </div>





                        <div className="product_section_">
                            <div className='row'>
                                <div className='col-lg-4'>
                                <div className='card'>
                                    <div className='label_section'>
                                        <p>Promoted ✨</p>
                                    </div>
                                    <div className='prodect_primer_info'>
                                        <div>
                                            <img src={Token1} alt='' className='img-fluid' />
                                        </div>
                                        <div>
                                            <h4>KOD</h4>
                                            <p>KodyToken</p>
                                        </div>
                                    </div>
                                    <div className='token_status'>
                                        <div className='tokaen_data'>
                                                <p>Status:</p>
                                                <span className='text-green'>LIVE</span>
                                        </div>
                                        <div className='tokaen_data'>
                                                <p>Sale starts:</p>
                                                <span className=''>20 Nov - 19:00 PM</span>
                                        </div>
                                        <div className='tokaen_data'>
                                                <p>Sale ends:</p>
                                                <span className=''>24 Nov - 19:00 PM</span>
                                        </div>
                                    </div>

                                    <div className='bar_sewction'>
                                    <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                    <div className='already_sold_section'>
                                        <p>Already sold: <span>20%</span></p>
                                    </div>

                                    <div className='card_footer'>
                                        <div className='social_i'>
                                        <a href=''>
                                            <img src={Twitter} alt='' className='img-fluid'/>
                                        </a>
                                        <a href=''>
                                            <img src={Plane} alt='' className='img-fluid' />
                                        </a>
                                        <a href=''>
                                            <img src={inter} alt='' className='img-fluid' />
                                        </a>
                                        </div>
                                        <div className='view_btn'>
                                            <Button className='button_primery'>View</Button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className='col-lg-4'>
                                <div className='card'>
                                    <div className='label_section'>
                                    <p>Best Seller 👍</p>
                                    <div className='dicount_label'>
                                        10%
                                    </div>

                                    </div>
                                    <div className='prodect_primer_info'>
                                        <div>
                                            <img src={Token1} alt='' className='img-fluid' />
                                        </div>
                                        <div>
                                            <h4>KOD</h4>
                                            <p>KodyToken</p>
                                        </div>
                                    </div>
                                    <div className='token_status'>
                                        <div className='tokaen_data'>
                                                <p>Status:</p>
                                                <span className='text-green'>LIVE</span>
                                        </div>
                                        <div className='tokaen_data'>
                                                <p>Sale starts:</p>
                                                <span className=''>20 Nov - 19:00 PM</span>
                                        </div>
                                        <div className='tokaen_data'>
                                                <p>Sale ends:</p>
                                                <span className=''>24 Nov - 19:00 PM</span>
                                        </div>
                                    </div>

                                    <div className='bar_sewction'>
                                    <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                    <div className='already_sold_section'>
                                        <p>Already sold: <span>20%</span></p>
                                    </div>

                                    <div className='card_footer'>
                                        <div className='social_i'>
                                        <a href=''>
                                            <img src={Twitter} alt='' className='img-fluid'/>
                                        </a>
                                        <a href=''>
                                            <img src={Plane} alt='' className='img-fluid' />
                                        </a>
                                        <a href=''>
                                            <img src={inter} alt='' className='img-fluid' />
                                        </a>
                                        </div>
                                        <div className='view_btn'>
                                            <Button className='button_primery'>View</Button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className='col-lg-4'>
                                <div className='card'>
                                    <div className='label_section'>
                                        <p>Popular 🔥</p>
                                    </div>
                                    <div className='prodect_primer_info'>
                                        <div>
                                            <img src={Token1} alt='' className='img-fluid' />
                                        </div>
                                        <div>
                                            <h4>KOD</h4>
                                            <p>KodyToken</p>
                                        </div>
                                    </div>
                                    <div className='token_status'>
                                        <div className='tokaen_data'>
                                                <p>Status:</p>
                                                <span className='text-green'>LIVE</span>
                                        </div>
                                        <div className='tokaen_data'>
                                                <p>Sale starts:</p>
                                                <span className=''>20 Nov - 19:00 PM</span>
                                        </div>
                                        <div className='tokaen_data'>
                                                <p>Sale ends:</p>
                                                <span className=''>24 Nov - 19:00 PM</span>
                                        </div>
                                    </div>

                                    <div className='bar_sewction'>
                                    <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                    <div className='already_sold_section'>
                                        <p>Already sold: <span>20%</span></p>
                                    </div>

                                    <div className='card_footer'>
                                        <div className='social_i'>
                                        <a href=''>
                                            <img src={Twitter} alt='' className='img-fluid'/>
                                        </a>
                                        <a href=''>
                                            <img src={Plane} alt='' className='img-fluid' />
                                        </a>
                                        <a href=''>
                                            <img src={inter} alt='' className='img-fluid' />
                                        </a>
                                        </div>
                                        <div className='view_btn'>
                                            <Button className='button_primery'>View</Button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className='col-lg-12'>
                                    
                                    <a href='/latest' className='view_more_sec'>View More <i class="fas fa-arrow-down"></i></a>
                                </div>
                            </div>
                        </div>





                        <div className='home_header mt-5'>
                           <h1>Categories</h1>
                        </div> 

                        <div className='Categories_section'>
                            <div className='row'>
                                <div className='col-lg-3'>
                                    <div className='categorid_card'>
                                        <img src={defi} alt='' />
                                        <h3>DeFi</h3>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className='categorid_card'>
                                        <img src={NFT} alt='' />
                                        <h3>NFT</h3>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className='categorid_card'>
                                        <img src={games} alt='' />
                                        <h3>Games</h3>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className='categorid_card'>
                                        <img src={News} alt='' />
                                        <h3>News</h3>
                                    </div>
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
