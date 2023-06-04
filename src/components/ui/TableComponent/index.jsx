import React from 'react';
import {
    Description,
    DescriptionBlock,
    ItemBlock,
    ItemsWrapper,
    ItemWrapper,
    ListNumber,
    Wrapper
} from './components';

const TableComponent = ({ description, table }) => {
    return (
        <Wrapper>
            <DescriptionBlock>

                {description.map(el => {
                    return(
                        <Description>
                            {el}
                        </Description>
                    )
                })}

            </DescriptionBlock>
            <ItemsWrapper>
                {table.map(el => {
                    return (
                        <ItemBlock>
                            <ItemWrapper>

                                <ListNumber>{el.id}</ListNumber>

                                <Person>
                                    <PersonImg>{el.img}</PersonImg>
                                    <Name>{el.name}</Name>
                                </Person>

                                <StatusBlock>
                                    <StatusColor />
                                    <Status>{el.status}</Status>
                                </StatusBlock>

                                <SelectStatus variant='outlined'>
                                    Select Status
                                </SelectStatus>
                            </ItemWrapper>
                        </ItemBlock>
                    );
                })}
            </ItemsWrapper>
        </Wrapper>
    );
};

export default TableComponent;