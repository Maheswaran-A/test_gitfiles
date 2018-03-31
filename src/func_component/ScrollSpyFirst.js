import React from "react";
import Scrollspy from 'react-scrollspy';
import './styles.css';
class ScrollSpyFirst extends React.Component{
  render(){
      return(<div>



  <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="activeHeaderItem">

<div className="MahesHeader">
    <li className="MahesHeaderItems activeHeaderItem"><a href="#section-1">section 1</a></li>
    <li className="MahesHeaderItems"><a href="#section-2">section 2</a></li>
    <li className="MahesHeaderItems"><a href="#section-3">section 3</a></li>
</div>
  </Scrollspy>
  <div>
    <section id="section-1" className="MahesSection">section 1</section>
    <section id="section-2" className="MahesSection">section 2</section>
    <section id="section-3" className="MahesSection">section 3</section>
  </div>

</div>);
  }
}

export default ScrollSpyFirst;
