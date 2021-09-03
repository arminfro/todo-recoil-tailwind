import React, {ReactElement} from "react";
import {RecoilRoot} from "recoil";
import {SWRProvider} from "src/lib/swr";

interface Props {
  children: ReactElement | ReactElement[]
}

export default function AppContext({children}: Props): ReactElement {
  return (
    <SWRProvider>
      <RecoilRoot>
        {children}
      </RecoilRoot>
    </SWRProvider>
  )
}
