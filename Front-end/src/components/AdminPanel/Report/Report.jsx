import "./Report.css";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabStyle = {
  fontFamily: "Arial",
  fontWeight: "600",
  color: "#333",
};

const Report = () => {
  return (
    <div className="reportContainer">
      <Tabs>
        <TabList>
          <Tab style={TabStyle}>Todays Orders</Tab>
          <Tab style={TabStyle}>All Orders</Tab>
          <Tab style={TabStyle}>Specific Date</Tab>
        </TabList>

        <TabPanel>
          {/* THIS TAB CONTAIN TODAYS ORDERS */}
          <div style={{ margin: "20px 0px" }}>
            <div className="datepicker">
              <h3>Todays list:</h3>
              <button className="reportBtn">Get Report</button>
            </div>
            <table className="adminTable" cellSpacing="8">
              <thead>
                <tr className="admintableheader">
                  <th>Date</th>
                  <th>Table no</th>
                  <th>Order</th>
                  <th>Total Bill</th>
                </tr>
              </thead>
              <tbody className="adminTbody">
                {/* here comes dummy data */}
                <tr>
                  <td>2-5-2021</td>
                  <td>Table 1</td>
                  <td>MALAI BOTI</td>
                  <td>575</td>
                </tr>
                <tr>
                  <td>2-5-2021</td>
                  <td>Table 2</td>
                  <td>GREEN TIKKA , peri , peri , peri , peri , peri , peri</td>
                  <td>641</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>

        <TabPanel>
          {/* THIS TAB CONTAIN ALL ORDERS */}
          <div style={{ margin: "20px 0px" }}>
            <div className="datepicker">
              <h3>All list:</h3>
              <button className="reportBtn">Get Report</button>
            </div>
            <table className="adminTable" cellSpacing="8">
              <thead>
                <tr className="admintableheader">
                  <th>Date</th>
                  <th>Table no</th>
                  <th>Order</th>
                  <th>Total Bill</th>
                </tr>
              </thead>
              <tbody className="adminTbody">
                {/* here comes dummy data */}
                <tr>
                  <td>2-5-2021</td>
                  <td>Table 1</td>
                  <td>MALAI BOTI</td>
                  <td>575</td>
                </tr>
                <tr>
                  <td>2-5-2021</td>
                  <td>Table 2</td>
                  <td>GREEN TIKKA , peri , peri , peri , peri , peri , peri</td>
                  <td>641</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>

        <TabPanel>
          {/* THIS TAB CONTAIN SPECIFIC DATE ORDERS */}
          <div className="datepicker" style={{marginTop:'20px'}}>
              <h3>Selected list:</h3>
              <div>
                <input id="date" type="date" />
                <button className="reportBtn">Get Report</button>
              </div>
          </div>
          <div style={{ margin: "0px 0px 20px 0px"}}>
            <table className="adminTable" cellSpacing="8">
              <thead>
                <tr className="admintableheader">
                  <th>Date</th>
                  <th>Table no</th>
                  <th>Order</th>
                  <th>Total Bill</th>
                </tr>
              </thead>
              <tbody className="adminTbody">
                {/* here comes dummy data */}
                <tr>
                  <td>2-5-2021</td>
                  <td>Table 1</td>
                  <td>MALAI BOTI</td>
                  <td>575</td>
                </tr>
                <tr>
                  <td>2-5-2021</td>
                  <td>Table 2</td>
                  <td>GREEN TIKKA , peri , peri , peri , peri , peri , peri</td>
                  <td>641</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Report;
