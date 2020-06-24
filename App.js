import React, {Component} from 'react';
import {Container, Button, Text} from "native-base"

class App extends Component {

    constructor() {
        super();
        this.state = {
            dateValue:"my data"
        }
    }




    render() {
        return (
            <Container>
                <Button>
                    <Text>Save</Text>
                </Button>
            </Container>
    );
    }
}

export default App;
