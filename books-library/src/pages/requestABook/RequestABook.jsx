import React, { Fragment, useRef, useState } from 'react'
import wallpaper3 from '../../assets/wallpaperflare.com_wallpaper(5).jpg'
import {Modal} from 'antd'
import ReactDOM from 'react-dom'
import SignatureCanvas from 'react-signature-canvas'

function RequestABook(){
  const [modal, setModal] = useState(false)
  const [data, setData] = useState([])
  const [image, setImage] = useState(null)
  const sigCanvas = useRef(null)

  const handleClick = (e)=>{
    e.preventDefault()
    setModal(true)
  }
  const handleOk = ()=> {
    setModal(false)
  }
  const handleCancel = ()=>{
    setModal(false)
  }
  const saveSign = ()=>{
    setData(sigCanvas.current.toData())
    setImage(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"))
    console.log("saved signature data:", data)
  }
  const ClearSign = ()=>{
    sigCanvas.current.clear()
  }
  const loadSignatureData = (savedData) => {
    sigCanvas.current.fromData(data);
  }

  return (
    <Fragment>
    <div className='relative'>
      <img className="opacity-20" src={wallpaper3} alt="lala" />
      <button className='btn-primary absolute bottom-[56rem] right-[56rem] bg-emerald-400 text-white pl-5 pr-5 rounded-2xl' onClick={handleClick}>Enter Signature</button>
      <img className='absolute bottom-[85rem] right-[90rem] size-24' hidden={!image} src={image} alt="" />
    </div>


    {modal &&
      <Modal title="Enter Signature" open={modal} onOk={handleOk} onCancel={handleCancel}>
        <SignatureCanvas backgroundColor='black' ref={sigCanvas} penColor='white' canvasProps={{width: 470, height:200, className: 'border rounded-2xl'}} />
        <button className='btn-primary bg-emerald-400' onClick={saveSign}>Save</button>
        <button className='btn-primary bg-emerald-400' onClick={ClearSign}>Clear</button>
        <button className='btn-primary bg-emerald-400' onClick={loadSignatureData}>load</button>
      </Modal>
    }

    </Fragment>
  )
}

export default RequestABook



// className='h-14 bg-gradient-to-r from-cyan-500 to-blue-500'