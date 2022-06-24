import React, { useState } from 'react'
import { Range, getTrackBackground } from 'react-range'

export default function Slider() {
  const STEP = 1
  const MIN = 0
  const MAX = 1000000
  const [values, setValues] = useState([0, 1000000])

  return (
    <Range
      values={values}
      step={STEP}
      min={MIN}
      max={MAX}
      onChange={(values) => {
        console.log(values)
        setValues(values)
      }}
      renderTrack={({ props, children }) => (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: '36px',
            display: 'flex',
            width: '100%',
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: '5px',
              width: '100%',
              borderRadius: '4px',
              background: getTrackBackground({
                values,
                colors: ['#ccc', '#548BF4', '#ccc'],
                min: MIN,
                max: MAX,
              }),
              alignSelf: 'center',
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          style={{
            ...props.style,
            color: isDragged ? '#CCC' : '#548BF4',
            fontSize: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            outline: 'none',
          }}
        >
          •
        </div>
        // <div
        //   {...props}
        //   style={{
        //     ...props.style,
        //     borderRadius: '4px',
        //     backgroundColor: '#FFF',
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     boxShadow: '0px 2px 6px #AAA',
        //     color: isDragged ? '#548BF4' : '#CCC',
        //     fontSize:"40px"
        //   }}
        // >
        //   <div
        //     style={{
        //       height: '16px',
        //       width: '5px',
        //       backgroundColor: isDragged ? '#548BF4' : '#CCC',
        //     }}
        //   />
        //   •
        // </div>
      )}
    />
  )
}
