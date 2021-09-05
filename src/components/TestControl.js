
import React, {useContext} from "react";
import {Card, Col, Row} from "antd";

import ReportItem from "./ReportItem";
import {PortfolioContext} from "./MainDash";

function TestControl(props) {
    const {currentPortfolio} = useContext(PortfolioContext)
    return (
        <>
            <div class={"portfolioOverview d-block mt-2"}>
                <div className={"report-header"}>
                    <h1>Общий Отчет</h1>
                    <h6><b>Портфель:</b> Высоко-рисковые облигации</h6>
                    <h7><b>Создан: </b> 12.03.13</h7>
                </div>
                <Row>
                    <Col span={6}>
                        <Card bordered={false}>
                            <ReportItem value={currentPortfolio.cost + "$"} description={"Обьем счета"} font_size={25}/>
                            <ReportItem value={"+80%"} description={"Средняя доходность(CAGR)"} font_size={25}/>
                            <ReportItem value={Math.round((currentPortfolio.capm - 6) / currentPortfolio.volatility, 1)} description={"Коэффициент Шарпа(SR)"} font_size={25}/>
                            <ReportItem value={"-0.3"} description={"Корреляция всех бумаг"} font_size={25}/>
                        </Card>
                    </Col>
                    <Col span={1}>
                        <div style={{borderLeft: "3px solid #DBDBDB", height: "100%"}}>
                        </div>
                    </Col>
                    <Col span={5}>
                        <Card bordered={false}>
                            <h2>Операции</h2>
                            <ReportItem value={"130"} description={"Сделок закрыто"}/>
                            <ReportItem value={"75"} description={"Инструментов куплено"}/>
                            <ReportItem value={"55"} description={"Инструментов продано"}/>
                            <ReportItem value={"+112%"} description={"Общая доходность"}/>
                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card bordered={false}>
                            <h2>Результаты</h2>
                            <ReportItem value={"+112%"} description={"Общая доходность"}/>
                            <ReportItem value={"+0.3%"} description={"Средняя доходность бумаги"}/>
                            <ReportItem value={"+3%"} description={"Доходность против рынка(S&P 500)"}/>
                            <ReportItem value={"-5%"} description={"Доходность против рынка(Nasdaq)"}/>
                        </Card>
                    </Col>
                    <Col span={5}>
                        <Card bordered={false}>
                            <h2>Портфель</h2>
                            <ReportItem value={"14"} description={"Активов в протфеле"}/>
                            <ReportItem value={"Облигация"} description={"Самый популярный актив"}/>
                            <ReportItem value={"38%"} description={"Общий риск портфеля"}/>
                            <ReportItem value={"25%"} description={"Средний риск бумаги"}/>
                        </Card>
                    </Col>

                </Row>
            </div>
        </>
    )
}

export default TestControl;