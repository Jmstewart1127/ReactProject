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
      employeeData: [],
      clockStatus: false,
    }
  }

  setEmployeeData = () => {
    const employeeData = [];
    fetch('https://spring-clock.herokuapp.com/rest/get/all/employees/2')
      .then((response) => response.json())
      .then((responseJson) => {
        for (let i = 0; i < responseJson.length; i++) {
          employeeData.push(responseJson[i]);
          this.setState({
            employeeData: employeeData
          })
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount() {
    this.setEmployeeData();
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
              {this.state.employeeData.map((employee) => (
                <TableRow key={employee} selectable={false}>
                  <TableColumn>{employee.id}</TableColumn>
                  <TableColumn>{employee.user}</TableColumn>
                  <TableColumn>{employee.payRate}</TableColumn>
                  <TableColumn>{employee.weeklyPay}</TableColumn>
                  <TableColumn>{employee.clocked.toString()}</TableColumn>
                  <Button raised primary iconClassName="fa fa-hand-spock-o">Spock</Button>
                </TableRow>
              ))}
            </TableBody>
          </DataTable>
        </Cell>
      </Grid>
      </div>
    );
  }
}