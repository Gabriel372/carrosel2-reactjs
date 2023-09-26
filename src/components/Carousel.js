import style  from './Carousel.module.css'
import rj from './images/rj.jpg'
import sp from './images/sp.jpg'
import bh from './images/bh.jpg'
import sc from './images/sc.jpg'
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import { useState } from 'react'

function Carousel() {
const imgBox = [rj,sp,bh,sc] 
const [imgTarget,setImg] = useState(0)

const nextImg = () => {
setImg((step) => step === imgBox.length -1 ? 0 : step +1) }

const beforeImg = () => {
setImg((step) => step === 0 ? imgBox.length -1 : step -1) }

return <div className={style.container}>

<div className={style.imgDiv}>
<img className={style.Img} src={imgBox[imgTarget]} alt='img'/>
<div className={style.btnDiv}>
<button type="button"  onClick={beforeImg}><AiOutlineLeft/></button>
<button type="button" onClick={nextImg}><AiOutlineRight/></button>
</div>
</div>
<div className={style.circleDiv}>
<div className={imgTarget === 0 ? style.circleBlack : ''} onClick={() => setImg(0)}></div>
<div className={imgTarget === 1 ? style.circleBlack : ''} onClick={() => setImg(1)}></div>
<div className={imgTarget === 2 ? style.circleBlack : ''} onClick={() => setImg(2)}></div>
<div className={imgTarget === 3 ? style.circleBlack : ''} onClick={() => setImg(3)}></div>
</div>

</div>
}

export default Carousel