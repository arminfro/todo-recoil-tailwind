import React, {ReactElement, useState} from "react"
import {RecoilRoot} from "recoil"

interface Props {
  children: ReactElement | ReactElement[]
}

export default function AppContext({children}: Props): ReactElement {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  )
}
