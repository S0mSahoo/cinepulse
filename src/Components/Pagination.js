import React from 'react'
import { useParams } from 'react-router-dom'

export default function Pagination() {
    const [param] = useParams();
    const query = param.get('p')
  return (
    <div>
      
    </div>
  )
}
