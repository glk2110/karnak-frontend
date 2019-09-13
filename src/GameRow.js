import React from 'react';
import { connect } from 'react-redux'
import updateGameList from './actionCreators/updateGameList'

class GameRow extends React.Component {
    render() {
        var index = this.props.gameList.indexOf(this.props.id);
        
        const removeFromList = (list, index) => {
          if(index > -1){
            list.splice(index, 1)
          }
          return [...list]

        }
        return (<label>
                  <input id={this.props.id}
                         type="checkbox" 
                         onClick={e => 
                          this.props.gameList.includes(this.props.id) ?
                          this.props.changeGameList(
                            removeFromList(this.props.gameList, index)
                          ) :
                          this.props.changeGameList(
                            this.props.gameList.concat(
                              this.props.id
                            ))
                        }
                  /> 
                  {this.props.away_team}------------ at -------------{this.props.home_team} 
                </label>
    )
      }
}

const mapStateToProps = ({ gameList }) => ({ gameList });
const mapDispatchToProps = dispatch => ({ 
	changeGameList(gameList) {
		dispatch(updateGameList(gameList))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(GameRow);
