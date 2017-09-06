var React = require('react')
var stores = require('../data/stores')
var findElement = require('../helpers/findElement')

var CurrentLocation = React.createClass({
    render: function () {
        var store = findElement(stores, this.props.storeId) 

        if (store) {
            return (
                <div className="currentlocation">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    {store.title}
                </div>
            )
        }

        return (
            <div className="currentLocation">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                No store selected
            </div>
        )
    }
})

module.exports = CurrentLocation
