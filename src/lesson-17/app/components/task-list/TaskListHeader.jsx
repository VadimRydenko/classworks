import * as React from 'react';
import {Ajax} from '../../utils/Ajax.js';

export class TaskListHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      title: ''
    }
  }
  submitHandler(e) {
    e.preventDefault();
    Ajax.post(
      'http://localhost:4001/list',
      this.state,
      (data) =>{
        this.setState({title:''});
        this.props.onSuccessSubmit(data);
      },
      (e) => {
        throw new Error(e);
      }
    );
  }

  changeHandler(e) {
    const value = e.target.value;
    this.setState({
      title: value
    })
  }

  render() {
    return <form className="task-list__header" onSubmit={this.submitHandler.bind(this)}>
      <h1 className="task-list__title">TASKS</h1>
      <div className="task-list__input">
        <input type="text"
         value={this.state.title} 
         className="task-list__native-input" 
         onChange={this.changeHandler.bind(this)}/>
      </div>
    </form>
  }
}