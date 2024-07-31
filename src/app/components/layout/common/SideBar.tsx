'use client'

import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import React, { CSSProperties, use, useEffect, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
// import { NavLink } from 'react-router-dom';

interface SidebarProps {
    drawerWidth: number,
    mobileOpen: boolean,
    handleDrawerTransitionEnd: () => void,
    handleDrawerClose: () => void,
}

interface menuItem {
  text: string,
  path: string,
  icon: React.ComponentType,
}

const Sidebar = ({drawerWidth, mobileOpen, handleDrawerTransitionEnd, handleDrawerClose}: SidebarProps) => {
  const pathname = usePathname();

  const MenuItems: menuItem[] = [
    {text: "Home", path: "/home", icon: HomeIcon},
    {text: "月間レポート", path: "/report", icon: EqualizerIcon},
    // {text: "登録画面", path: "/signup", icon: EqualizerIcon},
    // {text: "ログイン画面", path: "/signin", icon: EqualizerIcon},
  ]

  const baseLinkStyle: CSSProperties = {
    textDecoration: "none",
    color: "inherit",
    display: "block",
    width: "100%",
  }

  const activeLinkStyle: CSSProperties = {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {MenuItems.map((item) => (
          <Link key={item.text} href={item.path} passHref style={baseLinkStyle}>
            {/* console.log("選択されたメニューは", item.text, isActive) */}
              {/* <ListItem key={index} disablePadding> */}
                <ListItemButton
                  sx={{
                    ...(pathname === item.path ? activeLinkStyle : {}),
                  }}>
                  <ListItemIcon>
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              {/* </ListItem> */}
          </Link>
        ))}
      </List>
    </div>
  );
  
  return (
    <div>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* モバイル用 */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

        {/* PC用 */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

    </div>
  )
}

export default Sidebar
