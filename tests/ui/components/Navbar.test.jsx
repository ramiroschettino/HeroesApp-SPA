import { fireEvent, getAllByAltText, getByText, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../src/auth"
import { Navbar } from "../../../src/ui/components/Navbar"


const mockedUseNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUseNavigate
}))

describe('Pruebas en <Navbar />', () => {

    const contextValue = {
        user: {
            name: "ramiro"
        },
        logged: true,
        logout: jest.fn(),
    }


    beforeEach( () => jest.clearAllMocks() )

    test('Debe mostrar el nombre de usuario en el navBar', () => {

        render( 
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                <Navbar/>
            </MemoryRouter>
        </AuthContext.Provider>
        )
    
        expect( screen.getByText( contextValue.user.name )).toBeTruthy()
    })

    test('Debe llamar el logout al hacer click en el botón', () => {

        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutButton = screen.getByRole("button")
        fireEvent.click( logoutButton );

        expect( contextValue.logout ).toHaveBeenCalled()
        expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true})

    })


})