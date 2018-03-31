import React,{ Component } from 'react';
import { Tabs,Tab,Tooltip,ButtonToolbar,OverlayTrigger,Button,Label } from 'react-bootstrap';
export default class CDTTab extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 1
    };
  }

  handleSelect(key) {
    alert(`selected ${key}`);
    this.setState({ key });
  }

  render() {
    const tooltip = (
    <Tooltip id="tooltip">
      <strong>Holy guacamole!</strong> Check this info.
    </Tooltip>
  );
  const positionerInstance = (
    <ButtonToolbar>
      <OverlayTrigger placement="left" overlay={tooltip}>
        <Button bsStyle="default">Holy guacamole!</Button>
      </OverlayTrigger>

      <OverlayTrigger placement="top" overlay={tooltip}>
        <Button bsStyle="default">Holy guacamole!</Button>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={tooltip}>
        <Button bsStyle="default">Holy guacamole!</Button>
      </OverlayTrigger>

      <OverlayTrigger placement="right" overlay={tooltip}>
        <Button bsStyle="default">Holy guacamole!</Button>
      </OverlayTrigger>
    </ButtonToolbar>
  );

  const tabtitle2 =(
    <OverlayTrigger placement="bottom" overlay={tooltip}>
      <div>Tab 2</div>
    </OverlayTrigger>
  );

  const tabtitle3 =(
    <OverlayTrigger placement="bottom" overlay={tooltip}>
      <div>Tab 3</div>
    </OverlayTrigger>
  );
    return (
      <div>
      <Tabs
        activeKey={this.state.key}
        onSelect={this.handleSelect}
        id="controlled-tab-example"
      >
        <Tab eventKey={1} title="Tab 1">
          Tab 1 content
        </Tab>

          <Tab eventKey={2} title={tabtitle2}>
            Tab 2 content
          </Tab>
          <Tab eventKey={3} title={tabtitle3} disabled>
            Tab 3 content
        </Tab>

      </Tabs>

      </div>
    );
  }
}
