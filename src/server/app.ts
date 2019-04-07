import * as express from 'express'
import * as helmet from 'helmet'
import * as morgan from 'morgan'

// benötigte Pfade
export const PATHS = {

}

const { Router } = express

class App {
    // Erstellung der Express Applikation durch express()
    readonly app = express()
    constructor(){
        this.config()
        this.routes()
    }

    // process.env ist eine globale Variable, durch Node zur Laufzeit injiziert, stellt Status der Systemumgebung der eigenen Anwendung dar
    // NODE_ENV ist eine Umgebungsvariable ob die Umgebung production oder developement ist
    private config() {
        if (process.env.NODE_ENV === 'development') {
            this.app.use(
                morgan('dev')
            )
        } else {
            this.app.use(helmet.hidePoweredBy())
        }
    }

    private routes() {
        this.kundenRoutes()
        // TODO: Routen ergänzen 
    }

    private kundenRoutes() {
        // TODO
    }
}

export const { app } = new App()
