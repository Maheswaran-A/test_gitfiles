import React, { Component } from 'react';
import './style.css';
export default class LandingPage extends Component{
  render(){
    return(
      <div>
      <div class="formparameter">
    <form>
    <div class="param">
      <label class="labelna" for="na">Name</label>
      <input class="input" type="text" name="na" value=""/>
    </div>
    <div class="param">
      <label for="std">Standard</label>
      <input class="input" type="text" name="std" value=""/>
    </div>
    <div class="param">
      <label for="avg">Average</label>
      <input class="input" type="text" name="avg" value=""/>
    </div>
    <div class="param">
      <label for="rank">Rank</label>
      <input class="input" type="text" name="rank" value=""/>
    </div>
    <div class="param">
      <label for="result">Result</label>
      <input class="input" type="text" name="result" value=""/>
    </div>
    <div class="param">
        <button type="button">Submit</button>
    </div>
    </form>
    </div>
  </div>
    );
  }

}
