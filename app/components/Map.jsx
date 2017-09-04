var React = require('react')

var Map = React.createClass({
  componentDidMount: function () {
    this.componentDidUpdate()
  },
  componentDidUpdate: function () {
    var map = new GMaps({
      el: '#map',
      lat: this.props.lat,
      lng: this.props.lng
    })
    map.addMarker({
      lat: this.props.lat,
      lng: this.props.lng,
      label: 'M'
    })
  },
  render: function () {
    return (
      <div id='map' />
    )
  }
})

module.exports = Map
