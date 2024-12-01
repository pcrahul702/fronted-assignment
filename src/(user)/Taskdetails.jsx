import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { getdata } from "../utils/Methods";
import LoadingSpinner from "../components/Loading/LoadingSpinner";
import CustomError from "../components/CustomError/CustomError";
import { ArrowLeftOutlined } from "@ant-design/icons"; 

const TaskDetails = () => {
  const { taskId } = useParams(); 
  const [task, setTask] = useState(null); 

  
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["taskDetails", taskId],
    queryFn: () => getdata(`/task/${taskId}`),
  });

  useEffect(() => {
    if (data) {
      setTask(data.data.data); 
    }
  }, [data]);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <CustomError />;

  return (<>
  <button
        className="back-button text-blue-500 mb-5"
        onClick={() => navigate(-1)} 
      >
       <ArrowLeftOutlined/>
      </button>
      <div className="task-details-container p-6 bg-white rounded-lg shadow-md">
      
      <h2 className="text-2xl font-bold mb-4">Task Details</h2>

      <div className="task-details">
        <div className="task-detail-item mb-4">
          <span className="font-semibold">Title: </span>
          <span>{task?.title}</span>
        </div>
        <div className="task-detail-item mb-4">
          <span className="font-semibold">Description: </span>
          <p>{task?.description}</p>
        </div>
        <div className="task-detail-item mb-4">
          <span className="font-semibold">Due Date: </span>
          <span>{new Date(task?.dueDate).toLocaleDateString()}</span>
        </div>
        <div className="task-detail-item mb-4">
          <span className="font-semibold">Priority: </span>
          <span>{task?.priority}</span>
        </div>
        <div className="task-detail-item mb-4">
          <span className="font-semibold">Status: </span>
          <span>{task?.status}</span>
        </div>
      </div>
    </div>
  </>
   
  );
};

export default TaskDetails;
