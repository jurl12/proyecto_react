import React from 'react'
import { Logo } from '../../Logo/Logo'
import { Items } from '../../Items/Items'
import { Navbar } from '../../Navbar/Navbar'
import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Main/Main'




export const Home = () => {
  return (
            <Header>
            <Logo/>
        <Navbar>
            <Items content="hola"/>
            <Items content={"Adios"}/>
        </Navbar>
        </Header>
  )
}