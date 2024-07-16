import React from 'react'

function Modal() {
  return (
    <div>
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close">
                    <i className='fas fa-times'></i>
                </button>
                <div className="inner-box">
                    <img src="./images/book.jpg" alt="" />
                    <div className="info">
                        <h1>Hello React</h1>
                        <h3>Pra by example react Building Modern web site with React</h3>
                        <h4>Publish <span>2024.07.16</span></h4>
                        <a href="#"><button>More</button></a>
                    </div>
                </div>
                <h4 className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti doloremque, dolorum ipsa quas recusandae, omnis corrupti nesciunt odit eos
                     distinctio animi pariatur excepturi aliquid quisquam ex error ut consectetur quaerat!</h4>
            </div>
        </div>
    </div>
  )
}

export default Modal
