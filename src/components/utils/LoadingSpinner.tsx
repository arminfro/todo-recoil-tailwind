import {ReactElement} from "react"

export default function LoadingSpinner(): ReactElement {
  return (
    <div>
      <div style={{borderTopColor: 'transparent'}}
        className="w-16 h-16 mx-auto border-4 border-blue-400 border-dashed rounded-full p-18 animate-spin"></div>
    </div>
  )
}
