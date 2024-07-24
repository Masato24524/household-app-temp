import React from 'react'
import WorkIcon from '@mui/icons-material/Work';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import SavingsIcon from '@mui/icons-material/Savings';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddHomeIcon from '@mui/icons-material/AddHome';
import DiversityIcon from '@mui/icons-material/Diversity3';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import TrainIcon from '@mui/icons-material/Train';
import { ExpenseCategory, IncomeCategory } from '../../../types';

const IconComponents:Record<IncomeCategory | ExpenseCategory, JSX.Element>  = {
    給与: <WorkIcon fontSize='small' />,
    副収入: <AddBusinessIcon fontSize='small' />,
    お小遣い: <SavingsIcon fontSize='small' />,
    
    食費: <FastfoodIcon fontSize='small' />,
    日用品: <AlarmIcon fontSize='small' />,
    住居費: <AddHomeIcon fontSize='small' />,
    交際費: <DiversityIcon fontSize='small' />,
    娯楽: <SportsTennisIcon fontSize='small' />,
    交通費: <TrainIcon fontSize='small' />,
}

export default IconComponents
