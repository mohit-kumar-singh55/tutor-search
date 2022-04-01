import { Range, getTrackBackground } from 'react-range'

const STEP = 0.1
const MIN = 0
const MAX = 100

const SkillRange = ({ values, setValues }) => {
  return (
    <>
      <div
        className="relative  "
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          //   margin: '2em',
        }}
      >
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => setValues(values)}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              className="md:[407px] w-full px-2"
              style={{
                ...props.style,
                display: 'flex',
              }}
            >
              <div
                ref={props.ref}
                className="rounded-full"
                style={{
                  height: '10px',

                  width: '100%',
                  //   borderRadius: '4px',
                  background: getTrackBackground({
                    values: values,
                    colors: ['#FB6B85', '#F3F3F3'],
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
              className="outline-none ring-2 ring-[#FB6B85]"
              style={{
                ...props.style,
                height: '21px',
                width: '8px',
                //  width: '407px',
                borderRadius: '4px',
                backgroundColor: '#FFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // boxShadow: '0px 2px 6px #AAA',
              }}
            >
              <div
                style={{
                  height: '16px',
                  width: '5px',
                  //   backgroundColor: isDragged ? '#FB6B85' : '#fff',
                }}
              />
            </div>
          )}
        />
        <output
          className=" absolute bottom-[22px] right-0 font-roboto text-[12px] font-[600] tracking-[-0.01em] text-[#858585]"
          id="output"
        >
          {values[0]?.toFixed(1)}%
        </output>
      </div>
    </>
  )
}

export default SkillRange
