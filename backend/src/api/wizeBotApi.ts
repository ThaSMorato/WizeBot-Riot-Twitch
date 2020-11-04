import axios from 'axios';


export const wizeBotApi = axios.create({
    baseURL : 'https://wapi.wizebot.tv/api/',
});

export const services = {
    currency: 'currency/',
    currency_actions: {
        add:'/action/add/',
        remove: '/action/remove/',
        set: '/action/set/',
        reset: '/action/reset/',
    },
    custom_data: 'custom-data/',
    customData_actions: {
        get: '/get/',
        set: '/set/',
    }
}

/*****
 * 
 * 
Retrieve a value: $custom_data(get,victory_nb).
Define a value: $custom_data(set,victory_nb,1).
Add +1 to the value: $custom_data(+,victory_nb).
Remove -1 in the value: $custom_data(-,victory_nb).
Delete the value: $custom_data(del,victory_nb).
Add +15 to the value: $custom_data(+,victory_nb,15).
Remove -25 from the value: $custom_data(-,victory_nb,25). 

 */