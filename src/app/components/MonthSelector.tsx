import { Box, Button, createTheme, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from 'react'
import { ja } from 'date-fns/locale/ja'
import { add, addMonths } from 'date-fns';
import { setCurrentScreen } from 'firebase/analytics';

interface MonthSelectorProps {
  currentMonth: Date;
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
}

const MonthSelector = ({ currentMonth, setCurrentMonth }: MonthSelectorProps) => {

  const handleDateChange = (newDate: Date | null) => {
    console.log(newDate);
    if (newDate) {
      setCurrentMonth(newDate);
    }
  }

  // 先月ボタンを押したときの処理
  const handlePreviousMonth = () => {
    const previousMonth = addMonths(currentMonth, -1);
    console.log(previousMonth);
    setCurrentMonth(previousMonth);
  }

  // 今月ボタンを押したときの処理
  const handleNextMonth = () => {
    const nextMonth = addMonths(currentMonth, +1);
    console.log(nextMonth);
    setCurrentMonth(nextMonth);
  }

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      adapterLocale={ja}
    >
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Button onClick={handlePreviousMonth} color={"error"} variant="contained">
          先月
        </Button>
        <div>
          <DatePicker
            onChange={handleDateChange}
            value={currentMonth}
            label="年月を選択"
            sx={{ mx: 2, background: "white" }} views={["year", "month"]} 
            format="yyyy/MM" 
            slotProps={{
              toolbar: { 
                hidden: false,
                toolbarFormat: "yyyy年MM月", 
              },
              calendarHeader: {
                format: "yyyy年 MM月",
              }
            }}
          />
        </div>
        <Button onClick={handleNextMonth} color={"primary"} variant="contained">
          次月
        </Button>
      </Box>
    </LocalizationProvider>
  )
}

export default MonthSelector
