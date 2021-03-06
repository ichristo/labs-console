import React from 'react';
import ListGroup from './ListGroup';

class AppListView extends React.Component {
  static propTypes = {
    handleAppClick: React.PropTypes.func,
    handleDelete: React.PropTypes.func
  };

  static unbind() {
    $('.list-group-item').off('click');
  }

  componentDidMount() {
    this.bindClick();
  }

  componentDidUpdate() {
    AppListView.unbind();
    this.bindClick();
  }

  componentWillUnmount() {
    AppListView.unbind();
  }

  bindClick() {
    $('.list-group-item.app-group-item').click((e) => {
      // check if clicked element is not our "Build" <button>
      if (!$(e.target).is('button')) {
        this.props.handleAppClick(e, $(e.currentTarget).attr('data-id'));
      }
    });
  }

  render() {
    return (
      <ListGroup>
        {this.props.apps.map((app, i) => (
          <div className="list-group-item app-group-item" key={i} data-id={i}>

            <div className="list-view-pf-actions">
              <button className="btn btn-default"
                onClick={(e) => {
                  this.props.handleDelete(e, i);
                }}>
                Delete
              </button>
            </div>

            <div className="list-view-pf-main-info">
              <div className="list-view-pf-left">
                <span className="fa fa-bolt list-view-pf-icon-sm"/>
              </div>
              <div className="list-view-pf-body">
                <div className="list-view-pf-description">
                  <div className="list-group-item-heading blue-text">
                    {app.name}
                  </div>
                  <div className="list-group-item-text">
                    {app.base_image}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ListGroup>
    );
  }
}

export default AppListView;
