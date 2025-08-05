import React from 'react'
import { PMCanvas } from '../../src/componants'

describe('PMCanvas', () => {
    it('renders without crashing', () => {
        // cy.mount(<PMCanvas />)
        cy.get('select#pm-sport-select').should('exist')
    })
})
