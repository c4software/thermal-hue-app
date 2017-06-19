import React, {Component} from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid} from "recharts";
import {indigo500} from "material-ui/styles/colors";

class GraphHistory extends Component{
  render = () => {
    return (
      <ResponsiveContainer height="100%">
      	<LineChart isAnimationActive={false} data={this.props.data} margin={{ top: 12, right: 0, left: 0, bottom: 0 }}>
         <XAxis hide={true} height={20} dataKey="key" />
         <CartesianGrid strokeDasharray="3 3" />
         <Tooltip />
         <YAxis width={40} tickFormatter={(v) => v.toFixed(1)} allowDecimals={false} domain={['dataMin - 1', 'dataMax + 1']} />
         <Line dot={false} type="monotone" dataKey="value" stroke={indigo500} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default GraphHistory;
