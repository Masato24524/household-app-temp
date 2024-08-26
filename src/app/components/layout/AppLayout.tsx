"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SideBar from "./common/SideBar";
import UseTransactions from "../../data/UseTransactions";
import { set } from "date-fns";
import { Schema } from "../../validations/schema";
import { TransactionContext } from "../../context/TransactionContext";

const drawerWidth = 140;

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [view, setView] = React.useState<"home" | "report">("home");
  const {
    monthlyTransactions = [],
    setCurrentMonth,
    handleSaveTransaction,
    handleDeleteTransaction,
    isLoading,
    currentMonth,
    handleUpdateTransaction,
  } = UseTransactions();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        monthlyTransactions,
        setCurrentMonth,
        handleSaveTransaction,
        handleDeleteTransaction,
        isLoading,
        currentMonth,
        handleUpdateTransaction,
      }}
    >
      <Box
        sx={{
          display: { md: "flex" },
          bgcolor: (theme) => theme.palette.grey[100],
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        {/* ヘッダー */}
        <AppBar
          position="fixed"
          sx={{
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              家計簿アプリ
            </Typography>
          </Toolbar>
        </AppBar>

        <SideBar
          drawerWidth={drawerWidth}
          mobileOpen={mobileOpen}
          handleDrawerClose={handleDrawerClose}
          handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        />

        {/* メインコンテンツ */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { md: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </TransactionContext.Provider>
  );
}
