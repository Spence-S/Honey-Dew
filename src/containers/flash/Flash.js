import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class Flash extends Component{
  componentDidMount = () => {
    //provides event listener for outside component click
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount = () => {
    //removes the event listener on unmount
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleOutsideClick = (e) => {
    if(!ReactDOM.findDOMNode(this).contains(e.target)){
      this.props.offClick();
    }
  }

  render(){
    let style = `panel panel-${this.props.style}`;
    return(
      <div className={!this.props.show ? 'hidden' : ''}>
        <div className={style}>
          <div className="panel-heading">
            <h3 className='panel-title'>{this.props.style.toUpperCase()}</h3>
          </div>
          <div className='panel-body'>
            {this.props.message}
          </div>
        </div>
      </div>
    );
  }
}

export default Flash;
