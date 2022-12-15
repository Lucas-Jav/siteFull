import { Component } from "./Component.js";

export class TxtContent extends Component {
    constructor( tag, text, parent, options ) {
        super( tag, parent, Object.assign({}, options, { textContent: text }));
        
    }
}