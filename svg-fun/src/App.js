import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage.js";
import TextPathView from "./views/TextPathView.js";
import Morph from "./views/Morph.js";
import styled from "styled-components";
import SmilAnimations from "./views/SmilAnimations.js";
import { withBackground } from "./views/withBackground.js";
import SvgsAndReact from "./views/SvgsAndReact.js";

const LandingWithBackground = withBackground( LandingPage );

function App(){
  return ( <AppContainer className="App">
    
    <Switch>
      <Route path={ "/text-path" } component={ TextPathView }/>
      <Route path={ "/svgs-n-react" } component={ SvgsAndReact }/>
      <Route exact path={ "/morph" } component={ Morph }/>
      <Route exact path={ "/smil" } component={ SmilAnimations }/>
      <Route exact path={ "/" }
             render={ ( props ) => <LandingWithBackground { ...props } /> }/>
    
    </Switch>
  
  </AppContainer> );
}

export default App;

const AppContainer = styled.div`
max-width: 100vw;
max-height: 100vh;
overflow-y: scroll;
overflow-x: hidden;
display: flex;

`;
