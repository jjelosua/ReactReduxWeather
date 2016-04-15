import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';
import _ from 'lodash';

function average(data) {
    //return data.reduce((a, b) => a + b, 0) / data.length
    return _.round(_.sum(data, d => d.y)/ data.length);
}

export default (props) => {
    return (
        <div className='chart'>
            <VictoryChart padding={25} width={200} height={150}>
                <VictoryLine 
                    data={props.data} 
                    style={{data: {stroke: props.color, strokeWidth: 2} }}/>
            </VictoryChart>
            <div className='legend'>
                {average(props.data)}
                <span className='units'>{props.units}</span>
            </div>
        </div>
    );
};