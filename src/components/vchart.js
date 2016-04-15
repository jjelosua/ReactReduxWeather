import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';
import _ from 'lodash';

function average(data) {
    //return data.reduce((a, b) => a + b, 0) / data.length
    return _.round(_.sum(data, d => d.y)/ data.length);
}

export default (props) => {
    return (
        <div className='chart'>
            <VictoryChart 
                padding={{top: 10, bottom: 30, left: 35, right: 35}}
                width={200} 
                height={150}>
                <VictoryAxis
                style={{tickLabels: {fontSize: 8, padding: 5}}}
                tickValues={[
                  new Date(props.data[0].x),
                  new Date(props.data[(props.data.length-1)].x)
                ]}
                tickCount={2}
                tickFormat={(x) => x.toLocaleString('es-ES')}/>
                <VictoryLine 
                    data={props.data} 
                    style={{data: {stroke: props.color, strokeWidth: 2} }}/>
            </VictoryChart>
            <div className='legend'>
                Avg: {average(props.data)}
                <span className='units'>{props.units}</span>
            </div>
        </div>
    );
};