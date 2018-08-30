
export const GET_ITEMS= 'GET_ITEMS';
export const GET_ITEMS_SUCCESS= 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED= 'GET_ITEMS_FAILED';

import axious from 'axios'

export function getData(){
    console.log("Start loading")
    return (dispatch) => {
    //   dispatch({type: GET_ITEMS_SUCCESS, data:[{title:"test", image:""}]});
        axious.get("https://gitlab.com/Adrinalin4ik/SimpleMarket/raw/master/database.json").then((response) => {
          console.log(response)
          dispatch({type: GET_ITEMS_SUCCESS, data:JSON.parse(response)});
        }).catch( x => {
            console.log(x)
          dispatch({type: GET_ITEMS_FAILED});
        })
 
    };
}