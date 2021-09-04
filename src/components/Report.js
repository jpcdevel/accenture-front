import React from "react"
import 'antd/dist/antd.css';
import TestControl from "./TestControl";

class TableControl extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class={"mainDash mainContainer"}>
                <div className="portfolioOverview d-block mt-2 test">
                    <TestControl/>
                </div>
            </div>
        )
    }
}

export default TableControl;
