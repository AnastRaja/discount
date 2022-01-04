import React from 'react'
import qustin from '../image/qustin.svg'
import plane from '../image/plane.svg'
import notification from '../image/notification.svg'

function Header() {
    return (
        <div>
            <header>
                <div>
                <div class="form-group">
                    <div className='input_flex_clas'>
                    <i class="fas fa-search"></i>
                    <input type="email" class="form-control" id="" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                </div>
                </div>
                <div>
                    <div className='header_link'>
                        <a href=''>
                            <img src={qustin} alt="" />
                        </a>
                        <a href=''>
                            <img src={plane} alt="" />
                        </a>
                        <a href=''>
                            <img src={notification} alt="" />
                        </a>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
