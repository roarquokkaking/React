//1.액션 생성
//모듈이름을 앞에 붙여주므로 액션명 중복 방지 
const TIGER='animal/TIGER'
const DOG='animal/DOG'
const CAT='animal/CAT'
const CHICK='animal/CHICK'



//2. 액션 내보내기

export const tiger  = ()=> ({type:TIGER})
export const dog  = ()=> ({type:DOG})
export const cat  = ()=> ({type:CAT})
export const chick  = ()=> ({type:CHICK})



//3. 초기값 
const initialState = {name:'돼지',crying:'꿀꿀'}

//4. reducer 만들기 -state, action 파라미터를 참조하여 새로운 상태 객체를 반환 
// state 에는 반드시 초기값을 주어야한다 .
const reducer = (state=initialState,action) => { //state : 현재 상태 , action: 액션 객체
    switch(action.type){
        case TIGER: return {name:'호랑이',crying:'어흥'}
        case DOG: return {name:'개',crying:'멍'}
        case CAT: return {name:'고양이',crying:'야옹'}
        case CHICK: return {name:'병아리',crying:'짹'}
        default: return state 
    }
}

export default reducer 