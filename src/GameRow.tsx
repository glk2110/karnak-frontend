import React from 'react';
import { connect } from 'react-redux'
import updateGameList from './actionCreators/updateGameList'
import { RouteComponentProps } from '@reach/router'

class GameRow extends React.Component<RouteComponentProps<{gameList: string[], id: string, away_team: string, home_team:string, changeGameList: any}>> {
    render() {
        const gameList = this.props.gameList
        const id = this.props.id

        if(!gameList || !id){
          return;
        }
        var index = gameList.indexOf(id);
        
        const removeFromList = (list: string[], index: number) => {
          if(index > -1){
            list.splice(index, 1)
          }
          return [...list]
        }

        return (<label>
                  <input id={id.toString()}
                         type="checkbox" 
                         onClick={e => gameList.includes(id) ?
                          this.props.changeGameList(
                            removeFromList(gameList, index)
                          ) :
                          this.props.changeGameList(
                            gameList.concat(
                              id
                            ))
                        }
                  /> 
                  {this.props.away_team}------------ at -------------{this.props.home_team} 
                </label>
    )
      }
}

const mapStateToProps = ({ gameList }: any) => ({ gameList });
const mapDispatchToProps = (dispatch: any) => ({ 
	changeGameList(gameList: string[]) {
		dispatch(updateGameList(gameList))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(GameRow);
