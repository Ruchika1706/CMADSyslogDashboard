import React from "react";
class LogTable extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        
        }
    }
    renderTableHeader(){

    }
    renderTableData(){

    }
    renderTableRows(){

    }
    renderTableCols(){

    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th> MSG_ID </th>
                            <th> TIME </th>
                            <th> LOG_LEVEL </th>
                            <th> HOST_NAME </th>
                            <th> SERVICE_TYPE </th>
                            <th> CONTENT </th>
                        </tr>
                    </thead>
                </table>
                <tr>{this.renderTableHeader()}</tr>
                <tr>{this.renderTableData()}</tr>
            </div>

        );
    }
}
export default LogTable;