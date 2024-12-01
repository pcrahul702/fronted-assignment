import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Dropdown, Menu } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "../components/TableComponent/page";
import LoadingSpinner from "../components/Loading/LoadingSpinner";
import { CustomButton } from "../components/Button";
import { setTasks,updateTask } from "../redux/slices/taskSlice"; // Redux slice for tasks
import { getdata,putdata } from "../utils/Methods";
import TaskForm from "./TaskForm";
import { Link } from "react-router-dom";
const TaskManagementPage = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.task);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [pageSize, setPageSize] = useState(10);
const [loading,setLoading]=useState(false)
  const handleOpenDrawer = () => {
    console.log("functioncalled")
    setIsDrawerOpen(true);
  };
  const handleCloseDrawer = () => {
    setCurrentTask(null);
    setIsDrawerOpen(false);
  };

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getdata("/task/list"),
  });

  useEffect(() => {
    if (data?.data?.data) {
      dispatch(setTasks(data.data?.data));
    }
  }, [data, dispatch]);

  const columns = useMemo(
    () => [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
        sorter: (a, b) => a.title.localeCompare(b.title), 
        render: (text, task) => (
          <Link to={`/user/task/${task._id}`} className="text-blue-500 hover:underline cursor-pointer">
            {text}
          </Link>
        ), 
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
      },
      {
        title: "Due Date",
        dataIndex: "dueDate", // Corrected to reference the dueDate field
        key: "dueDate",
        render: (dueDate) => new Date(dueDate).toLocaleDateString(), // Format date
        sorter: (a, b) => new Date(a.dueDate) - new Date(b.dueDate), // Sort by due date
      },
      {
        title: "Priority",
        dataIndex: "priority",
        key: "priority",
        sorter: (a, b) => a.priority.localeCompare(b.priority),
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (status) => (
          <div
            className={`px-3 py-1 border rounded-2xl text-xs ${
              status === "Completed"
                ? "bg-green-50 border-green-400"
                : "bg-red-50 border-red-400"
            }`}
          >
            {status}
          </div>
        ),
      },
      {
        title: "Actions",
        key: "action",
        render: (_, task) => (
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item
                  key="edit"
                  onClick={() => handleMenuClick("edit", task)}
                >
                  Edit
                </Menu.Item>
                <Menu.Item
                  key="complete"
                  onClick={() => handleMenuClick("complete", task)}
                >
                 Mark Complete
                </Menu.Item>
                <Menu.Item
                  key="delete"
                  onClick={() => handleMenuClick("delete", task)}
                >
                 Delete
                </Menu.Item>
              </Menu>
            }
          >
            <EllipsisOutlined />
          </Dropdown>
        ),
      },
    ],
    []
  );
  
  const updateTaskStatus = async (task, newStatus) => {
    
    const payload = { ...task, status: newStatus };
    setLoading(true)
    try {
      const response = await putdata(`/task/${task._id}`, payload);
      console.log(response)
      if (response?.data) {
        dispatch(updateTask(response?.data?.data));
        setLoading(false)
        refetch(); 
      }
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };
  const handleMenuClick = (action, task) => {
    if (action === "edit") {
      setCurrentTask(task);
      handleOpenDrawer();
    } else if (action === "complete") {
      const newStatus = "Completed";
      updateTaskStatus(task, newStatus).then(refetch);
    }
  };

  if (isLoading || loading) return <LoadingSpinner />;
  if (error) return <div>Error loading tasks</div>;

  return (
    <div className="p-4 bg-white">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="flex items-center space-x-3">
          {/* <Search searchText={searchText} handleSearch={handleSearch} /> */}
        </div>
        <CustomButton label="Add Task" onClick={handleOpenDrawer} />
      </div>
      <TableComponent
        columns={columns}
        data={tasks}
        rowKey="_id"
        pagination={{
          pageSize,
          showSizeChanger: true,
          onShowSizeChange: (current, size) => setPageSize(size),
          pageSizeOptions: ["10", "20", "50", "100"],
        }}
      />
      <TaskForm
        isDrawerOpen={isDrawerOpen}
        handleClose={handleCloseDrawer}
        currentTask={currentTask}
        refetch={refetch}
      />
    </div>
  );
};

export default TaskManagementPage;
