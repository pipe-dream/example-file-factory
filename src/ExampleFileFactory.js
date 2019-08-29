 //import { BaseFileFactory } from '@pipe-dream/core'
 import ExamplePipe from './ExamplePipe'
 import collect from 'collect.js'

 export default class ExampleFileFactory {//extends BaseFileFactory{
    constructor(arg) {
        //super(arg)
        this.pipes = []
    }

    static get title() {
        return "ExampleFileFactory"
    }

    static templates() {
        return {
            "credits.md": "___CREDITS___"
        }
    }

    static version() {
        return require('../package.json').version;
    }

    static buttons() {
        return []
    }    

    static settings() {
        return [
            {
                name: "Readme credits",
                value: "I have a Dream",
                dataType: String,
            },           
        ]
    }

    static pipes() {
        return [
            ExamplePipe
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
        return collect(this.pipes.map(pipe => {
            return pipe.with().calculateFiles()
        }).reduce((pipeFileList, allFiles) => {
            return allFiles.concat(pipeFileList)
        }, [])).sortBy('path').toArray();
    }    
} 