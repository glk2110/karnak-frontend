import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux'

const Dashboard: FunctionComponent = (props: any) => {
    return (
      <div>
        {props.gameList}
      </div>  
	);
}

const mapStateToProps = ({ gameList }: any) => ({gameList})


export default connect(mapStateToProps)(Dashboard);
