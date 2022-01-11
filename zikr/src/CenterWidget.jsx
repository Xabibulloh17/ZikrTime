import React from 'react'
import './CenterWidget.css'
import {useState} from 'react'

function CenterWidget() {
    const [cont, setCount] = useState(0)
    const [twocont , setTwocont] = useState(0)
    const [threecont, setThreecont] = useState(0)
    function inc(){
        setCount(cont + 1) 
    }   
    function twocontW(){
        setTwocont(twocont + 1)
    }
    function threecontw(){
        setThreecont(threecont + 1)
    }
     return (
        <div className='Center'>
          <h1>Zikr Time</h1>
            <div className="Fatherdive">
              <div className="oneDive">
                  <div className="Bacground">
             <h1>{cont}</h1>
             </div>
             <button onClick={inc}> 
                 Subhanalloh
             </button>
             </div>
             <div className="oneDive">
             <div className="Bacground">
             <h1>{twocont}</h1>
             </div>
             <button onClick={twocontW}> 
                 Alhamdulillah
             </button>
             </div>
             <div className="oneDive">
                 <div className="Bacground">
             <h1>{threecont}</h1>
             </div>
             <button onClick={threecontw}> 
                 Alloh Akbar
             </button>
             </div>
             </div>
        </div>
    )
}

export default CenterWidget
