import { Template } from '@pipe-dream/core'

export default class ExamplePipe {
    constructor(omc) {
        this.omc = omc
    }

    static with(omc) {
        return new this(omc)
    }

    static get title() {
        return "ExamplePipe"
    }

    calculateFiles() {        
        return [{
            path: "credits.md",
            content: Template.for('credits.md').replace({
                ___CREDITS___: "Some Message :)",
            })
        }]
    }
}
