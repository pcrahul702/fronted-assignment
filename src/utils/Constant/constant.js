import { RiDashboardLine, RiUserLine, RiBuildingLine, RiUserAddLine, RiFileListLine, RiNotificationLine, RiBook3Line, RiPieChartLine, RiQuestionLine, RiStarLine } from 'react-icons/ri';
import { CiUser } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

// Sidebar items for admin and user roles
export const SIDEBAR_ITEMS = {
  admin: [
    {
      key: 'home',
      label: 'Home',
      path: '/',
      icon: RiDashboardLine,
    },
    {
      key: 'users',
      label: 'Users',
      path: '/admin/users',
      icon: CiUser,
    },

  ],
  user: [
    {
      key: 'dashboard',
      label: 'Dashboard',
      path: '/',
      icon: RiDashboardLine,
    },
    {
      key: 'Task',
      label: 'task',
      path: '/user/tasks',
      icon: RiUserLine,
    },
    
   
  ],
};
