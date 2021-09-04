import React from "react"
import {Card, Col, Row} from "antd";
import 'antd/dist/antd.css';

class TableControl extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div class={"mainDash mainContainer"}>
                    <div className="report d-block mt-2">
                        <h1>Общий Отчет</h1>
                        <span class={"text-report-notify"}><b>Портфель: </b> Высоко-рисковые облигации</span>
                        <span class={"text-report-notify"}>Создан: 12.03.13</span>

                    </div>
                    <Row>
                        <Col span={6}>
                            <Card bordered={false}>
                                 <div>
                                    <span style={{fontWeight: "bold"}}>110$</span> <span>Обьем счета</span>
                                </div>
                                <div>
                                    <span style={{fontWeight: "bold"}}>+80%</span> <span>Средняя доходность(CAGR)</span>
                                </div>
                                <div>
                                    <span style={{fontWeight: "bold"}}>11</span> <span>Коэффициент Шарпа(SR)</span>
                                </div>
                                <div>
                                    <span style={{fontWeight: "bold"}}>-0.3</span> <span>Корреляция всех бумаг</span>
                                </div>
                            </Card>
                        </Col>
                        <Col span={1}>
                            <div style={{borderLeft: "3px solid #DBDBDB", height: "100%"}}>
                            </div>
                        </Col>
                        <Col span={5}>
                            <Card bordered={false}>
                                <h2>Операции</h2>
                                <div>
                                    <span style={{fontWeight: "bold"}}>130</span> <span>Сделок закрыто</span>
                                </div>
                                <div>
                                    <span style={{fontWeight: "bold"}}>75</span> <span>Инструментов куплено</span>
                                </div>
                                <div>
                                    <span style={{fontWeight: "bold"}}>55</span> <span>Инструментов продано</span>
                                </div>
                                <div>
                                    <span style={{fontWeight: "bold"}}>+112%</span> <span>Общая доходность</span>
                                </div>
                            </Card>
                        </Col>
                        <Col span={7}>
                            <Card bordered={false}>
                                <h2>Результаты</h2>
                                <div>
                                    <span style={{fontWeight: "bold"}}>+112%</span> <span>Общая доходность</span>
                                </div>
                                <div>
                                    <span style={{fontWeight: "bold"}}>+0.3%</span> <span>Средняя доходность бумаги</span>
                                </div>
                                <div>
                                    <span style={{fontWeight: "bold"}}>+3%</span> <span>Доходность против рынка(S&P 500)</span>
                                </div>
                                <div>
                                    <span style={{fontWeight: "bold"}}>-5%</span> <span>Доходность против рынка(Nasdaq)</span>
                                </div>
                            </Card>
                        </Col>
                        <Col span={5}>
                            <Card bordered={false}>
                                <h2>Портфель</h2>
                                <div>
                                    <span style={{fontWeight: "bold"}}>14</span> <span>Активов в протфеле</span>
                                </div>
                                <div>
                                    <span style={{fontWeight: "bold"}}>Облигация</span> <span>Самый популярный актив</span>
                                </div>
                                <div>
                                    <span style={{fontWeight: "bold"}}>38%</span> <span>Общий риск портфеля</span>
                                </div>
                                <div>
                                    <span style={{fontWeight: "bold"}}>25%</span> <span>Средний риск бумаги</span>
                                </div>
                            </Card>
                        </Col>

                    </Row>
                </div>
            </>
        )
    }
}

export default TableControl;
