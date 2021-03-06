import React,{ Component } from 'react';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
class HeaderComponent extends Component{
  render(){
    return(
    <div>
    <StickyHeader
  // This is the sticky part of the header.
  header={
    <div className="Header_root">
      <h1 className="Header_title">ReactStickyHeader</h1>

      <ul className="Header_links">
        <li className="Header_link">When</li>
        <li className="Header_link">Why</li>
        <li className="Header_link">About</li>
        <li className="Header_link">New link</li>
        <li className="Header_link">New bundle</li>
        <li className="Header_link">old bundle</li>
		    <li className="Header_link">thisistest</li>
      </ul>
    </div>
  }
  >
  <section>
    <p>
      This section will be what the sticky header scrolls over before entering into
      sticky state. See the gif above or run the test story book to see examples.
    </p>
  </section>
</StickyHeader>
    </div>);
  }
}
export default HeaderComponent;
