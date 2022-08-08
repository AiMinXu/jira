import { useEffect, useState } from "react"

//当value为0 时情况也是存在的   需考虑进去
export const isFalse = (value: any) => (value === 0 ? false : !value)

export const cleanObject = (object: any) => {
  const result = { ...object }
  //Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致。
  Object.keys(result).forEach((key) => {
    const value = result[key]
    if (isFalse(value)) {
      delete result[key]
    }
  })
  return result
}

// export const useMount = (callback: () => void) => {
//   useEffect(() => {
//     callback()
//   }, [callback])
// }

//自定义hook    用于输入操作的节流
//使用泛型
export const useDebounce = <V>(value: V, delay?: number)=> {
  const [debounceValue, setDebounceValue] = useState(value)
  useEffect(() => {
    //每次value变化后设置定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay)
    // 清理上一次任务
    return () => clearTimeout(timeout)
  }, [value, delay])
  return debounceValue
}
