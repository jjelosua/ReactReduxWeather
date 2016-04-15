import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
    //return data.reduce((a, b) => a + b, 0) / data.length
    return _.round(_.sum(data)/ data.length);
}

export default (props) => {
    return (
        <div className='chart'>
            <Sparklines data={props.data} width={180} height={120}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div className='legend'>
                {average(props.data)}
                <span className='units'>{props.units}</span>
            </div>
        </div>
    );
};