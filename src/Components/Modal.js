/* eslint-disable */

import '../App.css';

function Modal(props) {
	return (
		<>
			<div className='modal' style={{background : props.color}}>
				<h4>{ props.글제목[props.title] }</h4>
				<p>날짜</p>
				<p>상세내용</p>
			</div>
			<button onClick={() => {
				props.setModal(false)
			}}>창 닫기</button>
		</>
	)
}

export default Modal;