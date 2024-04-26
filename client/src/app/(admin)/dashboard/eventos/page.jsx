'use client'
import AdminTableEvents from '@/app/components/admin/AdminTableEvents'
import React from 'react'
import { useUser } from "@/app/providers/UserProvider";
import { Loading } from '@/app/components/events/CardList';
import { useRouter } from "next/navigation";

export default function page() {
  const { isAdmin, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) {

    return <Loading/>;
  }

  if (!isAdmin) {
    return router.push('/dashboard/login');
  }


  return (
    <main className='h-full w-full p-6 flex flex-col gap-6 justify-center align-center'>
        <AdminTableEvents/>
    </main>
  )
}
