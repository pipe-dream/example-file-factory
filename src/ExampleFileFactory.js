 export default class ExampleFileFactory {
    constructor() {
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

    static defaultPreferences() {
        return {}
    }

    static from(objectModelCollection) {
        return new this(objectModelCollection)
    }

    withPipes(pipes) {
        this.pipes = pipes
        return this
    }
} 