import styled from 'styled-components';

export const ListItem = styled.li`
    text-align: center;
    margin-bottom: 20px;
    padding: 20px;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
`;

export const ListCategoryDescription = styled.span`
    display: block;
    margin: 10px 0;
    font-weight: 700;
    cursor: pointer;
`;

export const ListItemLink = styled.a`
    display: block;
    margin-bottom: 6px;
    font-size: 1.2rem;
    font-weight: 700;
    text-decoration: none;
    color: #159292;
`;

export const ListItemName = styled.p`
    margin: 10px 0;
    font-size: 1.5rem;
`;

export const ListItemPrice = styled.p`
    font-weight: 700;
    font-size: 1.4rem;
    color: #0e9753;
`;
