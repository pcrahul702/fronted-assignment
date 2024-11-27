import React from "react";
import { useNavigate } from "react-router-dom";

const QuickActionCard = ({ actions }) => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="bg-white p-5 rounded shadow-md">
      <h3 className="text-lg font-semibold mb-5">Quick Action</h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {actions.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 py-5 rounded-lg cursor-pointer"
            onClick={() => {
              if (item.url == "/course/content") {
                localStorage.setItem("courseSelected", false);
                localStorage.setItem('moduleSelected',false)
              }

              navigate(item.url);
            }}
          >
            <div className="flex flex-col gap-1 justify-center items-center">
              <div className="font-bold text-xl">{item.icon}</div>
              <div className="text-lg font-normal">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActionCard;
