import './modal.css'

export default function modal(props) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
       {props.children}
       <button onClick={props.handleClose} style={{
      padding:"10px",
      background:'red',
      color:'#fff',
      fontSize:'20px',
      border:'1px solid red',
      borderRadius:'5px',
      margin:'30px 0'
     }}>close</button>
      </div>
      
    </div>
  )
}

