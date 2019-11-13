import axios from 'axios';
import {key} from '../confing';
export default class Search{
    
    constructor(query){
        this.query = query;
    }

    async getResult(){
        try{
        //const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
        const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
        this.result = res.data.recipes;
        //console.log(this.result);
        }catch (error){
            //alert(error);
        }
    }
}

