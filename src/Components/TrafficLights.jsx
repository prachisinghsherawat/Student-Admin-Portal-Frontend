import { useEffect, useState } from "react";


export default function TrafficLights(){

    const [color , setColor] = useState("red")

    useEffect(() => {
        const colorTimer = setTimeout(() => {
            if(color == "red"){
                setColor("green")
            }
            else if(color == "green"){
                setColor("yellow")
            }
            else{
                setColor("red")
            }
        },3000)
        
    }, [color]);

    return (
      <>
        <div className="m-auto w-1/2 mt-32">
          <h1 className="text-center">Traffic Lights</h1>
          <div className="bg-black p-3 mt-12 h-92 w-28 m-auto rounded-lg flex flex-col justify-between">
            <div
              className={`rounded-full h-20 w-20 m-auto ${
                color == "red" ? "bg-red-500" : "bg-gray-500"
              }`}
            ></div>
            <div
              className={`rounded-full h-20 w-20 m-auto mt-2 ${
                color == "yellow" ? "bg-yellow-500" : "bg-gray-500"
              }`}
            ></div>
            <div
              className={`rounded-full h-20 w-20 m-auto mt-2 ${
                color == "green" ? "bg-green-500" : "bg-gray-500"
              }`}
            ></div>
          </div>
        </div>
      </>
    );
}