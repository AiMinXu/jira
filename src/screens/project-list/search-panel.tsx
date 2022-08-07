import React from "react"

//声明类型接口

//导出User
export interface User {
  // id: number,
  id: string
  name: string
  email: string
  title: string
  organization: string
}
interface SearchPanelProps {
  users: User[]
  param: {
    name: string
    personId: string
  }
  setParam: (param: SearchPanelProps["param"]) => void
}
const SearchPanel = ({ setParam, param, users }: SearchPanelProps) => {
  //state and props

  return (
    <form>
      {/* 解构 并取值 */}
      <input
        type="text"
        value={param.name}
        onChange={e =>
          setParam({
            ...param,
            name: e.target.value,
          })
        }
      />
      <select
        value={param.personId}
        onChange={e => setParam({ ...param, personId: e.target.value })}
      >
        <option value={""}>负责人</option>
        {users.map(user => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  )
}

export default SearchPanel
