import FullCalendar from "@fullcalendar/react";
import React from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import jaLocale from "@fullcalendar/core/locales/ja";
import "./Calendar.css";
import { DatesSetArg, EventContentArg } from "@fullcalendar/core";
import { Balance, CalendarContent, Transaction } from "../../types";
import { calculateDailyBalances } from "../../utils/financeCalculations";
import { formatCurrency } from "../../utils/formatting";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useTheme } from "@mui/material";
import { isSameMonth } from "date-fns";

interface CalendarProps {
  monthlyTransactions: Transaction[];
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
  setCurrentDay: React.Dispatch<React.SetStateAction<string>>;
  currentDay: string;
  today: string;
  onDateClick: (dateInfo: DateClickArg) => void;
}
const Calendar = ({
  monthlyTransactions,
  setCurrentMonth,
  setCurrentDay,
  currentDay,
  today,
  onDateClick,
}: CalendarProps) => {
  // console.log('Received props:', { monthlyTransactions, setCurrentMonth, setCurrentDay, currentDay, today });
  const theme = useTheme();

  // 1.日付ごとの収支を計算する関数💰
  const dailyBalances = calculateDailyBalances(monthlyTransactions);
  // console.log(dailyBalances)

  // 2.FullCalendar用のイベントを生成する関数📅
  const createCalendarEvents = (
    dailyBalances: Record<string, Balance>
  ): CalendarContent[] => {
    return Object.keys(dailyBalances).map((date) => {
      const { income, expense, balance } = dailyBalances[date];
      return {
        start: date,
        income: formatCurrency(income),
        expense: formatCurrency(expense),
        balance: formatCurrency(balance),
      };
    });
  };
  // *******FullCalendar用のイベントを生成する関数ここまで********

  const calendarEvents = createCalendarEvents(dailyBalances);
  // console.log(calendarEvents);

  //下記はイベントの仮確認用なので不要かも
  const events = [
    { title: "Meeting", start: "2024-07-12" },
    {
      title: "aaaa",
      start: "2024-07-13",
      income: 10000,
      expense: 5000,
      balance: 5000,
    },
  ];
  //ここまで

  // 選択された日付の背景色を設定するイベント
  const backgroundEvent = {
    start: currentDay,
    display: "background",
    backgroundColor: theme.palette.incomeColor.main,
  };
  // console.log([...calendarEvents, backgroundEvent])

  //カレンダーイベントの見た目を作る関数
  const rendarEventContent = (eventInfo: EventContentArg) => {
    // console.log(eventInfo)
    return (
      <div>
        <div className="money" id="event-income">
          {eventInfo.event.extendedProps.income}
        </div>

        <div className="money" id="event-expense">
          {eventInfo.event.extendedProps.expense}
        </div>

        <div className="money" id="event-balance">
          {eventInfo.event.extendedProps.balance}
        </div>
      </div>
    );
  };

  //月の日付取得
  const handleDateSet = (datesetInfo: DatesSetArg) => {
    const currentMonth = datesetInfo.view.currentStart;
    console.log(currentMonth);
    setCurrentMonth(currentMonth);
    const todayDate = new Date();
    //isSameMonthはdate-fnsで提供される関数
    if (isSameMonth(todayDate, currentMonth)) {
      setCurrentDay(today);
    }
    setCurrentDay(today);
  };

  return (
    <FullCalendar //fullcalendar独自のファンクション
      locale={jaLocale}
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={[...calendarEvents, backgroundEvent]}
      eventContent={rendarEventContent}
      datesSet={handleDateSet} //『今日ボタン』を押したとき、またはカレンダーの月表示を変えたときに発火
      dateClick={onDateClick}
      height="auto"
    />
  );
};

export default Calendar;
