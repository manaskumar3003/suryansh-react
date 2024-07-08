import React from 'react'




const Customers = () => {
    const name = [
        {
          title: "ana",
          cost: "250",
          status:"paid"
        },
        {
          title: "manas",
          cost: "125",
          status:"paid"
        },
        {
          title: "leo	",
          cost: "125",
          status:"due"
        },
        {
            title: "Cooler",
            cost: "125",
            status:"due"
          },
          {
            title: "peaky",
            cost: "125",
            status:"paid"

          },
          {
            title: "Refrigerator",
            cost: "125",
            status:"unknown"
          },
          
      ]
      
  return (
    <div className='bg-gray-200 mt-10 mb-10 mr-5 h-[52rem] rounded-lg'>
        <div className=''>
            {/* heading */}
            <h2 class="pl-16  pb-5 text-4xl font-extrabold text-cyan-500">Customers</h2>
            {name.map((name, index) => (
            <div key={index} className='h-16 ml-2 mr-2 mt-2 pl-2 rounded-xl flex items-center  bg-gray-300'>
            <img class="w-10 h-10  rounded-full" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Rounded avatar"/>
            <h2 class="pl-4 text-2xl font-extrabold text-gray-600">{name.title}</h2>
             
                 
             
            </div>
            ))}


        </div>
    </div>
  )
}

export default Customers