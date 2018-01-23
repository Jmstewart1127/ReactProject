import React, { Component } from 'react';
import {
  DataTable,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
  TablePagination,
  Button,
  Grid,
  Cell,
} from 'react-md';

const headers = ['Id', 'Name', 'Rate', 'Period Pay', 'Clocked In'];

export default class EmployeeTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      businessData: [],
      clockStatus: false,
    }
  }

  setBusinessData = () => {
    let id = localStorage.getItem('id');
    const data = [];
    fetch('https://spring-clock.herokuapp.com/rest/user/' + id + '/businesses')
      .then((response) => response.json())
      .then((responseJson) => {
        for (let i = 0; i < responseJson.length; i++) {
          data.push(responseJson[i]);
          this.setState({
            businessData: data,
          })
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  clockEmployeeInOrOut = employeeId => {
    fetch('https://spring-clock.herokuapp.com/rest/web/clock/in/out/' + employeeId)
      .then(() => {
        this.setEmployeeData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount() {
    this.setBusinessData();
  }

  render() {
    return(
      <div className="employee-table">
        <Grid>
          <Cell className="table-cell" size={10}>
            <DataTable>
              <TableHeader>
                <TableRow selectable={false}>
                  {headers.map(header => <TableColumn key={header}>{header}</TableColumn>)}
                </TableRow>
              </TableHeader>
              <TableBody>
                { this.state.businessData.map((business) => {
                  const handleClockInOut = () => {
                    this.clockEmployeeInOrOut(business.id);
                  };
                  return(
                    <TableRow key={business} selectable={false}>
                      <TableColumn>{business.id}</TableColumn>
                      <TableColumn>{business.bizName}</TableColumn>
                      <Button
                        raised primary
                        onClick={handleClockInOut}
                        conClassName="fa fa-hand-spock-o"
                      >Clock In/Out</Button>
                    </TableRow>
                  );
                })}
              </TableBody>
            </DataTable>
          </Cell>
        </Grid>
      </div>
    );
  }
}