import React from 'react'
import "./home.css"
import Featured from "../../components/Featuredinfo/featuredinfo";
import Chart from "../../components/chart/Chart"
import { userData } from '../../dummyData';
import WidgetLg from '../../components/widgetLg copy/WidgetLg';
import WidgetSm from '../../components/widgetSm/widgetSm';

const Home = () => {
  return (
    <div className="home">
      <Featured/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home
