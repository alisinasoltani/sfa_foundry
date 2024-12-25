interface IndustriesMenuInterface {
    active: any,
    handleSlideChange: any,
}

const IndustriesMenu = ({ active, handleSlideChange }: IndustriesMenuInterface) => {
  return (
    <div className='industries-menu-container'>
        <div className={`${active == 0 ? 'active' : ''} industries-menu-item`} onClick={() => (handleSlideChange(0))}>
        مس
        </div>
        <div className={`${active == 1 ? 'active' : ''} industries-menu-item`} onClick={() => (handleSlideChange(1))}>
        سیمان
        </div>
        <div className={`${active == 2 ? 'active' : ''} industries-menu-item`} onClick={() => (handleSlideChange(2))}>
        آهن و فولاد
        </div>
        <div className={`${active == 3 ? 'active' : ''} industries-menu-item`} onClick={() => (handleSlideChange(3))}>
        معادن و صنایع
        </div>
        <div className={`${active == 4 ? 'active' : ''} industries-menu-item`} onClick={() => (handleSlideChange(4))}>
        گلوله های چدنی
        </div>
    </div>
  )
}

export default IndustriesMenu