import ChartBar from './ChartBar.js';
import './Chart.css';

const Chart = (props) => {
   //find max value of object (value field)
   const maxvalueArr = props.dataPoints.map((data) => data.value);
   const totalMax = Math.max(...maxvalueArr);
   return (
      <div className='chart'>
         {props.dataPoints.map((dataPoint) => (
            <ChartBar
               key={dataPoint.id}
               label={dataPoint.label}
               value={dataPoint.value}
               maxValue={totalMax}
            />
         ))}
      </div>
   );
};
export default Chart;
