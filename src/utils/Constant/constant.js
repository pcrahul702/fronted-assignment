import { RiDashboardLine, RiUserLine, RiBuildingLine, RiUserAddLine, RiFileListLine, RiNotificationLine, RiBook3Line, RiPieChartLine, RiQuestionLine, RiStarLine } from 'react-icons/ri';
import { CiUser } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

// Sidebar items for admin and user roles
export const SIDEBAR_ITEMS = {
  admin: [
    {
      key: 'home',
      label: 'Home',
      path: '/admin/home',
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
      path: '/user/dashboard',
      icon: RiDashboardLine,
    },
    {
      key: 'profile',
      label: 'Profile',
      path: '/user/profile',
      icon: RiUserLine,
    },
    {
      key: 'reports',
      label: 'Reports',
      path: '/user/report',
      icon: RiPieChartLine,
    },
   
  ],
};
