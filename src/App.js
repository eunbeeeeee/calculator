import React, {useState} from 'react';
import Wrapper from './component/Wrapper';
import Screen from './component/Screen';
import ButtonBox from './component/ButtonBox';
import Button from './component/Button';

const btnValues = [
  ["C","+-","%","/"],
  [7,8,9,'X'],
  [4,5,6,'-'],
  [1,2,3,'+'],
  [0, '.','=']
];
const App = () => {
  const buttonClick = (e,btn) =>{
    ////btn 조건에 따른  정보출력
    console.log(btn,e);
  }

  return (
      <Wrapper>
      <Screen value="01010" />

      <ButtonBox>
        {
          btnValues.flat().map((btn,i)=>(
            <Button key={i} className={btn === "=" ? "equals" : ""}
            value={btn}
            onClick={(e)=>buttonClick(e,btn)}
            />
          ))  
        }
      </ButtonBox>
      </Wrapper>
  );
};

export default App;