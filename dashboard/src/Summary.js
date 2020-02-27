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
        		<label for="Fatal" class="logLevellabel">Fatal : {this.entries.FATAL}</label>
        		:<label for="Fatal" class="logLevellabel">Fatal :0</label>
        		}
        {this.entries.ERROR ?
        		<label for="Error" class="logLevellabel">Error : {this.entries.ERROR}</label>
        		:<label for="Error" class="logLevellabel">Error :0</label>
        		}
        {this.entries.WARNING ?
        		<label for="Warn" class="logLevellabel">Warn : {this.entries.WARNING}</label>
        		:<label for="Warn" class="logLevellabel">Warn :0</label>
        		}
        {this.entries.INFO ?
        		<label for="Info" class="logLevellabel">Info : {this.entries.INFO}</label>
        		:<label for="Info" class="logLevellabel">Info :0</label>
        		}
        {this.entries.DBUG ?
        		<label for="Debug" class="logLevellabel">Debug : {this.entries.DEBUG}</label>
        		:<label for="Debug" class="logLevellabel">Debug :0</label>
        		}
        {this.entries.TRACE ?
        		<label for="Trace" class="logLevellabel">Trace : {this.entries.TRACE}</label>
        		:<label for="Trace" class="logLevellabel">Trace :0</label>
        		}
        {this.entries.NOTICE ?
        		<label for="Notice" class="logLevellabel">Notice : {this.entries.NOTICE}</label>
        		:<label for="Notice" class="logLevellabel">Notice :0</label>
        		}
        
        </div>
        </div>

   

    );
  }

}
export default Summary;
