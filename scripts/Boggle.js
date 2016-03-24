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
        
        this.state = {
            current_word_length: 0,
            current_word: ""
        }
    }
    
    handleTileClick(letter) {
        this.setState({ current_word += letter })
    }
    
    render() {
        var items = this.props.tiles.map(function (tile) {
            return (
                <Tile key={tile.position} tile={tile} />
            )
        })
        
        return (
            <div className="tileBoard">
                {items}
                <CurrentWord currentword={this.state.current_word} currentLength={this.state.current_word_length} />
            </div>
        );
    }
}

export default class Tile extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            isActive: false // no tiles selected at start
        }
        
        this.handleTileClick = this.handleTileClick.bind(this)
    }
    
    // Emit tile clicked and letter clicked
    handleTileClick(e) {
        // Toggle between active and !active
        let active = !this.state.isActive
        this.setState({ isActive: active })
        
        console.log("Tile clicked, letter is: " + this.props.tile.letter)
        
        // Update CurrentWord
        // Update tile linkedlist to track current words
        // Change className to change color
    }
    
    render() {
        
        return (
            <div className="tile" 
                 onClick={this.handleTileClick} >
                {this.props.tile.letter}
            </div>
        )
    }
}

export default class CurrentWord extends Component {
    
    render() {
        return (
            <div className="currentWord">
                Current Word: {this.props.currentword}
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
    
    constructor(props) {
        super(props)
        
        this.handleClick = this.handleClick.bind(this)
        
    }
    
    handleClick() {
        
    }
    
    render() {
        return (
            <input className="submit" type="submit" value="Submit Word" onClick={this.handleClick}/>
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
            tiles: random_dice,
            submitted: false
        }
        
        
    }
    
    submitHandler() {
        // Get currently selected letters, check against dict and score
    }
    
    render() {        
        return (
            <div>
                <Header text=""/>
                <TileBoard tiles={this.state.tiles} />
                <SubmitButton submitHandler={this.state.submitted} />
                <PastWordTable />                
            </div>
        );
    }
}