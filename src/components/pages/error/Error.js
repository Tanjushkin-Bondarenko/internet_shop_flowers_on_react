import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function Error() {
    const error = useRouteError()
    console.log(error)
  return (
      <div className='error'>
          <h3>Sorry,this page doesn't exist.</h3>
    </div>
  )
}
