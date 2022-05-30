import axios from "axios"
import { useEffect } from "react/cjs/react.production.min"
import { useState } from "react/cjs/react.production.min"

export const Dashboard = ()=>{
    const [data,setData] = useState([])

    // useEffect(()=>{
    //     // axios({
    //     //     method:"GET",
    //     //     url:"http://localhost:8080/data"
           
    //     // }).then(res=>{
    //     //     setData(res.data)
    //     // }).catch(err=>{
    //     //     console.log("error")
    //     // })
    //     fetch("http://localhost:8080/data").then((e)=>e.json()).then((data=>{
    //         setData(data)
    //     }))
    // },[])

       console.log(data)
    

    return(
        <div>
            <div>
                <h1>User Details</h1>
                {/* {data?.map(item=>(
                    <div>item.username</div>
                ))} */}
            </div>
        </div>
    )
}

