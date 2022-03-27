import React from 'react';

import { Container } from './style';

import { CarList } from '../CarList';
import { Footer } from '../Footer';
import { Header } from '../Header';


export function Layout() {
    return(
        <Container>
            <Header />  {/*  Cabeçalho  */}
            <CarList />  {/* Comp. Lista */}
            <Footer />  {/*  Comp. do Footer  */}
        </Container>
    );
}