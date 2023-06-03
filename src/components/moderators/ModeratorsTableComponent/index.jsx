import React from 'react';
import {
    Description,
    DescriptionBlock, ItemBlock,
    ItemsWrapper,
    ItemWrapper,
    ListName,
    ListNumber, ListSelectStatus,
    ListStatus, Name, Person, PersonImg, SelectStatus, Status,
    Wrapper,
} from './components';

const ModeratorsTableComponent = () => {
    return (
        <Wrapper>
            <DescriptionBlock>
                <Description>
                    Ф.И.О.
                </Description>
                <Description>
                    Статус
                </Description>
            </DescriptionBlock>
            <ItemsWrapper>
                <ItemBlock>
                    <ItemWrapper>

                        <ListNumber>1</ListNumber>

                        <Person>
                            <PersonImg>P</PersonImg>
                            <Name>John Wick JR John Wick JR</Name>
                        </Person>
                        <Status>Active</Status>
                        <SelectStatus>
                            Select Status
                        </SelectStatus>
                    </ItemWrapper>
                </ItemBlock>
            </ItemsWrapper>
        </Wrapper>
    );
};

export default ModeratorsTableComponent;