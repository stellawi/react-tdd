import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';
import mapChooser from '../mapChooser';
import axios from 'axios';

class StoreLocator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMap: 'none.png',
      shops: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get('http://localhost:3000/data/shops.json');
    this.setState({ shops: response.data.shops });
  }

  chooseMap = (e) => {
    const location = e.target.value;
    this.setState({ currentMap: mapChooser(location) });
  }

  renderButton = () => {
    return (
      this.state.shops.map((shop, id) => <Button
        key={id}
        location={shop.location}
        handleClick={this.chooseMap} />))
  };

  render() {
    return (<div>
      <Header />
      {this.renderButton()}
      <Map imageName={this.state.currentMap} location={this.props.location} />
    </div>);
  }
}

export default StoreLocator;