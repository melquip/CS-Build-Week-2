import React from 'react';
import styled from 'styled-components';
import config from './config';

const Cell = styled.div`
border-right: 1px solid ${props => props.theme.colors.gray};
border-bottom: 1px solid ${props => props.theme.colors.gray};
height: calc(100% / ${props => props.theme.gridSize});
width: calc(100% / ${props => props.theme.gridSize})
`;

function App() {
  
  const gridHelper = [...Array(config.gridSize).keys()]
  return (
    <div className="App">
      <div className="automaton">
        <div className="grid">
          {
            gridHelper.map((v1, r) => gridHelper.map((v2, c) => 
              <Cell key={`cell-${r}-${c}`} className={`cell-${r}-${c}`}></Cell>
            ))
          }
        </div>
        <div className="presets">
          <div className="preset one">
            Preset 1
          </div>
          <div className="preset two">
            Preset 2
          </div>
          <div className="preset three">
            Preset 3
          </div>
          <div className="preset four">
            Preset 4
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
