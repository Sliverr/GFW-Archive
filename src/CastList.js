import casts from "./podcasts"; //imports casts, a list of objects containing information for each podcast episode
import React, { Component, Fragment } from "react";
import { Button, List, Card, Modal } from "antd";
import "antd/dist/antd.css";

import "./CastList.css";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      podcastList: [...casts],
      visible: false
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 4,
            xxl: 4
          }}
          dataSource={this.state.podcastList}
          renderItem={item => (
            <List.Item>
              <Card>
                {item.nameDate}
                <br />
                Length: {item.Length}
                {/*<a href={item.download}> <br />       
                        <Button type="primary">Download</Button></a>*/}
                <br />
                <Button type="primary" onClick={this.showModal}>
                  Description
                </Button>
                <Modal visible={this.state.visible} onOk={this.handleOk}>
                  <p>{item.description}</p>
                </Modal>
                {/* 
                    {item.description+" "}
                     
                       <a href={item.download}>        
                        <Button type="primary">Download</Button></a>
                       Members: {item.members } */}
              </Card>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Main;
