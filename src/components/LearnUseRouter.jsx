"use client"

import { useRouter } from "next/navigation"

const LearnUseRouter = () => {
    const router = useRouter();
    console.log("Router" , router);
  return (
    <div>
        <h1 className=" bg-slate-500">use Router learning</h1>
        <button type="button" onClick={()=> router.push("/colorbox")} >Goto Admin Dashboard</button>
    </div>
  )
}

export default LearnUseRouter