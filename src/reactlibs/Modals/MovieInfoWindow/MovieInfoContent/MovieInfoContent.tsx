import React from 'react';
import { Wrapper, LeftContainer, DivContainer, RightContainer } from './styled';

const MovieInfoContent = () => (
   <Wrapper>
        <Wrapper.LeftContainer>
            <LeftContainer.DivContainer>
                <DivContainer.avatar/>
                <DivContainer.name/>
            </LeftContainer.DivContainer>
        </Wrapper.LeftContainer>
        <Wrapper.RightContainer>

        </Wrapper.RightContainer>
   </Wrapper>
)

export default MovieInfoContent;