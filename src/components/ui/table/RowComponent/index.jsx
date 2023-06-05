import React from 'react';
import {
    Block,
    ItemWrapper,
    Name,
    Person,
    PersonImg,
    RowNumber,
    SelectStatus,
    Status,
    StatusBlock,
    StatusColor,
    RowWrapper, SelectStatusWrapper,
} from './components';

const RowComponent = ({ row, btn }) => {
    return (
        <RowWrapper>
            {row.map(el => {
                return (
                    <Block>
                        <ItemWrapper>
                            <RowNumber>{el.id}</RowNumber>

                            <Person>
                                <PersonImg>
                                    {el.img}
                                </PersonImg>
                                <Name>
                                    {el.name}
                                </Name>
                            </Person>

                            <StatusBlock>
                                <StatusColor />
                                <Status>{el.status}</Status>
                            </StatusBlock>

                                <SelectStatus variant={btn.variant}>
                                    {btn.message}
                                    <SelectStatusWrapper>
                                    </SelectStatusWrapper>
                                </SelectStatus>

                        </ItemWrapper>
                    </Block>
                );
            })}
        </RowWrapper>
    );
};

export default RowComponent;