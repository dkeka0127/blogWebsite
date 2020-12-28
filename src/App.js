/* eslint-disable */

import React, {useState} from 'react';
import logo from "./logo.svg";
import './App.css';



function App() {
  
  /* ---- 변수 선언 ---- */
  let [content_title_b, content_title_a] = useState(['Number 1', 'Number 2', 'Number 3', 'Number 4', 'Number 5']);
  let [content_button_b, content_button_a] = useState(true); 
  let [heart_button_b, heart_button_a] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  let [clicked_button_b, clicked_button_a] = useState(0);
  let [content_input_b, content_input_a] = useState('');

  /* ---- 함수 ---- */

  // Content2 ON/OFF Button 함수
  function content_button(){
    let content_button_n = [content_button_b];
    content_button_n = !content_button_b;
    content_button_a(content_button_n);    
  }

  // 하트 added 함수
  function heart_button_(){
    let heart_button_n = [...heart_button_b];
    heart_button_n[0] ++;
    heart_button_a(heart_button_n);
  }

  // content list을 함수 내의 반복문으로 출력 (return 필수)
  function content_list_f(){
    let content_list_array = [];

    for(var i=0; i<content_title_b.length; i++){

      content_list_array.push(
        <li>
          <h4> { content_title_b[i] } 
          <button onClick={heart_button}>💖</button>
          = {heart_button_b[i]}
          </h4>
          <p> content : blabla</p>
          <p> date : 2020.12</p>
        </li>
      )

    }
    return content_list_array;
  }

  // 새로 생성된 Blog List 추가하는 함수
  function add_list_f(){
    let content_input_n = [...content_title_b];
    content_input_n.unshift(content_input_b);
    heart_button_a(heart_button_b)
    content_title_a(content_input_n);
  }

  // 목록 이름을 오름차순으로 정렬하는 함수
  function sorting_f() {
    let newtitle_sort = [...title];
    newtitle_sort.sort();
    title_changed(newtitle_sort);
  }


  /* ---- Main ---- */

  return (
    <div className="App">

      <div className="Header">
        <h1>Develop Blog</h1>
        <p> From </p>
        <img src={ logo }></img>
      </div>

      <div className="Content">
        <div className="Content1">
          <ul>

            {/* 반복문 1 -- 괄호 속에 JS 문법으로 작성 */}
            {
              content_title_b.map(function(a, i){

                function heart_button(){
                  let heart_button_n = [...heart_button_b];
                  heart_button_n[i] ++;
                  heart_button_a(heart_button_n);
                }

                return(
                  <li>
                    <h4 onClick={ () => {clicked_button_a(i)}}> { a } 
                    <button onClick={ heart_button }>💖</button>
                    = {heart_button_b[i]}
                    </h4>
                    <p> content : blabla</p>
                    <p> date : 2020.12</p>
                  </li>
                )
              })
            }

            {/* 반복문 2 -- 함수 선언하고 불러오기 */}
            {/* { content_list_f()} */}

          </ul>
        </div>

        <div className="Content_middle">
          <input onChange={ (e)=>{content_input_a(e.target.value)}}></input>
          <button onClick={ ()=>{add_list_f()} }> 저장 </button>
        </div>
        {/* (e.target.value) : 현재 동작하는 이벤트 . 의 값 불러오기 */}
        {/* 입력될 때마다 변하는 값을 '함수_a'(변경함수)에 넣어주면 '함수_b'의 값이 정해짐 (=선언됨) */}
        {/* <input onChange={ (e)=>{ content_input_a(e.target.value)} }></input> */}

        <Content2 content_title={content_title_b} clicked_button={clicked_button_b}></Content2>
        

        {/* 버튼 값이 true 일때 본문을 보여주는 코드 (삼항연산자 이용) */}
        {/* <button onClick={ content_button }>[ Main Content ON / OFF Button ]</button>
        {
          content_button_b === true
          ?<Content2 content_title={content_title_b} clicked_button={clicked_button_b}></Content2>
          : null
        } */}
        
      </div>

      <div className="Footer">

      </div>

    </div>
  );
}


/* ---- 컴포넌트 생성 ---- */

function Content2(props){
  return (
    <div className="Content2">  
      <h2> {props.content_title[props.clicked_button]} </h2>
      <p> bla bla<br/>bla bla</p>
    </div>
  )
}

// 컴포넌트 이전 문법
/*
class Profile extends React.Component {

  constructor(){
    super();
    초기의 state 값 저장 (this로)
  }

  render(){
    return(
      <div>프로필</div>
    )
  }

}
*/

export default App;

