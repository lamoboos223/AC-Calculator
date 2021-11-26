import React from "react";
import Card from "react-bootstrap/Card";
import { Button} from 'react-bootstrap';
import AC from './ac.jpg'
import Light from './light.jpg'

export default class acCalculator extends React.Component {

    constructor() {
        super();
        this.state = {
          result: ""
        };
    }

    calculateAC = e => {
        // console.log(e.target);
        // console.log(e.target.value);
        const rx = document.getElementById('rx').value;
        const ry = document.getElementById('ry').value;
        const rz = document.getElementById('rz').value;

        var r = Math.round(rx * ry * rz * 300 / 12000)
        this.setState({result:r + "طن"});
    }

    render(){
        return(
            <div className="d-flex justify-content-around">
                <Card style={{display: 'flex', flexDirection: 'row'}}>
                    <Card style={{ width: '50%' }}>
                        <Card.Img variant="top" src={ AC } />
                        <Card.Body>
                            <Card.Title>تكييف مخفي</Card.Title>
                            <Card.Text>لحساب التكييف المخفي لمكان ما يجب توفير طول المكان وعرضه وارتفاعه وما اذا كان المكان معرض للشمس ام لا</Card.Text>
                            <div>
                                <input id="rx" type="number" placeholder="طول الغرفة"/>
                                <br/>
                                <input id="ry" type="number" placeholder="عرض الغرفة"/>
                                <br/>
                                <input id="rz" type="number" placeholder="ارتفاع الغرفة"/>
                                <br/>
                            </div>
                            <Button variant="primary" onClick={e => this.calculateAC(e)}>احسب</Button>
                            <br/>
                            <p>{this.state.result}</p>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '50%' }}>
                        <Card.Img variant="top" src={ Light } />
                        <Card.Body>
                            <Card.Title>اضاءة</Card.Title>
                            <Card.Text></Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Card>
                
                
            </div>  
        )
    }
}