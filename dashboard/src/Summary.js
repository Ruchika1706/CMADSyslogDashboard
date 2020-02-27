import * as React from "react";
import ReactDOM from "react-dom";

class Summary extends React.Component {
//   constructor(props) {
//     //   super(...props);
//     debugger;
//       this.entries = props.summaryProps;
//   }
//	constructor(props) {
//		this.props.summaryProps.map((summary, i) => {     
//	           console.log("Entered");                 
//	           // Return the element. Also pass key     
//	           
//	        })}
//	}
	
  render() {
      this.entries = this.props.summaryProps;
    return (
      <div>
        <h3 align="center">Log Level Summary</h3>
 
        <div> {this.entries.FATAL ?
        		<label htmlFor="Fatal" className="logLevellabel">Fatal : {this.entries.FATAL}</label>
        		:<label htmlFor="Fatal" className="logLevellabel">Fatal :0</label>
        		}
        {this.entries.ERROR ?
        		<label htmlFor="Error" className="logLevellabel">Error : {this.entries.ERROR}</label>
        		:<label htmlFor="Error" className="logLevellabel">Error :0</label>
        		}
        {this.entries.WARNING ?
        		<label htmlFor="Warn" className="logLevellabel">Warn : {this.entries.WARNING}</label>
        		:<label htmlFor="Warn" className="logLevellabel">Warn :0</label>
        		}
        {this.entries.INFO ?
        		<label htmlFor="Info" className="logLevellabel">Info : {this.entries.INFO}</label>
        		:<label htmlFor="Info" className="logLevellabel">Info :0</label>
        		}
        {this.entries.DBUG ?
        		<label htmlFor="Debug" className="logLevellabel">Debug : {this.entries.DEBUG}</label>
        		:<label htmlFor="Debug" className="logLevellabel">Debug :0</label>
        		}
        {this.entries.TRACE ?
        		<label htmlFor="Trace" className="logLevellabel">Trace : {this.entries.TRACE}</label>
        		:<label htmlFor="Trace" className="logLevellabel">Trace :0</label>
        		}
        {this.entries.NOTICE ?
        		<label htmlFor="Notice" className="logLevellabel">Notice : {this.entries.NOTICE}</label>
        		:<label htmlFor="Notice" className="logLevellabel">Notice :0</label>
        		}
        </div>
        </div>
    );
  }

}
export default Summary;
