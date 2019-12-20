import express ,{Application} from 'express'
import morgan from'morgan'

// router
import router from './routes/index'


export class App {

    public app:Application = express()

    constructor(){
      this.config()
      this.middleware()
      this.route()
    }

    config(){
       this.app.set('port', process.env.PORT || 3000)
    }

    middleware(){
       this.app.use(morgan('dev'))
       this.app.use(express.json())
       this.app.use(express.urlencoded({extended:false}))
    }

    route(){
       this.app.use(router)
    }

    async server(){
       await  this.app.listen(this.app.get('port'))
      console.log('server on port', this.app.get('port'))
    }

}


