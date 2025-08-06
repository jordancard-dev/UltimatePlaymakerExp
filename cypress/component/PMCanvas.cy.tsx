import React from 'react'
import { PMCanvas } from '../../src/componants'
import { mount } from 'cypress/react';
describe('PMCanvas', () => {
    it('renders without crashing', () => {
        mount(<PMCanvas />)
        cy.get('select#pm-sport-select').should('exist')
    })
})
