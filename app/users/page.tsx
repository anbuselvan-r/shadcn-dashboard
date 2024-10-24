"use client"
import { DataTable } from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Payment = {
  name: string
  email: string
  lastOrder: string
  method: string
}

const data: Payment[] = [
  {
    "name": "Alice Smith",
    "email": "alice.smith@example.com",
    "lastOrder": "2024-10-01",
    "method": "Credit Card"
  },
  {
    "name": "Bob Johnson",
    "email": "bob.johnson@example.com",
    "lastOrder": "2024-09-15",
    "method": "PayPal"
  },
  {
    "name": "Charlie Brown",
    "email": "charlie.brown@example.com",
    "lastOrder": "2024-09-28",
    "method": "Debit Card"
  },
  {
    "name": "Diana Prince",
    "email": "diana.prince@example.com",
    "lastOrder": "2024-10-05",
    "method": "Apple Pay"
  },
  {
    "name": "Ethan Hunt",
    "email": "ethan.hunt@example.com",
    "lastOrder": "2024-08-20",
    "method": "Bank Transfer"
  },
  {
    "name": "Fiona Green",
    "email": "fiona.green@example.com",
    "lastOrder": "2024-10-10",
    "method": "Credit Card"
  },
  {
    "name": "George White",
    "email": "george.white@example.com",
    "lastOrder": "2024-09-25",
    "method": "Google Pay"
  },
  {
    "name": "Hannah Black",
    "email": "hannah.black@example.com",
    "lastOrder": "2024-10-03",
    "method": "Debit Card"
  },
  {
    "name": "Isaac Newton",
    "email": "isaac.newton@example.com",
    "lastOrder": "2024-08-30",
    "method": "PayPal"
  },
  {
    "name": "Julia Roberts",
    "email": "julia.roberts@example.com",
    "lastOrder": "2024-10-08",
    "method": "Credit Card"
  },
  {
    "name": "Kevin Bacon",
    "email": "kevin.bacon@example.com",
    "lastOrder": "2024-09-12",
    "method": "Credit Card"
  },
  {
    "name": "Lara Croft",
    "email": "lara.croft@example.com",
    "lastOrder": "2024-10-02",
    "method": "PayPal"
  },
  {
    "name": "Mark Twain",
    "email": "mark.twain@example.com",
    "lastOrder": "2024-09-22",
    "method": "Debit Card"
  },
  {
    "name": "Nina Simone",
    "email": "nina.simone@example.com",
    "lastOrder": "2024-09-30",
    "method": "Apple Pay"
  },
  {
    "name": "Oscar Wilde",
    "email": "oscar.wilde@example.com",
    "lastOrder": "2024-08-15",
    "method": "Bank Transfer"
  },
  {
    "name": "Peter Parker",
    "email": "peter.parker@example.com",
    "lastOrder": "2024-10-07",
    "method": "Google Pay"
  },
  {
    "name": "Quinn Fabray",
    "email": "quinn.fabray@example.com",
    "lastOrder": "2024-09-05",
    "method": "Credit Card"
  },
  {
    "name": "Rafael Nadal",
    "email": "rafael.nadal@example.com",
    "lastOrder": "2024-10-04",
    "method": "PayPal"
  },
  {
    "name": "Sophia Loren",
    "email": "sophia.loren@example.com",
    "lastOrder": "2024-09-18",
    "method": "Debit Card"
  },
  {
    "name": "Tom Hardy",
    "email": "tom.hardy@example.com",
    "lastOrder": "2024-10-09",
    "method": "Credit Card"
  }
]


const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({row}) => {
      return <div className='flex gap-2 items-center'>
        <img className='h-10 w-10'  
        src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${row.getValue(
          "name"
        )}`} alt="user-image" />{row.getValue("name")}</div>
    }
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
]


export default function UserPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Users"/>
      <DataTable columns={columns} data={data}/>
    </div>
  )
}
