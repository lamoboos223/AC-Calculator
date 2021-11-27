import React from "react";
import Card from "react-bootstrap/Card";
import { Button} from 'react-bootstrap';

import AC from './ac.jpg'
import Light from './light.jpg'


export default class acCalculator extends React.Component {

    constructor() {
        super();
        this.state = {
          result: 0,
          rx: 0,
          ry: 0,
          rz: 0,
          acDescription: "لحساب التكييف المخفي لمكان ما يجب توفير طول المكان وعرضه وارتفاعها"
        };
    }

    calculateAC = e => {
        const rx = this.state.rx;
        const ry = this.state.rx;
        const rz = this.state.rx;
        var r = Math.round(rx * ry * rz * 300 / 12000)
        if(r < 1){
            r = rx * ry * rz * 300 / 12000
        }
        this.setState({result:r + "طن"});
    }

    updateValue = e => {
        var name = e.target.name;
        var value = e.target.value;
        if(name === "rx"){
            this.setState({"rx":value});
        }
        else if(name === "ry"){
            this.setState({"ry":value});
        }
        else{
            this.setState({"rz":value});
        }
    }

    render(){
        return(
            <div>
                <Card style={{
                     display: 'flex',
                     flexDirection: 'row',
                     backgroundColor: "#eee",
                     float: "left",
                     padding: 16,
                     minHeight: 40,
                     alignItems: "left",
                     textAlign: "center"}}>
                    <Card style={{
                        padding: 16,
                        border: "groove"
                    }}>
                        <Card.Img variant="top" src={AC} />
                        <Card.Body>
                            <Card.Title>تكييف مخفي</Card.Title>
                            <Card.Text>{this.state.acDescription}</Card.Text>
                            <div>
                                <input name="rx" type="number" min="1" placeholder="طول الغرفة" onChange={e => this.updateValue(e)}/>
                                <br/>
                                <input name="ry" type="number" min="1" placeholder="عرض الغرفة" onChange={e => this.updateValue(e)}/>
                                <br/>
                                <input name="rz" type="number" min="1" placeholder="ارتفاع الغرفة" onChange={e => this.updateValue(e)}/>
                                <br/>
                            </div>
                            <Button variant="primary" onClick={e => this.calculateAC(e)}>احسب</Button>
                            <br/>
                            <p>{this.state.result}</p>
                        </Card.Body>
                    </Card>
                    <Card style={{
                        padding: 16,
                        border: "groove"
                    }}>
                        <Card.Img variant="top" src={Light} />
                        <Card.Body>
                            <Card.Title>اضاءة</Card.Title>
                            <Card.Text></Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{
                        padding: 16,
                        border: "groove"
                    }}>
                        <Card.Img variant="top" src={Light} />
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