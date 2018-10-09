import React, { Component } from 'react';
import { Input, Table, Rate } from 'antd';
import $ from "jquery";
import 'antd/dist/antd.css';



class Dashboard extends Component {
	
	state = {
		show: false,
		tableData: [],
	};

  
  search = (username) => {
	$.ajax({url: `http://localhost:8080/demo/all?username=${username}`,
	  dataType: 'jsonp', crossDomain: true,
	  success: function(result){ this.setState({ show: true, tableData: result });}
	});
  }

  render() {
		const columns = [{
		  title: 'Repo Name',
		  dataIndex: 'repoName',
		  key: 'repoName',
		}, {
		  title: 'Created Date',
		  dataIndex: 'createdDate',
		  key: 'createdDate',
		}, {
		  title: 'Rating',
		  dataIndex: 'rating',
		  key: 'rating',
		  render: (value) =>  <Rate value={value} />
		}];
    return (
      <div>
		<Input.Search
		  placeholder="Enter github user name"
		  enterButton="Search"
		  size="large"
		  onSearch={value => this.search(value)}
		/> <br /> <br /> <br />
		{this.state.show && <Table dataSource={this.state.tableData} columns={columns} />}
      </div>
    );
  }
}

export default Dashboard;
