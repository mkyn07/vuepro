const state = {
    nm : window.localStorage.getItem('nowNM')||'上海',
    id : window.localStorage.getItem('nowID')|| 2,

};

const actions = {

};

const mutations = {
    CITY_INFO(state , payload){
        state.nm = payload.nm;
        state.id = payload.id;
    }

};

export default {
    namespaced : true,
    state,
    actions,
    mutations
}