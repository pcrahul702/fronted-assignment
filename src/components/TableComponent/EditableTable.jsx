import React, { useState } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { Button, Input, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../../redux/slices/courseSlice"; // Redux action to set courses

const EditableTable = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.courses);

  const [newRow, setNewRow] = useState({
    courseName: "",
    agencyId: "agency-123", // Can be dynamic
    branchId: "branch-001", // Can be dynamic
    disciplineId: "",
    courseTypeId: "",
  });

  // Define table columns
  const columns = React.useMemo(
    () => [
      {
        Header: "Course Name",
        accessor: "courseName",
        Cell: ({ row, value, column: { id }, updateData }) => {
          return isEditing(row)
            ? <Input value={value} onChange={(e) => updateData(e.target.value, id)} />
            : value;
        },
      },
      {
        Header: "Agency",
        accessor: "agencyId",
      },
      {
        Header: "Branch",
        accessor: "branchId",
      },
      {
        Header: "Discipline",
        accessor: "disciplineId",
        Cell: ({ row, value, column: { id }, updateData }) => {
          return isEditing(row)
            ? <Input value={value} onChange={(e) => updateData(e.target.value, id)} />
            : value;
        },
      },
      {
        Header: "Course Type",
        accessor: "courseTypeId",
        Cell: ({ row, value, column: { id }, updateData }) => {
          return isEditing(row)
            ? <Input value={value} onChange={(e) => updateData(e.target.value, id)} />
            : value;
        },
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => (
          <Button onClick={() => handleRowSave(row)}>Save</Button>
        ),
      },
    ],
    []
  );

  // React Table hooks
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data: [...courses, newRow], // Append new row to the data
      autoResetSelectedRows: false, // Keep the selected rows after actions
      updateData: (value, columnId) => {
        setNewRow((prevRow) => ({
          ...prevRow,
          [columnId]: value,
        }));
      },
    },
    useSortBy,
    usePagination
  );

  const isEditing = (row) => row.index === rows.length - 1; // Make the last row editable

  const handleAddRow = () => {
    // Check if all fields are filled
    if (!newRow.courseName || !newRow.disciplineId || !newRow.courseTypeId) {
      notification.error({
        message: "Missing Fields",
        description: "Please fill out all fields before adding a new course.",
      });
      return;
    }

    // Add new course (you can dispatch an action to save it in Redux or make an API call)
    dispatch(setCourses([...courses, newRow]));
    setNewRow({ courseName: "", disciplineId: "", courseTypeId: "" }); // Reset the form
  };

  const handleRowSave = (row) => {
    // Handle saving data (you can send this to an API or update Redux state)
    notification.success({
      message: "Course Added",
      description: `Course ${row.original.courseName} has been added successfully!`,
    });
  };

  return (
    <div className="p-4">
      <Button
        type="primary"
        style={{ marginBottom: 16 }}
        onClick={handleAddRow}
      >
        Add New Course
      </Button>
      <table {...getTableProps()} className="table table-bordered">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EditableTable;
