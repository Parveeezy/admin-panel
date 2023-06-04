import React from 'react';
import {
    Description,
    DescriptionBlock,
    ItemBlock,
    ItemsWrapper,
    ItemWrapper,
    ListNumber,
    Name,
    Person,
    PersonImg,
    SelectStatus,
    Status, StatusBlock, StatusColor,
    Wrapper,
} from './components';

const moderators = [
    {
        id: 1,
        name: 'Александр Сергеевич Пушкин',
        img: 'A',
        status: 'Активный',
    }, {
        id: 2,
        name: 'Антон Павлович Чехов',
        img: 'A',
        status: 'Приостановлен',
    }, {
        id: 3,
        name: 'Лев Николаевич Толстой',
        img: 'L',
        status: 'Удалён',
    },
];

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
                {moderators.map(el => {
                    return (
                        <ItemBlock>
                            <ItemWrapper>

                                <ListNumber>{el.id}</ListNumber>

                                <Person>
                                    <PersonImg>{el.img}</PersonImg>
                                    <Name>{el.name}</Name>
                                </Person>

                                <StatusBlock>
                                    <StatusColor/>
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

export default ModeratorsTableComponent;