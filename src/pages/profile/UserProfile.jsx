import React from 'react'
import { Link } from 'react-router-dom'
// import "../../pages/profile/UserProfile"

const UserProfile = () => {
  return (
    <>
        <div className="flex flex-col justify-center items-center h-[100vh]">
            <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                <div className="mt-2 mb-8 w-full">
                    <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
                    General Information
                    </h4>
                    <p className="mt-2 px-2 text-base text-gray-600">
                    As we live, our hearts turn colder. Cause pain is what we go through
                    as we become older. We get insulted by others, lose trust for those
                    others. We get back stabbed by friends. It becomes harder for us to
                    give others a hand. We get our heart broken by people we love, even
                    that we give them all...
                    </p>
                </div> 
                <div className="grid grid-cols-2 gap-4 px-2 w-full">
                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none" style={{border: "1px solid navy", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Link to={"/myorders"} className="text-base font-medium text-blue-600">
                        My Orders
                    </Link>
                    </div>

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none" style={{border: "1px solid navy", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Link to={"/myorders"} className="text-base font-medium text-blue-600">
                        My Orders
                    </Link>
                    </div>

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none" style={{border: "1px solid navy", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Link to={"/myorders"} className="text-base font-medium text-blue-600">
                        My Orders
                    </Link>
                    </div>
                </div>
            </div>  
            <p className="font-normal text-navy-700 mt-20 mx-auto w-max">Profile Card component from <a href="https://horizon-ui.com?ref=tailwindcomponents.com" target="_blank" className="text-brand-500 font-bold">Horizon UI Tailwind React</a></p>  
        </div>
    </>
  )
}

export default UserProfile