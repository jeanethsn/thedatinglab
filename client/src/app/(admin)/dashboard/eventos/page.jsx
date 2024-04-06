import AdminAddEvents from '@/app/components/admin/AdminAddEvents'
import AdminTableEvents from '@/app/components/admin/AdminTableEvents'
import React from 'react'

export default function page() {
  return (
    <div className='h-full w-full p-4'>
        <AdminTableEvents/>
        <AdminAddEvents/>
    </div>
  )
}
