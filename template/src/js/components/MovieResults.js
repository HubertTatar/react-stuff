var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Movie = require('./Movie');

var MovieResults = React.createClass({
	render: function(){
		return(
			<div>
                <h3 className="textCenter">Results</h3>
                {
                    this.props.movies.map(function(movie, i){
                        return(
                            <Movie movie={movie} key={i} />
                        )
                    })
                }
			</div>
		)
	}
});

module.exports = MovieResults;