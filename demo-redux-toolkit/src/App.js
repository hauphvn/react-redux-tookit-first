import React, {useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {Button, ButtonToolbar, Container, Content, Divider, FlexboxGrid, Form, Header, Navbar, Panel} from "rsuite";
import FormGroup from "rsuite/FormGroup";
import FormControl from "rsuite/FormControl";
import {useDispatch} from 'react-redux'
import {add} from './features/todos/todosSlice'
import Todos from './features/todos/Todos'
function App() {
  const [inputTodo, setInputTodo] = useState('')
  const dispatch = useDispatch()
  const handleAdd = () => {
    dispatch(add({id: Math.random(), value: inputTodo}))
    setInputTodo('')
  }
  console.log('app render')
  return (
    <div className="App">
      <Container>
        <Header>
          <Navbar appearance={"inverse"}>
            <Navbar.Header>
              <p>Redux React TODO</p>
            </Navbar.Header>
          </Navbar>
        </Header>
        <Content>
          <FlexboxGrid justify={"center"}>
            <FlexboxGrid.Item colspan={12}>
              <Panel header={<h3>Add ToDo</h3>} bordered>
                <Form fluid>
                  <FormGroup>
                    {/*<ControlLabel>What you want to do?</ControlLabel>*/}
                    <FormControl
                        name={'task'}
                        value={inputTodo}
                        onChange={setInputTodo}
                    />
                  </FormGroup>
                  <FormGroup>
                    <ButtonToolbar>
                      <Button
                          onClick={handleAdd}
                          appearance="primary"
                      >
                        Create
                      </Button>
                    </ButtonToolbar>
                  </FormGroup>
                </Form>
              </Panel>
              <Divider />
              <Todos/>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
      </Container>
    </div>
  );
}

export default App;
