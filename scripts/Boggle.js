import React, {Component} from 'react';
import dice from './dice';


export default class Header extends Component {
  render() {
    
        return (
            <div className="title">{this.props.text}</div>
        );
    }
}

export default class TileBoard extends Component {

    constructor() {
        super()
        
    }

    handleTileClick(e) {
        // Update currentword component string
        console.log("Tile clicked, letter is: " + tile.letter)
        
        // Update tile linkedlist to track current words   
    }
    
    render() {
        var items = this.props.tiles.map(function (tile) {
            return (
                <Tile onClick={tile.handleTileClick} key={tile.position} tile={tile} />
            )
        })
        
        return (
            <div className="tileBoard">
                {items}
            </div>
        );
    }
}

export default class Tile extends Component {
    
    constructor() {
        super()
        
        this.state = {
            isActive: false // no tiles selected at start
        }
    }
    
    handleTileClick() {
        // Toggle between active and !active
        let active = !this.state.isActive
        this.setState({ isActive: active })
        
        // Update CurrentWord
        // Update tile linkedlist to track current words
        // Change className to change color
    }
    
    render() {
        
        return (
            <div className="tile" 
                 onClick={this.props.onClick} >
                {this.props.tile.letter}
            </div>
        )
    }
}

export default class CurrentWord extends Component {
    
    constructor() {
        super()
        
        this.state = {
            current_word: ""
        }
    }
    
    
    render() {
        return (
            <div className="currentWord">
                Current Word: {this.state.current_word}
            </div>
        );
    }
}

export default class PastWordTable extends Component {
    render() {
        return (
            <div>
                <table className="pastWordTable">
                    <tbody>
                        <tr>
                            <th>Word</th>
                            <th>Score</th>
                        </tr>
                        <tr>
                            <PastWordRow />
                        </tr>
                        <tr>
                            <PastWordScore />
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default class PastWordRow extends Component {
    render() {
        return (
            <div>
                <td>Word 1</td>
                <td>Score 1</td>
            </div>
        )
    }
}

export default class PastWordScore extends Component {
    render() {
        return (
            <div>
                <td className="lastrow">Total: </td>
                <td className="lastrow">50</td>
            </div>
        )
    }
}

export default class SubmitButton extends Component {
    
    handleClick() {
        
    }
    
    render() {
        return (
            <input className="submit" type="submit" value="Submit Word"/>
        );
    }
}

export default class Boggle extends Component {
    
    constructor(props) {
        super(props)
        
        // Create randomized tiles
        let random_dice = []
        
        for(let i = 0; i < dice.dice.length; i++) {
            let random = Math.floor(Math.random() * 6)
            let random_letter = dice.dice[i][random]
            
            let obj = {
                position: i+1,
                letter: random_letter
            }
            random_dice.push(obj)
        }
        
        this.state = {
            tiles: random_dice
        }
        
    }
    
    submitHandler() {
        // Get currently selected letters, check against dict and score
    }
    
    render() {        
        return (
            <div>
                <Header text=""/>
                <TileBoard tiles={this.state.tiles}/>
                <CurrentWord />
                <SubmitButton submitHandler={this.submitHandler}/>
                <PastWordTable />                
            </div>
        );
    }
}