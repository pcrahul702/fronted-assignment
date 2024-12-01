import React, { useEffect, useState } from "react";
import { Input, Form, Row, Col, Drawer, DatePicker, Select } from "antd";
import { useDispatch } from "react-redux";
import { CustomButton } from "../components/Button";
import { useMutation } from "@tanstack/react-query";
import { postdata, putdata } from "../utils/Methods";
import { addTask, updateTask } from "../redux/slices/taskSlice";
import moment from "moment"; 
import LoadingSpinner from "../components/Loading/LoadingSpinner";

const { Option } = Select;

const AddTask = ({ isDrawerOpen, handleClose, currentTask, refetch }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (currentTask) {
      form.setFieldsValue({
        title: currentTask.title,
        description: currentTask.description || "",
        dueDate: moment(currentTask.dueDate),
        priority: currentTask.priority || "Medium",
      });
    } else {
      form.resetFields();
    }
  }, [currentTask, form]);

  const addMutation = useMutation({
    mutationFn: (newTask) => postdata("/task/create", newTask),
    onSuccess: (data) => {
      setLoading(false);
      dispatch(addTask(data.data.data));

      handleClose();
    },
    onError: (error) => {
      console.error("Error adding task:", error);
    },
  });

  const updateMutation = useMutation({
    mutationFn: (updateTaskData) =>
      putdata(`/task/${currentTask._id}`, updateTaskData),
    onSuccess: (data) => {
      setLoading(false);

      dispatch(updateTask(data.data.data));
      handleClose();
    },
    onError: (error) => {
      console.error("Error updating task:", error);
    },
  });

  const handleSubmit = (values) => {
    const payload = {
      title: values.title,
      description: values.description,
      dueDate: values.dueDate?.toISOString(),
      priority: values.priority,
    };
    setLoading(true);
    if (currentTask) {
      updateMutation.mutate(payload);
    } else {
      addMutation.mutate(payload);
    }
  };
  if (loading) return <LoadingSpinner />;
  return (
    <Drawer
      title={currentTask ? "Update Task" : "Add Task"}
      placement="right"
      onClose={handleClose}
      open={isDrawerOpen}
      width={400}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Task Title"
          name="title"
          rules={[{ required: true, message: "Please input the task title!" }]}
        >
          <Input placeholder="Enter task title" />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea placeholder="Enter description (optional)" rows={4} />
        </Form.Item>

        <Form.Item
          label="Due Date"
          name="dueDate"
          rules={[{ required: true, message: "Please select the due date!" }]}
        >
          <DatePicker
            placeholder="Select due date"
            style={{ width: "100%" }}
            format="YYYY-MM-DD"
          />
        </Form.Item>

        <Form.Item
          label="Priority"
          name="priority"
          rules={[{ required: true, message: "Please select the priority!" }]}
        >
          <Select placeholder="Select priority">
            <Option value="High">High</Option>
            <Option value="Medium">Medium</Option>
            <Option value="Low">Low</Option>
          </Select>
        </Form.Item>

        <div className="flex justify-center">
          <CustomButton
            label={"Submit"}
            htmlType="submit"
            className="bg-custom-blue text-white"
            disabled={addMutation.isLoading || updateMutation.isLoading}
          />
        </div>
      </Form>
    </Drawer>
  );
};

export default AddTask;
