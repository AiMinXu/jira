import React from "react"
// import React{ useState} from "react"
import { User } from "./search-panel"

//
interface Project {
  id: string
  name: string
  personId: string
  pin: boolean
  organization: string
}
interface ListProps {
  list: Project[]
  users: User[]
}
const List = ({ list, users }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            {/* 通过find()方法找到满足条件的name */}
            {/* ?.前值是否为 undefined，若为返回“未知” */}
            <td>
              {users.find((users) => users.id === project.personId)?.name ||
                "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default List
