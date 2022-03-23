import React from 'react'
import ReactLoading from "react-loading"
interface props{
  type?:any
}
const IsLoading = ({type="spinningBubbles"}:props) => {
  return (
    <div className="loading">
    <ReactLoading type={type} color="#0096f5" />
  </div>
  )
}

export default IsLoading