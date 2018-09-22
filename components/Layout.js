import Layout from '../components/MyLayout.js';

export default class Layout {
  render(){
    return (
      <div className="Layout">
        {this.props.children}
      </div>
    );
  }
}
