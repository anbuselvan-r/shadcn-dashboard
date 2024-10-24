"use client"
import { DataTable } from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import { cn } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Payment = {
  order: string
  status: string
  lastOrder: string
  method: string
}

const data: Payment[] = [
  {
    "order": "ORD001",
    "status": "Pending",
    "lastOrder": "2024-10-01",
    "method": "Credit Card"
  },
  {
    "order": "ORD002",
    "status": "Processing",
    "lastOrder": "2024-09-15",
    "method": "PayPal"
  },
  {
    "order": "ORD003",
    "status": "Completed",
    "lastOrder": "2024-09-28",
    "method": "Debit Card"
  },
  {
    "order": "ORD004",
    "status": "Pending",
    "lastOrder": "2024-10-05",
    "method": "Apple Pay"
  },
  {
    "order": "ORD005",
    "status": "Completed",
    "lastOrder": "2024-08-20",
    "method": "Bank Transfer"
  },
  {
    "order": "ORD006",
    "status": "Processing",
    "lastOrder": "2024-10-10",
    "method": "Credit Card"
  },
  {
    "order": "ORD007",
    "status": "Pending",
    "lastOrder": "2024-09-25",
    "method": "Google Pay"
  },
  {
    "order": "ORD008",
    "status": "Completed",
    "lastOrder": "2024-10-03",
    "method": "Debit Card"
  },
  {
    "order": "ORD009",
    "status": "Processing",
    "lastOrder": "2024-08-30",
    "method": "PayPal"
  },
  {
    "order": "ORD010",
    "status": "Completed",
    "lastOrder": "2024-10-08",
    "method": "Credit Card"
  },
  {
    "order": "ORD011",
    "status": "Pending",
    "lastOrder": "2024-09-12",
    "method": "Credit Card"
  },
  {
    "order": "ORD012",
    "status": "Processing",
    "lastOrder": "2024-10-02",
    "method": "PayPal"
  },
  {
    "order": "ORD013",
    "status": "Completed",
    "lastOrder": "2024-09-22",
    "method": "Debit Card"
  },
  {
    "order": "ORD014",
    "status": "Pending",
    "lastOrder": "2024-09-30",
    "method": "Apple Pay"
  },
  {
    "order": "ORD015",
    "status": "Completed",
    "lastOrder": "2024-08-15",
    "method": "Bank Transfer"
  },
  {
    "order": "ORD016",
    "status": "Processing",
    "lastOrder": "2024-10-07",
    "method": "Google Pay"
  },
  {
    "order": "ORD017",
    "status": "Pending",
    "lastOrder": "2024-09-05",
    "method": "Credit Card"
  },
  {
    "order": "ORD018",
    "status": "Completed",
    "lastOrder": "2024-10-04",
    "method": "PayPal"
  },
  {
    "order": "ORD019",
    "status": "Processing",
    "lastOrder": "2024-09-18",
    "method": "Debit Card"
  },
  {
    "order": "ORD020",
    "status": "Completed",
    "lastOrder": "2024-10-09",
    "method": "Credit Card"
  }
]


const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
    header: "Order",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <div 
      className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
        "bg-red-200": row.getValue("status") === "Pending",
        "bg-orange-200": row.getValue("status") === "Processing",
        "bg-green-200": row.getValue("status") === "Completed"
      })}
      >
        {row.getValue("status")}
        </div>
    }
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


export default function OrdersPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Orders" />
      <DataTable columns={columns} data={data} />
    </div>
  )
}

