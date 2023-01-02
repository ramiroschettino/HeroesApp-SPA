import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"

describe('Pruebas en <SearchPage />', () => {

    test('Debe mostrarse correctamente con valoes por defecto', () => {
        render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )

        screen.debug()
    })
    
})