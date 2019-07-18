import { BaseFileFactory } from 'core'

 export default class ExampleFileFactory extends BaseFileFactory {
    constructor() {
        this.pipes = []
    }

     static get name() {
        return "Dummy"
    }
} 