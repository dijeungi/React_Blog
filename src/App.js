/* eslint-disable */

import './App.css';
import { useState } from "react";
import Modal from './Components/Modal';

function App() {
	// 제목 상태 초기화
	const [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '리액트 블로그편']);
	// 각 제목에 대한 따봉 수를 배열로 관리
	const [따봉, 따봉변경] = useState([0, 0, 0]);
	// 모달 상태 관리
	const [modal, setModal] = useState(false);
	// 모달에서 수정할 제목의 인덱스
	const [title, setTitle] = useState(0);
	// 사용자 입력값 상태 관리
	const [입력값, 입력값변경] = useState('');

	// 제목을 변경하는 함수
	const 제목변경 = () => {
		글제목변경(['여자 코트 추천', 글제목[1], 글제목[2]]);
	};

	// 제목을 정렬하는 함수
	const 제목정렬 = () => {
		let copy = [...글제목]; // 글제목 배열 복사
		copy.sort(); // 배열 정렬
		글제목변경(copy); // 정렬된 배열로 상태 업데이트
	};

	return (
		<div className="App">
			<div className="black-nav">
				<div>개발 blog</div>

			</div>
			{/* 첫 번째 제목을 '여자코트 추천'으로 수정하는 버튼 */}
			{/* <button onClick={() => {
				let copy = [...글제목]; // 현재 제목 배열 복사
				copy[0] = '여자코트 추천'; // 첫 번째 제목 수정
				글제목변경(copy); // 수정된 배열로 상태 업데이트
			}}>글 수정</button> */}
			
			{/* 제목을 정렬하는 버튼 */}
			<button onClick={제목정렬}>제목 정렬</button>

			{/* 제목 목록을 표시 */}
			{
				글제목.map((제목, i) => {
					return (
						<div className='list' key={i}>
							{/* 제목 클릭 시 모달 열기 및 제목 인덱스 설정 */}
							<h4 onClick={() => { setModal(true); setTitle(i); }}>
								{제목}
								{/* 따봉 클릭 시 해당 제목의 따봉 수 증가 */}
								<span onClick={(e) => {
									e.stopPropagation(); // 클릭 이벤트가 상위 요소로 전파되지 않도록 방지
									let copy = [...따봉];
									copy[i] += 1;
									따봉변경(copy); 
								}}> 👍 </span>
								{/* 현재 따봉 수 표시 */}
								{따봉[i]} 
							</h4>
							<p>2월 17일 발행&nbsp;
							{/* 제목 삭제 버튼 */}
							<button className="DelButton" onClick={() => {
								let copy = [...글제목];
								copy.splice(i, 1);
								글제목변경(copy);

								// 삭제된 제목에 맞춰 따봉 배열도 업데이트
								let copyThumb = [...따봉];
								copyThumb.splice(i, 1);
								따봉변경(copyThumb);
							}}>게시물 삭제하기</button>
							</p>
						</div>
					);
				})
			}

			{/* 사용자 입력값을 위한 입력 필드 */}
			<input value={입력값} onChange={(e) => {
					입력값변경(e.target.value);
				}} 
				placeholder="새로운 제목 입력"
			/>&nbsp;

			{/* 새로운 제목을 추가하는 버튼 */}
			<button onClick={() => {
				if (입력값) {
					let copy = [...글제목];
					copy.unshift(입력값); // 맨 앞에 새로운 제목 추가
					글제목변경(copy);

					// 새로운 제목에 대한 따봉 수를 0으로 초기화하여 추가
					따봉변경([0, ...따봉]);
					입력값변경('');
				}
			}}>게시물 올리기</button>

			{modal && <Modal title={title} 글제목변경={글제목변경} 글제목={글제목} setModal={setModal} />}


		</div>
	);

	

}

export default App;
