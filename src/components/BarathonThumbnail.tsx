import React, { useState } from 'react';
import LeafletMap from "./LeafletMap";
import { IBarathon, IPub } from "../types/api";
import styled from 'styled-components';
import { colors } from '../styles/colors';
import Button from "./Button";

interface IProps {
    barathon: IBarathon;
    pubs: IPub[];
}

const BarathonThumbnail = ({ barathon, pubs }: IProps): JSX.Element => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const toggleMap = (): void => {
        setIsOpened((!isOpened));
    };

    const selectedPubs = barathon.checkpoints.map((checkpoint: string) =>{
        return pubs.find((pub: IPub) => pub._id === checkpoint);
    });

    return (
        // ???
        <>
            <SBarathon>
                <SNomBarathon>
                    {barathon.name}
                </SNomBarathon>
                <SAuthor>
                    {barathon.author}
                </SAuthor>
                <Button type={"button"} onClick={toggleMap}>
                    {isOpened ? 'cacher' : 'Regarder sur la map'}
                </Button>
                {isOpened && (
                    <LeafletMap  pubs={selectedPubs} selectedPubs={selectedPubs}  />
                )}
            </SBarathon>
        </>
    );
};

const SBarathon = styled.div`
  background: ${colors.lightGrey};
  width:100%;
`;

const SNomBarathon = styled.p`
     color: black;
     font-size: 20px;
     text-align:center;
`;


const SAuthor = styled.p`
    color:black;
    font-size:12px;
    text-align:center;
`;

export default BarathonThumbnail;
