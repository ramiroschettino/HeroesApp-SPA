import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"

describe('Pruebas en authReducer', () => {

    test('Debe retonar el estado por defecto', () => {

        const state = authReducer({ logged: false}, {} )

        expect( state ).toEqual({ logged:false })

    })

    test('Debe de (login) llamar el login autenticar y establecer el user', () => { 

        const action = {
            type: types.login,
            payload: {
                name: "ramiro",
                id: "123",
            }

        }

        const state = authReducer({ logged: false}, action )

        expect( state ).toEqual( { logged: true, user: action.payload })

     })


    test('Debe de (logout) llamar el logout y establecer el logged en false ', () => {
        
        const action = {
            type: types.logout
        }

        const state = authReducer({
            name: "ramiro",
            id: "123",
        }, action ) 

        expect( state ).toEqual( { logged: false });
    })
})