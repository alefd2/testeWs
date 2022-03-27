import React from "react";

import {ContainerFooter} from './styled'

export function Footer(){
    return(
        <ContainerFooter>
            <div>
                <strong> Aplicação de teste by</strong>
                <a href={"https://github.com/alefd2"} target={"_blank"} rel="noreferrer"> Alefd2</a>
            </div>
        </ContainerFooter>
    );
}