"use client"
import React, { useState, useEffect } from 'react'
import { Nav } from './ui/nav'
import {
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UsersRound,
} from "lucide-react"
import { Button } from './ui/button'
import { useWindowHeight } from '@react-hook/window-size'

const SideNavbar = () => {
  const onlyHeight = useWindowHeight();
  const mobileWidth = onlyHeight < 768;
  const [isCollapsed, setIsCollapsed] = useState(false); // Set initial state based on mobileWidth

  // Effect to toggle isCollapsed when mobileWidth changes
  useEffect(() => {
    setIsCollapsed(mobileWidth);
  }, [mobileWidth]);

  function toggleSidebar() {
    setIsCollapsed(prev => !prev);
  }

  return (
    <div className='relative min-w-[80px] border-r px-3 pb-10 pt-24'>
      {!mobileWidth && (
        <div className='absolute right-[-20px] top-7'>
          <Button onClick={toggleSidebar} variant='secondary' className='rounded-full p-2'>
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed} // Use the isCollapsed state directly
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  )
}

export default SideNavbar;
