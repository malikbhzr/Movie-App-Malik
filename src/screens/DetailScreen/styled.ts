import styled from 'styled-components/native';

export const BackgroundImage = styled.Image`
    width: 100%;
    height: 500px;
`;

export const PosterContainer = styled.View`
    flex: 1;
    flex-direction: row;
`;

export const HorizontalContainer = styled.View`
    flex-direction: column;
`;

export const ReviewContainer = styled.View`
    width: 150;
    justify-content: center;
    align-items: center;
`;

export const SmallLabelBold = styled.Text`
    font-size: 9px;
    color: #9DA3B4;
    margin-top: 7px;
`;

export const SmallLabelWhite = styled.Text`
    font-size: 9px;
    color: #fff;
    margin-top: 7px;
`;

export const ColoredLabel = styled.Text`
    font-size: 20px;
    color: ${props => props.labelColor};
    margin-top: 7px;
`;


export const PosterImage = styled.Image`
    width: 105px;
    height: 155px;
    margin-left: 25px;
    margin-top: 35px;
    border-radius: 6px;
`;

export const PosterTextBold = styled.Text`
    color: #cccc;
    font-size: 16px;
    margin-top: 10px;
    margin-left: 25px;
`;

export const PosterTextWhite = styled.Text`
    color: #fff;
    font-size: 16px;
`;

export const Seperator = styled.View`
    background: #484855;
    height: 1px;
    width: 85%;
    margin-top: 33px;
    margin-bottom: 33px;
    align-self: center;
`;

export const StoryLineContainer = styled.View`
    flex-direction: column;
    margin-left: 25px;
    width: 86%;
`;

export const SectionTitleStyle = styled.Text`
    color: #fff;
    font-size: 21px;
`;

export const StoryLineContent = styled.Text`
    color: #9DA3B4;
    font-size: 14px;
    margin-top: 20px;
`;

export const CastsContainer = styled.View`
    flex: 1;
    flex-direction: column;
    margin-left: 25px;
`;

