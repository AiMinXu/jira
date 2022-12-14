import React, { useState, useEffect } from "react"
import { cleanObject, useDebounce } from "utils"
import * as qs from "qs"
import List from "./list"
import SearchPanel from "./search-panel"
//定义相应的url变量
const apiUrl = "http://localhost:3001"

const ProjectListScreen = () => {
  //state props
  const [param, setParam] = useState({
    name: "",
    personId: "",
  })
  const [list, setList] = useState([])
  const [users, setUsers] = useState([])
  const debouncedParam = useDebounce(param, 200)
  //hooks
  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [debouncedParam])
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  })

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  )
}

export default ProjectListScreen
