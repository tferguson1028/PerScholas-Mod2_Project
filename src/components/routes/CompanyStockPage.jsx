import React from 'react'

function CompanyStockPage() 
{
  function getCompanyPageRef()
  {
    let currentCompany = window.location.href.lastIndexOf("/");
  }
  
  console.log(getCompanyPageRef);
  return (
    <>
      <span className='TextTitle'>Company Title</span>
    </>
  )
}

export default CompanyStockPage
