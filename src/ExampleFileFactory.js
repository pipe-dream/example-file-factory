 //import { BaseFileFactory } from '@pipe-dream/core'
 
 export default class ExampleFileFactory {//extends BaseFileFactory{
    constructor(arg) {
        //super(arg)
        this.pipes = []
    }

    static get title() {
        return "ExampleFileFactory"
    }

    static templates() {
        return {}
    }

    static version() {
        return require('../package.json').version;
    }

    static settings() {
        return [
            {
                name: "ExampleFileFactory dummy setting",
                default: "Anything here...",
                dataType: String,
            }            
        ]
    }

    static pipes() {
        return [
            
        ]
    }

    static from(objectModelCollection) {
        return new this(objectModelCollection)
    }    

    static defaultPreferences() {
        return {}
    }

    withPipes(pipes) {
        this.pipes = pipes
        return this
    }

    withPipes(pipes) {
        this.pipes = pipes
        return this
    }

    calculateFiles() {
        return [];
    }    
} 