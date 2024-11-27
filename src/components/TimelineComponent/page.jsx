import React from 'react'
import { Timeline } from "antd";
import moment from "moment";
const page = ({events}) => {
  return (
    <div className="bg-white p-5 rounded shadow-md">
      <h3 className="text-lg font-semibold mb-5">Timeline</h3>
      <Timeline>
        {events.map((event, index) => (
          <Timeline.Item
           key={index}
          >   <div className="flex justify-between">
          <span className="">{event.description}</span>
          <span className="timeline-time">{moment(event.timestamp).format("LLL")}</span>
        </div></Timeline.Item>
        ))}
      </Timeline>
    </div>
  )
}

export default page
