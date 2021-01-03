import React from 'react'

let Login = (props) =>{
    return(
        <div>
           <h1>Login</h1>
            <form action="">
                <div>
                    <input type="text" placeholder={'login'}/>
                </div>
                <div>
                    <input type="text" placeholder={'password'}/>
                </div>
                <div>
                    <input type="checkbox" /> Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login