import axios from 'axios'

export default function ({params, store}) { 
    return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
        .then((res)=>{
            store.commit('add', res.data.results);
        })
}