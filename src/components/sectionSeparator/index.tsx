import React, { FunctionComponent } from 'react'

const SectionSeparator:FunctionComponent<SectionSeparatorProps> = ({name}) => {
  return (
    <div>
      {name}
      <span className="arrow-down-sm"></span>
    </div>
  )
}

export default SectionSeparator

interface SectionSeparatorProps{
  name: string
}