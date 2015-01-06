var React = require('react');
var Router = require('react-router');
var {Route, DefaultRoute, RouteHandler, Link} = require('react-router');
var Home = require('./home');
var About = require('./about');

var App = React.createClass({
  render: function () {
    return (
      <div className="grid-frame vertical">
        <div className="grid-content shrink" style={{padding: 0}}>
          <ul className="primary condense menu-bar">
            <li><a><strong>React Foundation Apps</strong></a></li>
            <li><Link to="home">Home</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </div>
        <div className="grid-content">
          <div className="grid-container">
            <RouteHandler />
          </div>
        </div>
      </div>
    );
  }
});

var routes = (
  <Route name='app' path='/' handler={App}>
    <Route name='home' handler={Home}/>
    <Route name='about' handler={About}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});