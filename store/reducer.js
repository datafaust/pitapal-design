import { combineReducers } from 'redux';

const INITIAL_STATE = {
  scanned: '',
  scan: '',
  messageReceived: [],
  messageSent: [],
  responseReceived: [],
  responseSent: [],
  email: null,
  uid: null,
  rewards:1000,
  token: [],
  token1: [],
  autoToken:null,
  first: true,
  second: false,
  third: false,
  forth: false,
  signIn: false,
  register: false,
  data:null, //user json will load here once for us to access throughout app (only if they login)
  messageData :{
  dblParkMessage:'I am sorry I double parked, I will respond to your message and get back to you',
  genParkMessage:'I am not sure how long I will be here',
  insParkMessage:'my insurance information is . . . '
},
messageTimes: {
  null: '12:00 pm',
  null: '12:00 pm'
},
target:null //this is the person who gets scanned, the double parker 
};

const ourReducer = (state = INITIAL_STATE, action) => {
    const newState = { ...state };

  switch (action.type) {
    case "CLOSE_MODAL_1":
      //newState.age += action.value;
      return{
        ...state,
        first: action.value,
        second: action.value1

      }
      break;

      case "CLOSE_MODAL_12":
        //newState.age += action.value;
        return{
          ...state,
          first: action.value,
          
  
        }
        break;

        case "CLOSE_MODAL_13":
          //newState.age += action.value;
          return{
            ...state,
            token: [...state.token, action.value],
            
    
          }
          

          break;
          
          case "MES":
            //newState.age += action.value;
            return{
              ...state,
              
              messageSent: [...state.messageSent, action.value]
      
            }
            break;

            case "RESPONSE_SENT":
                //newState.age += action.value;
                return{
                  ...state,
                  
                  responseSent: [...state.responseSent, action.value]
          
                }
                break;

                case "RESPONSE_RECEIVED":
                    //newState.age += action.value;
                    return{
                      ...state,
                      
                      responseReceived: [...state.responseReceived, action.value]
              
                    }
                    break;

        case "CLOSE_MODAL_14":
          //newState.age += action.value;
          return{
            ...state,
            token1: [...state.token1, action.value],
            messageReceived: [...state.messageReceived, action.value1]
            
    
          }
          break;

          case "SCAN":
              newState.scan += action.value;
            // return{
            //   ...state,
            //   scan: newState.scan + action.value
              
      
            // }
            break;



            case "GOT_SCANNED":
              newState.scanned += action.one;
       
          

          break;

      case "CLOSE_MODAL_2":
        //newState.age += action.value;
        return{
          ...state,
          second: action.value2,
          third: action.value3,
          
  
        }
        break;

        case "CLOSE_MODAL_3":
            //newState.age += action.value;
            return{
              ...state,
              third: action.value4,
              forth: action.value5
              
      
            }
            break;

            // case "CLOSE_LOGIN_1":
            //   //newState.age += action.value;
            //   return{
            //     ...state,
            //     forth: action.value6,
            //     signIn: action.value7
                
        
            //   }
            //   break;

            //   case "CLOSE_LOGIN_2":
            //     //newState.age += action.value;
            //     return{
            //       ...state,
            //       forth: action.value6,
            //       register: action.value7
          
            //     }
            //     break;

                case "SIGN_IN":
                  //newState.age += action.value;
                  return{
                    ...state,
                    signIn: action.signIn,
                    
            
                  }
                  break;

                  case "REGISTER":
                    //newState.age += action.value;
                    return{
                      ...state,
                      register: action.register,
                      
              
                    }
                    break;
                    case "GET_ALL_VIOLATIONS":
                      return{
                        ...state,
                        data: action.value
                      }
                    break;
                    case "UPDATE_MESSAGES":
                      return{
                        ...state,
                        messageTimes: action.value
                      }
                    break;
                    case "PUSH_AUTO_MESSAGE":
                      return{
                        ...state,
                        autoToken: action.value
                      }

                    break;
                    case "SCAN_QR":
                      return{
                        ...state,
                        target: action.target
                      }

    // case "AGE_DOWN":
    //   return{
    //     ...state,
    //     age: state.age - action.value,
    //     history: state.history.concat({id: Math.random(),age:state.age - action.value})

    //   }
    //   break;

    //   case "DEL_ITEM":
    //       return{...state,
    //         history: state.history.filter(el => el.id !== action.key)
    //     }
    //     break;
  }
  // console.log(newState)
  return newState;
};


export default combineReducers({
  reducer: ourReducer,
});