import {ReactElement} from 'react'

export default function MyToggle(): ReactElement {

  return (
    <div className="container">
      <div className="flex max-w-sm p-6 m-8 mx-auto bg-white shadow-md rounded-xl space-x-4">
        <div>
          <div className="text-xl font-medium text-black">Tailwind Css</div>
          <p className="text-gray-500">works!</p>
        </div>
      </div>
    </div>
  )
}

