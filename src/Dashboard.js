import React from 'react';
import { connect } from 'react-redux'

const Dashboard = (props) => {
    return (
      <div>
        {props.gameList}
      </div>  
	);
}

const mapStateToProps = ({ gameList }) => ({gameList})


export default connect(mapStateToProps)(Dashboard);
