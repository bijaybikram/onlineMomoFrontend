import React, { useEffect } from 'react'

const Khalti = () => {
    const queryParams = new URLSearchParams(location.search)
    const amount = queryParams.get("totalamount")
    const orderId = queryParams.get("orderid")
    console.log(amount, orderId)

    useEffect(()=> {
        // axios.post to khalti initiation with above data
    })
  return (
    <div>Khalti</div>
  )
}

export default Khalti