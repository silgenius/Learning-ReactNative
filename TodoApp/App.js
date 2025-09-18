import React from 'react'
import { StyleSheet, Text, View, ScrollView, Button, Switch } from 'react-native';

const Todo = props => (
  <View style={[styles.container, styles.todoContainer]}>
    <Switch value={props.todo.checked} onValueChange={props.onToggle} />
    <Button onPress={props.onDelete} title='Delete' />
    <Button onPress={props.onRename} title='Rename' />
    <Text>{props.todo.text}</Text>
  </View>
)

let id = 0;
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  addTodo () {
    id += 1;
    const text = `Todo ${id}`;
    this.setState({
      todos: [
        ...this.state.todos,
        { id: id, text: text, checked: false }],
    })
  }

  checkTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return (
          { id: todo.id, text: todo.text, checked: !todo.checked }
        )
      })
    })
  }

  deleteTodo (id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  editTodo(id) {
    const text = `Todo ${id} edited`;
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return { id: todo.id, text: text, checked: todo.checked }
      })
    })
  }

  render() {
    return (
      <View>
        <Text style={[styles.paragraph, {marginTop: 50 }]}> Total TODO Count: {this.state.todos.length} </Text>
        <Text style={styles.paragraph}> Total unchecked TODO Count: {this.state.todos.filter(todo => todo.checked !== true).length} </Text>
        <Button onPress={() => this.addTodo()} title='Add todo' />
        <ScrollView>
          {this.state.todos.map(todo => (
            <Todo
              onDelete={() => this.deleteTodo(todo.id)}
              onRename={() => this.editTodo(todo.id)}
              onToggle={() => this.checkTodo(todo.id)}
              todo={todo} />
          ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  todoContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
