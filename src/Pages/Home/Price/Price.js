import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';

const Price = () => {
    return (
        <div style={{ backgroundColor: "#EBE9DF" }}>
            <Row id="price-list">
                <Col lg={6}>
                    <div className="container" >
                        <h2>Campground price list</h2>
                        <Table responsive="md">
                            <thead>
                                <tr>
                                    <th>PRICE LIST (Year 2021)</th>
                                    <th>LOW SEASON</th>
                                    <th>HIGH SEASON</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Family</td>
                                    <td>15.00$</td>
                                    <td>17.00$</td>
                                </tr>
                                <tr>
                                    <td>Couple</td>
                                    <td>10.00$</td>
                                    <td>15.00$</td>
                                </tr>
                                <tr>
                                    <td>Child</td>
                                    <td>8.00$</td>
                                    <td>12.00$</td>

                                </tr>
                                <tr>
                                    <td>Student</td>
                                    <td>5.00$</td>
                                    <td>5.00$</td>
                                </tr>
                                <tr>
                                    <td>Teacher</td>
                                    <td>10.00$</td>
                                    <td>10.00$</td>
                                </tr>
                                <tr>
                                    <td>Pet</td>
                                    <td>free</td>
                                    <td>free</td>

                                </tr>
                                <tr>
                                    <td>Electricity</td>
                                    <td>5.00$</td>
                                    <td>8.00$</td>

                                </tr>
                                <tr>
                                    <td>Internet connection</td>
                                    <td>free</td>
                                    <td>free</td>

                                </tr>
                                <tr>
                                    <td>Ride</td>
                                    <td>10.00$</td>
                                    <td>12.00$</td>

                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
                <Col lg={6}>
                    <div>
                        <img className="w-100" src="https://i.ibb.co/Pr2m3rp/2-Luxery-Tent.jpg" alt="" />
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default Price;